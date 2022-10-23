import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './content/header';
import ProdcutDetail from "./content/prodcutDetail";
import ProductCompent from "./content/productCompent";
import ProductList from "./content/productList";
import NotFound from "./content/error";

function App() {
  return (
    <div className="">
      {/* <Header /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element=<ProductList /> />
          <Route path="/product/:productId" exact element=<ProdcutDetail /> />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
