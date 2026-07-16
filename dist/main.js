"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function factoriel(i) {
    if (i === 1)
        return 1;
    else
        return factoriel(i - 1) + i;
}
const i = 4;
console.log(`fact (${i}) : ${factoriel(i)}`);
//# sourceMappingURL=main.js.map