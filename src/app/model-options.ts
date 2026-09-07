import {Vertex} from "@visuallyjs/browser-ui";
import {LOGIC_GATE_INPUT_RULES} from "./constraints";

const modelOptions = {

    // beforeStartConnect:(source:Vertex, type :string) => source.getSourceEdges().length === 0,

    // beforeConnect:(source:Vertex, target:Vertex) => {
    //     if (source.getSourceEdges().length > 1) {
    //         return false
    //     }
    //     const maxTarget = LOGIC_GATE_INPUT_RULES[target.type]?.max || Infinity
    //     return target.getTargetEdges().length < maxTarget
    // }
}


export default modelOptions
