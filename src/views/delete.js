import { deleteProduct } from "../services/poduct.js";
import page from "./../../node_modules/page/page.mjs";

export function deleteView(ctx) {
    deleteProduct(ctx.params.id)
        .then(() => {
            page.redirect("/products");
        })
        .catch((err) => {
            alert(err.message);
            console.log(err);
        });
}