import React from "react";
import SkillBlock from "./SkillBlock";
import htmltext from "../texts/html";
import csstext from "../texts/css";
import jststext from "../texts/jsts";
import othertext from "../texts/other";
import DynamicHeading from "./DynamicHeading";
import frameworktext from "../texts/framework";
import ExperienceBlock from "./ExperienceBlock";
import additionalText from "../texts/additonal";
import kasperskyText from "../texts/kaspersky";
import aiWorkshopText from "../texts/aiworkshop";
import freelanceText from "../texts/freelance";

const Main: React.FC = () => {
  return (
    <div>
      <section className="wraper main">
        <DynamicHeading></DynamicHeading>
        <p>
          Меня зовут Александр, в данный момент работаю в{" "}
          <span style={{ color: "#226459" }}>Kaspersky</span>
        </p>
      </section>
      <section className="wraper skills">
        <h2>Знания</h2>
        <div className="skills__grid-layout">
          <SkillBlock title="HTML" text={htmltext}></SkillBlock>
          <SkillBlock title="CSS" text={csstext}></SkillBlock>
          <SkillBlock title="JS/TS" text={jststext}></SkillBlock>
          <SkillBlock title="Фреймворки" text={frameworktext}></SkillBlock>
          <SkillBlock title="Дополнительно" text={additionalText}></SkillBlock>
          <SkillBlock title="Остальное" text={othertext}></SkillBlock>
        </div>
      </section>
      <section className="wraper experience">
        <h2>Опыт работы</h2>
        <div className="experience__grid-layout">
          <ExperienceBlock
            title="Kaspersky"
            text={kasperskyText}
            period="Июнь 2025 — настоящее время"
          />
          <ExperienceBlock
            title="AI Workshop"
            text={aiWorkshopText}
            period="Сентябрь 2024 — Май 2025"
          />
          <ExperienceBlock
            title="Фриланс"
            text={freelanceText}
            period="Июнь 2023 — Октябрь 2023"
          />
        </div>
      </section>
      <footer className="wraper">
        <nav>
          <a href="https://t.me/lowpriorityabuzer">Telegram</a>
          <a href="https://github.com/PlexMAD">GitHub</a>
          <a href="mailto:fulltiltxixixixi@gmail.com" className="mail-link">
            fulltiltxixixixi@gmail.com
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Main;
