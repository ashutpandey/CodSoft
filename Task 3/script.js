// Get the necessary elements
let resultField = document.getElementById('result');
let toggleModeButton = document.getElementById('toggleMode');
let isDarkMode = false; // Track the current mode

// Append number to the result field
function appendNumber(number) {
  resultField.value += number;
}

// Append operator to the result field
function appendOperator(operator) {
  resultField.value += operator;
}

// Calculate the result
function calculate() {
  try {
    let result = eval(resultField.value);
    resultField.value = result;
  } catch (error) {
    resultField.value = 'Error';
  }
}

// Clear the result field
function clearResult() {
  resultField.value = '';
}

// Toggle between dark and bright mode
toggleModeButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
  toggleModeButton.textContent = isDarkMode ? 'Bright Mode' : 'Dark Mode';
});
