/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__counterup__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tickets_charts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recent_events__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tickets_count__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bandwidth__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gauge_chart__ = __webpack_require__(6);











document.addEventListener("DOMContentLoaded",()=>{
    setTimeout( () => $('.tickets-status').fadeIn(1000).css('display','flex'),2000)

    Object(__WEBPACK_IMPORTED_MODULE_0__counterup__["a" /* default */])();
    Object(__WEBPACK_IMPORTED_MODULE_1__tickets_charts__["a" /* default */])();
    Object(__WEBPACK_IMPORTED_MODULE_2__recent_events__["a" /* default */])();
    Object(__WEBPACK_IMPORTED_MODULE_3__tickets_count__["a" /* default */])();
    Object(__WEBPACK_IMPORTED_MODULE_4__bandwidth__["a" /* default */])();
    Object(__WEBPACK_IMPORTED_MODULE_5__gauge_chart__["a" /* default */])();
});






/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let Count  = function () {
    $('#close-counter').counterUp({
        delay: 10,
        time: 5000,
        offset: 70,
        beginAt: 0,
        formatter: function (n) {
            return n.replace(/,/g, '.');
        }
    });

    $('#open-counter').counterUp({
        delay: 10,
        time: 5000,
        offset: 70,
        beginAt: 0,
        formatter: function (n) {
            return n.replace(/,/g, '.');
        }
    });

    $('#hold-counter').counterUp({
        delay: 10,
        time: 6000,
        offset: 70,
        beginAt: 0,
        formatter: function (n) {
            return n.replace(/,/g, '.')
        }
    });

    $('#invalid-counter').counterUp({
        delay: 10,
        time: 6000,
        offset: 70,
        beginAt: 0,
        formatter: function (n) {
            return n.replace(/,/g,'.')
        }
    });

};






/* harmony default export */ __webpack_exports__["a"] = (Count);














/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let ChartGenerator =function () {

    let Months = [[1000,563,23,12,45],[4000,123,78,23,190],[3452,23,45,78,12],
                    [3478,123,8907,23,345],[2345,876,234,654,567],[678,1234,8907,234,5545],
                    [345,124,890,123,45],[234,123,674,893,67],[234,678,196,234,123]];
    let selection=0;
    let pie;
    let detailchart;

    let monthlychart = document.getElementById('ticket-bar').getContext('2d');
    let bar = new Chart(monthlychart,{
        type: 'bar',
        data:{
            labels: ["January","February","March","April","May","June","July",
                     "August","September"],
            datasets: [{
                label: "Monthly Tickets Status",
                backgroundColor: 'rgb(221,85,31)',
                borderColor: 'rgb(221,85,31)',
                data: [50,10,5,2,20,30,45,60,8],
            }]
        },
        options: {
            responsive:true,
            events: ['click','mousemove'],
            onClick: function (evt) {
                if (bar.getElementsAtEvent(evt).length <=0){
                    return ;
                }
                selection = bar.getElementsAtEvent(evt)[0]._index;
                detailchart = document.getElementById('pie-chart').getContext('2d');
                pie.destroy();
                pie = new Chart(detailchart,{
                    type: 'pie',
                    data: {
                        labels: ["IP Phone","Networking","Change Request","Desktop Hardware","Desktop Software"],
                        datasets:[{
                            label: "Percent",
                            backgroundColor:["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                            data: Months[selection]
                        }]
                    },
                    options:{
                        responsive:true,
                        title:{
                            display: true,
                            text: "Month Selection"
                        }
                    }
                });

            },
            onHover: function (evt) {
                if (bar.getElementsAtEvent(evt).length <=0){
                    return ;
                }
                console.log(evt);
            }

        }
    });



     detailchart = document.getElementById('pie-chart').getContext('2d');
     pie = new Chart(detailchart,{
        type: 'pie',
        data: {
            labels: ["IP Phone","Networking","Change Request","Desktop Hardware","Desktop Software"],
            datasets:[{
                label: "Percent",
                backgroundColor:["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: Months[0]
            }]
        },
        options:{
            responsive: true,
            title:{
                display: true,
                text: "Month Selection"
            }
        }
    });

};

/* harmony default export */ __webpack_exports__["a"] = (ChartGenerator);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let  RecentEvents = function () {

    let Rtickets = [
        {priority: 1,ticket:5643,author: 'David Patterson',body:"My phone doesn't redirect my calls"},
        {priority: 3,ticket:4312,author: 'John Smith',body: "My Desktop is trying to update however after 5 min my PC get restarted reaptedly"},
        {priority: 4,ticket:1247,author: 'Jim Clute',body: "I need this data query for Client ASAP"},
        {priority: 2,ticket:2389,author: 'John Lee',body: "I am not able to get this report To HR"},
        {priority: 1,ticket:1234,author: 'Kerry Orland',body: "I believe there is bug in production app"},
        {priority: 3,ticket:9743,author: 'John Lee',body:"How can get my phone reset?"},
        {priority: 2,ticket:6590,author: 'Amir Taiebi',body: "Report 9234-I should be revised."},
        {priority: 4,ticket:8623,author: 'Dennis Kelly',body: "I am not able to export any data out Particle Count Instrument"},
        {priority: 3,ticket:8745,author: 'Sara Johnson',body: "We have new Employee I want new account for her, please email me for more information"},
        {priority: 3,ticket:7632,author: 'Jessee Kingsman',body: "Shipping PC still very slow and I am not able to get online"},
        {priority: 4,ticket:6789,author: 'Bobby Lue',body: "I am not able to print from my printer."},
        {priority: 1,ticket:9543,author: 'Reza Taiebi', body:"Report 932-W should revised"},
        {priority: 3,ticket:4290,author: 'Ali Berenjian', body: "Projector in Conference Room is not working"}
    ];

    let Htickets = [
        {priority: 1,ticket:6789,author: 'David Patterson'},
        {priority: 4,ticket:1345,author: 'John Smith'},
        {priority: 2,ticket:9845,author: 'Sara Johnson'},
        {priority: 3,ticket:3467,author: 'Kerry Orland'},
        {priority: 1,ticket:1289,author: 'David Patterson'},
        {priority: 4,ticket:3456,author: 'William Jones'},
        {priority: 1,ticket:7890,author: 'Reza Taghavian'},
        {priority: 2,ticket:3489,author: 'Linda Perry'},
        {priority: 3,ticket:6903,author: 'Marta Hendrson'},
        {priority: 2,ticket:8921,author: 'Daniel Rodmore'},
        {priority: 1,ticket:9321,author: 'Samuel Johnson'},
        {priority: 3,ticket:4356,author: 'Maryam Shokohi'}
    ];


    let ulTickets = document.getElementById('recent-ticket');
    let ulHold = document.getElementById('recent-hold');
    let Rindex = 9;
    let Hindex = 9;

    setInterval(function () {

        let lists = ulTickets.getElementsByTagName('li');
        if (lists.length >= 9){
            $('#recent-ticket li:last-child').remove();
        }

        let div = document.createElement('div');
        div.setAttribute("class","ticket-container");
        let li = document.createElement('li');
        let data = Rtickets[Rindex];
        let spanTag = document.createElement('span');
        let spanTicket = document.createElement('span');
        spanTicket.appendChild(document.createTextNode(`Ticket# ${data.ticket}`));
        spanTicket.setAttribute("class","ticket-header");
        let str = `${data.author}`;



        if (data.priority === 1){
            spanTag.appendChild(document.createTextNode("Urgent"));
            spanTag.setAttribute("class","urgent-priority")
        }else if (data.priority === 2){
            spanTag.appendChild(document.createTextNode("High"));
            spanTag.setAttribute("class","high-priority")
        }else if (data.priority === 3){
            spanTag.appendChild(document.createTextNode("Medium"));
            spanTag.setAttribute("class","medium-priority")
        }else{
            spanTag.appendChild(document.createTextNode("Low"));
            spanTag.setAttribute("class","low-priority")
        }
        div.appendChild(spanTag);
        div.appendChild(spanTicket);
        let spanText = document.createElement('span');
        spanText.appendChild(document.createTextNode(str));
        spanText.setAttribute("class","ticket-header");
        div.appendChild(spanText);
        li.appendChild(div);
        ulTickets.prepend(li);
        if (Rindex + 1 === Rtickets.length){
            Rindex = 0
        }else{
            Rindex++
        }

    },4000);

    setInterval(function () {

        let lists = ulHold.getElementsByTagName('li');
        if (lists.length >= 9){
            $('#recent-hold li:last-child').remove();
        }


        let div = document.createElement('div');
        div.setAttribute("class","ticket-container");
        let li = document.createElement('li');
        let data = Htickets[Hindex];
        let spanTag = document.createElement('span');
        let spanTicket = document.createElement('span');
        spanTicket.appendChild(document.createTextNode(`Ticket# ${data.ticket}`));
        let str = `${data.author}`;



        if (data.priority === 1){
            spanTag.appendChild(document.createTextNode("Urgent"));
            spanTag.setAttribute("class","urgent-priority")
        }else if (data.priority === 2){
            spanTag.appendChild(document.createTextNode("High"));
            spanTag.setAttribute("class","high-priority")
        }else if (data.priority === 3){
            spanTag.appendChild(document.createTextNode("Medium"));
            spanTag.setAttribute("class","medium-priority")
        }else{
            spanTag.appendChild(document.createTextNode("Low"));
            spanTag.setAttribute("class","low-priority")
        }
        div.appendChild(spanTag);
        spanTicket.setAttribute("class","ticket-header");
        div.appendChild(spanTicket);
        let spanText = document.createElement('span');
        spanText.appendChild(document.createTextNode(str));
        spanText.setAttribute("class","ticket-header");
        div.appendChild(spanText);
        li.appendChild(div);
        ulHold.prepend(li);
        if (Hindex + 1 === Htickets.length){
            Hindex = 0
        }else{
            Hindex++
        }
    },4000);

};

/* harmony default export */ __webpack_exports__["a"] = (RecentEvents);




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let TicketCount = () =>{

    setInterval(function OpenTicket () {
        let value = document.getElementById('open-counter');
        let newvalue = parseInt(value.getAttribute('data-count'));
        value.innerText = newvalue + 1;
        value.setAttribute('data-count',newvalue+1)
        $('#open-counter').counterUp({
            delay: 10,
            time: 5000,
            offset: 70,
            beginAt: newvalue,
            formatter: function (n) {
                return n.replace(/,/g, '.');
            }
        });
    },10000);


    setInterval(function CloseTicket () {
        let value = document.getElementById('close-counter');
        let newvalue = parseInt(value.getAttribute('data-count'));
        value.innerText = newvalue + 1;
        value.setAttribute('data-count',newvalue+1)
        $('#open-counter').counterUp({
            delay: 10,
            time: 5000,
            offset: 70,
            beginAt: newvalue,
            formatter: function (n) {
                return n.replace(/,/g, '.');
            }
        });
    },20000)


};



/* harmony default export */ __webpack_exports__["a"] = (TicketCount);







/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


let BandwithChart = function () {

    let time=[];
    let data = [];
    let t = getTime();
    let d = getRandomData();
    // time.push(t);
    // data.push(d);

    for(let i =0 ; i < 7 ; i++){
       // addData(bandwidthChart,getTime(),getRandomData())
        time.push(getTime() - (6-i) * 1000);
        data.push(getRandomData());
    }



    let bandwidth = document.getElementById('bandwidth-chart').getContext('2d');
    let bandwidthChart = new Chart(bandwidth,{

        type: 'line',
        data:{
            labels: time,
            datasets: [{
                label: "Network Bandwidth",
                backgroundColor: 'rgb(221,85,31)',
                borderColor: 'rgb(221,85,31)',
                data: data,
            }]
        },
        options:{
            responsive:true,
            scales:{
                xAxes:[{
                    type:'time',
                    time:{
                        displayFormats:{
                            millisecond: 'h:mm:ss',

                        },
                    }
                }],
                yAxes:[{
                    ticks: {
                        beginAtZero: true,
                        steps: 10,
                        stepValue: 5,
                        max: 100
                    }
                }]

            }
        }

    });

    setInterval(function (){
        addData(bandwidthChart,getTime(),getRandomData())
        if (time.length > 7){
            removeData(bandwidthChart)
        }
    },1000);


    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }

    function removeData(chart) {
        chart.data.labels.shift();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.shift();
        });
        chart.update();
    }

  function getTime() {
        let date = new Date();
        // debugger;
        return date.getTime();
  }

  function  getRandomData() {

        return  (Math.random() * Math.floor(90))
  }



};


/* harmony default export */ __webpack_exports__["a"] = (BandwithChart);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (GaugeChart);

/***/ })
/******/ ]);