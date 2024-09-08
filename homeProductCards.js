import { homeQuantityToggle } from "./homeQuantityToggle.js";
import { addToCart } from "./addToCart.js";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
    if(!products){
        return false;
    }
    products.forEach((curProd) => {
        const { brand, category, description, id, image, name, price, stock } = curProd;
    
        const productClone = document.importNode(productTemplate.content, true);


        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        //counter++;
        // const cardElement = productClone.querySelector("#cardValue");

        // // Correct way: Use backticks to ensure `id` is treated as a variable
        // if (cardElement) {
        //     cardElement.setAttribute("id", `card${id}`); // Now this sets IDs like card1, card2, etc.
        // }

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent = `₹${price}`;
        productClone.querySelector(".productActualPrice").textContent = `₹${price*2}`;

        productClone
        .querySelector(".stockElement")
        .addEventListener("click", (event) => {
            homeQuantityToggle(event, id, stock);
        });//callback function

        productClone
        .querySelector(".add-to-cart-button")
        .addEventListener("click", (event) => {
            addToCart(event, id, stock);
        });

        productContainer.append(productClone);
    });
};