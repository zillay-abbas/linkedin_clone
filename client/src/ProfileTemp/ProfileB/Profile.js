import React from "react";

import PersonStat from "./ProfileStatus/ProfileStat";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStatCard from "./ProfileStatCard/ProfileStatCard";
import ProjectDetail from "./ProjectDetail/ProjectDetail";
import ProfileEdu from "./ProfileEducation/ProfileEdu";

import "./Profile.css";
import ProfileAnalytics from "./ProfileAnalytics/ProfileAnalytics";

const Profile = () => {
  return (
    <div className="profile_b_cont">
      <div className="profile_b">
        <div className="profile_info_ana">
          {/* profile info */}
          <ProfileInfo />

          {/* profile analytics */}
          <ProfileAnalytics />
        </div>

        {/* person projects */}
        <ProjectDetail />

        {/* person skills */}
        <PersonStat />

        {/* profile education */}
        <ProfileEdu />
      </div>
    </div>
  );
};

export default Profile;
