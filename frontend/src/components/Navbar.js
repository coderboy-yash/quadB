import React from "react";
import DropdownMenu from "./DropdownMenu";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-element">
        <h1>HODLINFO</h1>
      </div>
      <div className="nav-element">
        <div>
          <DropdownMenu name={"INR"} items={["INR"]} />
        </div>
        <div>
          <DropdownMenu
            name={"BTC"}
            items={[
              "BTC",
              "ETH",
              "USDT",
              "XRP",
              "TRX",
              "DASH",
              "ZEC",
              "XEM",
              "IOST",
              "WIN",
              "BTT",
              "WRX",
            ]}
          />
        </div>
        <div>
          <button type="button" className="btn btn-secondary">
            BUY BTC
          </button>
        </div>
      </div>
      <div className="nav-element">
      <button type="button" className=" telegram btn btn-success">Connect Telegram</button>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            checked
          />
        </div>
      </div>
    </div>
  );
}
