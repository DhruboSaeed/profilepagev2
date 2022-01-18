import React from "react";
import "./Feed.css";
import LeftSection from "./LeftSection";
import MainFeed from "./MainFeed";
import AsideSection from "./AsideSection";

function Feed() {
  return (
    <div className="main_container">
      <div className="container">
        <div className="body_container">
          <LeftSection />
          <MainFeed />
          <AsideSection />
        </div>
      </div>
    </div>
  );
}

export default Feed;
