import React from "react";

import "./ProfileStat.css";

const PersonStat = () => {
  return (
    <div className="b_stat_cont">
      <div className="skill_head">Skills</div>

      <div className="skill_sub">
        <div className="skill_round">Accounts</div>
        <div className="skill_round">Finance</div>
        <div className="skill_round">Web dev</div>
        <div className="skill_round">Singer</div>
        <div className="skill_round">Actor</div>
        <div className="skill_round">HR</div>
      </div>
    </div>
  );
};

export default PersonStat;
