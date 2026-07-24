/* ==========================================
   SAVORA TRANSACTIONS
========================================== */

"use strict";

const Transactions = {

    data: [],

    init() {

        const storage =
            SavoraStorage.loadData();

        this.data =
            storage.transactions || [];

    },

    save() {

        const storage =
            SavoraStorage.loadData();

        storage.transactions =
            this.data;

        SavoraStorage.saveData(storage);

    }

};

/* ==========================================
   ADD TRANSACTION
========================================== */

Transactions.add = function(transaction) {

    transaction.id =
        SavoraUtils.generateId();

    transaction.createdAt =
        SavoraUtils.today();

    this.data.unshift(transaction);

    this.save();

};

/* ==========================================
   DELETE TRANSACTION
========================================== */

Transactions.remove = function(id) {

    this.data =
        this.data.filter(item => item.id !== id);

    this.save();

};

/* ==========================================
   UPDATE TRANSACTION
========================================== */

Transactions.update = function(id, newData) {

    const index =
        this.data.findIndex(
            item => item.id === id
        );

    if (index === -1) return;

    this.data[index] = {

        ...this.data[index],

        ...newData

    };

    this.save();

};

/* ==========================================
   GET TRANSACTIONS
========================================== */

Transactions.all = function() {

    return this.data;

};

/* ==========================================
   EXPORT
========================================== */

Transactions.init();

window.SavoraTransactions =
    Transactions;

/* ==========================================
   SEARCH
========================================== */

Transactions.search = function(keyword) {

    keyword = keyword.toLowerCase();

    return this.data.filter(item =>

        item.title.toLowerCase().includes(keyword) ||

        item.category.toLowerCase().includes(keyword)

    );

};

/* ==========================================
   FILTER BY TYPE
========================================== */

Transactions.byType = function(type) {

    return this.data.filter(

        item => item.type === type

    );

};

/* ==========================================
   FILTER CATEGORY
========================================== */

Transactions.byCategory = function(category) {

    return this.data.filter(

        item => item.category === category

    );

};

/* ==========================================
   SORT NEWEST
========================================== */

Transactions.latest = function() {

    return [...this.data].sort(

        (a, b) =>

        new Date(b.createdAt) -

        new Date(a.createdAt)

    );

};

/* ==========================================
   CALCULATE TOTAL
========================================== */

Transactions.calculate = function() {

    let income = 0;

    let expense = 0;

    let saving = 0;

    this.data.forEach(item => {

        if (item.type === "income") {

            income += item.amount;

        }

        if (item.type === "expense") {

            expense += item.amount;

        }

        if (item.type === "saving") {

            saving += item.amount;

        }

    });

    return {

        income,

        expense,

        saving,

        balance:

            income -

            expense -

            saving

    };

};

/* ==========================================
   DASHBOARD STATS
========================================== */

Transactions.stats = function() {

    return {

        total:

            this.data.length,

        income:

            this.byType("income").length,

        expense:

            this.byType("expense").length,

        saving:

            this.byType("saving").length

    };

};

/* ==========================================
   MONTHLY REPORT
========================================== */

Transactions.monthlyReport = function(month, year) {

    return this.data.filter(item => {

        const date = new Date(item.createdAt);

        return (
            date.getMonth() === month &&
            date.getFullYear() === year
        );

    });

};

/* ==========================================
   RECENT TRANSACTIONS
========================================== */

Transactions.recent = function(limit = 5) {

    return this.latest().slice(0, limit);

};

/* ==========================================
   CATEGORY TOTAL
========================================== */

Transactions.categoryTotal = function(category) {

    return this.data
        .filter(item => item.category === category)
        .reduce(
            (total, item) => total + item.amount,
            0
        );

};

/* ==========================================
   CLEAR ALL
========================================== */

Transactions.clear = function() {

    this.data = [];

    this.save();

};

/* ==========================================
   VALIDATE
========================================== */

Transactions.validate = function(transaction) {

    if (!transaction.title) return false;

    if (!transaction.type) return false;

    if (!transaction.category) return false;

    if (isNaN(transaction.amount)) return false;

    if (transaction.amount <= 0) return false;

    return true;

};

Transactions.add = function(transaction) {

    if (!this.validate(transaction)) {

        console.error("Transaksi tidak valid.");

        return false;

    }

    transaction.id =
        SavoraUtils.generateId();

    transaction.createdAt =
        SavoraUtils.today();

    this.data.unshift(transaction);

    this.save();

    return true;

};