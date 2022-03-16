import React, { Component } from "react";
import CountDown from "../components/countDown/countDown";
import SocialMedia from "../components/socialMedia/socialMedia";
import SubscribeButton from "../components/subscribeInput";

class ComingSoon extends Component {
  render() {
    return (
      <div className="comingContainer">
        <SocialMedia />
        <div className="container">
          <div className="content">
            <h1 style={{ color: "white", fontSize: 44, fontWeight: "400" }}>
              Our website is coming soon !
            </h1>
            <CountDown countdownTimestamp={1645574399000} />
            <SubscribeButton />
          </div>
        </div>

        <div className="overlay"></div>
        <div className="backstretch">
          <div className="backstretch-item">
            <img alt="" src="./canadabg.jpg" className="img-bg" alt="" />
          </div>
        </div>
        <span className="photoby">
          Background by{" "}
          <a href="https://unsplash.com/@geenens_tim?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Tim Geenens
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/quebec?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
        <div className="comingSoonLogoContainer">
          <img className="comingSoonLogo" src="./logo.jpg" alt="" />
        </div>
      </div>
    );
  }
}
/*
<CountDown
countdownTimestamp={1643673600000}
/>
<p style={{ color: 'white' }} >
    Our web site is coming soon.
</p>
<img src="http://placehold.it/200"/>*/
export default ComingSoon;
