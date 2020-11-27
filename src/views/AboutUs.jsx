import React from 'react'
import BaseLayout from '../layouts/BaseLayout'
import MissionSection from '../components/MissionSection/MissionSection';
import GoalSection from '../components/GoalSection/GoalSection';
import AboutCompanySection from '../components/AboutCompanySection/AboutCompanySection';
import PrincipleSection from '../components/PrincipleSection/PrincipleSection';
import OurTeamSection from '../components/OurTeamSection/OurTeamSection';
import DocumentsSection from '../components/DocumentsSection/DocumentsSection';


export default function AboutUs() {
  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>

      <MissionSection/>
      <GoalSection/>
      <AboutCompanySection/>
      <PrincipleSection/>
      <OurTeamSection/>
      <DocumentsSection/>
    </BaseLayout>
  )
}
