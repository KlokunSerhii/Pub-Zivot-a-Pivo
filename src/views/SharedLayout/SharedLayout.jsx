import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../../componetns/AppBar";
import Footer from "../../componetns/Footer";
import { Main } from "./SharedLayout.styled";

function SharedLayout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<b>LOAD...</b>}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
      <Footer />
    </>
  );
}

export default SharedLayout;
