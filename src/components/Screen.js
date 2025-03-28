import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import { Textfit } from "react-textfit"

const Screen = () => {
    const { calc } = useContext(CalcContext);
    return (
        <Textfit className="screen" max={70}>{calc.num ? calc.num : calc.res}</Textfit>
    );
}

export default Screen;