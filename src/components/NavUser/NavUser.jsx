import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./NavUser.css";
import logo from "../../assets/logo.png";
import Profile from "../../pages/Profile/Profile";
import Balance from "../AddFunds/balance/Balance";
import Withdrawal from "../Withdrawal/Withdrawal";
import { UserContext } from "../../context/UserContext";
import { useCookies } from "react-cookie";
import NoWithdrawal from "../Withdrawal/credit/NoWithdrawal";

const NavUser = ({
  a1,
  setA1,
  pop,
  openPop,
  closePop,
  n1,
  setN1,
  r1,
  c1,
  setR1,
  setC1,
  setNw,
  nW
}) => {
  const { user } = useContext(UserContext);
  const [cookies, setCookie] = useCookies(["user"]);

  const handleA1 = () => {
    setA1(true);
  };

  return (
    <nav className="navUser__con">
      <div className="navUser_left" onClick={closePop}>
        <Link className="navUser_logo" to={"/dashboard"}>
          <img src={logo} alt="" />
          {/* <h1>PENTAXX</h1> */}
        </Link>

        <div>
          <img width={30} color="white" />
        </div>
      </div>

      <div className="navUser_right">
        <div
          className="navUser_balance"
          onClick={() => {
            setA1(!a1);
            setN1(false);
          }}
        >
          <div className="pointer">REAL ACCOUNT</div>
          <div className="balance_money pointer">
            ${user?.amount == 0 ? <>{user?.amount}.00</> : <>{user?.amount}.00</>}
            <span>
              <MdOutlineArrowDropDown size={15} />
            </span>
          </div>
          <div style={{ opacity: "0.5" }}>Estimate Balance</div>
        </div>

        <CiBellOn
          onClick={() => {
            setN1(!n1);
            setA1(false);
          }}
          style={{ cursor: "pointer" }}
          size={30}
        />

        <div
          className="navUser_profile"
          onClick={() => {
            openPop();
            setA1(false);
          }}
        >
          <p>{cookies.userData?.fullName[0]}</p>
        </div>

        {pop && <Profile />}
      </div>

      {a1 && (
        <div className="account_list">
          <div className="all_balance">
            <h3>real account</h3>
            <ul>
              <li>
                eth<div className="thin_line"></div>0.00000 ETH
              </li>
              <li>
                btc<div className="thin_line"></div>0.00000 BTC
              </li>
              <li>
                vite<div className="thin_line"></div>0.00000 VITE
              </li>
              <li>
                lazio<div className="thin_line"></div> 0.00000 LAZIO
              </li>
              <li>
                santos<div className="thin_line"></div>0.00000 SANTOS
              </li>
              <li>
                alpine<div className="thin_line"></div>0.00000 ALPINE
              </li>
              <li>
                porto<div className="thin_line"></div>0.00000 PORTO
              </li>
              <li>
                ren<div className="thin_line"></div>0.00000 REN
              </li>
              <li>
                celr<div className="thin_line"></div>0.00000 CELR
              </li>
              <li>
                skl<div className="thin_line"></div>0.00000 SKL
              </li>
              <li>
                waxp<div className="thin_line"></div>0.00000 WAXP
              </li>
              <li>
                tfuel<div className="thin_line"></div>0.00000 TFUEL
              </li>
            </ul>
            <div>see all balances</div>
          </div>

          <div className="list_con">
            <div className="list_acc">
              <div>list accounts</div>

              <input type="button" value="HISTORY" />
            </div>

            <div className="list_bottom">
              <div className="list_acc_bal">
                <svg xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.189-17.98c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"
                  ></path>
                </svg>

                <div className="fig_acc">
                  <div className="fig_text">real account</div>

                  <div className="fig_text">${user?.amount == 0 ? <>{user?.amount}.00</> : <>{user?.amount}</>}</div>

                  <div className="fig_estim">estimate balance</div>
                </div>

                <div className="wc_btn">
                  <input
                    type="button"
                    onClick={() => setR1(true)}
                    className="btn_withdraw"
                    value="Withdraw"
                  />
                  <input
                    type="button"
                    onClick={() => setC1(true)}
                    className="btn_credit"
                    value="Credit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {n1 && (
        <div className="notifi_con">
          <div className="notifi_card">
            <div className="no_notifi">No Notification</div>
          </div>
        </div>
      )}

      {r1 && <Withdrawal setR1={setR1} setNw={setNw}/>}
      {c1 && <Balance setC1={setC1} />}
      {nW && <NoWithdrawal setNw={setNw} />}
    </nav>
  );
};

export default NavUser;
