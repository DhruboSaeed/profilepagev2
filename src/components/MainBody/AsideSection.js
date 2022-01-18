import React, { useState, useEffect } from "react";
import "./Feed.css";
import { ReactComponent as FollowPlusIcon } from "../svg/follow-icon.svg";
import { ReactComponent as LinkedInIcon } from "../svg/linked-in-icon.svg";
import { ReactComponent as FollowIIcon } from "../svg/i-icon.svg";
import { ReactComponent as ArrowIIcon } from "../svg/arrow-icon.svg";
import axios from "axios";

function AsideSection() {
  const [followers, setfollowers] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/followers")
  //     .then((response) => {
  //       const followersData = response.data.payload;
  //       console.log(followersData);
  //       setfollowers(followersData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        const followersData = response.data.results[0].name;
        console.log("UserDetails =>", followersData);
        setfollowers(followersData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="aside-section">
      <div className="add-to-your-feed">
        <div className="outer-card">
          <div className="aside-card-view">
            <div className="feed-follows-module">
              <div className="feed-follow-module-header">
                <p className="t-16 t-black t-bold">Add to your feed</p>
                <span>
                  <button
                    type="button"
                    aria-expanded="false"
                    className="feed-button"
                  >
                    <li className="feed-icon">
                      <FollowIIcon style={{ height: "16px", width: "16px" }} />
                    </li>
                  </button>
                </span>
              </div>
              <div className="feed-follow-module">
                <ul className="feed-follow-module-list">
                  {/* {followers.map((values) => { */}
                    {/* return ( */}
                      <div>
                        <li className="feed-follow-module-member">
                          <a
                            href="/home"
                            className="feed-follow-module-member-avatar"
                          >
                            <img
                              src={require("../images/follow2.jpeg")}
                              alt=""
                              className="follower-img"
                            />
                          </a>
                          <div className="module-memebr-description text-decoration">
                            <div className="member-details">
                              <a href="/home">
                                <p className="module-memebr-description-name">
                                  <span className="t-14 t-black t-bold">
                                    {/* {values.name} */}
                                    {followers.first + " " + followers.last}
                                  </span>
                                </p>
                                <div className="module-memebr-description-sub-text">
                                  <p className="t-12 t-black--light t-normal">
                                    {/* {values.info_title} */}
                                    General Manager (HR, Admin & Compliance) at
                                    Matador Group | Trainer | Career Counsellor
                                    | Lead Auditor ISO 9001:2015 |
                                  </p>
                                </div>
                              </a>
                            </div>
                            <div className="follow-button-section">
                              <button className="follow-button button-background">
                                <li className="follow-button-list-type">
                                  <FollowPlusIcon className="feed-follow-icon" />
                                </li>
                                <span className="t-16 follow-button-text-color t-bold">
                                  Follow
                                </span>
                              </button>
                            </div>
                          </div>
                        </li>
                      </div>
                    {/* );
                  })} */}
                </ul>
              </div>
              <div className="feed-recommandation">
                <a href="/home">
                  <p className="t-14 t-black--light t-bold">
                    View all recommandations
                  </p>
                  <li className="feed-icon">
                    <ArrowIIcon style={{ height: "16px", width: "16px" }} />
                  </li>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="aside-sticky-content">
          <div className="sticky-banner-container"></div>
          <footer className="sticky-footer-container">
            <ul className="footer-compact-links">
              <li>
                <a href="/home" className="t-12 t-normal under-line">
                  {" "}
                  About
                </a>
              </li>
              <li>
                {" "}
                <a href="/home" className="t-12 t-normal under-line">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="/home" className="t-12 t-normal under-line">
                  Help Center
                </a>
              </li>
              <li>
                {" "}
                <a href="/home" className="t-12 t-normal under-line">
                  Privacy & Terms
                </a>
              </li>
              <li>
                <a href="/home" className="t-12 t-normal under-line">
                  Ad Choices
                </a>
              </li>
              <li>
                <a href="/home" className="t-12 t-normal under-line">
                  Advertising
                </a>
              </li>
              <li>
                <a href="/home" className="t-12 t-normal under-line">
                  Business Services
                </a>
              </li>
              <li>
                <a href="/home" className="t-12 t-normal under-line">
                  Get The LinkedIn App
                </a>
              </li>
              <li>
                <a href="/home" className="t-12 t-normal under-line">
                  More
                </a>
              </li>
            </ul>
            <div className="bottom-footer-content">
              <LinkedInIcon height="14px" width="65px" />
              <p className="t-12 t-normal">LinkedIn Corporation © 2021</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default AsideSection;
