import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../componetns/AppBar";

function SharedLayout() {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={<b>LOAD...</b>}
      >
        <Outlet />
      </Suspense>
    </>
  );
}

export default SharedLayout;
