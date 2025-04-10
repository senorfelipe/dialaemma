import React from "react";

interface LayoutProps {
  sidebar: React.ReactNode;
  main: React.ReactNode;
  slider: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ sidebar, main, slider }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Top section: Sidebar + Main */}
      <div className="flex flex-grow">
        {/* Sidebar (20% width) */}
        <aside className="w-[20%] bg-gray-800 text-white p-4">{sidebar}</aside>

        {/* Main content (80% width) */}
        <main className="flex-grow bg-gray-100 p-4 overflow-auto">{main}</main>
      </div>

      {/* Bottom bar (30% of total height) */}
      <div className="h-[30%] bg-gray-600 text-white p-4">
        {slider}
      </div>
    </div>
  );
};

export default Layout;
