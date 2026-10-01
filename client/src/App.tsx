import { RouterProvider } from "react-router-dom";
import { router } from "./routes"; // Import your router config

function App() {
  return (
    // This tells the app to "activate" the routing system
    <RouterProvider router={router} />
  );
}

export default App;
