import Count from './counterup'
import ChartGenerator from './tickets_charts'
import RecentEvent from './recent-events'
import TicketCount from './tickets_count'
import BandwithChart from './bandwidth'
import GaugeChart from './gauge_chart'





document.addEventListener("DOMContentLoaded",()=>{
    setTimeout( () => $('.tickets-status').fadeIn(1000).css('display','flex'),2000)

    Count();
    ChartGenerator();
    RecentEvent();
    TicketCount();
    BandwithChart();
    GaugeChart();
});




