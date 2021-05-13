import React from 'react'
import HomePanelProject from '../../../sections/HomePanel/HomePanelProject'

import screenshot1 from "./media/screenshot1.png";
import screenshot2 from "./media/screenshot2.png";
import screenshot3 from "./media/screenshot3.png";
import screenshot4 from "./media/screenshot4.png";
import screenshot5 from "./media/screenshot5.png";

import gif1 from "./media/gif1.gif";
import gif2 from "./media/gif2.gif";
import gif3 from "./media/gif3.gif";
import gif4 from "./media/gif4.gif";
import gif5 from "./media/gif5.gif";

export default function ProjectForum() {
  return (
    <HomePanelProject
        title="Community Forum" 
        subTitle="A Full Fat Forum (2018 - 2019)"
        repoLink="https://github.com/IronicPickle/lykosgc-website"
        imgs={[
          { src: gif1, title: "Creating a Category" },
          { src: gif2, title: "Creating a Forum" },
          { src: gif3, title: "Creating a Post" },
          { src: gif4, title: "Replying to a Post" },
          { src: gif5, title: "Changing an Avatar" },

          { src: screenshot1, title: "Home Page" },
          { src: screenshot2, title: "Forums Page" },
          { src: screenshot3, title: "Profile Page" },
          { src: screenshot4, title: "Register Page" },
          { src: screenshot5, title: "Login Page" },
        ]}
        about={
          <>
            This was the first full project that I saw from start to finish.
            It was intended to serve an online community I was building at the time, but never saw proper deployment.
            Written with pure JavaScript and JQuery, it certainly shows it's age.
            But nonetheless, this project taught me a lot about how to develop a full stack web application.<br/>
            <br/>
            <b>What is was Written in</b><br/>
            - JavaScript<br/>
            - HTML<br/>
            - CSS<br/>
            <br/>
            <b>What is was Built with</b><br/>
            - Node.js<br/>
            - Express.js<br/>
            - MongoDB / mongoose.js<br/>
            - Passport.js<br/>
            - JQuery
          </>
        }
      />
  )
}
