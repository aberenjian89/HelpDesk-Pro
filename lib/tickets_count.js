let TicketCount = () =>{

    setInterval(function OpenTicket () {
        let value = document.getElementById('open-counter');
        console.log(value);
        let newvalue = parseInt(value.getAttribute('data-count'));
        value.innerText = newvalue + 1;
        value.setAttribute('data-count',newvalue+1)
        console.log(value);
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
        console.log(value);
        let newvalue = parseInt(value.getAttribute('data-count'));
        value.innerText = newvalue + 1;
        value.setAttribute('data-count',newvalue+1)
        console.log(value);
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



export default TicketCount;





