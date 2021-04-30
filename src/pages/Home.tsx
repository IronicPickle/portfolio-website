import React from 'react'
import HomeFront from '../components/sections/HomeFront/HomeFront';
import HomePanel from '../components/sections/HomePanel/HomePanel'
import HomePanelLangs from '../components/sections/HomePanel/HomePanelLangs';
import HomePanelTechs from '../components/sections/HomePanel/HomePanelTechs';
import HomePanelAbout from '../components/sections/HomePanel/HomePanelAbout';
import HomePanelProjects from '../components/sections/HomePanel/HomePanelProjects';
import HomeBack from '../components/sections/HomeBack/HomeBack';

export default function Home() {

  return (
    <div>
      <HomeFront id="home" />
      <div>
        <HomePanel id="about" title={<>
          <s>Passionate</s> Obsessed With Technology
        </>} color="secondary" >
          <HomePanelAbout />
        </HomePanel>
        <HomePanel id="langs" title="What I can Write" color="primary" >
          <HomePanelLangs />
        </HomePanel>
        <HomePanel id="techs" title="What I Know" color="secondary" >
          <HomePanelTechs />
        </HomePanel>
        <HomePanel id="projects" title="What I've Made" color="primary" >
          <HomePanelProjects />
        </HomePanel>
      </div>
      <HomeBack id="home" />
    </div>
  )
}
