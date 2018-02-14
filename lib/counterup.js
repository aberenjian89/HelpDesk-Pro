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

    $('#onhold-counter').counterUp({
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






export default Count;












