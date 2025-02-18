import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import FormPlan from "./Components/FormPlan";
import Output from "./Components/Output";
import RootLayout from "./Components/RootLayout";
import About from "./Components/About";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path="form" element={<FormPlan />} />
				<Route path="result" element={<Output />} />
				<Route path="about" element={<About />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
};

export default App;
