import { productsURL } from "../constants/index.js";
import { getAuthData } from "./auth.js";

import page from "../../node_modules/page/page.mjs";

export function getProducts(ctx, next){
    fetch(productsURL)
    .then( (res) => res.json())
    .then( (data) => {
        ctx.products = data;
        next();
    });
}

export function createProductsHandler(e){
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const imageUrl = formData.get('imageUrl');
    const category = formData.get('category');
    const description = formData.get('description');
    const price = formData.get('price');

    if(!name || !imageUrl || !category || !description || !price){
        return alert("All fields are required!");
    }

    const body = {
        name,
        imageUrl,
        category,
        description,
        price,
    };

    createProduct(body)
        .then(() => {
            page.redirect("/products");
        })
        .catch((err) => {
            alert(err.message);
            console.log(err);
        });
}

function createProduct(body) {
    return fetch(productsURL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": `${getAuthData().accessToken}`
        },
        body: JSON.stringify(body)
    });
}

export function getProduct(ctx, next){
    fetch(`http://localhost:3030/data/products/${ctx.params.id}`)
    .then( (res) => res.json())
    .then( (data) => {
        ctx.product = data;
        next();
    });
}

export function editProductsHandler(e, id){
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const imageUrl = formData.get('imageUrl');
    const category = formData.get('category');
    const description = formData.get('description');
    const price = formData.get('price');

    if(!name || !imageUrl || !category || !description || !price){
        return alert("All fields are required!");
    }

    const body = {
        name,
        imageUrl,
        category,
        description,
        price,
    };

    editProduct(body, id)
        .then(() => {
            page.redirect("/products");
        })
        .catch((err) => {
            alert(err.message);
            console.log(err);
        });
}

export function editProduct(body, id) {
    return fetch(`http://localhost:3030/data/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": `${getAuthData().accessToken}`
        },
        body: JSON.stringify(body)
    });
}

export function deleteProduct(id){
    return fetch(`http://localhost:3030/data/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": `${getAuthData().accessToken}`
        }
    });
}