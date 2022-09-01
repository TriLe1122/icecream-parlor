const iceCreams = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  quantity: 0
}]

const vessels = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Choclate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0
}]





function addFlavorsToCart(name) {
  let vanillaStrawBerryOrCookieDough = iceCreams.find(flavor => flavor.name == name)
  vanillaStrawBerryOrCookieDough.quantity++
  console.log("did it click", vanillaStrawBerryOrCookieDough);
  drawCart()

}


function addVesselsToCart(name) {
  let vessel = vessels.find(vessel => vessel.name == name)
  vessel.quantity++
  console.log('vessel quantity', vessels);
  drawCart()
}

function addToppingsToCart(name) {
  let topping = toppings.find(topping => topping.name == name)
  topping.quantity++
  console.log('vessel quantity', vessels);
  drawCart()
}


//grabs the information to paste into html through the addflavorstocart(name)function
// accessing the array and checking if the quantity is ABOVE 0 if so, display it
function drawCart() {
  let cart_DivInTheHTML = document.getElementById('cart')
  let template = ''
  iceCreams.forEach(iceCream => {
    if (iceCream.quantity > 0) {
      template += `
        <div class=" d-flex bg-dark text-light">
    <p class="col-4">${iceCream.name}</p>
    <p class="col-4">x${iceCream.quantity}</p>
    <p class="col-4">$${iceCream.price}</p>
    </div>
      `
    }
  })
  vessels.forEach(vessel => {
    if (vessel.quantity > 0) {
      template += `
        <div class=" d-flex bg-dark text-light">
    <p class="col-4">${vessel.name}</p>
    <p class="col-4">x${vessel.quantity}</p>
    <p class="col-4">$${vessel.price}</p>
    </div>
      `
    }
  })
  toppings.forEach(topping => {
    if (topping.quantity > 0) {
      template += `
        <div class=" d-flex bg-dark text-light">
    <p class="col-4">${topping.name}</p>
    <p class="col-4">x${topping.quantity}</p>
    <p class="col-4">$${topping.price}</p>
    </div>
      `
    }
  })
  cart_DivInTheHTML.innerHTML = template
  drawTotal()
}

function drawTotal() {
  let total_Div = document.getElementById('total')
  let total = 0
  iceCreams.forEach(flavor => {
    total += flavor.quantity * flavor.price
  })
  vessels.forEach(vessel => {
    total += vessel.quantity * vessel.price
  })
  toppings.forEach(topping => {
    total += topping.quantity * topping.price
  })

  total_Div.innerText = total.toFixed(2)
}
function checkOut() {
  iceCreams.forEach(iceCream => {
    iceCream.quantity = 0
  })
  vessels.forEach(vessel => {
    vessel.quantity = 0
  })
  toppings.forEach(topping => {
    topping.quantity = 0
  })
  drawCart()
}
