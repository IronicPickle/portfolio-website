import React from 'react'
import HomePanelProject from '../../../sections/HomePanel/HomePanelProject'

import screenshot1 from "./media/screenshot1.png";
import screenshot2 from "./media/screenshot2.png";
import screenshot3 from "./media/screenshot3.png";
import screenshot4 from "./media/screenshot4.png";
import screenshot5 from "./media/screenshot5.png";

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
            Duct is an screen capture, image processing, PDF generation software package... I know, a handful...<br/>
            It's primary purpose is to extract the coloured lines used on maps produced by water companies, that indicate where sewers and water mains are located.
            The user is required to supply a map, on which the lines will be drawn once extracted.
            The tool will automatically align the user supplied map with the water company's map, at which point the extraction can begin.<br/>
            <br/>
            It works by capturing an image of the screen and isolating specific colour channels,
            which are then applied as a mask to the whole image to produce a seires of individual images containing each line variant.
            These images are than combined with the map supplied by the user, to generate a full image.
            The end result is an image that contains the lines sources from the water company's map combined with the map supplied by the user.
            This image is placed into a template PDF which can be used to produce full reports.<br/>
            <br/>
            <b>What is was Written in</b><br/>
            - Python<br/>
            - Pascal (very little)<br/>
            <br/>
            <b>What is was Built with</b><br/>
            - OpenCV<br/>
            - Tkinter<br/>
            - NumPy<br/>
            - PyMuPDF<br/>
            - PyInstaller<br/>
            - Inno Setup
          </>
        }
      />
  )
}
