import { } from '../../../node_modules/ua-parser-js/dist/ua-parser.min.js'

let parser = new UAParser()
let parserResult = parser.getResult()

export const browser = parserResult.browser.name && parserResult.browser.name.toLowerCase()
export const version = parserResult.browser.major && parserResult.browser.major.toLowerCase()
export const os = parserResult.os.name && parserResult.os.name.toLowerCase()
export const device = parserResult.device.type && parserResult.device.type.toLowerCase()

console.group("%c[USERAGENT]", 'color: #f1c40f', new Date().toLocaleTimeString())
console.log("%c[USERAGENT Browser]", 'color: #f1c40f', browser)
console.log("%c[USERAGENT Version]", 'color: #f1c40f', version)
console.log("%c[USERAGENT OS]", 'color: #f1c40f', os)
console.log("%c[USERAGENT Device]", 'color: #f1c40f', device)
console.groupEnd()