let like = document.querySelector('.like');
let likesNumber = document.querySelector('.likes-number');

like.onclick = function () {
    if (like.classList.contains('like-added')) {
        likesNumber.textContent--;
        likesNumber.style.color = '#2E2F22';
    } else {
        likesNumber.textContent++;
        likesNumber.style.color = '#C42A10';
    }
    like.classList.toggle('like-added');
};
