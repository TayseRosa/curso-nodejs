"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Matematica = __importStar(require("./Matematica"));
let n1 = 10;
let n2 = 2;
console.log(`Soma:${Matematica.somar(n1, n2)} `);
console.log(`Subtração:${Matematica.subtrair(n1, n2)} `);
console.log(`Multiplicação: ${Matematica.multiplicar(n1, n2)} `);
