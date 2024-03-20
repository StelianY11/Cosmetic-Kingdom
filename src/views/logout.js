import * as authService from "../services/auth.js";
import page from "../../node_modules/page/page.mjs";

export function logoutView(){
    authService
    .logout()
    .then(() => {
        page.redirect('/');
    })
    .catch((err) => {
        alert(err.message);
    });
}