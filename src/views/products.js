import { render, html } from "./../../node_modules/lit-html/lit-html.js";

const main = document.querySelector("main");

function productTemplate(product) {
    return html `
    <div class="product">
        <img src=${product.imageUrl} alt="example1" />
        <p class="title">
         ${product.name}
        </p>
        <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
        <a class="details-btn" href=${`/products/${product._id}`}>Details</a>
    </div>
    `
}
    
function productsSectionTemplate(products) {
    return html `
    <section id="dashboard">
    ${products.map((p) => productTemplate(p))};
    </section>
    `
}

function productsTemplate(products) {
    return html`
    <h2>Products</h2>
        ${products && products.length > 0 
            ? productsSectionTemplate(products) 
            : html `<h2>No products yet.</h2>`}
    `;
}

export function productsView(ctx) {
    render(productsTemplate(ctx.products), main);
}