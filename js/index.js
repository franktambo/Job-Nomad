const jobStatusText = document.querySelectorAll('.job_status_text');
const jobStatus = document.querySelectorAll('.job_status');

const eyeHide = document.querySelector('.eye_hide');
const eyeVisible = document.querySelector('.eye_visible');
const password = document.querySelector('#password');

const eye_hide_confirm = document.querySelector('.eye_hide_confirm');
const eye_visible_confirm = document.querySelector('.eye_visible_confirm');
const confirmPass = document.querySelector('#confirm_pass');


for (let i = 0; i < jobStatusText.length; i++) {
    if (jobStatusText[i].innerText === "Part Time") {
        jobStatus[i].style.background = "#DFCD8E";
    }
}

eyeHide.addEventListener('click', () => {
    eyeHide.style.display = "none";
    eyeVisible.style.display = "block";
    password.type = "text";
    
});

eyeVisible.addEventListener('click', () => {
    eyeVisible.style.display = "none";
    eyeHide.style.display = "block";
    password.type = "password";
});

eye_hide_confirm.addEventListener('click', () => {
    eye_hide_confirm.style.display = "none";
    eye_visible_confirm.style.display = "block";
    confirmPass.type = "text";
    
});

eye_visible_confirm.addEventListener('click', () => {    
    eye_visible_confirm.style.display = "none";
    eye_hide_confirm.style.display = "block";
    confirmPass.type = "password";
});