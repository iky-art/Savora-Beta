/* ==========================================
   SAVORA UTILITIES
========================================== */

"use strict";

/* ==========================================
   FORMAT RUPIAH
========================================== */

function formatCurrency(value) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(value);

}

/* ==========================================
   FORMAT NUMBER
========================================== */

function formatNumber(value) {

    return new Intl.NumberFormat(
        "id-ID"
    ).format(value);

}

/* ==========================================
   FORMAT DATE
========================================== */

function formatDate(date) {

    return new Intl.DateTimeFormat(
        "id-ID",
        {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
    ).format(new Date(date));

}

/* ==========================================
   FORMAT TIME
========================================== */

function formatTime(date) {

    return new Intl.DateTimeFormat(
        "id-ID",
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    ).format(new Date(date));

}

/* ==========================================
   GENERATE ID
========================================== */

function generateId() {

    return Date.now().toString(36)
        + Math.random()
            .toString(36)
            .substring(2, 8);

}

/* ==========================================
   GET TODAY
========================================== */

function today() {

    return new Date().toISOString();

}

/* ==========================================
   EXPORT
========================================== */

window.SavoraUtils = {

    formatCurrency,

    formatNumber,

    formatDate,

    formatTime,

    generateId,

    today

};