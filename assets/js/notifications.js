/* ==========================================
   SAVORA NOTIFICATIONS
========================================== */

"use strict";

const Notifications = {

    container: null,

    init() {

        this.container =
            document.getElementById("notificationContainer");

        if (!this.container) {

            this.container =
                document.createElement("div");

            this.container.id =
                "notificationContainer";

            this.container.className =
                "notification-container";

            document.body.appendChild(
                this.container
            );

        }

    }

};

/* ==========================================
   SHOW
========================================== */

Notifications.show = function(

    message,

    type = "success",

    duration = 3000

) {

    const notification =
        document.createElement("div");

    notification.className =
        `notification ${type}`;

    notification.innerHTML = `

        <span>${message}</span>

        <button>&times;</button>

    `;

    this.container.appendChild(
        notification
    );

    notification
        .querySelector("button")
        .onclick = () => {

            notification.remove();

        };

    setTimeout(() => {

        notification.remove();

    }, duration);

};

/* ==========================================
   SHORTCUTS
========================================== */

Notifications.success = function(message) {

    this.show(message, "success");

};

Notifications.error = function(message) {

    this.show(message, "error");

};

Notifications.warning = function(message) {

    this.show(message, "warning");

};

Notifications.info = function(message) {

    this.show(message, "info");

};

/* ==========================================
   EXPORT
========================================== */

Notifications.init();

window.SavoraNotifications =
    Notifications;