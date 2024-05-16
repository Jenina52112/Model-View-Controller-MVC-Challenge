// public/js/script.js

// Example: Toggle visibility of a password input field
const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('show-password');

showPasswordCheckbox.addEventListener('change', () => {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

// Example: Fetch data from the server using AJAX
const fetchDataButton = document.getElementById('fetch-data');

fetchDataButton.addEventListener('click', async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
    // Display fetched data on the page
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle errors
  }
});

// Example: Client-side form validation
const form = document.getElementById('my-form');

form.addEventListener('submit', (event) => {
  const inputValue = document.getElementById('input-field').value;
  if (inputValue.trim() === '') {
    event.preventDefault(); // Prevent form submission
    alert('Please enter a value for the input field.');
  }
});
