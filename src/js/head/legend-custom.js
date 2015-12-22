if(!!(window.addEventListener)) window.addEventListener('DOMContentLoaded', main);
    else window.attachEvent('onload', main);

    function main() {
    pieChart();
}


        function pieChart() {
    var data = [
        {
            value: 30,
            color:"#F38630",
            label: 'Bears'
        },
        {
            value : 50,
            color : "#E0E4CC",
            label: 'Lynxes'
        },
        {
            value : 100,
            color : "#69D2E7",
            label: 'Reindeer'
        },

        {
            value : 100,
            color : "#06C",
            label: 'Blue'
        }
    ];

    var ctx = document.getElementById("pieChart").getContext("2d");
    var pieChart = new Chart(ctx).Pie(data);
    legend(document.getElementById("pieLegend"), data, pieChart, "<%=label%>");

}