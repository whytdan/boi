import React from "react";
import AboutCompanySection from "../components/AboutCompanySection/AboutCompanySection";
import GoalSection from "../components/GoalSection/GoalSection";
import MissionSection from "../components/MissionSection/MissionSection";
import PrincipleSection from "../components/PrincipleSection/PrincipleSection";
import BaseLayout from "../layouts/BaseLayout";

export default function NormativeBase() {
  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>
      <MissionSection />
      <GoalSection />
      <AboutCompanySection />
      <PrincipleSection />
    </BaseLayout>
  );
}
