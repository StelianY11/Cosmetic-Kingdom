import { getAuthData } from "../services/auth.js";
import { render, html } from "./../../node_modules/lit-html/lit-html.js";

import page from "../../node_modules/page/page.mjs";

const main = document.querySelector("main");

function productsDetailsTemplate(product) {
    return html`
      <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${product.imageUrl} alt="example1" />
        <p id="details-title">${product.name}</p>
        <p id="details-category">
          Category: <span id="categories">${product.category}</span>
        </p>
        <p id="details-price">
          Price: <span id="price-number">${product.price}</span>$</p>
        <div id="info-wrapper">
          <div id="details-description">
            <h4>Bought: <span id="buys">0</span> times.</h4>
            <span
              >${product.description}</span
            >
          </div>
        </div>

        <!--Edit and Delete are only for creator-->
        ${product._ownerId === getAuthData()._id && html`
        <div id="action-buttons">
          <a href=${`/edit/${product._id}`} id="edit-btn">Edit</a>
          <a href="" id="delete-btn" @click=${(e) => onDelete(e, product._id)}>Delete</a>
          <!--Bonus - Only for logged-in users ( not authors )-->
          <a href="" id="buy-btn">Buy</a>
        </div>
        
        `}
    </section>
    `;
}

function onDelete(e, id) {
  e.preventDefault();
  if(confirm("Are you sure you want to delete this product?")){
    page.redirect("/delete/" + id);
  } 
}

export function productsDetailsView(ctx) {
    render(productsDetailsTemplate(ctx.product), main);
}