let GaugeChart = function () {

    google.charts.load('current', {'packages':['gauge']});
    google.charts.setOnLoadCallback(drawCpu);

    function drawCpu() {

        let data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
           // ['Memory', 80],
             ['CPU', 55],
            // ['Network', 68]
        ]);

        let options = {
            width: 400, height: 220,
            redFrom: 90, redTo: 100,
            yellowFrom:75, yellowTo: 90,
            minorTicks: 5
        };

        let chart = new google.visualization.Gauge(document.getElementById('meter-cpu-div'));

        chart.draw(data, options);

        setInterval(function() {
            data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
            chart.draw(data, options);
        }, 6000);

    }

    google.charts.setOnLoadCallback(drawMemory);

    function drawMemory() {

        let data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
             ['Memory', 80],
            //['CPU', 55],
            // ['Network', 68]
        ]);

        let options = {
            width: 400, height: 220,
            redFrom: 90, redTo: 100,
            yellowFrom:75, yellowTo: 90,
            minorTicks: 5
        };

        let chart = new google.visualization.Gauge(document.getElementById('meter-memory-div'));

        chart.draw(data, options);

        setInterval(function() {
            data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
            chart.draw(data, options);
        }, 6000);

    }

    google.charts.setOnLoadCallback(drawNetwork);

    function drawNetwork() {

        let data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            //['Memory', 80],
            //['CPU', 55],
             ['Network', 68]
        ]);

        let options = {
            width: 400, height: 220,
            redFrom: 90, redTo: 100,
            yellowFrom:75, yellowTo: 90,
            minorTicks: 5
        };

        let chart = new google.visualization.Gauge(document.getElementById('meter-network-div'));

        chart.draw(data, options);

        setInterval(function() {
            data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
            chart.draw(data, options);
        }, 6000);

    }



};

export default GaugeChart;