import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
export default function AppRouter () {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/product/:query" component={ProductPage}/>
            <Route path="/productDetail/:productId" component={ProductDetailPage}/>
            <Route path="*" component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
    )
}