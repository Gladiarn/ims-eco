import React from "react";
import Sidebar from "./Navigation/Sidebar";
import Navbar from "./Navigation/Navbar";
export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className="min-h-screen flex w-full">
      <div
        className={` fixed left-0 top-0 h-screen max-h-screen ${collapsed ? "w-20" : "w-70"}   transition-all ease-in-out duration-200 z-11 `}
      >
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>
      <div className="flex flex-col w-full">
        <Navbar collapsed={collapsed} />
        <main className={`min-h-screen bg-[#EEEEEE] ${collapsed ? "pl-20" : "pl-70"}`}>{children}</main>
      </div>
    </div>
  );
}
