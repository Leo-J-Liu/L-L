const outPutField = document.getElementById("chatBox");

window.onload = setTimeout(greeting, 500);

window.onload = setTimeout(tellTime, 2000);

window.onload = setTimeout(findCountry, 5000);

window.onload = setTimeout(giveChip, 32000);


// window.onload = setTimeout(locating, 5000);

// document.addEventListener("click", clickResponse);


function greeting(){
    outPutField.appendChild(document.createElement('p')).innerHTML = "User has arrived!";
}

const d = new Date();
var currentTime = d.getTime();

console.log(d);
// console.log(currentTime);
console.log(d.getHours())





var sun
var finalTime;

if (d.getHours() > 12){

    finalTime = d.getHours() - 12
    sun = "pm"
} else {
    sun = "am"
    finalTime = d.getHours()
};

console.log(finalTime)

function tellTime(){
    outPutField.appendChild(document.createElement('p')).innerHTML = "It is currently " + finalTime + sun + ", a good time to start";
}



function findCountry(){
    outPutField.appendChild(document.createElement('p')).innerHTML = "It looks like our user is from the United States";
    setTimeout(() => {
        outPutField.appendChild(document.createElement('p')).innerHTML = "Land of the free, our favorite country";
    }, 3200)
    setTimeout(() => {
        outPutField.appendChild(document.createElement('p')).innerHTML = "This is for you";
    }, 5500)

    setTimeout(() => {
        document.body.style.cursor = "url('burgermid.png'), auto"
    }, 7000)

    setTimeout(() => {
        document.body.style.cursor = "url('burger1bite.png'), auto"
    }, 10000)

    setTimeout(() => {
        document.body.style.cursor = "url('burger2bite.png'), auto"
    }, 15000)

    setTimeout(() => {
        document.body.style.cursor = "url('burger3bite.png'), auto"
    }, 16000)

    setTimeout(() => {
        document.body.style.cursor = "url('burger4bite.png'), auto"
    }, 19000)

    setTimeout(() => {
        document.body.style.cursor = "url('burger5bite.png'), auto"
    }, 23000)

    setTimeout(() => {
        document.body.style.cursor = "auto"
    }, 25000)
}





let chhhip = document.getElementById("container1");
function giveChip(){
    outPutField.appendChild(document.createElement('p')).innerHTML = "Thank you for coming.";
    setTimeout(() => {
        outPutField.appendChild(document.createElement('p')).innerHTML = "Please, have a chip";
    }, 3000)
    setTimeout(() => {
        chhhip.style.visibility = "visible"
    }, 5000)
    
}

let pchip = document.getElementById("pchip.png");
    function clickPchip() {
    outPutField.appendChild(document.createElement('p')).innerHTML = "User has selected the potato chip";
    chhhip.style.visibility = "hidden"
    setTimeout(() => {
        outPutField.appendChild(document.createElement('p')).innerHTML = "User appears to be human, proceeding to next stage";
    }, 3000)


    setTimeout(askCamera, 7000);
}

let cchip = document.getElementById("cchip.png");
    function clickCchip() {
    outPutField.appendChild(document.createElement('p')).innerHTML = "User is a bot!, terminating program";
    chhhip.style.visibility = "hidden"

    setTimeout(() => {
        window.open('userexperiment.html');
        window.close();
    }, 3000)
}
    








let popupwindow = document.getElementById("popup");

function askCamera(){
    outPutField.appendChild(document.createElement('p')).innerHTML = "Now, can we see your face? ";
    setTimeout(() => {
        popup.style.visibility = "visible"
    }, 2000)
}

function clickBlock(){  
    popupwindow.style.visibility = "hidden"

    setTimeout(() => {
        outPutField.appendChild(document.createElement('p')).innerHTML = "User appears to be insecure";
    }, 700)

    setTimeout(gGame, 4000);
}

function clickAllow(){  
    popupwindow.style.visibility = "hidden"

    setTimeout(() => {
        outPutField.appendChild(document.createElement('p')).innerHTML = "Hmm, the user looks surprisingly...";
    }, 1800)
    setTimeout(() => {
        outPutField.appendChild(document.createElement('p')).innerHTML = "Hideous";
    }, 3800)
    setTimeout(() => {
        outPutField.appendChild(document.createElement('p')).innerHTML = "Perhaps we should proceed with the camera off";
    }, 6200)

    setTimeout(gGame, 4000);
}









function gGame(){

}










// function locating(){
//     outPutField.appendChild(document.createElement('p')).innerHTML = "Your current country is: <span id="country">...</span>";
// }

function clickResponse(){
    outPutField.appendChild(document.createElement('p')).innerHTML = "User has clicked!"
}



var scrollNumber = 0;


$(window).on('wheel', function(event){
    if (scrollNumber === 0){
    
        outPutField.appendChild(document.createElement('p')).innerHTML = "User just attempted to scroll. Please don't move around."
        scrollNumber = 1;
    
        setTimeout(() => {
            scrollNumber = 2;
        }, 2000)
        
    } 
    else if (scrollNumber === 2){
        outPutField.appendChild(document.createElement('p')).innerHTML = "User just attempted to scroll again, perhaps user is not very bright"
        scrollNumber = 3;

        setTimeout(() => {
            scrollNumber = 4;
        }, 2000)
    } 
    else if (scrollNumber === 4){
        outPutField.appendChild(document.createElement('p')).innerHTML = "User fail to comprehend that this is not a scrollable website"
        scrollNumber = 5;

        setTimeout(() => {
            scrollNumber = 6;
        }, 2000)
    }
    else if (scrollNumber === 6){
        outPutField.appendChild(document.createElement('p')).innerHTML = "STOP SCROLLING!!!"
        scrollNumber = 7;

        setTimeout(() => {
            scrollNumber = 6;
        }, 2000)
     }
})

window.addEventListener('click', function (evt) {
    if (evt.detail === 4) {outPutField.appendChild(document.createElement('p')).innerHTML = "User is frustrated" }

    if (evt.detail === 7) {outPutField.appendChild(document.createElement('p')).innerHTML = "User is angry" }
});

 
setIdleTimeout(15000, function() {
    outPutField.appendChild(document.createElement('p')).innerHTML = "User is not excited about this"
}, function() {
    outPutField.appendChild(document.createElement('p')).innerHTML = "User is back!"
});

setIdleTimeout(60000, function() {
    outPutField.appendChild(document.createElement('p')).innerHTML = "User is asleep, perfect time to observe him up close, Let's move quietly"
}, function() {
    outPutField.appendChild(document.createElement('p')).innerHTML = "User is back!"
});

setIdleTimeout(1800000, function() {
    outPutField.appendChild(document.createElement('p')).innerHTML = "User appears to be…Dead. Perhaps it's time to introduce our next subject?"

}, function() {
    outPutField.appendChild(document.createElement('p')).innerHTML = "User is back!"
});


function setIdleTimeout(millis, onIdle, onUnidle) {
    var timeout = 0;
    startTimer();

    function startTimer() {
        timeout = setTimeout(onExpires, millis);
        document.addEventListener("mousemove", onActivity);
        document.addEventListener("keypress", onActivity);
    }
    
    function onExpires() {
        timeout = 0;
        onIdle();
    }

    function onActivity() {
        if (timeout) clearTimeout(timeout);
        else onUnidle();
        //since the mouse is moving, we turn off our event hooks for 1 second
        document.removeEventListener("mousemove", onActivity);
        document.removeEventListener("keypress", onActivity);
        setTimeout(startTimer, 1000);
    }
}



// document.addEventListener("wheel", scrollResponse);

// function scrollResponse(e){
//     outPutField.appendChild(document.createElement('p')).innerHTML = "User just attempted to scroll. Please don't move around."
//     e.currentTarget.removeEventListener("wheel", scrollResponse);
    
//     setTimeout(()=>{
//         c.currentTarget.addEventListener("wheel", scrollResponse2)
//     }, 2000)
//     ;
// }

// function scrollResponse2(c){ 

//     outPutField.appendChild(document.createElement('p')).innerHTML = "User just attempted to scroll again, perhaps user is not very bright"
//     c.currentTarget.removeEventListener("wheel", scrollResponse2);
// }
















// function getCountry() {
// 	var countries = {

//         US: "United States of America",
//         RU: "Russia",
//     };

//     var timezones = {
//         "America/New_York": {
// 			u: -300,
// 			d: -240,
// 			c: ["US"]
//     }

// };

// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// if (timezone === "" || !timezone) {
//     return null;
// }

// const _country = timezones[timezone].c[0];
// const country = countries[_country];
// return country;
// }

// function getState(){
//     const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// if (timezone === "" || !timezone) {
//     return null;
// }

// const state = timezone.split("/")[1].replace("_", " ")

// return state    

// }


// const $country = document.querySelector(`#country`);
// const $state = document.querySelector(`#state`)
// $country.textContent = getCountry();
// $state.textContent = getState();


