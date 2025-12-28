// Show Smile, Sad icons
const smile_icons = document.getElementsByClassName('smile-icon');
const heart_icons = document.getElementsByClassName('like');
const sad_icons = document.getElementsByClassName('sad-icon');
const thumbs_icons = document.getElementsByClassName('dislike');

function displaySmileIcon() {
    for (let index = 0; index < heart_icons.length; index++) {
        heart_icons[index].addEventListener('click',()=>{
            smile_icons[index].classList.add('show');
            heart_icons[index].style.display='none';
            // console.log('click');
            
        });
    }
}
displaySmileIcon();

function displaySadIcon() {
    for (let i = 0; i < thumbs_icons.length; i++) {
            thumbs_icons[i].addEventListener('click',()=>{
            sad_icons[i].classList.add('display');
            thumbs_icons[i].style.display='none';
            // console.log('click');
            
        });
    }
}
displaySadIcon();