import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Drawer from "../../component/Drawer";
import "./main.scss";

import React, { useEffect, useState } from "react";

function DefaultLayout({ children }) {
  function handleMoveOnTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  handleMoveOnTop();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    setShowDrawer(windowWidth > 768);
  }, [windowWidth]); // Thêm windowWidth vào danh sách các dependencies

  const [showDrawer, setShowDrawer] = useState(windowWidth > 768);


  const getVisibile = (res) => {
    setShowDrawer(res);
  };

  return (
    <div>
      <Header getVisibile={getVisibile} />
      <div className="content">
        {showDrawer && <Drawer />}
        <div className="main-pages">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;