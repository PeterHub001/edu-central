import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import CreateGroup from "./CreateGroup";
import MemberDashboard from "./MemberDashboard"; // The new component after group creation
import LoginScreen from "./LoginScreen";
import UserLandingPage from "./UserLandingPage";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
    </SidebarProvider>
  );
};

// Extracted main content logic to keep things cleaner
const MainContent = () => {
  const { sidebarState, setSidebarState } = useSidebar();

  return (
    <div className="flex-grow">
      <Outlet />
      {sidebarState === "default" || sidebarState === "" ? (
        <LoginScreen Onclick={() => setSidebarState("user")} />
      ) : (
        <UserLandingPage />
      )}
      {/* Show CreateGroup until step 3 is complete, then switch to NewComponent */}
      {sidebarState === "default" || sidebarState === "creatingGroup" ? (
        <CreateGroup onFinish={() => setSidebarState("groupCreated")} />
      ) : (
        <MemberDashboard />
      )}
    </div>
  );
};

export default DashboardLayout;
