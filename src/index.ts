import Matematica from './Matematica'
import validator from 'validator';
let ip = '127.0.0.1'

console.log(validator.isEmail('tayse@meuemail.com'))
console.log(validator.isIP(ip))