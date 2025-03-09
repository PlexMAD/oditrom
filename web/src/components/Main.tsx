import React, { useEffect, useState } from "react";
import SkillBlock from "./SkillBlock";
import htmltext from "../texts/html";
import csstext from "../texts/css";
import jststext from "../texts/jsts";
import gittext from "../texts/framework";
import othertext from "../texts/other";
import DynamicHeading from "./DynamicHeading"
import frameworktext from "../texts/framework";

const Main: React.FC = () => {
    return (
        <div>
            <section className="wraper main">
                <DynamicHeading></DynamicHeading>
                <p>Меня зовут Александр, обучаюсь в Московском Политехе на 3 курсе направления "Веб-технологии", на данном сайте-резюме расположена информация о моих хардскиллах.</p>
            </section>
            <section className="wraper skills">
                <h2>Знания</h2>
                <div className="skills__grid-layout">
                    <SkillBlock title="HTML" text={htmltext}></SkillBlock>
                    <SkillBlock title="CSS" text={csstext}></SkillBlock>
                    <SkillBlock title="JS/TS" text={jststext}></SkillBlock>
                    <SkillBlock title="Фреймворки" text={frameworktext}></SkillBlock>
                    <SkillBlock title="Дополнительно" text={othertext}></SkillBlock>
                </div>
            </section>
            <footer className="wraper">
                <nav>
                    <a href="https://t.me/lowpriorityabuzer">Telegram</a>
                    <a href="https://github.com/PlexMAD">GitHub</a>
                    <a href="mailto:fulltiltxixixixi@gmail.com" className="mail-link">Почта:fulltiltxixixixi@gmail.com</a>
                </nav>
            </footer>

        </div>
    );
};

export default Main;
