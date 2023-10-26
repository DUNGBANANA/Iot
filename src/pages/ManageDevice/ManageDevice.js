import React, { useState } from "react";

import "./main.scss";
import NewDevice from "../../components/component/NewDevice";
import TableDevice from "../../components/component/TableDevice";

export default function ManageDevice() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="content-layout">
      <section className="layout">
        <div className="layout-content">

          {/* Header */}
          <div className="layout-content-header">
            <h3 className="search-dash-name">My Devices</h3>
            <button className="button-new-device" onClick={handleShow}>
              <span style={{ fontSize: 17 }}>+ New Device</span>
            </button>
          </div>

          {/* Modal-new-device */}
          <NewDevice show={show} handleClose={handleClose} />

          {/* Infor-Device */}
          <div className="search-filter-dash-header">
            <h6 className="search-filter-dash-header-count">1 Device</h6>
            <TableDevice/>
          </div>

         
        </div>
      </section>
    </div>
  );
}
