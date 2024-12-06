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
function innerText(id) {
    return document.getElementById(id).innerText;

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
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const historyDiv = document.getElementById('history-div');
const mainContainer = document.getElementById('main');
const header = document.getElementById('header');
const footer = document.querySelector('footer');
const blogBtn = document.getElementById('blog');



function clickButton(e) {
    const card1Count = getInnerTextValueById('span-1');
    const card2Count = getInnerTextValueById('span-2');
    const card3Count = getInnerTextValueById('span-3');
    const inputValue1 = getValueById('count-1');
    const inputValue2 = getValueById('count-2');
    const inputValue3 = getValueById('count-3');
    const charity1 = innerText('charity-1');
    const charity2 = innerText('charity-2');
    const charity3 = innerText('charity-3');
    const accountBalance = getInnerTextValueById('account-balance');
    const inputValue = getValueByClassName('input');
    const newAccountBalance = accountBalance - inputValue;
    if (newAccountBalance < 0) {
        alert('Insufficient Balance');
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
            const div = document.createElement('div');
            div.innerHTML = `
           
            <div class="font-light border border-gray-300 p-4 drop-shadow-sm shadow-md rounded-lg space-y-2 mt-3">
            <p class = "text-md font-bold text-gray-950">${inputValue1} Taka is donated for ${charity1} </p>
            <p class = "text-md font-bold text-gray-950">${inputValue2} Taka is donated for ${charity2}</p>
            <p class = "text-md font-bold text-gray-950">${inputValue3} Taka is donated for ${charity3}</p>
            <p class = "text-red-400">Date: ${Date()}</p>
            </div>
            
            `
            historyDiv.appendChild(div);


        }
        else {
            alert('Please insert a valid input! cheers!');
            removeInputFieldByQuerySelector('.input');
            return;
        }

    }


}

//  * toggle
historyBtn.addEventListener('click', function (e) {
    addToggleStyle(e);
    donationBtn.classList.remove('bg-lime-300');
    historyDiv.classList.remove('hidden');
    mainContainer.classList.add('hidden');
    header.classList.remove('fixed');
    footer.classList.add('hidden');

})

donationBtn.addEventListener('click', function (e) {
    addToggleStyle(e);
    historyBtn.classList.remove('bg-lime-300');
    mainContainer.classList.remove('hidden');
    historyDiv.classList.add('hidden');
    header.classList.add('fixed');
    footer.classList.remove('hidden');

})

// * window change
blogBtn.addEventListener('click', function () {
    window.location.href = "blog.html";
})





