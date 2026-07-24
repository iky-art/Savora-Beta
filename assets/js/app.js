/* ==========================================
   SAVORA APP
========================================== */

"use strict";

const App = {

    version: "1.0.0",

    initialized: false

};

 /* ==========================================
   INITIALIZE
========================================== */

App.init = function() {

    if (this.initialized) {

        return;

    }

    console.log(

        "🚀 Savora v" +

        this.version

    );

    Settings.init();

    Transactions.init();

    Goals.init();

    Notifications.init();

    this.initialized = true;

};

/* ==========================================
   DASHBOARD
========================================== */

App.dashboard = function() {

    if (

        typeof SavoraCharts !== "undefined"

    ) {

        SavoraCharts.refresh();

    }

};

/* ==========================================
   SYNC
========================================== */

App.sync = function() {

    this.dashboard();

};

/* ==========================================
   REFRESH
========================================== */

App.refresh = function() {

    this.sync();

};

/* ==========================================
   EVENTS
========================================== */

window.addEventListener(

    "storage",

    () => {

        App.refresh();

    }

);

/* ==========================================
   START
========================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        App.init();

        App.dashboard();

    }

);

/* ==========================================
   EXPORT
========================================== */

window.SavoraApp = App;