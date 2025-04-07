import React from "react";

interface LayoutProps {
  sidebar: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ sidebar, main, footer }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Top section: Sidebar + Main */}
      <div className="flex flex-grow">
        {/* Sidebar (30% width) */}
        <aside className="w-1/4 bg-gray-800 text-white p-4">
          {sidebar}
        </aside>

        {/* Main content (70% width) */}
        <main className="flex-grow bg-gray-100 p-4 overflow-auto">{main}</main>
      </div>

      {/* Bottom bar (30% of total height) */}
      <footer className="h-[30vh] bg-blue-600 text-white p-4">
        <h3 className="text-lg font-medium">Bildvorschau</h3>
        {footer}
      </footer>
    </div>
  );
};

export default Layout;
