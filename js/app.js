// console.log("Hi I am connected")

// common shared function starts
function getValueById(id) {
    const valueOfEl = Number(document.getElementById(id).value);
    return valueOfEl;
}
function getValueByClassName(classname) {
    const elements = document.getElementsByClassName(classname);
    let value = 0;
    for (const el of elements) {
        value += Number(el.value);
    }
    return value;
}

function getInnerTextValueById(id) {
    const valueEl = document.getElementById(id).innerText;
    return Number(valueEl);
}

function removeInputFieldByQuerySelector(classname) {
    const elements = document.querySelectorAll(classname);
    for (const el of elements) {
        el.value = '';


    }
    return;

}
function insertInnerText(id) {
    return document.getElementById(id);

}

function addToggleStyle(e) {
    e.target.classList.add("bg-lime-300");
    e.target.classList.remove("bg-white", "border-gray-100");
}





// common shared function ends
// global declaration




function clickButton(e) {
    const card1Count = getInnerTextValueById('span-1');
    const card2Count = getInnerTextValueById('span-2');
    const card3Count = getInnerTextValueById('span-3');
    const inputValue1 = getValueById('count-1');
    const inputValue2 = getValueById('count-2');
    const inputValue3 = getValueById('count-3');
    // console.log(inputValue1, inputValue2, inputValue3)
    const accountBalance = getInnerTextValueById('account-balance');

    const inputValue = getValueByClassName('input');

    const newAccountBalance = accountBalance - inputValue;




    if (newAccountBalance < 0) {
        alert('Insufficient Balance');

        // return;
    }
    else {

        if (inputValue1 > 0 || inputValue2 > 0 || inputValue3 > 0) {
            document.getElementById('account-balance').innerText = newAccountBalance;
            removeInputFieldByQuerySelector('.input');
            my_modal_1.showModal();
            const newSpan1 = card1Count + inputValue1;
            const newSpan2 = card2Count + inputValue2;
            const newSpan3 = card3Count + inputValue3;
            insertInnerText('span-1').innerText = newSpan1;
            insertInnerText('span-2').innerText = newSpan2;
            insertInnerText('span-3').innerText = newSpan3;
            return;

        }
        else {
            alert('Please insert a valid input! cheers!');
            removeInputFieldByQuerySelector('.input');
            return;
        }

    }


}

// toggle

const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');

// console.log(donationBtn, historyBtn);
historyBtn.addEventListener('click', function (e) {
    addToggleStyle(e);
    donationBtn.classList.remove('bg-lime-300');



})

donationBtn.addEventListener('click', function (e) {
    addToggleStyle(e);
    historyBtn.classList.remove('bg-lime-300');


})



