import React from "react";

interface ExperienceProps {
  title: string;
  period: string;
  text: string;
}

const ExperienceBlock = ({ title, text, period }: ExperienceProps) => {
  return (
    <div className="skills_skillblock">
      <h3>{title}</h3>
      <h4>{period}</h4>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default ExperienceBlock;
