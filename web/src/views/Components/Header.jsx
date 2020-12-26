import React, { useEffect, useState } from "react";
import { Avatar } from "@fluentui/react-northstar";
import { signout, getCookie, isAuth } from "../../controllers/localStorage";
import { toast } from "react-toastify";
import axios from "axios";

const Header = ({ history, flag }) => {
  const [avatarUrl, setAvatar] = useState(null);

  useEffect(() => {
    getAvatar();
    // eslint-disable-next-line
  }, []);

  const getAvatar = () => {
    const token = getCookie("token");
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${isAuth()._id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setAvatar(res.data.user.avatar);
      })
      .catch((err) => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
      });
  };

  return (
    <div
      style={{
        height: 75,
        background: "#FFFFFF",
        padding: "20px",
        paddingLeft: 350,
        paddingRight: 350,
        flexDirection: "row",
        alignItems: "center",
        display: "flex",
      }}
    >
      <h1 style={{ flex: 10, fontSize: 30 }}>December</h1>
      <button
        style={{ flex: 0.5, marginRight: 16 }}
        onClick={() => {
          if(flag){
            window.location.reload();
          }
          else{
            history.goBack();
          }
         }}
      >
        <i class="fas fa-home fa-2x"></i>
      </button>
      <button
        style={{ marginRight: 16 }}
        onClick={() => {
          history.push("/profile");
        }}
      >
      <Avatar image={avatarUrl} />
      </button>
      <button
        style={{ flex: 0.5, marginRight: 16 }}
        onClick={() => {
          signout(() => {
            toast.error("Signout Successfully");
            history.push("/login");
          });
        }}
      >
        <i class="fas fa-sign-out-alt fa-2x"></i>
      </button>
    </div>
  );
};

export default Header;
