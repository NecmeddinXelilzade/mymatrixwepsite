import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/home";
import Layout from "../Layout/Layout";
import Footer from "../Footer/Footer";
import Help from "../Help/Help";
import Blog from "../Blogs/Blogs";
import About from "../About/About";
import { DataProvider } from "../../Context/GlobalContext";
import Shop from "../Shop/Shop";
import { CartProvider } from "react-use-cart";
import Cart from "../Cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wishlist from "../Wishlist/Wishlist";
import { WishlistProvider } from "react-use-wishlist";
import { useContext,useEffect  } from "react";
import { GlobalTheme } from "../../Context/Themecontext";
import ProductDetails from "../ProductDetails/ProductDetails";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Dasboard from "../Dasboard/Dasboard";
import AddBlog from "../AddBlogs/AddBlog";
import { useSelector } from "react-redux";
import EditBlog from "../EditBlogs/EditBlogs";
import Btn from "../Btn/Btn";

const Router = () => {

  const{darkMode} = useContext(GlobalTheme)
  
  const blogs = useSelector((state) => state.BlogReducer);

  useEffect(() => {
    localStorage.setItem("Blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <>
      <main className={darkMode ? 'dark' : 'light'}>
        <WishlistProvider>
          <CartProvider>
            <DataProvider>
              <BrowserRouter>
                <ToastContainer
                  position="top-right"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={true}
                  rtl={false}
                  pauseOnFocusLoss={false}
                  draggable
                  pauseOnHover
                  theme="light"
                />
                <Layout />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="help" element={<Help />} />
                  <Route path="blogs" element={<Blog />} />
                  <Route path="addBlog" element={<AddBlog/>} />
                  <Route path="editBlog/:id" element={<EditBlog/>} />
                  <Route path="about" element={<About />} />
                  <Route path="shop" element={<Shop />} />
                  <Route path="card" element={<Cart />} />
                  <Route path="wishlist" element={<Wishlist />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="dasboard" element={<Dasboard />} />
                </Routes>
                <Footer />
                <Btn/>
              </BrowserRouter>
            </DataProvider>
          </CartProvider>
        </WishlistProvider>
      </main>
    </>
  );
};

export default Router;
