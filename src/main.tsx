import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import "./index.scss";

import Home from "./pages/home"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);
