// JavaScript
const runner = document.querySelector('.runner');
const runner2 = document.querySelector('.runner2');

runner.addEventListener('mouseover', () => {
    runner.classList.add('pause'); // добавить класс "pause" при наведении на скелета
});

runner.addEventListener('mouseout', () => {
    runner.classList.remove('pause'); // удалить класс "pause" при отводе курсора от скелета
});
runner2.addEventListener('mouseover', () => {
    runner2.classList.add('pause'); // добавить класс "pause" при наведении на скелета
});

runner2.addEventListener('mouseout', () => {
    runner2.classList.remove('pause'); // удалить класс "pause" при отводе курсора от скелета
});


function formInputHtmlForm() {
    const form = document.createElement('form');
    form.setAttribute('id', 'main');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'post');
    form.setAttribute('onsubmit', 'return false');
    let inputFirstName = document.querySelector('#firstName');
    let inputLastName = document.querySelector('#lastName');
    let inputEmail = document.querySelector('#email');
    let inputPassword = document.querySelector('#password');
    const NAME_REGEXP = /^[a-zA-Z]{3,16}$/;
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const PASSWORD_REGEXP = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

    inputFirstName.addEventListener('input', () => {
        if (NAME_REGEXP.test(inputFirstName.value)) {
            inputFirstName.style.color = 'red';
        } else {
            inputFirstName.style.color = 'green';
        }
    });

    inputLastName.addEventListener('input', () => {
        if (NAME_REGEXP.test(inputLastName.value)) {
            inputLastName.style.color = 'red';
        } else {
            inputLastName.style.color = 'aqua';
        }
    });

    inputEmail.addEventListener('input', () => {
        if (EMAIL_REGEXP.test(inputEmail.value)) {
            inputEmail.style.color = 'red';
        } else {
            inputEmail.style.color = 'white';
        }
    });

    inputPassword.addEventListener('input', () => {
        if (PASSWORD_REGEXP.test(inputPassword.value)) {
            inputPassword.style.color = 'red';
        } else {
            inputPassword.style.color = 'blue';
        }
    });
}

formInputHtmlForm()

document.getElementById('main').addEventListener("submit", checkFormInput);

function reloadAfter5Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    });
}



function checkFormInput(event) {
    let note = document.querySelector(".note-content");
    const data = document.getElementById('main');
    const firstName = data.firstName.value;
    const lastName = data.lastName.value;
    const email = data.email.value;
    const password = data.password.value;
    event.preventDefault();
    switch (true) {
        case (testFirstName(firstName) && testLastName(lastName) && testEmail(email) && testPassword(password)):
            note.innerHTML = 'Your registration page has been completed successfully';
            break;
        case (!testFirstName(firstName) && testLastName(lastName) && testEmail(email) && testPassword(password)):
            note.innerHTML = 'Your FirstName NOT successfully';
            break;
        case (!testLastName(lastName) && testFirstName(firstName) && testEmail(email) && testPassword(password)):
            note.innerHTML = 'Your LastName NOT successfully';
            break;
        case (!testEmail(email) && testFirstName(firstName) && testLastName(lastName) && testPassword(password)):
            note.innerHTML = 'Your Email NOT successfully';
            break;
        case (!testPassword(password) && testFirstName(firstName) && testLastName(lastName) && testEmail(email)):
            note.innerHTML = 'Your Password NOT successfully';
            break;
        default:
            note.innerHTML = 'Your registration page has been completed NOT successfully';
            break;
    }
    //Для красоты сделал, а так необязательно.
    reloadAfter5Seconds();
    data.reset();
}
