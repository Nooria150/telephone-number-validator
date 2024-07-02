document.addEventListener('DOMContentLoaded', function() {
  const userInput = document.getElementById('user-input');
  const checkBtn = document.getElementById('check-btn');
  const clearBtn = document.getElementById('clear-btn');
  const resultsDiv = document.getElementById('results-div');

  checkBtn.addEventListener('click', function() {
    const phoneNumber = userInput.value.trim();

    if (phoneNumber === '') {
        alert('Please provide a phone number');
    } else if (isValidUSPhoneNumber(phoneNumber)) {
        resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
    }
  });

  clearBtn.addEventListener('click', function() {
    resultsDiv.textContent = '';
    userInput.value = '';
  });

  function isValidUSPhoneNumber(phoneNumber) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(phoneNumber);
  }
});