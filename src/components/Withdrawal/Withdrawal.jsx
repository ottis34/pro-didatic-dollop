import "./Withdrawal.css";
import { TfiClose } from "react-icons/tfi";
import fueldispenser from "../../assets/fueldispenser.svg";
import { useState } from "react";
import NoWithdrawal from "./credit/NoWithdrawal";

const Withdrawal = ({ setR1, setNw }) => {
  const [cr, setCR] = useState(false);
  const [amount, setAmount] = useState(0)
  const [noWith, setNoWith] = useState(false)


  return (
    <>
    <div className="withdrawal_con">
      <div className="withdraw_card">
        <div className="header">
          <div className="header_text">Ask a withdraw</div>
          <TfiClose className="close_btn" onClick={() => setR1(false)} />
        </div>

        <div className="withdraw_section">
          <input type="number" placeholder="$ 0" 
          onChange={(e) => { setAmount(e.target.value);
                            setCR(true)}}/>
          <img src={fueldispenser} alt="" />

        {amount ? 
          <div className=" withdraw_section_btn" onClick={() => {setNoWith(true)}}>
           Withdraw
          </div> :   <div className="withdraw_section_text">
            you don't have any filled balance yet
          </div> }
        </div>
      </div>
    </div>

    {noWith && (
      <NoWithdrawal setR1={setR1}/>
    )}
    </>
  );
};

export default Withdrawal;
