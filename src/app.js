'use strict';

import './style.sass';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import pack from '../package.json';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {
                    username: 'nurasyl_aldan',
                    icon: 'fa fa-vk',
                    name: 'ВКонтакте',
                    ref: 'http://vk.com/nurasyl_aldan'
                },
                {
                    username: 'nurasyl.aldan',
                    icon: 'fa fa-facebook',
                    name: 'Facebook',
                    ref: 'http://facebook.com/nurasyl.aldan'
                },
                {
                    username: 'nurassyl_aldan',
                    icon: 'fa fa-twitter',
                    name: 'Twitter',
                    ref: 'http://twitter.com/nurassyl_aldan'
                },
                {
                    username: 'nurasyl_aldan',
                    icon: 'fa fa-instagram',
                    name: 'Instagram',
                    ref: 'http://instagram.com/nurasyl_aldan'
                },
                {
                    username: 'nurasyl21',
                    icon: 'fa fa-telegram',
                    name: 'Telegram',
                    ref: 'http://t.me/nurasyl21'
                },
                {
                    username: 'nurassyl.aldan',
                    icon: 'fa fa-skype',
                    name: 'Skype',
                    ref: 'skype:nurassyl.aldan'
                },
                {
                    username: '+7 (775) 380 0405',
                    icon: 'fa fa-whatsapp',
                    name: 'WhatsApp',
                    ref: 'http://web.whatsapp.com'
                },
                {
                    username: '+7 (775) 380 0405',
                    icon: 'fa fa-mobile',
                    name: 'Телефно номер',
                    ref: 'tel:+77753800405'
                },
                {
                    username: 'nurassyl.aldan@gmail.com',
                    icon: 'fa fa-envelope',
                    name: 'E-mail адрес',
                    ref: 'mailto:nurassyl.aldan@gmail.com'
                },
            ],
            references: [
                {
                    name: 'Биография',
                    ref: 'biography',
                    icon: 'fa fa-child'
                },
                {
                    name: 'Резюме',
                    ref: 'resume',
                    icon: 'fa fa-address-card'
                },
                {
                    name: 'Что использую?',
                    ref: 'technologies',
                    icon: 'fa fa-code'
                },
                {
                    name: 'Портфолио',
                    ref: 'portfolio',
                    icon: 'fa fa-briefcase'
                },
                {
                    name: 'Контакты',
                    ref: 'contacts',
                    icon: 'fa fa-phone'
                },
            ],
            technologies: [
                {
                    name: 'W3C',
                    src: require('./img/brands/w3c.png'),
                    ref: '#'
                },
                {
                    name: 'HTML 5',
                    src: require('./img/brands/html5.png'),
                    ref: '#'
                },
                {
                    name: 'CSS 3',
                    src: require('./img/brands/css3.png'),
                    ref: '#'
                },
                {
                    name: 'JavaScript',
                    src: require('./img/brands/js.png'),
                    ref: '#'
                },
                {
                    name: 'EcmaScript 6',
                    src: require('./img/brands/es.png'),
                    ref: '#'
                },
                {
                    name: 'TypeScript',
                    src: require('./img/brands/ts.png'),
                    ref: '#'
                },
                {
                    name: 'CoffeeScript',
                    src: require('./img/brands/cs.png'),
                    ref: '#'
                },
                {
                    name: 'Angular',
                    src: require('./img/brands/angular.png'),
                    ref: '#'
                },
                {
                    name: 'React',
                    src: require('./img/brands/react.png'),
                    ref: '#'
                },
                {
                    name: 'Redux',
                    src: require('./img/brands/redux.png'),
                    ref: '#'
                },
                {
                    name: 'Flux',
                    src: require('./img/brands/flux.png'),
                    ref: '#'
                },
                {
                    name: 'MobX',
                    src: require('./img/brands/mobx.png'),
                    ref: '#'
                },
                {
                    name: 'Vue',
                    src: require('./img/brands/vue.png'),
                    ref: '#'
                },
                {
                    name: 'Vuex',
                    src: require('./img/brands/vuex.png'),
                    ref: '#'
                },
                {
                    name: 'Nuxt.js (SSR)',
                    src: require('./img/brands/nuxt.png'),
                    ref: '#'
                },
                {
                    name: 'Babel',
                    src: require('./img/brands/babel.png'),
                    ref: '#'
                },
                {
                    name: 'Webpack',
                    src: require('./img/brands/webpack.png'),
                    ref: '#'
                },
                {
                    name: 'Gulp',
                    src: require('./img/brands/gulp.png'),
                    ref: '#'
                },
                {
                    name: 'Grunt',
                    src: require('./img/brands/grunt.png'),
                    ref: '#'
                },
                {
                    name: 'Bower',
                    src: require('./img/brands/bower.png'),
                    ref: '#'
                },
                {
                    name: 'Yarn',
                    src: require('./img/brands/yarn.png'),
                    ref: '#'
                },
                {
                    name: 'NPM',
                    src: require('./img/brands/npm.png'),
                    ref: '#'
                },
                {
                    name: 'Node',
                    src: require('./img/brands/node.png'),
                    ref: '#'
                },
                {
                    name: 'V8 Engine',
                    src: require('./img/brands/v8.png'),
                    ref: '#'
                },
                {
                    name: 'Sass',
                    src: require('./img/brands/sass.png'),
                    ref: '#'
                },
                {
                    name: 'Less',
                    src: require('./img/brands/less.png'),
                    ref: '#'
                },
                {
                    name: 'PostCSS',
                    src: require('./img/brands/postcss.png'),
                    ref: '#'
                },
                {
                    name: 'Jade',
                    src: require('./img/brands/jade.png'),
                    ref: '#'
                },
                {
                    name: 'Pug',
                    src: require('./img/brands/pug.png'),
                    ref: '#'
                },
                {
                    name: 'jQuery',
                    src: require('./img/brands/jquery.png'),
                    ref: '#'
                },
                {
                    name: 'Twitter Bootstrap',
                    src: require('./img/brands/bootstrap.png'),
                    ref: '#'
                },
                {
                    name: 'Mocha',
                    src: require('./img/brands/mocha.png'),
                    ref: '#'
                },
                {
                    name: 'Chai',
                    src: require('./img/brands/chai.png'),
                    ref: '#'
                },
                {
                    name: 'Jasmine',
                    src: require('./img/brands/jasmine.png'),
                    ref: '#'
                },
                {
                    name: 'Jira',
                    src: require('./img/brands/jira.png'),
                    ref: '#'
                },
                {
                    name: 'Slack',
                    src: require('./img/brands/slack.png'),
                    ref: '#'
                },
                {
                    name: 'GitHub',
                    src: require('./img/brands/github.png'),
                    ref: '#'
                },
                {
                    name: 'Git',
                    src: require('./img/brands/git.png'),
                    ref: '#'
                },
                {
                    name: 'Linux',
                    src: require('./img/brands/linux.png'),
                    ref: '#'
                },
                {
                    name: 'Ubuntu',
                    src: require('./img/brands/ubuntu.png'),
                    ref: '#'
                },
                {
                    name: 'Bash',
                    src: require('./img/brands/bash.png'),
                    ref: '#'
                },
                {
                    name: 'Gimp',
                    src: require('./img/brands/gimp.png'),
                    ref: '#'
                },
                {
                    name: 'Inkscape',
                    src: require('./img/brands/inkscape.png'),
                    ref: '#'
                },
                {
                    name: 'Photoshop',
                    src: require('./img/brands/photoshop.png'),
                    ref: '#'
                },
                {
                    name: 'Illustrator',
                    src: require('./img/brands/illustrator.png'),
                    ref: '#'
                },
                {
                    name: 'XD',
                    src: require('./img/brands/xd.png'),
                    ref: '#'
                },
                {
                    name: 'UX/UI Design',
                    src: require('./img/brands/ux-ui.png'),
                    ref: '#'
                },
                {
                    name: 'Material UI',
                    src: require('./img/brands/material-ui.png'),
                    ref: '#'
                },
                {
                    name: 'Fluid UI / Metro UI',
                    src: require('./img/brands/fluid-ui.png'),
                    ref: '#'
                },
                {
                    name: 'Apple UI',
                    src: require('./img/brands/apple.png'),
                    ref: '#'
                },
                {
                    name: 'Windows',
                    src: require('./img/brands/windows.png'),
                    ref: '#'
                },
                {
                    name: 'MacOS',
                    src: require('./img/brands/macos.png'),
                    ref: '#'
                },
                {
                    name: 'iOS',
                    src: require('./img/brands/ios.png'),
                    ref: '#'
                },
                {
                    name: 'Android',
                    src: require('./img/brands/android.png'),
                    ref: '#'
                },
                {
                    name: 'Windows Phone',
                    src: require('./img/brands/windows_phone.png'),
                    ref: '#'
                },
                {
                    name: 'Apache Cordova',
                    src: require('./img/brands/cordova.png'),
                    ref: '#'
                },
                {
                    name: 'Phonegap',
                    src: require('./img/brands/phonegap.png'),
                    ref: '#'
                },
                {
                    name: 'Framework7',
                    src: require('./img/brands/framework7.png'),
                    ref: '#'
                },
                {
                    name: 'ReactNative',
                    src: require('./img/brands/react_native.png'),
                    ref: '#'
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            &lt;{pack.name} /&gt;
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                {
                                    this.state.references.map(index => {
                                        return(
                                            <li className="nav-item">
                                                <a className="nav-link" href={'#'+index.ref}>
                                                    <i className={index.icon}></i>
                                                    <span>{index.name}</span>
                                                </a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
                <header>
                    <div className="container">
                        <h1 className="text-white text-center">
                            <i className="fa fa-code d-block d-sm-inline-block"></i> Front-end разработчик <i className="fa fa-code d-block d-sm-inline-block"></i>
                        </h1>
                        <hr />
                        <div className="row">
                            <div className="column col-12 col-sm-6 col-md-4 text-center text-white">
                                <p>
                                    <i className="fa fa-hourglass"></i>
                                </p>
                                <p className="text">
                                    <b className="text-uppercase">3 года</b> опыт работы
                                </p>
                            </div>
                            <div className="column col-12 col-sm-6 col-md-4 text-center text-white">
                                <p>
                                    <i className="fa fa-trophy"></i>
                                </p>
                                <p className="text">
                                    <b className="text-uppercase">Middle</b> уровень
                                </p>
                            </div>
                            <div className="column col-12 col-md-4 text-center text-white">
                                <p>
                                    <i className="fa fa-language"></i>
                                </p>
                                <p className="text">
                                    English is <b className="text-uppercase">Pre-Intermediate</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="container">
                    <div id={this.state.references[0].ref} className="reference">
                        <h3 className="title">{this.state.references[0].name}</h3>
                        <p className="text-indent">
                            Моё имя Нурасыл, полностью Нурасыл Алданов Нургазиевич.
                            Я родился 21 ноября 1996 года в городе <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D0%BA%D0%BE%D0%BD%D1%83%D1%80_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)" target="__blank">Байконур</a>, <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD" target="__blank">Казахстан</a>.
                            Являюсь front-end разработчиком.
                            Живу в городе <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D0%BA%D0%BE%D0%BD%D1%83%D1%80_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)" target="__blank">Байконур</a> с родителями.
                            Работаю фрилансером. Данный момент разрабатываю open-source проект для front-end и webkit, gecko движков. В плане есть разрабатывать плагинов для jQuery, Webpack и Babel.
                        </p>
                        <h6 className="subtitle">Знакомство с компьютером</h6>
                        <p className="text-indent">
                            Я вырос в городе <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D0%BA%D0%BE%D0%BD%D1%83%D1%80_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)" target="__blank">Байконур</a>, <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD" target="__blank">Казахстан</a>. Первый раз с компьютером познакомился в середине 8 класса (2010 год).
                            Большое спасибо родителям за то, что купили мне компьютер.
                            Играл много компьютерных игр с друзьями, в то время моя комната была небольшим PlayStation клубом. &#9786;
                            Через несколько месяцев вылетила операционная система Windows XP.
                            Попросил у родителей вызвать мастера для починения. Вызвали и починели компьютера.
                            Через день снова вылетила ОС Windows. Второй раз не мог вызвать.
                            Помнил мастера, что он установил этот Windows через DVD-R диск.
                            Попросил записать мне на пустой диск и купил Windows XP.
                            Первый раз сам установил свой Windows на компьютер. Очень сильно радовался, что починил его сам.
                            С этого момента я заинтересовался программными обеспечениями.
                            Изучал MS Office (Word, Excel, PowerPoint), Photoshop, Audition, CorelDraw и т. д.
                        </p>
                        <h6 className="subtitle">Образование</h6>
                        <p className="text-indent">
                            Пошел в школу в 2003 году и закончил 9 класс в 2012 году по имени "К. Э. Циолковский" в городе <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D0%BA%D0%BE%D0%BD%D1%83%D1%80_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)" target="__blank">Байконур</a>, <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD" target="__blank">Казахстан</a>.
                            Поступил в колледж по имени "Жамбылский политехнический колледж" в городе Тараз по специальности "Программист" и закончил в 2016 году.
                            Закончил художественную школу в 2011 году в городе <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D0%BA%D0%BE%D0%BD%D1%83%D1%80_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)" target="__blank">Байконур</a>, <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD" target="__blank">Казахстан</a>.
                            <span className="text-indent d-inline-block">
                                Я начинающий дизайнер и back-end разработчик.
                                <br />
                                Набираю опыт по созданию логотипов, фирменных стилей, графиков, анимации для интерфейса, обработка фотографий и UX/UI дизайны. Мои работы по дизайну <a href="http://pinterest.com/nurasyl_aldan/my-works" target="__blank">здесь</a>.
                                Сначала развиваюсь по front-end и UX/UI части потом back-end часть.
                                Мои работы в моих профилах на <a href="http://github.com/nurassyl" target="__blank">github.com</a>, <a href="http://bitbucket.org/nurassyl" target="__blank">bitbucket.org</a>, <a href="http://pinterest.com/nurasyl_aldan/my-works" target="__blank">pinterest.com</a> и в <a href="#portfolio" target="__blank">портфолио</a>
                            </span>
                        </p>
                        <h6 className="subtitle">Программирование</h6>
                        <p className="text-indent">
                            В один прекрасный день сидел в социальной сети "ВКонтакте" и возник вопрос "Как создаются социальные сети и сайты?".
                            С этого момента я начал искать в интернете информации о сайтах и о их созданиях.
                            Нашел движок под названием "ViiEngine" и смотрел видеоуроков в YouTube об установках по FTP клиенту.
                            <br />
                            <span className="text-indent d-inline-block">
                                В конце января 2015 года начал изучать языка разметки HTML/XHTML и CSS правила стилей и параллельно создал простенкую веб страничку за одну ночь.
                                Потом изучал <abbr title="Язык программирования">ЯП</abbr> PHP, СУБД MySQL, HTTP сервер Apache.
                                Хотел оживить сайта с анимациями, обработкой событий и AJAX (XMLHttpRequest) запросами.
                                В плане был выучить <abbr title="Язык программирования">ЯП</abbr> JavaScript и jQuery фреймворка. Выучил и создал свою первую социальную сеть под названием "imbay" в лето 2015 года <em>(Данный момент сайт не активно)</em>.
                                В 2016 году начал использовать NodeJS, Ruby, Python, PostgreSQL, Unix, Linux/GNU, Bash, ReactJS, AngularJS, Gulp, Grunt, Jade, Pug, Slim, Git, Github, Bootstrap.
                                В cередине 2017 года начал использовать VueJS, EcmaScript, Babel, Webpack.
                            </span>
                            <br />
                            <span className="text-indent d-inline-block">
                                Данный момент использую операционную систему Linux/GNU дистрибутив Ubuntu.
                                Мой основной текстовой редактор Visual Studio Code.
                                Использую <abbr title="Version control system">VCS</abbr> Git и Github в качестве репозитория.
                                Часто сижу на сайтах <a href="http://habrahabr.ru" target="__blank">habrahabr.ru</a>, <a href="http://toster.ru" target="__blank">toster.ru</a>, <a href="http://webref.ru" target="__blank">webref.ru</a>, <a href="http://developer.mozilla.org" target="__blank">developer.mozilla.org</a>, <a href="http://behance.net" target="__blank">behance.net</a> и <a href="http://pinterest.com" target="__blank">pinterest.com</a>
                                <br />
                                Использую библиотеку ReactJS, сборщика Webpack, ES6 транспилятор Babel и т. д.
                                Продвинуто изучаю VueJS, ReactNative, Framework7, Cordova, Phonegap.
                            </span>
                        </p>
                        <p></p>
                    </div>
                    <hr />
                    <div id={this.state.references[1].ref} className="reference">
                        <h3 className="title">{this.state.references[1].name}</h3>
                        <h5 className="text-uppercase">
                            <b>
                                <i className="fa fa-id-card-o"></i> Нурасыл Алданов Нургазиевич
                            </b>
                        </h5>
                        <h5 className="subtitle">
                            Front-end разработчик
                        </h5>
                        <div className="alert alert-danger" role="alert">
                            Ищу работу, которая после собеседования и/или после выполнения тестового задания сразу трудоустроюсь.
                            Не хочу ждать.
                        </div>
                        <div className="table-responsive-lg">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>
                                            <b>E-mail:</b>
                                        </td>
                                        <td>
                                            <a href={this.state.contacts[8].ref}>{this.state.contacts[8].username}</a> (предпочитаемый способ связи)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Телефон номер:</b>
                                        </td>
                                        <td>
                                            <a href={this.state.contacts[7].ref}>{this.state.contacts[7].username}</a> (доступно WhatsApp и Telegram)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Skype:</b>
                                        </td>
                                        <td>
                                            <a href={this.state.contacts[5].ref}>{this.state.contacts[5].username}</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Официальный сайт:</b>
                                        </td>
                                        <td>
                                            <a href="http://nurassyl.github.io" target="__blank">nurassyl.github.io</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Дата рождения:</b>
                                        </td>
                                        <td>
                                            21.11.1996 (21 лет)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Место рождения:</b>
                                        </td>
                                        <td>
                                            город <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D0%BA%D0%BE%D0%BD%D1%83%D1%80_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)" target="__blank">Байконур</a>, <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD" target="__blank">Казахстан</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Пол:</b>
                                        </td>
                                        <td>
                                            мужской
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Место жительства:</b>
                                        </td>
                                        <td>
                                            город <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D0%BA%D0%BE%D0%BD%D1%83%D1%80_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)" target="__blank">Байконур</a>, <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD" target="__blank">Казахстан</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Зарплатные ожидания:</b>
                                        </td>
                                        <td>
                                            40 000 рублей в месяц
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>График и режим работы:</b>
                                        </td>
                                        <td>
                                            Удаленный и полный рабочий день
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Опыт работы:</b>
                                        </td>
                                        <td>
                                            3 года, фрилансер.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Языки:</b>
                                        </td>
                                        <td>
                                            <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D0%BA%D0%B8%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA" target="__blank">Казахский</a> (родной), Русский (свободно владею), Английский (Pre-Intermediate)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Личные качества:</b>
                                        </td>
                                        <td>
                                            Соблюдаю правила стандартов W3C.
                                            <br />
                                            Сверстаю кроссбраузерно, адаптивно, семантично с/без PSD макета.
                                            <br />
                                            <br />
                                            Оптимизирую сайты.
                                            <br />
                                            Создаю SPA и MPA приложений.
                                            <br />
                                            К unit-тестированию использую Jasmine, Karma, Mocha, Chai с методами TDD и BDD.<br />
                                            Для манипуляций с <abbr title="Document Object Model">DOM</abbr> и <abbr title="Browser Object Module">BOM</abbr> использую фреймворк/библиотеку jQuery.
                                            <br />
                                            В основном работаю с CSS методологией 'БЭМ'.
                                            Есть опыт работы с RESTful(CRUD) API, <abbr title="JSON Web Tokens">JWT</abbr>.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
                    <div id={this.state.references[2].ref} className="reference">
                        <h3 className="title">{this.state.references[2].name}</h3>
                        <div className="row">
                            {
                                this.state.technologies.map(index => {
                                    return (
                                        <figure className="col-12 col-sm-6 col-md-4 figure text-center">
                                            <img className="figure-img rounded" src={index.src} alt={index.name} width="150" />
                                            <figcaption className="figure-caption">{index.name}</figcaption>
                                        </figure>
                                    );
                                })
                            }
                        </div>
                    </div>
                </main>
                <footer className="footer bg-secondary" id="contacts">
                    <div className="container">
                        <h4 className="text-white">Контактные данные:</h4>
                        <hr />
                        <div className="row">
                            {
                                this.state.contacts.map(index => {
                                    return (
                                        <address className="col-12 col-md-6 col-lg-4">
                                            <a href={index.ref} target="__blank">
                                                <i className={index.icon}></i> {index.username}
                                            </a>
                                        </address>
                                    );
                                })
                            }
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
