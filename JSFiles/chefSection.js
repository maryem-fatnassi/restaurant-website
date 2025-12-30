// AOS for Chef Cards
const chefCard = document.querySelectorAll('.chef-card');

for (let index = 0; index < chefCard.length; index++) {
    chefCard[index].setAttribute('data-aos','slide-up');
}
