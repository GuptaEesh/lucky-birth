var DOB = document.querySelector("#input-dob");
var num = document.querySelector("#input-number");
var btnSelect = document.querySelector("#btn");
var output = document.querySelector("#output");

function clickHandler() {
    var date = DOB.value;
    date = date.replaceAll("-", "");
    var sum = 0;
    if (num.value == 0 && date == 0) {
        output.innerText = "Enter both fields first!";
        exit;
    }
    while (date !== 0) {
        sum += date % 10;
        date = Math.floor(date / 10);
    }
    if (num.value == 0) {
        output.innerText = "Enter the number!";
    } else if (sum % (num.value) === 0) {
        output.innerText = "Your birthday is lucky.🤩🤩😇🥳🥳";
    } else {
        output.innerText = "Your birthday is not lucky, so sad🤔😔☹";
    }
};
btnSelect.addEventListener("click", clickHandler);