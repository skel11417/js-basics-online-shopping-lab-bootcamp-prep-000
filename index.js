var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randPrice = Math.floor(Math.random() * 10) + 1
  var itemObject = {itemName: item, itemPrice: randPrice}
  cart.push(itemObject)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var outputString = "In your cart, you have "
  if (cart.length < 1) {
    return 'Your shopping cart is empty.'
  } else {
    for (var i = 0; i < cart.length; i++) {
      outputString = outputString + `${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`
    }
    return outputString + '.'
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
