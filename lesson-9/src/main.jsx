import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.js";

createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);