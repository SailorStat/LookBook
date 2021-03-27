// Section__post options
function toggleChecked() {
    this.classList.toggle('checked')
};


let postValue = document.querySelectorAll('.post__value');

postValue.forEach(el => el.onclick = toggleChecked);


let like = document.querySelectorAll('.like');

like.forEach(el => el.onclick = toggleChecked);


