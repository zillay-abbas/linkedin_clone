import React from "react";

import "./ProfileSkill.css";

const PersonStat = () => {
  return (
    <div className="a_stat_cont">
      <div className="a_skill_head">Skills</div>

      <div className="a_skill_sub">
        <div className="a_skill_round">Accounts</div>
        <div className="a_skill_round">Finance</div>
        <div className="a_skill_round">Web dev</div>
        <div className="a_skill_round">Singer</div>
        <div className="a_skill_round">Actor</div>
        <div className="a_skill_round">HR</div>
      </div>
    </div>
  );
};

export default PersonStat;
