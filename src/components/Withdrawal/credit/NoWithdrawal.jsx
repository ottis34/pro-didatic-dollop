import { TfiClose } from "react-icons/tfi";
import { useState } from "react";

const NoWithdrawal = ({ setR1 }) => {
 

  return (
    <div className="withdrawal_con">
      <div className="withdraw_card">
        <div className="header">
          <div className="header_text">Ask a withdraw</div>
          <TfiClose className="close_btn" onClick={() => setR1(false)} />
        </div>

        <div className="withdraw_section">
          <div className="withdraw_section_text">
            You need to have an account for at least 7days to make a withdrawal
          </div> 
        </div>
      </div>
    </div>
  );
};

export default NoWithdrawal;
