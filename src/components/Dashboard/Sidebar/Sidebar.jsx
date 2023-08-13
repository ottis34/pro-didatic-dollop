import "./Sidebar.css";

import { BsClipboard2Data } from "react-icons/bs";
import { BsHeartPulse } from "react-icons/bs";
import { ImStack } from "react-icons/im";
import { RiAdminFill } from "react-icons/ri";
import { CgCalculator } from "react-icons/cg";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import orderIcon from "../../../assets/dashboard/orderbook.svg";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const Sidebar = ({ handleWidget }) => {
  const location = useLocation();
  const { user } = useContext(UserContext);

  const links = [
    {
      title: "Board",
      url: "/dashboard",
      icon: (
        <BsClipboard2Data color="black" className="sidebar_icon" size={20} />
      ),
    },
    {
      title: "Order book",
      url: "/orderbook",
      icon: <img src={orderIcon} style={{ width: 30 }} />,
    },
    {
      title: "Market",
      url: "/market",
      icon: <BsHeartPulse color="black" className="sidebar_icon" size={20} />,
    },
    {
      title: "Portfolio",
      url: "/portfolio",
      icon: <ImStack className="sidebar_icon" color="black" size={20} />,
    },
    {
      title: "Calc",
      url: "/calc",
      icon: <CgCalculator className="sidebar_icon" color="black" size={20} />,
    },

    {
      title: "News",
      url: "/news",
      icon: (
        <HiOutlineGlobeEuropeAfrica
          color="black"
          className="sidebar_icon"
          size={20}
        />
      ),
    },
  ];

  const adminLinks = [
    {
      title: "Board",
      url: "/dashboard",
      icon: (
        <BsClipboard2Data color="black" className="sidebar_icon" size={20} />
      ),
    },
    {
      title: "Order book",
      url: "/orderbook",
      icon: <img src={orderIcon} style={{ width: 30 }} />,
    },
    {
      title: "Market",
      url: "/market",
      icon: <BsHeartPulse color="black" className="sidebar_icon" size={20} />,
    },
    {
      title: "Portfolio",
      url: "/portfolio",
      icon: <ImStack className="sidebar_icon" color="black" size={20} />,
    },
    {
      title: "Calc",
      url: "/calc",
      icon: <CgCalculator className="sidebar_icon" color="black" size={20} />,
    },

    {
      title: "News",
      url: "/news",
      icon: (
        <HiOutlineGlobeEuropeAfrica
          color="black"
          className="sidebar_icon"
          size={20}
        />
      ),
    },
    {
      title: "Admin",
      url: "/admin",
      icon: <RiAdminFill className="sidebar_icon" color="black" size={20} />,
    },
  ];

  return (
    <nav className="sidebar__con">
      {user?.admin ? (
        <>
          {adminLinks.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              onClick={handleWidget}
              className={`sidebar__link ${
                location.pathname === link.url
                  ? "side__icon__selected side__icon__con"
                  : "side__icon__con"
              }`}
            >
              {link.icon}
              <div className="side_text desk">{link.title}</div>
            </Link>
          ))}
        </>
      ) : (
        <>
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              onClick={handleWidget}
              className={`sidebar__link ${
                location.pathname === link.url
                  ? "side__icon__selected side__icon__con"
                  : "side__icon__con"
              }`}
            >
              {link.icon}
              <div className="side_text desk">{link.title}</div>
            </Link>
          ))}
        </>
      )}
    </nav>
  );
};

export default Sidebar;
