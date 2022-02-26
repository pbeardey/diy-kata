const reachDestination = (distance, speed) => { 
    let time = distance/speed;
    time = (time * 10);
    if (time % 5 !== 0){
        time = Math.trunc(time/5)*5 + 5;
    }
    time = (time / 10);

    return `I should be there in ${time} hours.`;
};


module.exports = reachDestination;
