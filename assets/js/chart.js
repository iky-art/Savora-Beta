/* ==========================================
   SAVORA CHARTS
========================================== */

"use strict";

const Charts = {

    finance: null,

    category: null

};

/* ==========================================
   FINANCE CHART
========================================== */

Charts.renderFinance = function() {

    const canvas =
        document.getElementById("financeChart");

    if (!canvas) return;

    const data =
        SavoraAnalytics.chartData();

    if (this.finance) {

        this.finance.destroy();

    }

    this.finance = new Chart(canvas, {

        type: "bar",

        data: {

            labels: data.labels,

            datasets: [{

                label: "Keuangan",

                data: data.values,

                borderWidth: 0,

                borderRadius: 12

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            }

        }

    });

};

/* ==========================================
   CATEGORY CHART
========================================== */

Charts.renderCategory = function() {

    const canvas =
        document.getElementById("categoryChart");

    if (!canvas) return;

    const categories =
        SavoraAnalytics.topCategories();

    if (this.category) {

        this.category.destroy();

    }

    this.category = new Chart(canvas, {

        type: "doughnut",

        data: {

            labels:

                categories.map(item => item[0]),

            datasets: [{

                data:

                    categories.map(item => item[1])

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    });

};

/* ==========================================
   REFRESH
========================================== */

Charts.refresh = function() {

    this.renderFinance();

    this.renderCategory();

};

/* ==========================================
   EXPORT
========================================== */

window.SavoraCharts =
    Charts;