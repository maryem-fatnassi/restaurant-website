const order_cards = document.getElementById('order-cards');
const cart_icon = document.getElementById('cart-icon');
const cart_container = document.getElementById('cart-container');

cart_icon.addEventListener('click',()=>{
    cart_container.classList.toggle('show');
})

class OrderCards {
    constructor(img,dishName,price) {
        this.img = img;
        this.dishName = dishName;
        this.price = price;
    }
    displayCard(){
        const card_container = document.createElement('div');
        card_container.className = 'col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center';
        const card = document.createElement('div');
        card.className = 'card orders-card';
        const image = document.createElement('img');
        image.src = this.img;
        const card_body = document.createElement('div');
        card_body.className = 'card-body';
        const card_title = document.createElement('h5');
        card_title.className = 'card-title';
        card_title.textContent = this.dishName;
        const card_text = document.createElement('p');
        card_text.className = 'card-text';
        card_text.textContent = `${Number(this.price).toFixed(2)} $`;
        const btn = document.createElement('button');
        btn.className = 'btn add-btn';
        btn.textContent = 'Add';
        btn.addEventListener('click',()=> Cart.addProduct(this));
        card_body.append(card_title,card_text,btn);
        card.append(image,card_body);
        card_container.appendChild(card);
        order_cards.appendChild(card_container);
    }
}

const burgerCard = new OrderCards('../Images/burger ch.jpg','Burger Dish',11.05);
const rice = new OrderCards('https://theulsterfry.com/wp-content/uploads/2015/11/food.jpg','Rice with Chicken',8.00);
const fish = new OrderCards('https://www.whatsoutaddis.com/wp-content/uploads/2022/06/123.jpeg','Fish Dish',12.06);
const pizza = new OrderCards('https://dailygeekshow.com/wp-content/uploads/2023/02/une-pizza-invention-1024x576.jpg','Italien Pizza',8.00);
const pasta = new OrderCards('https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=612x612&w=0&k=20&c=5ro7Cvwx79tWpyN1r2hy3DwplFi5FuPrD_4DYD8tZpg=','Pasta',5.5);
const tacos = new OrderCards('https://www.foodandwine.com/thmb/l24YnwGdm1CGNoSNFPWmHi2hUMo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fideos-secos-tacos-FT-RECIPE0420-1-8b28e1f77d9d47ccabc5def835b19ddd.jpg','Tacos',7.00);
const meat = new OrderCards('https://www.foodandwine.com/thmb/20Fp26wbzSMgOtCdCZy0vpIK8Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/garlic-butter-prime-rib-FT-RECIPE0621-fca73e5fa8e046b0b03982757db51628.jpg','Meat Dishes',15.00)
const chicken = new OrderCards('https://www.foodandwine.com/thmb/EfUCoSTOsihElhemf6pM5B5t-YQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roast-chicken-with-chile-basil-vinaigrette-FT-RECIPE0321-7da10eb123af434c9f350abe24d0d8a8.jpg','Chicken Dish',12.4)
const dishesArray = [burgerCard,rice,fish,pizza,pasta,tacos,meat,chicken]
dishesArray.forEach(dish => dish.displayCard());


class Cart {
   static cartItems = new Map();

   static addProduct(namePro){
     let current = this.cartItems.get(namePro.dishName) || 0;
     this.cartItems.set( namePro.dishName , ++current);
     const productContainer = document.createElement('div');
     productContainer.className ='productContainer';
     let product = document.getElementById(namePro.dishName);
     if(!product){
          product = document.createElement('h3');
          product.id = namePro.dishName;
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.addEventListener('click',(event)=>{
               this.cartItems.delete(namePro.dishName);
               event.target.closest('div').remove();
               console.log(this.cartItems)
            })
         productContainer.append(product,deleteButton)
         cart_container.append(productContainer);
        }
     product.textContent = `${namePro.dishName} ${namePro.price} $ x ${ current}`;
    }
}