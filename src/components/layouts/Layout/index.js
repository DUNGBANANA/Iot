import React from "react";

function Layout({ children }) {
  function handleMoveOnTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  handleMoveOnTop();

  return (
    <div>
      <div className="content">
        <div className="pages">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
