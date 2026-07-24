/* ==========================================
   SAVORA AUTH
========================================== */

"use strict";

const Auth = {

    SESSION_KEY: "savora-session"

};

/* ==========================================
   LOGIN
========================================== */

Auth.login = function(user) {

    localStorage.setItem(

        this.SESSION_KEY,

        JSON.stringify(user)

    );

    return true;

};

/* ==========================================
   LOGOUT
========================================== */

Auth.logout = function() {

    localStorage.removeItem(

        this.SESSION_KEY

    );

    window.location.href =
        "login.html";

};

/* ==========================================
   CURRENT USER
========================================== */

Auth.user = function() {

    return JSON.parse(

        localStorage.getItem(

            this.SESSION_KEY

        )

    );

};

/* ==========================================
   CHECK LOGIN
========================================== */

Auth.isLoggedIn = function() {

    return !!localStorage.getItem(

        this.SESSION_KEY

    );

};

/* ==========================================
   GUARD
========================================== */

Auth.guard = function() {

    if (

        !this.isLoggedIn()

    ) {

        window.location.href =
            "login.html";

    }

};

/* ==========================================
   REGISTER
========================================== */

Auth.register = function(user) {

    const data =
        SavoraStorage.loadData();

    data.user = user;

    SavoraStorage.saveData(data);

    return true;

};

/* ==========================================
   UPDATE PROFILE
========================================== */

Auth.updateProfile = function(data) {

    const storage =
        SavoraStorage.loadData();

    storage.user = {

        ...storage.user,

        ...data

    };

    SavoraStorage.saveData(storage);

};

/* ==========================================
   EXPORT
========================================== */

window.SavoraAuth =
    Auth;