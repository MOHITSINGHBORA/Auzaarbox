const input = document.getElementById("input");
const button = document.getElementById("button");
const result = document.getElementById("result");


function calculateTax() {
    let income = Number(input.value);

    if (isNaN(income) || income <= 0) {
        result.textContent = "Please enter a valid annual income";
        return;
    }

    let tax = 0;

    if (income <= 400000) {
        tax = 0;
    }
    else if (income <= 800000) {
        tax = (income - 400000) * 0.05;
    }
    else if (income <= 1200000) {
        tax = (400000 * 0.05) +
            (income - 800000) * 0.10;
    }
    else if (income <= 1600000) {
        tax = (400000 * 0.05) +
            (400000 * 0.10) +
            (income - 1200000) * 0.15;
    }
    else if (income <= 2000000) {
        tax = (400000 * 0.05) +
            (400000 * 0.10) +
            (400000 * 0.15) +
            (income - 1600000) * 0.20;
    }
    else if (income <= 2400000) {
        tax = (400000 * 0.05) +
            (400000 * 0.10) + (400000 * 0.15) +
            (400000 * 0.20) +
            (income - 2000000) * 0.25;
    }
    else {
        tax = (400000 * 0.05) +
            (400000 * 0.10) +
            (400000 * 0.15) +
            (400000 * 0.20) +
            (400000 * 0.25) +
            (income - 2400000) * 0.30;
    }


    tax = tax + (tax * 0.04);

    if (income <= 1200000) {
        const rebate = Math.min(tax, 60000);
        tax = tax - rebate;
    }

    result.innerHTML = `
        <p class= "p1"><strong>Total Income Tax Payable: ₹${tax.toFixed(2)}</strong></p>
        <p class = "p2">
            This calculation is an estimate based on the current tax slabs and may differ from your actual tax liability. 
            For exact details, please refer to the official <a href="https://incometaxindia.gov.in/pages/tools/tax-calculator.aspx" target="_blank">Income Tax Department website</a>.
        </p>
    `;

}

button.addEventListener("click", calculateTax);

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        calculateTax();
    }
}
);