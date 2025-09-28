import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
};

export default Layout;
