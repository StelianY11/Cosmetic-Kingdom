import page from "./../node_modules/page/page.mjs";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import {  getProduct, getProducts } from "./services/poduct.js";
import { createProductsView } from "./views/createProducts.js";
import { deleteView } from "./views/delete.js";
import { editProductsView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { logoutView } from "./views/logout.js";
import { navbarView } from "./views/navbar.js";
import { productsView } from "./views/products.js";
import { productsDetailsView } from "./views/productsDetails.js";
import { registerView } from "./views/register.js";

page(authMiddleware);
page(navbarView);
page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);
page("/products", getProducts ,productsView);
page("/create", getProducts ,createProductsView);
page("/products/:id", getProduct , productsDetailsView);
page("/edit/:id", getProduct , editProductsView);
page("/delete/:id", deleteView);

page.start();