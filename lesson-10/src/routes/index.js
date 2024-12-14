import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

import Home from "../pages/Home";
import AppLayout from "../layouts/AppLayout";
import Cards from "../pages/Cards";
import Statistics from "../pages/Statistics";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";
import CardDetails from "../pages/CardDetails";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<AppLayout />}>
			<Route index element={<Home />} />
			<Route path="cards" element={<Cards />} />
			<Route path="cards/:id" element={<CardDetails />} />
			<Route path="statistics" element={<Statistics />} />
			<Route path="about" element={<About />} />
			<Route path="contacts" element={<Contacts />} />

			<Route path="*" element={<NotFound />} />
		</Route>
	)
);
