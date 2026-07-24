/* ==========================================
   SAVORA SETTINGS
========================================== */

"use strict";

const Settings = {

    defaults: {

        theme: "light",

        currency: "IDR",

        language: "id"

    }

};

/* ==========================================
   GET SETTINGS
========================================== */

Settings.get = function() {

    const data =
        SavoraStorage.loadData();

    return {

        ...this.defaults,

        ...(data.user || {})

    };

};

/* ==========================================
   SAVE SETTINGS
========================================== */

Settings.save = function(settings) {

    const data =
        SavoraStorage.loadData();

    data.user = {

        ...data.user,

        ...settings

    };

    SavoraStorage.saveData(data);

};

/* ==========================================
   THEME
========================================== */

Settings.setTheme = function(theme) {

    document.body.classList.toggle(

        "dark",

        theme === "dark"

    );

    this.save({

        theme

    });

};

/* ==========================================
   CURRENCY
========================================== */

Settings.setCurrency = function(currency) {

    this.save({

        currency

    });

};

/* ==========================================
   LANGUAGE
========================================== */

Settings.setLanguage = function(language) {

    this.save({

        language

    });

};

/* ==========================================
   INIT
========================================== */

Settings.init = function() {

    const settings =
        this.get();

    this.setTheme(

        settings.theme

    );

};

/* ==========================================
   EXPORT
========================================== */

Settings.init();

window.SavoraSettings =
    Settings;