import React from 'react'
import HomePanelProject from '../../../sections/HomePanel/HomePanelProject'

import screenshot1 from "./media/screenshot1.png";
import screenshot2 from "./media/screenshot2.png";
import screenshot3 from "./media/screenshot3.png";
import screenshot4 from "./media/screenshot4.png";
import screenshot5 from "./media/screenshot5.png";

export default function ProjectSearchCompanion() {
  return (
    <HomePanelProject
        title="Search Companion" 
        subTitle="A Data Extraction and Injection Browser Extension (2021)"
        repoLink="https://github.com/IronicPickle/search-companion"
        imgs={[
          { src: screenshot1, title: "Menu and Tabs" },
          { src: screenshot2, title: "Dark Mode Menu and Tabs" },
          { src: screenshot3, title: "Property Info Tab" },
          { src: screenshot4, title: "Product Info Tab" },
          { src: screenshot5, title: "Mapping Tab" },
        ]}
        about={
          <>
            This project was designed from the ground up for use in my current workplace.
            It's main use case is the extraction of data from the Case Management System (CMS) used in-house.
            It maintains a temporary store of data that relates to the case the user is currently accessing via our CMS.
            This data becomes accessible from all browser windows and tabs, speeding up various processes.
            It can also extract and inject information into various other relevant web pages to speed up the ordering of products and the production of reports.<br/>
            <br/>
            I maintain this as the sole developer on behalf of the company, where it is used by most members of the office on a daily basis.
            It is currently available on both the Chrome Web Store and Firefox Add-ons Store, though it is either unlisted or listed with low priority, as the extension is not intended for public use.
            The extension can be found via the following links, though please note, it is largely unusable without access to the CMS it was designed for.<br/>
            <br/>
            <a href="https://chrome.google.com/webstore/detail/search-companion/kdmjohdcocbbjfelihflkakgimkefabo" >Chrome</a> and&nbsp;
            <a href="https://addons.mozilla.org/en-GB/firefox/addon/search-companion/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search" >Firefox</a><br/>
            <br/>
            <b>What is was Written in</b><br/>
            - TypeScript<br/>
            - HTML<br/>
            - CSS<br/>
            <br/>
            <b>What is was Built with</b><br/>
            - React.js<br/>
            - Material-UI<br/>
            - Webpack
          </>
        }
      />
  )
}
