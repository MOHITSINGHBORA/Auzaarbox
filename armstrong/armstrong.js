const input = document.getElementById("input");
const button = document.querySelector("button");
const output = document.querySelector("span");

function digitcounter(number) {
    let count = 0
    while (number) {
        number = Math.floor(number / 10);
        count++;
    }
    return count;
}

function armstrongnumberchecker() {

    const number = parseInt(input.value);

    if (!number || number < 0) {
        output.textContent = "⚠ Please enter a valid positive number";
        output.style.color = "red";
        return;
    }

    const digitcount = digitcounter(number);

    let lastdigit, answer = 0, num = number;
    while (num) {
        lastdigit = num%10;
        num = Math.floor(num / 10);

        let power = 1;
        for (let i = 0; i<digitcount; i++){
            power*=lastdigit;
        }

        answer+=power;
    }

    if(answer===number){
        output.textContent=`${number} is a Armstrong Number.`;
        output.style.color = "lightgreen";
    }

    else{
        output.textContent =`${number} is NOT Armstrong Number`;
        output.style.color = "lightcoral";
    }

}

button.addEventListener("click", armstrongnumberchecker);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        armstrongnumberchecker();
    }
});