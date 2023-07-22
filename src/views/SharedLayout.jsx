import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../componetns/AppBar/AppBar";
import Footer from "../componetns/Footer/Footer";

function SharedLayout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<b>LOAD...</b>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default SharedLayout;
