import React, { useEffect, useState } from "react";
import SkillBlock from "./SkillBlock";
import htmltext from "../texts/html";
import csstext from "../texts/css";
import jststext from "../texts/jsts";
import gittext from "../texts/git";
import othertext from "../texts/other";

const Main: React.FC = () => {
    const [headingInfo, setHeadingInfo] = useState<string>('');
    const [lineIsVisible, setLineIsVisible] = useState<boolean>(true);
    const heading = 'plexmad';

    const fillHeading = () => {
        setHeadingInfo('')
        const headingArr = heading.split('');
        headingArr.forEach((letter, index) => {
            setTimeout(() => setHeadingInfo((prev) => prev + letter), 200 * index);
        });
    };

    useEffect(fillHeading, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setLineIsVisible((prev) => !prev);
        }, 400);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {/* секцию снизу можно было вынести в отдельный компонент во избежание ререндера всей страницы */}
            <section className="wraper main">
                <h1 className={`main__heading ${lineIsVisible ? "visibleLine" : ""}`}>{headingInfo}</h1>
                <p>Меня зовут Александр, обучаюсь в Московском Политехе на 3 курсе направления "Веб-технологии", на данном сайте расположена информация о моих знаниях и хардскиллах.</p>
            </section>
            <section className="wraper skills">
                <h2>Знания</h2>
                <div className="skills__grid-layout">
                    <SkillBlock title="HTML" text={htmltext}></SkillBlock>
                    <SkillBlock title="CSS" text={csstext}></SkillBlock>
                    <SkillBlock title="JS/TS" text={jststext}></SkillBlock>
                    <SkillBlock title="Git" text={gittext}></SkillBlock>
                    <SkillBlock title="Дополнительно" text={othertext}></SkillBlock>
                </div>
            </section>
            <footer className="wraper" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
                <a href="https://t.me/lowpriorityabuzer">Telegram</a>
            </footer>

        </div>
    );
};

export default Main;
