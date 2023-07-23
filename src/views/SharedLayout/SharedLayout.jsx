import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../../componetns/AppBar/AppBar";
import Footer from "../../componetns/Footer/Footer";
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
