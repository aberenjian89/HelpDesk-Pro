import Count from './counterup'
import ChartGenerator from './tickets_charts'
import RecentEvent from './recent-events'
import TicketCount from './tickets_count'
import BandwithChart from './bandwidth'

Count();

document.addEventListener("DOMContentLoaded",()=>{
    ChartGenerator();
    RecentEvent();
    TicketCount();
    BandwithChart();
});




