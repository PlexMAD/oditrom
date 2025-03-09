import { useEffect, useState } from "react";


const DynamicHeading: React.FC = () => {
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
    return (<h1 className={`main__heading ${lineIsVisible ? "visibleLine" : ""}`}>{headingInfo}</h1>)
}

export default DynamicHeading