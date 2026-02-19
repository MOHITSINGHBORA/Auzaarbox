
const display = document.getElementById('input');
const buttons = document.querySelectorAll('.button');

let currentInput = '';
 
function updateDisplay(value) {
    if (value) {
        display.value = value;
        display.placeholder = '';
    } else {
        display.value = '';
        display.placeholder = '0';
    }
}

buttons.forEach((button)=> {
    button.addEventListener('click', ()=> {

        const val = button.value;
        
        if (val === 'AC') {
            currentInput = '';
            updateDisplay('');
            return;
        }

        if (val === '⌫') {
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput);
            return;
        }

        if (val === '=') {

            if (currentInput === '') {
                return;
            }
 
            let expression = currentInput;
            expression = expression.replace(/×/g, '*');
            expression = expression.replace(/÷/g, '/');
            expression = expression.replace(/%/g, '/100');

            try {
                const result = eval(expression);
                currentInput = String(parseFloat(result.toFixed(10)));
                updateDisplay(currentInput);
            } catch (error) {
                updateDisplay('Error');
                currentInput = '';
            }

            return;
        }

        if (val === '.') {
            const parts = currentInput.split(/[+\-×÷%]/);
            const lastNumber = parts[parts.length - 1];
            if (lastNumber.includes('.')) {
                return;
            }
        }

        currentInput = currentInput + val;
        updateDisplay(currentInput);

    });
});

document.addEventListener('keydown', (e)=> {

    const keyMap = {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '.': '.',
        '+': '+',
        '-': '-',
        '*': '×',        
        '/': '÷',        
        '%': '%',
        'Enter': '=',       
        'Backspace': '⌫',    
        'Escape': 'AC'      
    };

    const mapped = keyMap[e.key];

    if (mapped) {

        e.preventDefault();

        const allButtons = [...buttons];
        const matchingButton = allButtons.find(function(btn) {
            return btn.value === mapped;
        });

        if (matchingButton) {
            matchingButton.click();
        }
    }
});