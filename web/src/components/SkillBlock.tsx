import React, { useEffect, useState } from "react";
interface SkillProps {
    title: string;
    text: string;
}

const SkillBlock: React.FC<SkillProps> = ({ title, text }) => {
    return (
        <div className="skills_skillblock">
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
};

export default SkillBlock;
