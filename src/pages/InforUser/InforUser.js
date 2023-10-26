import React from "react";
import Header from "../../components/component/Header";
import "./main.scss";

export default function InforUser() {
  return (
    <div>
      <Header />

      <div className="profile-banner">
        <img
          src="https://fullstack.edu.vn/static/media/cover-profile.3fb9fed576da4b28386a.png"
          alt=""
        />
      </div>

      <div className="profile_user">
          <div className="profile_user_avatar">
            <img
              src="https://files.fullstack.edu.vn/f8-prod/user_photos/183762/6234aec8de170.jpg"
              alt=""
            />
          </div>
          <div className="profile_user_name">
            <h5 className="style_user_name">Nguyễn Công Dũng</h5>
          </div>
        </div>
    </div>
  );
}
