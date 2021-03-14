import React from "react";
import "./Nav.css";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

function Navbar() {
  const handleMenu = () => {};
  return (
    <div className="nav">
      <div className="left__nav">
        <div className="items">
          <span>Logo</span>
        </div>

        <div className="items">
          <Avatar
            alt="Travis Howard"
            src="https://i.pinimg.com/originals/e1/1f/06/e11f0644f5cac8de0c875cf246dc35dc.jpg"
          />
        </div>
      </div>
      <div className="right__nav">
        <IconButton onClick={handleMenu}>
          <div className="items">
            <AcUnitIcon color="primary" />
          </div>
        </IconButton>
        <div className="items">
          <AccountBalanceIcon color="secondary" />
        </div>
        <div className="items">
          <AcUnitIcon color="primary" />
        </div>
        <div className="items">
          <AccountBalanceIcon color="secondary" />
        </div>
        <div className="items">
          <AcUnitIcon color="primary" />
        </div>
        <div className="items">
          <AccountBalanceIcon color="secondary" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
