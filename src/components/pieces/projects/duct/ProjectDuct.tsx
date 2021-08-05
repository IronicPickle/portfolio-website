import React from "react";
import HomePanelProject from "../../../sections/HomePanel/HomePanelProject";

import screenshot1 from "./media/screenshot1.png";
import screenshot2 from "./media/screenshot2.png";
import screenshot3 from "./media/screenshot3.png";
import screenshot4 from "./media/screenshot4.png";
import screenshot5 from "./media/screenshot5.png";
//
export default function ProjectDuct() {
  return (
    <HomePanelProject
      title="Duct"
      subTitle="An Image Processing and PDF Generation Package (2020 - 2021)"
      repoLink="https://github.com/IronicPickle/dw-piper"
      imgs={[
        { src: screenshot1, title: "Home Page" },
        { src: screenshot2, title: "User Management Page" },
        { src: screenshot3, title: "Profile Page" },
        { src: screenshot4, title: "Create Server Menu" },
        { src: screenshot5, title: "Create News Post Menu" },
      ]}
      about={
        <>
          Duct is an screen capture, image processing, PDF generation software
          package... I know, a handful...
          <br />
          Much like Search Companion, this package was also designed for use in
          my previous workplace, where it was used to speed up the process of
          producing drainage reports. It extracts coloured lines used by water
          companies to denote the location of water mains and sewers on a given
          map. It allows the user to transplant those lines onto a map of their
          choosing, allowing the user to perform the relevant alignments.
          <br />
          <br />
          It works by capturing an image of the screen and isolating specific
          colour channels, which are then applied as a mask to the whole image
          to produce a seires of individual images containing each line variant.
          These images are than combined with the map supplied by the user, to
          generate a full image. The end result is an image that contains the
          lines sourced from the water company's map combined with the map
          supplied by the user. This image is placed into a template PDF which
          can be used to produce a full report.
          <br />
          <br />
          Also worth mentioning is that it is maintained via an&nbsp;
          <a href="https://github.com/IronicPickle/update-server">
            update server
          </a>
          &nbsp;running Node.js, that allows the client to perform regular
          update checks.
          <br />
          <br />
          <b>What is was Written in</b>
          <br />
          - Python
          <br />
          - Pascal (very little)
          <br />
          <br />
          <b>What is was Built with</b>
          <br />
          - OpenCV
          <br />
          - Tkinter
          <br />
          - NumPy
          <br />
          - PyMuPDF
          <br />
          - PyInstaller
          <br />- Inno Setup
        </>
      }
    />
  );
}
