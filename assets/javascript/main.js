
const dieRolls = []

const showAllbutton = document.querySelector('#show-all-rolls')

const rollButton = document.querySelector('#roll-button');

const totalsElements = document.querySelector('#Total')

const rollsList = document.querySelector("#rolls-list")

const lists = document.createElement("li") // Not sure if I needed put this here?//



//---------------------------------------------------------------------------//

rollButton.addEventListener('click', function () {
    console.log('roll-button-clicked')

    const diceRolled = document.querySelector('#number-of-dice').value;
    let counter = 0
    let total = 0

    while (counter < diceRolled) {

        const diceRoll = Math.floor(Math.random() * 6 + 1);
        console.log(diceRoll)
        dieRolls.push(diceRoll)

        total += diceRoll
        counter += 1
    }

    totalsElements.innerHTML = 'Total = ' + total
    console.log(dieRolls)
    console.log(total)


})

//---------------------------------------------------------------------------//


showAllbutton.addEventListener('click', function () {
    console.log(dieRolls.length)

    let counter = 0

    while (counter < dieRolls.length) {

        // In an HTML document, the document.createElement() method creates the HTML element specified by tagName.//
        // var element = document.createElement(tagName[, options]);//
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement//

        const lists = document.createElement("li")
        lists.innerHTML = dieRolls[counter]
        rollsList.appendChild(lists)
        counter += 1
    }


})