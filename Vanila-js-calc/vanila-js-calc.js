// Get references to elements
const display = document.getElementById('displayResults');
const buttons = document.querySelectorAll('.btn');

// Initialize the display value
let displayValue = '';

// Function to update the display
function updateDisplay() {
  display.value = displayValue || '0'; // Show '0' if displayValue is empty
}

// Function to clear the display
function clearResults() {
  displayValue = '';
  updateDisplay();
}

// Function to delete the last character
function deleteLastChar() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

// Function to append numbers and operators
function selectedNumber(value) {
  displayValue += value.toString();
  updateDisplay();
}

// Function for addition
function additionSign() {
  if (displayValue && !displayValue.endsWith('+')) {
    displayValue += '+';
    updateDisplay();
  }
}

// Function for subtraction
function subtractionSign() {
  if (displayValue && !displayValue.endsWith('-')) {
    displayValue += '-';
    updateDisplay();
  }
}

// Function for multiplication
function multiplicationSign() {
  if (displayValue && !displayValue.endsWith('*')) {
    displayValue += '*';
    updateDisplay();
  }
}

// Function for division
function divisionSign() {
  if (displayValue && !displayValue.endsWith('/')) {
    displayValue += '/';
    updateDisplay();
  }
}

// Function to calculate results
function calculateResults() {
  try {
    // Evaluate the mathematical expression
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch {
    alert('Invalid Expression');
    clearResults();
  }
}

// Attach event listeners based on descriptive IDs
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const id = button.id;

    if (id.startsWith('selectedNumber')) {
      const value = id.replace('selectedNumber', '');
      selectedNumber(value === 'Dot' ? '.' : value); // Handle decimal numbers
    } else if (id === 'clearResults') {
      clearResults();
    } else if (id === 'deleteLastChar') {
      deleteLastChar();
    } else if (id === 'calculateResults') {
      calculateResults();
    } else if (id === 'additionSign') {
      additionSign();
    } else if (id === 'subtractionSign') {
      subtractionSign();
    } else if (id === 'multiplicationSign') {
      multiplicationSign();
    } else if (id === 'divisionSign') {
      divisionSign();
    }
  });
});

// Initialize the display
updateDisplay();
