document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".display p");
    const buttons = document.querySelectorAll(".main button");
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.textContent;

            if (this.classList.contains("num")) {
                handleNumber(value);
            } else if (this.classList.contains("op")) {
                handleOperator(value);
            } else if (this.classList.contains("ac")) {
                clearAll();
            } else if (this.classList.contains("cancle")) {
                cancelLast();
            } else if (this.classList.contains("ans")) {
                calculateResult();
            }

            updateDisplay();
        });
    });

    function handleNumber(value) {
        if (currentInput.length < 12) { // Limiting input length
            if (value === '.' && currentInput.includes('.')) {
                return; // Prevent multiple decimals
            }
            currentInput += value;
        }
    }

    function handleOperator(value) {
        if (currentInput === '' && value === '-') {
            currentInput = '-';
        } else if (currentInput !== '') {
            if (previousInput !== '') {
                calculateResult();
            }
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        }
    }

    function clearAll() {
        currentInput = '';
        previousInput = '';
        operator = '';
    }

    function cancelLast() {
        currentInput = currentInput.slice(0, -1);
    }

    function calculateResult() {
        if (previousInput !== '' && currentInput !== '') {
            const num1 = parseFloat(previousInput);
            const num2 = parseFloat(currentInput);
            let result;

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        result = 'Error'; // Handle division by zero
                    } else {
                        result = num1 / num2;
                    }
                    break;
                case '%':
                    result = num1 % num2;
                    break;
                default:
                    return;
            }

            currentInput = result.toString();
            previousInput = '';
            operator = '';
        }
    }

    function updateDisplay() {
        if (operator && previousInput && !currentInput) {
            display.textContent = previousInput + operator;
        } else {
            display.textContent = currentInput || '0';
        }
    }
});

