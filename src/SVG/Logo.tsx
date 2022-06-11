import React from "react";
import { SvgXml } from "react-native-svg";

type LogoSVGProps = {
    width?: number,
}

const LogoSVG: React.FC<LogoSVGProps> = ({ width }) => {
    const xml = `
        <svg width="58" height="32" viewBox="0 0 58 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" y="12.5" width="53" height="17" rx="8.5" stroke="#6A994E" stroke-width="5"/>
        <rect x="2.5" y="12.5" width="53" height="17" rx="8.5" stroke="black" stroke-opacity="0.2" stroke-width="5"/>
        <circle cx="30" cy="4" r="3" stroke="#C5C5C5" stroke-width="2"/>
        <path d="M14 5H46L44.9333 10H15.0667L14 5Z" fill="#434343"/>
        </svg>
    `;

    return (
        <SvgXml xml={xml} height={width} width={width}/>
    );
};

export default LogoSVG;