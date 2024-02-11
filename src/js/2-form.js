const LS_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

// ================================= read form

function readFormData(form) {
   const messageValue = message.value.trim();
   const emailValue = email.value.trim();

    return {
        emailValue,
        messageValue
    }  
}

// ================================= input

form.addEventListener('input', (event) => {
    event.preventDefault();

    readFormData(form);

    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(LS_KEY, jsonData);
})

// ================================= safe info

const rawData = localStorage.getItem(LS_KEY);
if (rawData) {
    const data = JSON.parse(rawData);

    email.value = data.emailValue;
    message.value = data.messageValue;
}

// ==================================== submit

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (email.value === "" || message.value === "" ) {
        return;
    }

    console.log(readFormData(form));
    localStorage.removeItem(LS_KEY);
    form.reset();
})


