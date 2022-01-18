import React, { useRef } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserFriends,
  faBriefcase,
  faComments,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as SearchIcon } from "../svg/search-icon.svg";
import { ReactComponent as NavSearchIcon } from "../svg/nav-search-icon.svg";
import { ReactComponent as ProfileDropDownButton } from "../svg/sort-by-dropdown.svg";
import { useDetectOutsideClick } from "./useDetectoutsideClick";

function NavBar() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="navbar-main-section">
      <div className="main_container">
        <div className="container">
          <div className="header-container">
            <div className="header-part">
              <div className="header-left-section">
                <img src={require("../images/linkedin-logo.png")} alt="" />
                <div className="header-search-input">
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-box-text"
                  />
                </div>
              </div>
              <div className="header-right-section">
                <div className="menu_search mR25">
                  <a href="/home" className="a-header-decoration"></a>
                  <NavSearchIcon style={{ height: "30px" }} />
                </div>
                <div className="home mR25 effects">
                  <a href="/home" className="a-header-decoration">
                    <FontAwesomeIcon icon={faHome} className="icons" />
                    <p className="nav-barP t-12 nav-span-color mT5">Home</p>
                  </a>
                </div>
                <div className="network mR25 effects">
                  <a href="/home" className="a-header-decoration">
                    <FontAwesomeIcon icon={faUserFriends} className="icons" />
                    <p className="nav-barP nav-span-color t-12 mT5">
                      My Network
                    </p>
                  </a>
                </div>
                <div className="jobs mR25 effects">
                  <a href="/home" className="a-header-decoration">
                    <FontAwesomeIcon icon={faBriefcase} className="icons" />
                    <p className="nav-barP nav-span-color t-12 mT5">Jobs</p>
                  </a>
                </div>
                <div className="messaging mR25 effects">
                  <a href="/home" className="a-header-decoration">
                    <FontAwesomeIcon icon={faComments} className="icons" />
                    <p className="nav-barP nav-span-color t-12 mT5">
                      Messaging
                    </p>
                  </a>
                </div>
                <div className="notification mR25 effects">
                  <a href="/home" className="a-header-decoration">
                    <FontAwesomeIcon icon={faBell} className="icons" />
                    <p className="nav-barP nav-span-color t-12 mT5">
                      Notifications
                    </p>
                  </a>
                </div>
                <div className="dropdown mR25">
                  <button className="profile-button" onClick={onClick}>
                    <img
                      src={require("../images/profile-pic.jpg")}
                      height="24"
                      width="24"
                      alt=""
                    />
                    <span className="profile-span">
                      <p className="profile-span-p">Me</p>
                      <ProfileDropDownButton />
                    </span>
                  </button>
                  <nav
                    ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                  >
                    <div className="profile-dropdown-section">
                      <div className="view-details">
                        <div className="user-data">
                          <div className="user-data-profile-pic">
                            <img src={require("../images/profile-pic.jpg")} alt="" />
                          </div>
                          <div className="profile-drop-info">
                            <a href="/home" className="hello">
                              <h4 className="margin-zero t-16 t-bold t-black">
                                Muhammad Ibn Saeed
                              </h4>
                              <p className="margin-zero t-14 t-black">
                                Data Research Analyst at
                                <br /> Green Meadow Games
                              </p>
                            </a>
                          </div>
                        </div>
                        <button className="view-profile-class-button t-14">
                          View Profile
                        </button>
                      </div>

                      <div className="profile-details-account-section">
                        <div className="display-flex">
                          <p className="t-16 t-bold t-black margin-bottom">
                            Accounts
                          </p>
                          <a href="/home">Settings & Privacy</a>
                          <a href="/home">Help</a>
                          <a href="/home">Language</a>
                        </div>
                      </div>

                      <div className="profile-details-account-section">
                        <div className="display-flex">
                          <p className="t-16 t-bold t-black margin-bottom">
                            Manage
                          </p>
                          <a href="/home">Posts & Activity</a>
                          <a href="/home">Job Posting Account</a>
                        </div>
                      </div>
                      <div className="profile-details-account-section">
                        <p className="t-16 t-bold t-black">Sign Out</p>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="work mR25 effects">
                  <a href="/home" className="a-header-decoration">
                    <FontAwesomeIcon icon={faBell} className="icons" />
                    <p className="nav-span-color t-12 mT5">Work</p>
                  </a>
                </div>
                <div className="premium">
                  <a href="/home">
                    <p className="t-12">Try premium for free</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
