import React, { useContext } from "react";
import { DisplayImageContext } from "../Contexts";

interface LayoutProps {
  sidebar: React.ReactNode;
  main: React.ReactNode;
  bottomBar: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ sidebar, main, bottomBar }) => {

  return (
    <div className="h-screen flex flex-col">
      {/* Top section: Sidebar + Main */}
      <div className="flex flex-grow h-[70%]">
        {/* Sidebar (20% width) */}
        <aside className="w-[20%] bg-gray-800 text-white p-4">{sidebar}</aside>

        {/* Main content (80% width) */}
        <main
          id="main-image-container"
          className="w-[80%] flex-grow overflow-auto"
        >
          {main}
        </main>
      </div>

      {/* Bottom bar (30% of total height) */}
      <div className="bg-gray-600 text-white p-4">{bottomBar}</div>
    </div>
  );
};

export default Layout;
