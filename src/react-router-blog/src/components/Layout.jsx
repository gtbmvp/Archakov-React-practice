import React from "react";
import { Outlet } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const [appToken, setAppToken] = React.useState(uuidv4()); //generate initial unique value to prevent localStorage token value bruteforce
  console.log(appToken);
  return (
    <>
      <Header context={[appToken, setAppToken]} />
      <div className="content">
        <Outlet context={[appToken, setAppToken]} />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
