import React from "react";

const RootLayout = () => {
  return (
    <div>
      <Narbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
