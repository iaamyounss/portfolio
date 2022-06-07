import { primary } from "../components/theme/Themes";

export const credits = () => {

    const logStyle = [
        `color: ${primary}`,
        "font-size: 3em",
        "font-weight: 300",
        "padding: 100px 0px 100px 0px",
    ].join(";");

    return console.log(
        `%c ©  A portfolio by iamyounss, view more in github.com/iammyounss`,
        logStyle
    );
};
