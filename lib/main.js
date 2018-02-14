import Count from './counterup'
import ChartGenerator from './tickets_charts'
import RecentEvent from './recent-events'
import TicketCount from './tickets_count'

Count();

document.addEventListener("DOMContentLoaded",()=>{
    ChartGenerator();
    RecentEvent();
    TicketCount();
});




