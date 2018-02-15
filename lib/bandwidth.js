

let BandwithChart = function () {

    let time=[];
    let data = [];
    let t = getTime();
    let d = getRandomData();
    // time.push(t);
    // data.push(d);

    let bandwidth = document.getElementById('bandwidth-chart').getContext('2d');
    let bandwidthChart = new Chart(bandwidth,{

        type: 'line',
        data:{
            labels: time,
            datasets: [{
                label: "Web Server",
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
                        displayFormat:{
                            unit: "second",
                            second: 'h:mm:ss'
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

        return date.getTime();
  }

  function  getRandomData() {

        return  (Math.random() * Math.floor(90))
  }



};


export default BandwithChart;