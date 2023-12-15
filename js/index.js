const jobStatusText = document.querySelectorAll('.job_status_text');
const jobStatus = document.querySelectorAll('.job_status');

for (let i = 0; i < jobStatusText.length; i++) {
    if (jobStatusText[i].innerText === "Part Time") {
        jobStatus[i].style.background = "#DFCD8E";
    }
}
