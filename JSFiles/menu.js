// Create Menu Cards
const cardsContainer = document.getElementById('row-cards');

class Card {
    constructor(imgPath,alt,plateName,price) {
        this.imgPath = imgPath;
        this.alt = alt;
        this.plateName = plateName;
        this.price = price;
    }
    displayCard(){
        const menuCard = document.createElement('div');
        menuCard.className = 'col-12 col-sm-12 col-md-4 col-xl-3 menu-card';
        const thumbsIconContainer = document.createElement('div');
        thumbsIconContainer.className = 'thumbs-down';
        const thumbs_icon = document.createElement('i');
        thumbs_icon.className ='bi bi-hand-thumbs-down-fill dislike';
        const sadIcon = document.createElement('i');
        sadIcon.className = 'bi bi-emoji-frown-fill sad-icon';
        thumbsIconContainer.append(thumbs_icon,sadIcon);

        const hearIconContainer = document.createElement('div');
        hearIconContainer.className = 'heart-icon';
        const heartIcon = document.createElement('i');
        heartIcon.className ='fa-solid fa-heart like';
        const smileIcon = document.createElement('i');
        smileIcon.className = 'bi bi-emoji-smile-fill smile-icon';
        hearIconContainer.append(heartIcon,smileIcon);

        const imgContainer = document.createElement('div');
        imgContainer.className ='image';
        const image = document.createElement('img');
        image.src = this.imgPath;
        image.alt = this.alt;
        imgContainer.appendChild(image);

        const cardInfo = document.createElement('div');
        cardInfo.className = 'info';
        const plateName = document.createElement('h3');
        plateName.textContent = this.plateName;
        const price = document.createElement('h4');
        price.textContent = `${Number(this.price).toFixed(2)} $`;
        cardInfo.append(plateName,price);

        const rate = document.createElement('div');
        rate.className ='rate';
        const starIcon1 = document.createElement('i');
        starIcon1.className = 'fa-solid fa-star';
        const starIcon2 = document.createElement('i');
        starIcon2.className = 'fa-solid fa-star';
        const starIcon3 = document.createElement('i');
        starIcon3.className = 'fa-solid fa-star';
        const starIcon4 = document.createElement('i');
        starIcon4.className = 'fa-solid fa-star';
        rate.append(starIcon1,starIcon2,starIcon3,starIcon4)
        
        menuCard.append(thumbsIconContainer,hearIconContainer,imgContainer,cardInfo,rate);

        cardsContainer.append(menuCard);
    }
    displaySmileIcon(){
        const smile_icons = document.getElementsByClassName('smile-icon');
        const heart_icons = document.getElementsByClassName('like');
        for (let index = 0; index < heart_icons.length; index++) {
             heart_icons[index].addEventListener('click',()=>{
             smile_icons[index].style.display='block';
             heart_icons[index].style.display='none';
            });
        }
    }
    displaySadIcon(){
        const sad_icons = document.getElementsByClassName('sad-icon');
        const thumbs_icons = document.getElementsByClassName('dislike');
        for (let i = 0; i < thumbs_icons.length; i++) {
             thumbs_icons[i].addEventListener('click',()=>{
             sad_icons[i].classList.add('display');
             thumbs_icons[i].style.display='none';            
            });
        }
    }

}
const fishDish = new Card('./Images/restaurant-fish-dish.png','fish-dish','Fish Dish',13.00);
const pasta = new Card('./Images/pasta.png','pasta','Pasta Dish',8.05);
const meat_plate = new Card('./Images/meat_plate.png','meat',' Meat Dish',11.00);
const fish = new Card('./Images/restaurant-fish-dish.png','fish-dish','Fish Dish',13.00);
const pastaPlate = new Card('./Images/pasta.png','Pasta','pasta',8.05);
const meat = new Card('./Images/meat_plate.png','Meat Plate','meat',11.00);
const cardsArray = [fishDish,pasta,meat_plate,fish,pastaPlate,meat];
function iterationCard() {
    for (let i = 0; i < cardsArray.length; i++) {
        cardsArray[i].displayCard();
        cardsArray[i].displaySmileIcon();
        cardsArray[i].displaySadIcon();
    }
}
iterationCard();
// AOS For Menu Cards
const cardItem = document.querySelectorAll('.menu-card');
console.log(cardItem);
for (let index = 0; index < cardItem.length; index++) {
    cardItem[index].setAttribute('data-aos','flip-left');
}


