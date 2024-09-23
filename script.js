document.getElementById('load-content').addEventListener('click', function() {
    const contentDiv = document.getElementById('dynamic-content');
    const newContent = document.createElement('p');
    newContent.textContent = 'Here is some more dynamic content!';
    contentDiv.appendChild(newContent);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        document.getElementById('form-message').textContent = `Thank you, ${name}! Your email ${email} has been submitted.`;
    } else {
        document.getElementById('form-message').textContent = 'Please fill out all fields.';
    }
});
