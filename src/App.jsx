import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Order from "./pages/Order";
import Features from "./pages/Features";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="story" element={<Story />} />
				<Route path="features" element={<Features />} />
				<Route path="order" element={<Order />} />
			</Route>
		</Routes>
	);
}


export default App;
