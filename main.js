document.addEventListener('DOMContentLoaded', function () {
    let navToggle = document.querySelector('.nav-toggle');
    let navUl = document.querySelector('nav ul');

    navToggle.addEventListener('click', function () {
        navUl.classList.toggle('showing');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navUl.classList.remove('showing');
        }
    });
});
