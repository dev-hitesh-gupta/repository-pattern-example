import {Model} from "./models";
function math() {
    console.log(3)
}

namespace math {
    export function add(a: number, b:number) {
        return a + b;
    }
}

math();

console.log(math.add(1,1));


