import './assets/scss/styles.scss'

window.main = true;

window.addEventListener('scroll', function () {
    let topNav = document.querySelectorAll("#topNav");
    //Define height of Navbar or scroll threshold
    if (window.scrollY >= 40) {
        topNav[0].classList.add("nav-shadow");
    } else {
        topNav[0].classList.remove("nav-shadow");
    }
});

// Add your background image filenames here
const backgrounds = [
    '0188.jpg',
    '0277.jpg',
    '0309.jpg',
    '0327.jpg',
    'color-splash-3.jpg',
    '0016.jpg',
    '0018.jpg',
    '0072.jpg',
    '0078.jpg',
    '0105.jpg',
    '0123.jpg',
    '0199.jpg',
    '0235.jpg'
];

if (backgrounds.length > 0) {
    const randomImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.backgroundImage = `url('/assets/backgrounds/${randomImage}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
}