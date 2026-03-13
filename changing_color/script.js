//generate a random color
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i =0; i< 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;
const startChangingColor = function(){
    //intervalId = null is used so that the interval can start again after stopping.
    if(!intervalId){
        intervalId =setInterval(changeBgColor, 1000);
    }
    
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
        //console.log(randomColor)
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId);
    //When setInterval() runs, it returns an ID stored in intervalId.
    //clearInterval(intervalId) stops the interval, but the variable still holds the old ID.
    intervalId = null;
}
start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);