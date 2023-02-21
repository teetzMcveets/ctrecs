const asapStartCheckbox = document.getElementById('asap-start');
const startDateInput = document.getElementById('start-date');
const startTimeInput = document.getElementById('start-time');

asapStartCheckbox.addEventListener('click', function() {
    if (asapStartCheckbox.checked) {
        startDateInput.disabled = true;
        startTimeInput.disabled = true;
    } else {
        startDateInput.disabled = false;
        startTimeInput.disabled = false;
    }
});

