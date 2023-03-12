const cruiseclose = document.querySelector('.cruise');
const cruisefix = document.querySelector('.cruisefix');
const hotclose = document.querySelector('.hot');
const hotfix = document.querySelector('.hotfix');
const virusfix = document.querySelector('.brokefix')
const virusclose = document.querySelector('.broke')


cruiseclose.addEventListener('click', () => {
    let time = Math.floor(Math.random()*300000)+60000;
    cruisefix.classList.add('hide');
    setTimeout(reappear, time, "cruise");
})

hotclose.addEventListener('click', () => {
    let time = Math.floor(Math.random()*300000)+60000;
    hotfix.classList.add('hide');
    setTimeout(reappear, time, "hot");
})

virusclose.addEventListener('click', () => {
    let time = Math.floor(Math.random()*300000)+60000;
    virusfix.classList.add('hide');
    setTimeout(reappear, time, "virus");
})

const reappear = (popup) => {
    if(popup == "hot"){
        hotfix.classList.remove('hide');
    }
    if(popup == "cruise"){
        cruisefix.classList.remove('hide');
    }
    if(popup == "virus"){
        virusfix.classList.remove('hide');
    }
    
}

let time = Math.floor(Math.random()*30000)+10000;
setTimeout(reappear, time, "hot");

time = Math.floor(Math.random()*30000)+10000;
setTimeout(reappear, time, "cruise");

time = Math.floor(Math.random()*30000)+10000;
setTimeout(reappear, time, "virus");