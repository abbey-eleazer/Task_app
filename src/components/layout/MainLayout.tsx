import { Outlet } from "react-router-dom";
// import Sidebar from "../Sidebar"; // Your navigation links
// import TopNavbar from "../TopNavbar"; // Search, Profile, Quick Capture

const MainLayout = () => {
  return (
    <div className="app-container" style={{ display: "flex", height: "100vh" }}>
      {/* <Sidebar /> */}

      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* <TopNavbar /> */}

        <div
          className="content-area"
          style={{ padding: "20px", overflowY: "auto" }}
        >
          {/* This renders the current page (e.g., DashboardPage) */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
