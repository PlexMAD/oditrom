import React, { useEffect, useState } from "react";

const Main: React.FC = () => {
    const [headingInfo, setHeadingInfo] = useState<string>('');
    const [lineIsVisible, setLineIsVisible] = useState<boolean>(true);
    const heading = 'oditrom';

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
        <div className="section main">
            <h1 className={`main__heading ${lineIsVisible ? "visibleLine" : ""}`}>{headingInfo}</h1>
            <p>Меня зовут Александр, обучаюсь в Московском Политехе на 3 курсе направления "Веб-технологии", на данном сайте расположена информация о моих знаниях и хардскиллах. Можно воспринимать это как аналог резюме.</p>
        </div>
    );
};

export default Main;
