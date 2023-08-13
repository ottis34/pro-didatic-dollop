import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dash, setDash] = useState(null);
  const [token, setToken] = useState(null);
  const [cookies, setCookie] = useCookies(["user"]);
  const [widName, setWidName] = useState("market");
  const [userData, setUserData] = useState(null);
  const [coins, setCoins] = useState(null);
  const [loader, setLoader] = useState(true);
  const [allUsers, setAllUsers] = useState(null);

  const getUser = async () => {
    await axios
      .get("https://pro-duplitrade-backend.onrender.com/pent/user/getUser", {
        headers: {
          Authorization: `Bearer ${cookies.userToken}`,
        },
      })
      .then(function (response) {
        setUser(response.data);
        console.log("working");
      })
      .catch((err) => {
        const cookies = new Cookies();
        cookies.remove("userData");
        cookies.remove("userToken");
        window.location.href = "/signin";
        console.log(err);
      });
  };

  const getDashboard = async () => {
    await axios
      .get("https://pro-duplitrade-backend.onrender.com/pent/user/getData", {
        headers: {
          Authorization: `Bearer ${cookies.userToken}`,
        },
      })
      .then(function (response) {
        setDash(response.data);
        console.log(response.data);
        console.log("working");
      })
      .catch((err) => {
        const cookies = new Cookies();
        cookies.remove("userData");
        cookies.remove("userToken");
        window.location.href = "/signin";
        console.log(err);
      });
  };

  const getData = async () => {
    setLoader(true);
    await axios
      .get("https://pro-duplitrade-backend.onrender.com/pent/data/coins", {
        headers: {
          Authorization: `Bearer ${cookies.userToken}`,
        },
      })
      .then((res) => {
        setCoins(res.data.data);
        console.log(res.data.data);
        console.log("working");
        setLoader(false);
      })
      .catch((err) => {
        setLoader(true);
        const cookies = new Cookies();
        cookies.remove("userData");
        cookies.remove("userToken");
        window.location.href = "/signin";
        console.log(err);
      });
  };

  const getAllUser = async () => {
    setLoader(true);
    await axios
      .get(
        "https://pro-duplitrade-backend.onrender.com/pent/admin/getAllUser",
        {
          headers: {
            Authorization: `Bearer ${cookies.userToken}`,
          },
        }
      )
      .then((res) => {
        setAllUsers(res.data);
        console.log(res.data);
        console.log("all users");
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        const cookies = new Cookies();
        cookies.remove("userData");
        cookies.remove("userToken");
        window.location.href = "/signin";
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        setToken,
        setUser,
        getUser,
        getDashboard,
        dash,
        setDash,
        widName,
        setWidName,
        getData,
        coins,
        loader,
        setLoader,
        getAllUser,
        allUsers,

        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
