import React, { useState, useEffect } from "react";
import "./Feed.css";
import { ReactComponent as HashTag } from "../svg/has-tag.svg";
import { ReactComponent as FollowIcon } from "../svg/follow-icon.svg";
import { ReactComponent as PremiumLogo } from "../svg/logo.svg";
import { ReactComponent as MyTermsLogo } from "../svg/my-terms.svg";
import { ReactComponent as SideBarDropDown } from "../svg/side-bar-dropdown.svg";
import axios from "axios";

function LeftSection() {
  const [user, setuser] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/users/GetUser/1")
  //     .then((response) => {
  //       console.log(response.data.payload[0]);
  //       setuser(response.data.payload[0]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        const userDetails = response.data.results[0].name
        console.log("UserDetails =>", userDetails);
        setuser(userDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="body-left-section">
      <div className="profile-section">
        <div className="profile-details-section">
          <div className="identity-block">
            <div className="identity-bg-image">{/* background Image */}</div>
            <div className="profile-pic-section">
              <a href="/home">
                <div className="profile-pic-section-image">
                  {/* <img src={user.profile_photo}/> */}
                  {/* <img src={require({user.profile_photo})} alt="" /> */}
                  <img src={require("../images/profile-pic.jpg")} alt="" />
                  <div className="profile-title t-bold t-16">
                   {user.title+" "+user.first +" "+ user.last}
                  </div>
                </div>
              </a>
              <p className="t-12 t-normal t-black--light">
                {/* {user.info_title} */}
                Data Research Analyst at Green Meadow Games
              </p>
            </div>
          </div>
        </div>
        <div className="view-connections-section">
          <div className="view-connection-list">
            <ul className="entry-list row">
              <li className="entry-list-item">
                <div className="entry-item">
                  <a href="/home">
                    <div className="entry-item-viewed">
                      <div className="entry-item-viewed-left">
                        <span className="t-black--light t-12 t-bold">
                          Who viewed your profile
                        </span>
                      </div>
                      <div className="entry-item-viewed-right">
                        {/* <span className="entry-color t-12">{user.viewed}</span> */}
                        <span className="entry-color t-12">10</span>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li className="entry-list-item">
                <div className="entry-item">
                  <a href="/home">
                    <div className="entry-item-viewed">
                      <div className="entry-item-viewed-left text-decoration">
                        <div className="connection">
                          <span className="t-black--light t-12 t-bold">
                            Connections
                          </span>
                        </div>
                        <div className="grow-network">
                          <span className="t-12 t-bold t-black">
                            Grow your network
                          </span>
                        </div>
                      </div>
                      <div className="entry-item-viewed-right t-12">
                        {/* <span className="entry-color">{user.connection}</span> */}
                        <span className="entry-color">300</span>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="premium-section">
          <a href="/home">
            <h3 className="t-12 t-black--light t-normal text-a-s">
              Access exclusive tools & insights
            </h3>
            <div className="premium-for-free">
              <PremiumLogo className="obj-mini-screen" />
              <span className="t-12 t-black t-bold">Try Premium for free</span>
            </div>
          </a>
        </div>
        <div className="my-terms t-bold t-12 text-a-s">
          <a href="/home">
            <MyTermsLogo className="obj-mini-screen" />
            <span className="vertical-align">My Terms</span>
          </a>
        </div>
      </div>
      <div className="side-bar-sticky-details">
        <div className="side-bar-sticky-content-section">
          <div className="side-bar-sticky-content">
            <div className="recent-content">
              <section className="recent-content-header">
                <div className="recent-content-header-title">
                  <h2 className="t-14 t-black--light">Recent</h2>
                </div>
                <div className="recent-content-header-button">
                  <button className="side-bar-dropdown-button">
                    <SideBarDropDown />
                  </button>
                </div>
              </section>
              <ul style={{ listStyleType: "none" }}>
                <li className="list-flex truncate">
                  <a href="/home" className="a-text-decoration">
                    <HashTag className="hashtag" />
                    <span className="t-black--light t-14">bangadesh</span>
                  </a>
                </li>
                <li className="list-flex truncate">
                  <a href="/home" className="a-text-decoration">
                    <HashTag className="hashtag" />
                    <span className="t-black--light t-14">computermalware</span>
                  </a>
                </li>
                <li className="list-flex truncate">
                  <a href="/home" className="a-text-decoration">
                    <HashTag className="hashtag" />
                    <span className="t-black--light t-14">vacancy</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="groups-content text-decoration">
              <a href="/home">
                <span className="t-14 t-bold">Groups</span>
              </a>
            </div>
            <div className="event-content">
              <div className="event-section">
                <a href="/home" className="a-text-decoration">
                  <span className="t-14 t-bold">Events</span>
                  <button className="event-button">
                    <FollowIcon />
                  </button>
                </a>
              </div>
            </div>
            <div className="followed-hastags-content">
              <section className="recent-content-header">
                <div className="recent-content-header-title">
                  <h2 className="t-14 t-black--light text-color">
                    Followed Hastags
                  </h2>
                </div>
                <div className="recent-content-header-button">
                  <button className="side-bar-dropdown-button">
                    <SideBarDropDown />
                  </button>
                </div>
              </section>
              <ul style={{ listStyleType: "none" }}>
                <li className="list-flex truncate">
                  <a href="/home" className="a-text-decoration">
                    <HashTag className="hashtag" />
                    <span className="t-black--light t-14">bangadesh</span>
                  </a>
                </li>
                <li className="list-flex truncate">
                  <a href="/home" className="a-text-decoration">
                    <HashTag className="hashtag" />
                    <span className="t-black--light t-14">computermalware</span>
                  </a>
                </li>
                <li className="list-flex truncate">
                  <a href="/home" className="a-text-decoration">
                    <HashTag className="hashtag" />
                    <span className="t-black--light t-14">vacancy</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
