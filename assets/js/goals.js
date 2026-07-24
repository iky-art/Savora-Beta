/* ==========================================
   SAVORA GOALS
========================================== */

"use strict";

const Goals = {

    data: [],

    init() {

        const storage =
            SavoraStorage.loadData();

        this.data =
            storage.goals || [];

    },

    save() {

        const storage =
            SavoraStorage.loadData();

        storage.goals =
            this.data;

        SavoraStorage.saveData(storage);

    }

};

/* ==========================================
   ADD GOAL
========================================== */

Goals.add = function(goal) {

    goal.id =
        SavoraUtils.generateId();

    goal.createdAt =
        SavoraUtils.today();

    goal.saved = 0;

    this.data.unshift(goal);

    this.save();

};

/* ==========================================
   DELETE GOAL
========================================== */

Goals.remove = function(id) {

    this.data =
        this.data.filter(

            goal => goal.id !== id

        );

    this.save();

};

/* ==========================================
   UPDATE GOAL
========================================== */

Goals.update = function(id, newData) {

    const index =
        this.data.findIndex(

            goal => goal.id === id

        );

    if (index === -1) return;

    this.data[index] = {

        ...this.data[index],

        ...newData

    };

    this.save();

};

/* ==========================================
   GET GOALS
========================================== */

Goals.all = function() {

    return this.data;

};

/* ==========================================
   PROGRESS
========================================== */

Goals.progress = function(goal) {

    return Math.min(

        100,

        Math.round(

            (goal.saved / goal.target) * 100

        )

    );

};

/* ==========================================
   REMAINING
========================================== */

Goals.remaining = function(goal) {

    return Math.max(

        0,

        goal.target - goal.saved

    );

};

/* ==========================================
   STATUS
========================================== */

Goals.status = function(goal) {

    const progress =
        this.progress(goal);

    if (progress >= 100) {

        return "completed";

    }

    if (progress >= 75) {

        return "almost";

    }

    if (progress >= 50) {

        return "on-track";

    }

    return "started";

};

/* ==========================================
   ADD SAVING
========================================== */

Goals.addSaving = function(id, amount) {

    const goal =
        this.data.find(

            item => item.id === id

        );

    if (!goal) return false;

    goal.saved += amount;

    if (goal.saved > goal.target) {

        goal.saved = goal.target;

    }

    this.save();

    return true;

};

/* ==========================================
   DEADLINE
========================================== */

Goals.deadline = function(goal) {

    if (!goal.deadline) {

        return null;

    }

    const today = new Date();

    const deadline =
        new Date(goal.deadline);

    const diff =
        deadline - today;

    return Math.ceil(

        diff /

        (1000 * 60 * 60 * 24)

    );

};

/* ==========================================
   STATS
========================================== */

Goals.stats = function() {

    const completed =
        this.data.filter(

            goal =>

            this.progress(goal) >= 100

        ).length;

    return {

        total:
            this.data.length,

        completed,

        active:
            this.data.length -
            completed

    };

};

/* ==========================================
   EXPORT
========================================== */

Goals.init();

window.SavoraGoals =
    Goals;