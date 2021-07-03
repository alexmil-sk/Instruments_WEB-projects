
//const translates = {
//	en: "Hello, ",
//	ru: "Привет, ",
//};

//function sayHello(name, lang = "en") {
//	return translates[lang] + name;
//}

//console.log(sayHello('Vova', 'ru'));-


//choc__Модули Common JS__ ЭТО НЕ ЧАСТЬ ЯЗЫКА JS. ЭТО СТОРОННИЙ ПОЛЬЗОВАТЕЛЬСКИЙ КОД (2009 год)

//choc__Модуль Common JS__
//module.exports = sayHello; //!!__экспорт с помощью module.exports

//choc__Модуль AMD (RequireJS)

//define(function() {
//	const translates1 = {
//		en: "Hello, ",
//		ru: "Привет, ",
//	};
//	function sayHello(name, lang = "en") {
//		return translates1[lang] + name;
//	}
//	return { sayHello };
//});

//choc__Модули UMD - Universal Module Deffinition

//(function (define) {
//	define(function () {
//		const translates1 = {
//			en: "Hello, ",
//			ru: "Привет, ",
//		};
//
//		function sayHello(name, lang = "en") {
//			return translates1[lang] + name;
//		}
//		return {
//			sayHello
//		};
//	});
//}(
//	typeof module === 'object' && module.exports && typeof define !== 'function' ?
//		function (factory) { module.exports = factory(); } :
//		define
//));

//choc__ECMAScript Modules (ES2015 Modules)

//const translates = {
//		en: "Hello, ",
//		ru: "Привет, ",
//	};
//
//	export function sayHello(name, lang = "en") {
//		return translates[lang] + name;
//	}
//
//	console.log(sayHello('Vova', 'ru'));

//*__СИНТАКСИС ECMAScript Modules (ES2015 Modules)
//todo__ВНИМАНИЕ!!! Конструкции IMPORT необходимо писать на самом верхнем уровне нашего модуля (файла)
//todo__До конструкции IMPORT не должно быть никакого кода неотносящегося к импорту
//todo__Конструкцию EXPORT можем писать в каком угодно месте нашего файла.
//!__Нельзя писать конструкции export / import внутри функций, циклов, выражений и т.п.

//choc_____________EXPORT_________________________

export var user = "Ivan";
export const age = 20;
export let role = true;
export function bar() { };
export const baz = () => { };
export class Foo { }

//@----------------------------------------------------

const email = "test@ya.ru";
function check() { }

export { email, check };
	
//@-----------------------------------------------------
const emailTwo = "test@ya.ru";

function check() {}

export { emailTwo as login, check };//*__Экспорт emailTwo наружу с переименованием в login
	
//choc_____________IMPORT_________________________

import { user } from "./path/filename.js";

//@------------------------------------------------------

import { user, age } from "./path/filename.js";

import {	email } from "./path/filename.js";
//@------------------------------------------------------

import {	user as login,	age } from "./path/filename.js"; //*__Экспорт user наружу с переименованием в login

import * as userModule from "./path/filename.js";//*__Весь импорт помещается под именем userModule

import "./path/filename.js";

//choc_____________EXPORT / IMPORT по умолчанию_________________________

export default "текст";

export default () => { };

import Name from "./path/filename";//@__Имя Name присваивается произвольно при импорте



