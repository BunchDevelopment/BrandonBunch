const firstName = prompt('Hi! What is your first name?') || 'Visitor';
const lastName = prompt('Hi! What is your last name?') || 'McDefaultson';
const output = document.querySelector('#greeting');
//output.innerHTML = `<p>Thanks for visiting ${name}.</p>`; 

if (firstName || lastName) {
    output.innerHTML = `<p>Thanks for visiting ${firstName} ${lastName}.</p>`;
}