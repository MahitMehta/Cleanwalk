export interface IThemeStatic {
    palette: {
        primary: string,
        secondary: string,
        darkGreen: string; 
        lightGreen: string; 
        milkWhite: string; 
        darkGrey: string; 
        brown: string 
    },
};

const theme:IThemeStatic = {
    palette: {
        primary: "#6A994E",
        secondary: "#A7C957",
        darkGreen: "#6A994E",
        lightGreen: "#A7C957",
        milkWhite: "#F2E8CF",
        darkGrey: "#1F1F1F",
        brown: "#BC4749"
    }, 
};

export { theme };
