// Initialising the WeakMap and WeakSet
let product = new WeakMap();
let cartProducts = new WeakSet();

// Creating a gloal object that holds object with each product id as key and value as an empty object
let obj = {};

function incrementProductViews(productId) {
  // Try catch for error handling
  try {
    // Check if the object has the productId property,
    // if not creeate a new Object with key as productId and push that object to gloal object
    if (!Object.hasOwn(obj, productId)) {
      obj[productId] = new Object();
      product.set(obj[productId], 1);
      console.log("New Product added");
    }
    // If the productId is already present in the global object then get the count from the WeakMap and increment it
    else {
      product.set(obj[productId], product.get(obj[productId]) + 1);
      console.log("Product count incremented");
    }
  } catch (err) {
    console.log(
      `Exception occured in function incrementProductViews with error : ${err}`
    );
  }
}

function addToCart(productId) {
  try {
    // Check if the WeakSet has the object with productId or not, if not add the productId Object to the WeakSet
    if (cartProducts.has(obj[productId])) {
      return "Product already added in the cart";
    } else {
      cartProducts.add(obj[productId]);
      return "Product added to cart successfully";
    }
  } catch (err) {
    console.log(`Exception occured in addToCart function with error : ${err}`);
  }
}

incrementProductViews(123);
incrementProductViews(123);
console.log(addToCart(123));
console.log(addToCart(123));

incrementProductViews(456);
console.log(addToCart(456));
console.log(addToCart(456));
