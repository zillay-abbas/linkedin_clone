import React from "react";

import PersonStat from "./ProfileStatus/ProfileStat";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStatCard from "./ProfileStatCard/ProfileStatCard";
import ProjectDetail from "./ProjectDetail/ProjectDetail";
import ProfileEdu from "./ProfileEducation/ProfileEdu";
import ProfileSkill from "./ProfileSkill/ProfileSkill";
import ProfileAbout from "./ProfileAbout/ProfileAbout";

import "./Profile.css";
import ProfileAnalytics from "./ProfileAnalytics/ProfileAnalytics";

const Profile = ({ bgcolor }) => {
  return (
    <div className="profile_cont">
      <div className="profile" style={{ backgroundColor: bgcolor }}>
        {/* profile info */}
        <ProfileInfo />

        {/* person status */}
        <PersonStat />
        <ProfileStatCard />

        {/* about */}
        <ProfileAbout />

        {/* person projects */}
        <ProjectDetail />

        {/* profile analytics */}
        <ProfileAnalytics />

        {/* skills */}
        <ProfileSkill />

        {/* profile education */}
        <ProfileEdu />
      </div>
    </div>
  );
};

export default Profile;
