/* ==========================================
   SAVORA ANALYTICS
========================================== */

"use strict";

const Analytics = {

    data() {

        return SavoraTransactions.all();

    }

};

/* ==========================================
   SUMMARY
========================================== */

Analytics.summary = function() {

    return SavoraTransactions.calculate();

};

/* ==========================================
   CATEGORY REPORT
========================================== */

Analytics.byCategory = function() {

    const report = {};

    this.data().forEach(item => {

        if (!report[item.category]) {

            report[item.category] = 0;

        }

        report[item.category] += item.amount;

    });

    return report;

};

/* ==========================================
   MONTHLY REPORT
========================================== */

Analytics.monthly = function(month, year) {

    return SavoraTransactions
        .monthlyReport(month, year);

};

/* ==========================================
   MONTHLY INCOME
========================================== */

Analytics.monthlyIncome = function(month, year) {

    return this.monthly(month, year)

        .filter(item => item.type === "income")

        .reduce(

            (sum, item) =>

            sum + item.amount,

            0

        );

};

/* ==========================================
   MONTHLY EXPENSE
========================================== */

Analytics.monthlyExpense = function(month, year) {

    return this.monthly(month, year)

        .filter(item => item.type === "expense")

        .reduce(

            (sum, item) =>

            sum + item.amount,

            0

        );

};

/* ==========================================
   DAILY REPORT
========================================== */

Analytics.daily = function(date = new Date()) {

    const target = new Date(date);

    return this.data().filter(item => {

        const current = new Date(item.createdAt);

        return (
            current.getDate() === target.getDate() &&
            current.getMonth() === target.getMonth() &&
            current.getFullYear() === target.getFullYear()
        );

    });

};

/* ==========================================
   TOP CATEGORY
========================================== */

Analytics.topCategories = function(limit = 5) {

    return Object.entries(this.byCategory())

        .sort((a, b) => b[1] - a[1])

        .slice(0, limit);

};

/* ==========================================
   AVERAGE EXPENSE
========================================== */

Analytics.averageExpense = function() {

    const expenses = this.data()

        .filter(item => item.type === "expense");

    if (!expenses.length) {

        return 0;

    }

    const total = expenses.reduce(

        (sum, item) =>

        sum + item.amount,

        0

    );

    return Math.round(

        total / expenses.length

    );

};

/* ==========================================
   CHART DATA
========================================== */

Analytics.chartData = function() {

    const summary = this.summary();

    return {

        labels: [

            "Pemasukan",

            "Pengeluaran",

            "Tabungan"

        ],

        values: [

            summary.income,

            summary.expense,

            summary.saving

        ]

    };

};

/* ==========================================
   EXPORT
========================================== */

window.SavoraAnalytics =
    Analytics;