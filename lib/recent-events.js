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
        {ticket:6789,author: 'David Patterson'},
        {ticket:1345,author: 'John Smith'},
        {ticket:9845,author: 'Sara Johnson'},
        {ticket:3467,author: 'Kerry Orland'},
        {ticket:1289,author: 'David Patterson'},
        {ticket:3456,author: 'William Jones'},
        {ticket:7890,author: 'Reza Taghavian'},
        {ticket:3489,author: 'Linda Perry'},
        {ticket:6903,author: 'Marta Hendrson'},
        {ticket:8921,author: 'Daniel Rodmore'},
        {ticket:9321,author: 'Samuel Johnson'},
        {ticket:4356,author: 'Maryam Shokohzadeh'}
    ];


    let ulTickets = document.getElementById('recent-ticket');
    let ulHold = document.getElementById('recent-hold');
    let Rindex = 9;
    let Hindex = 9;

    setInterval(function () {

        let lists = ulTickets.getElementsByTagName('li');
        if (lists.length > 9){
            $('#recent-ticket li:last-child').remove();
        }

        let div = document.createElement('div');
        div.setAttribute("class","ticket-container");
        let li = document.createElement('li');
        let data = Rtickets[Rindex];
        let spanTag = document.createElement('span');
        let str = `Ticket# ${data.ticket} - ${data.author}`;



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
        if (lists.length > 9){
            $('#recent-hold li:last-child').remove();
        }



        let li = document.createElement('li');
        let data = Htickets[Hindex];
        let str = `Ticket# ${data.ticket} - ${data.author}`;

        li.appendChild(document.createTextNode(str));
        ulHold.prepend(li);
        if (Hindex + 1 === Htickets.length){
            Hindex = 0
        }else{
            Hindex++
        }
    },4000)



};

export default RecentEvents;


