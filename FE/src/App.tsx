import { Route, Routes } from "react-router-dom";
import LayoutClient from "@/client/LayoutClient";
import Home from "@/client/pages/home";
import Blog from "./client/pages/Blog";
import BlogDetail from "./client/pages/BlogDetail";
import Login from "./client/pages/login";
import Register from "./client/pages/register";
import Checkout from "./client/pages/Checkout";
import MainPage from "./admin/pages/MainPage";
import CategoriesPage from "./admin/pages/Categories/CategoriesPage";
import ProductsPage from "./admin/pages/Products/ProductsPage";
import EditProductsPage from "./admin/pages/Products/EditProductsPage";
import UsersPage from "./admin/pages/Users/UsersPage";
import EditUsersPage from "./admin/pages/Users/EditCategoryPage";
import OrdersPage from "./admin/pages/Orders/OrdersPage";
import MyTest from "./admin/pages/MyTest";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<LayoutClient />}>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog_detail" element={<BlogDetail />} />
					
			</Route>
			<Route path="/checkout" element={<Checkout />} />
			
			<Route path="/admin/categories" element={<CategoriesPage/>}/>
			<Route path="/admin" element={<MainPage/>}/>
			<Route path="/admin/categories/:id/edit" element={<CategoriesPage/>}/>
			<Route path="/admin/products" element={<ProductsPage/>}/>
			<Route path="/admin/products/:id/edit" element={<EditProductsPage/>}/>
			<Route path="/admin/users" element={<UsersPage/>}/>
			<Route path='/admin/users/edit/:id' element={<EditUsersPage/>} />
            <Route path='/admin/orders' element={<OrdersPage/>} />
			
		</Routes>
	);
}
