// Open Entry display and Reg display
let entryButton = document.querySelectorAll(".entry__button");
let entryDisplay = document.querySelector(".entry__display");

entryButton.forEach(element => element.onclick = function () {
    entryDisplay.style.display = 'block';
});


//
let regButton = document.querySelectorAll(".reg__button");
let regDisplay = document.querySelector(".reg__display");

regButton.forEach(element => element.onclick = function () {
    regDisplay.style.display = 'block';
});



// Close Entry display and Reg display
entryDisplay.onclick = function (event) {
    if ( event.target == entryDisplay ) {
        entryDisplay.style.display = 'none';
    };
};


let entryExitCross = document.querySelector(".entry__exit");

entryExitCross.onclick = function () {
    entryDisplay.style.display = 'none';
};


//
regDisplay.onclick = function (event) {
    if ( event.target == regDisplay ) {
        regDisplay.style.display = 'none';
    };
};


let regExitCross = document.querySelector(".reg__exit");

regExitCross.onclick = function () {
    regDisplay.style.display = 'none';
};



//Open and close eye in entry and red block
let entryEye = document.querySelector('.entry__eye');
let entryPass = document.querySelector('.entry__pass');


entryEye.onclick = function () {
    if (entryEye.classList.contains('fa-eye-slash')) {
        entryEye.classList.remove('fa-eye-slash');
        entryEye.classList.add('fa-eye');
        entryPass.type ='text';
    } else {
        entryEye.classList.add('fa-eye-slash');
        entryEye.classList.remove('fa-eye');
        entryPass.type ='password';
    };
};


//
let regEye = document.querySelectorAll('.reg__eye');
let regPass = document.querySelectorAll('.reg__pass');


regEye.forEach(el => el.onclick = function () {
    if (el.classList.contains('fa-eye-slash')) {
        regEye.forEach(el => el.classList.remove('fa-eye-slash'));
        regEye.forEach(el => el.classList.add('fa-eye'));
        regPass.forEach(elm => elm.type ='text');
    } else {
        regEye.forEach(el => el.classList.add('fa-eye-slash'));
        regEye.forEach(el => el.classList.remove('fa-eye'));
        regPass.forEach(elm => elm.type ='password');
    };
});


// Add filter


// Filter list open
function toggleChecked() {
    this.classList.toggle('checked');
};

let filterСhoice = document.querySelectorAll('.filter__choice');


// Filter list curtail
filterСhoice.forEach(el => el.onclick = toggleChecked);
function removeFilterChecked() {
    if (!event.target.classList.contains('filter__choice') && !event.target.classList.contains('filter__option') && !event.target.classList.contains('filter__next') ) {
        filterСhoice.forEach(el => el.classList.remove('checked'));
    };
};

document.onclick = removeFilterChecked;


// Filter delete
let filterCross = document.querySelectorAll('.filter__close');

function filterClose() {
    this.parentElement.remove();
};

filterCross.forEach(el => el.onclick = filterClose);

// Filter heredity
let filterOption = document.querySelectorAll('.filter__option');

function removeActive(filterList) {
    let filterActive = filterList.querySelectorAll(".active");
    filterActive.forEach(el => el.classList.remove("active"));
}

function addActive(filterCurrent) {
    filterCurrent.classList.remove("active");
    filterCurrent.classList.add("active");
}

function filterActive() {
    if (this.parentElement.classList.contains("filter__list")) {
        removeActive(this.parentElement);
        addActive(this);
    };

    if (this.parentElement.parentElement.classList.contains("filter__list")) {
        removeActive(this.parentElement.parentElement);
        addActive(this);
    };

    if (this.parentElement.parentElement.parentElement.classList.contains("filter__list")) {
        removeActive(this.parentElement.parentElement.parentElement);
        addActive(this);
    };

    if (this.parentElement.parentElement.parentElement.parentElement.classList.contains("filter__list")) {
        deleteActive(this.parentElement.parentElement.parentElement.parentElement);
        addActive(this);
    };
};

filterOption.forEach(el => el.onclick = filterActive);







