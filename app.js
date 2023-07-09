let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);
let addToCartBtns = document.querySelectorAll(".btn-product-cart");
console.log(addToCartBtns);

addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
    return productsCountEl.textContent;
  })
);

let likedProdacts = document.querySelectorAll(".like");
// My solution (bug in hover after cenceling like)
likedProdacts.forEach((item) =>
  item.addEventListener("click", function () {
    //     if (item.style.backgroundColor == "") {
    //       item.style.backgroundImage = "url('images/icon-7.png')";
    //       item.style.backgroundColor = "#2c71b7";
    //     } else {
    //       item.style.backgroundImage = "url('images/icon-5.png')";
    //       item.style.backgroundColor = "";
    //     }
    //   })
    // );
    // Teacher solution
    // V1
    // if (item.classList.contains("liked")) {
    //   item.classList.remove("liked");
    // } else {
    //   item.classList.add("liked");
    // }
    // V2
    item.classList.toggle("liked");
  })
);
// My solution hide/show
let btnDetails = document.querySelectorAll(".btn-details");

let modal = document.querySelector(".modal");

let btnClose = document.querySelector(".btn-close");

btnDetails.forEach((btn) =>
  btn.addEventListener("click", function () {
    modal.classList.remove("hide"); // delete class
    modal.classList.add("show"); // add class
  })
);
function closeModal() {
  modal.classList.remove("show"); // delete class
  modal.classList.add("hide"); // add class
}
btnClose.addEventListener("click", closeModal);
// Teacher solution hide/show main = my
// V extra
// for (let i = 0; i < btnDetails.length; i++) {
//   btnDetails[i].addEventListener("click", function ({

//   }))
// };
modal.addEventListener("click", function (e) {
  // console.log(e.target); // cons element
  // e.preventDefault();
  if (e.target === modal) {
    closeModal();
  }
});

// slider slick

$(".slider").slick({
  dots: true,
});
