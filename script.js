function filterProducts(){   
console.log(document.sortBy.filter.value);
event.preventDefault();
}

function comparePrice(a, b) {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
}

function compareName(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function filterProducts(){
  var sort_type = document.sortBy.filter.value;
  if (sort_type === "price") {
    console.log("sort by price");
    products.sort(comparePrice);
  } else if (sort_type === "name") {
    console.log("sort by name");
    products.sort(compareName);
  }
  console.log(products);
 event.preventDefault();
}

var cart =[];
    

function addItem(name) {
  var name_is_already_in_cart = false;
  for (var i = 0; i < cart.length; i++) {
    if (name === cart[i]) {
      name_is_already_in_cart = true;
    }
  }
  if (!name_is_already_in_cart) {
      cart.push(name);
  }
  console.log(cart.length);
  console.log(name);
  console.log(cart);
    updatedCart();
}

function removeItem(name) {
  for (var i = 0; i < cart.length; i++) {
    if (name === cart[i]) {
        cart.splice(i,1);
    }
  }
  console.log(cart.length);
  console.log(name);
  console.log(cart);
    updatedCart();
}

function updatedCart() {
    var items = document.getElementById("simpleCart_quantity");
    items.innerHTML = cart.length;
}

function populateProducts() {
    var itemContainer =
        document.getElementById("item-container"); 
     for (var i = 0; i < products.length; i++) {
         var item = document.createElement("div");
         item.className = "item-container";
         var h3 = document.createElement("h3");
         h3.innerHTML = products[i].name;
         item.appendChild(h3);
         var p = document.createElement("p");
         p.innerHTML = products[i].description;
         item.appendChild(p);
         itemContainer.appendChild(item-container);
     }
}

populateProducts();