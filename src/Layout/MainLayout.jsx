import React from "react";

import Footer from "./Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header/Header";
import Loading from "../Components/Loding/Loading";

export default function MainLayout() {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      {navigation.state === "loading" ? <Loading /> : <Outlet />}
      <Footer />
    </div>
  );
}
