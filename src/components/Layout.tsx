import React from "react";
import Navbar from "./Navigation/Navbar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar/>
      <div className={`min-h-screen`}>{children}</div>
    </div>
  );
}
