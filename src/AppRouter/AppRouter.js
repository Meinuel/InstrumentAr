import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage"

export default function AppRouter () {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/product/:brandTitle" component={ProductPage}/>
            <Route path="/productDetail/:productId/:brandTitle" component={ProductDetailPage}/>
            <Route path="/cart" component={CartPage}/>
            <Route path="*" component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
    )
}