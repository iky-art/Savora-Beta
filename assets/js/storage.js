/* ==========================================
   SAVORA STORAGE
========================================== */

"use strict";

const STORAGE_KEY = "savora-data";

/* ==========================================
   DEFAULT DATA
========================================== */

const defaultData = {

    user: {

        name: "Risky",
        currency: "IDR",
        theme: "light"

    },

    balance: 12500000,

    income: 5000000,

    expense: 1200000,

    transactions: [],

    goals: [],

    categories: [

        "Makanan",
        "Transportasi",
        "Belanja",
        "Hiburan",
        "Tagihan",
        "Lainnya"

    ]

};

/* ==========================================
   LOAD
========================================== */

function loadData() {

    const data =
        localStorage.getItem(STORAGE_KEY);

    return data
        ? JSON.parse(data)
        : structuredClone(defaultData);

}

/* ==========================================
   SAVE
========================================== */

function saveData(data) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}

/* ==========================================
   RESET
========================================== */

function resetData() {

    saveData(
        structuredClone(defaultData)
    );

}

/* ==========================================
   EXPORT
========================================== */

window.SavoraStorage = {

    loadData,

    saveData,

    resetData

};