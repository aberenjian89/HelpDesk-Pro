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
            events: ['click'],
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

            }

        },
        legend: {
            display: false,
        },
        tooltips: {
            callbacks: {
                label: tooltipItem => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
                title: () => null,
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

export default ChartGenerator;