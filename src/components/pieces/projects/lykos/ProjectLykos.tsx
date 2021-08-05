import React from "react";
import HomePanelProject from "../../../sections/HomePanel/HomePanelProject";

import screenshot1 from "./media/screenshot1.png";
import screenshot2 from "./media/screenshot2.png";
import screenshot3 from "./media/screenshot3.png";
import screenshot4 from "./media/screenshot4.png";
import screenshot5 from "./media/screenshot5.png";

export default function ProjectLykos() {
  return (
    <HomePanelProject
      title="Lykos Website"
      subTitle="A Community Website with Discord Integration (2021)"
      repoLink="https://github.com/IronicPickle/community-server-master"
      imgs={[
        { src: screenshot1, title: "Home Page" },
        { src: screenshot2, title: "User Management Page" },
        { src: screenshot3, title: "Profile Page" },
        { src: screenshot4, title: "Create Server Menu" },
        { src: screenshot5, title: "Create News Post Menu" },
      ]}
      about={
        <>
          This project started life as a fully integrated group management
          system with a built-in application tracker. However, after going
          dormant, it was re-vitalised, as a streamlined community management
          platform, capable of integrating heavily with the popular chat and
          VoIP service <a href="https://discord.com/">Discord</a>.
          <br />A live version of this website is available&nbsp;
          <a href="https://www.lykos.uk/">here</a>.<br />
          <br />
          <b>What is was Written in</b>
          <br />
          - TypeScript
          <br />
          - HTML
          <br />
          - CSS
          <br />
          <br />
          <b>What is was Built with</b>
          <br />
          - Node.js (on both web servers)
          <br />
          - Express.js (on both web servers)
          <br />
          - Discord.js
          <br />
          - MongoDB / mongoose.js
          <br />
          - Passport.js
          <br />
          - React.js
          <br />
          - Material UI
          <br />
        </>
      }
    />
  );
}
