const jobStatusText = document.querySelectorAll('.job_status_text');
const jobStatus = document.querySelectorAll('.job_status');

const eyeHide = document.querySelector('.eye_hide');
const eyeVisible = document.querySelector('.eye_visible');
const password = document.querySelector('#password');


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