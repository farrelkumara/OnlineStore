import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Logout from "./components/Logout";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/product/:productId">
              <ProductDetail />
            </Route>
          </Switch>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
