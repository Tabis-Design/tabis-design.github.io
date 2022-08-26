const allPagesList = document.querySelectorAll(".pages-list li a");
const allPages = document.querySelectorAll("main>.page");
const menuToggler = document.querySelector('.material-symbols-outlined');
const navBar = document.querySelector('.nav-bar');
const filterBtn = document.querySelectorAll('.filter-item');
const itemCategory = document.querySelectorAll('.item-category');

menuToggler.addEventListener('click', function () {
    navBar.classList.toggle('active');
});

for (let i = 0; i < allPagesList.length; i++) {
    allPagesList[i].addEventListener('click', function (btn) {
        for (let i = 0; i < allPagesList.length; i++) {
            allPagesList[i].classList.remove("active");
            allPages[i].classList.remove("active");
            if (btn.target == allPagesList[i]) {
                allPagesList[i].classList.add("active");
                allPages[i].classList.add("active");
            }
        }
    }, false);
}

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener('click', function () {

        for (let i = 0; i < filterBtn.length; i++) {
            filterBtn[i].classList.remove('active');
        }

        this.classList.add('active');
        for (let i = 0; i < itemCategory.length; i++) {
            const itemCategoryText = itemCategory[i].textContent;
            switch (this.textContent) {
                case itemCategoryText:
                    itemCategory[i].parentElement.classList.add('active');
                    break;
                case 'All':
                    itemCategory[i].parentElement.classList.add('active');
                    break;
                default:
                    itemCategory[i].parentElement.classList.remove('active');
            }
        }
    });
}