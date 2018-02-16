import Count from './counterup'
import ChartGenerator from './tickets_charts'
import RecentEvent from './recent-events'
import TicketCount from './tickets_count'
import BandwithChart from './bandwidth'
import GaugeChart from './gauge_chart'





document.addEventListener("DOMContentLoaded",()=>{

    // setTimeout(()=> $('.loader').removeClass('loader'),3000);
    setTimeout( () => $('#main-container').css('opacity','1'),3000);

    Count();
    ChartGenerator();
    RecentEvent();
    TicketCount();
    BandwithChart();
    GaugeChart();
});




