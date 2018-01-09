var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1;
 cart.push({ [item]: price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length > 0) {
    var cartContents = [];
    for (let i = 0; i < cart.length; i++) {
      cartContents.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
    }
    if (cart.length == 1) {
      console.log(`In your cart, you have${cartContents[0]}.`); 
    } else if (cart.length == 2) {
      console.log(`In your cart, you have${cartContents[0]} and${cartContents[1]}.`); 
    } else if (cart.length > 2) {
      var allButLast = [];
      for (let i = 0; i < cart.length - 1; i++) {
        allButLast.push(cartContents[i]);
      }
      var allButLastString = allButLast.join();
      console.log(`In your cart, you have${allButLastString}, and${cartContents[cart.length - 1]}.`);
    }
  } else {
    console.log('Your shopping cart is empty.');
  }
  
}

function total() {
  var totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i][Object.keys(cart[i])];
  }
  return totalPrice
}

function removeFromCart(item) {
  var inCart = true;
  for (let i = 0; i < cart.length, i++) {
    if(cart[i])
  }
}

function placeOrder(cardNumber) {
  // write your code here
}

//cart = [{ apples: 6 }, { cereal: 4 }, { bread: 1 }, { quinoa: 5 }];
//viewCart();
