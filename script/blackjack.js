const card = document.querySelector('.user');
const hand = document.querySelector('.hand');
const hold = document.querySelector('.hold');
let begin = true;


card.addEventListener('click', () => {
    const drawCard = () => {
        let userHand = [];
        let randNum = Math.floor(Math.random() * 13) + 1;
        if (randNum === 1) {
            userHand.push("Ace");
        } else if (randNum === 11) {
            userHand.push("Jack");
        } else if (randNum === 12) {
            userHand.push("Queen");
        } else if (randNum === 13) {
            userHand.push("King");
        } else {
            userHand.push(randNum);
        }
    }
    if (begin === true) {
        drawCard();
        drawCard();
        let anTest = userHand[0] === "Ace" || userHand[0] === 8 ? "an" : "a";
        let anTest2 = userHand[1] === "Ace" || userHand[1] === 8 ? "an" : "a";
        // console.log(userHand);
        hand.innerText = `You drew ${anTest} ${ userHand[0]} and ${anTest2} ${userHand[1]}`;
        hold.classList.remove('hidden');
        begin = false;
    }
    card.addEventListener('click', () => {
        drawCard()
        alert(userHand)
        console.log(begin)
    })
    // card.addEventListener('click', () => {
    //     alert("test")
    // })
})