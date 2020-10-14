let Form = document.querySelector('.write-me, .new-comment-form');
let messageField = document.querySelector('.message-field, .comment-field');
let submitButton = document.querySelector('.submit-button');

Form.onsubmit = function (evt) {
    evt.preventDefault();
}

messageField.oninput = function () {
    if ((messageField.value.length < 10) || (messageField.value.length > 200)) {
        Form.classList.add('warning');
        submitButton.disabled = true;
    } else {
        Form.classList.remove('warning');
        submitButton.disabled = false;
    }
};
