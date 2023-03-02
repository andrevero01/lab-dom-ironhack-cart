// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;

  const subTotalValue = priceValue * quantityValue;
  const subtotal = product.querySelector(".subtotal span");

  subtotal.innerText = subTotalValue;
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName("product");
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    const subtotalSum = updateSubtotal(products[i]);
    totalPrice += Number(subtotalSum.innerText);
  }
  // ITERATION 3
  const total = document.querySelector("#total-value span");
  total.innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  const child = target.closest(".product");
  const parent = child.parentNode;
  parent.removeChild(child);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelector(".create-product input");
  const newProductName = newProduct.value;
  console.log(newProductName);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const clearBtns = document.querySelectorAll(".btn-remove");
  for (let i = 0; i < clearBtns.length; i++) {
    clearBtns[i].addEventListener("click", removeProduct);
  }

  const addProduct = document.getElementById("create");
  addProduct.addEventListener("click", createProduct);
});
