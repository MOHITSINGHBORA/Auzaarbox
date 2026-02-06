const input = document.getElementById("input");
const button = document.querySelector("button");
const result = document.querySelector("span");

function leapyearfinder(){

    const year = Number(input.value);

    if(!year){
        alert("kindly enter a valid year!");
        result.innerHTML="";
        return;
    }

    else if(year%400===0 || (year%4===0) && (year%100!=0)){
        result.innerHTML=`<strong>${year} is leap year </strong> and it has <strong>366</strong> days .`;
    }

    else{
         result.innerHTML=`<strong>${year}</strong> is <strong>not</strong> leap year and it has <strong>365</strong> days .`;
    }
}

button.addEventListener("click", leapyearfinder);

input.addEventListener("keydown", (e) =>{
    if(e.key === "Enter"){
        leapyearfinder();
    }
})
