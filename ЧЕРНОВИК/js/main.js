
//!!__Динамическая загрузка файлов

//function loadScript(url, callback) {
//	const script = document.createElement('script');
//	script.type = "text/javascript";
//	script.src = url;
//	script.onload = callback;
//	document.head.appendChild(script);
//}
//loadScript('./common.js', () => {
//	greeting('Peter');
//});

//*__Варианти вывода 1__
//loadScript('./moduleHello.js', () => {
//	sayHello();
//});

//!!__Модули Common JS__ ЭТО НЕ ЧАСТЬ ЯЗЫКА JS. ЭТО СТОРОННИЙ ПОЛЬЗОВАТЕЛЬСКИЙ КОД (2009 ujl)

//*__Вариант вывода с помощью модуля 2__

//const { sayHello } = require('./moduleHello.js');//!!__Импорт из moduleHello с помощью require
//console.log(sayHello("Ivan", "ru"));

//!!__Модули AMD (Require JS)__ (2009 год) AMD - Async Module Deffinition для асинхронной загрузки скрипта
//define(["moduleHello"], function ({ sayHello }) {
//	console.log(sayHello("Ivan", "ru"));
//});


//!!__Модули UMD - Universal Module Deffinition

//*__См. moduleHello.js

//!!__ECMAScript Modules (ES2015 Modules)

//import { sayHello } from "./moduleHello.js"; //todo__Данная конструкция применяется только в сборке
//console.loglog(sayHello("Vova", "ru"));

//<script type="module" src="./main.js"></script>//!!__В index.html в шапку необходимо дорбавлять данную строку
//<script nomodule>alert('Ваш браузер не поддерживается :=(( );</script>//!!__Для старых браузеров
