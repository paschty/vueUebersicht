import Vue from 'vue'
import Router from 'vue-router'
import StartSeite from '../components/StartSeite'
import vue from '../components/Vue'
import deklarativesRendering from '../components/DeklarativesRendering'
import BedingungenUndSchleifen from "../components/Bedingungen";
import Schleifen from "../components/Schleifen";
import Eingaben from "../components/Eingaben";
import Eingaben2 from "../components/Eingaben2";
import Komponenten from "../components/Komponenten";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Start',
            component: StartSeite
        },
        {
            path: '/vue',
            name: 'Vue',
            component: vue
        }, {
            path: '/deklarativesRendering',
            name: 'deklarativesRendering',
            component: deklarativesRendering
        }, {
            path: '/Bedingungen',
            name: 'Bedingungen',
            component: BedingungenUndSchleifen
        }, {
            path: '/Schleifen',
            name: 'Schleifen',
            component: Schleifen
        },
        {
            path: '/Eingaben',
            name: 'Eingaben',
            component: Eingaben
        },
        {
            path: '/Eingaben2',
            name: 'Eingaben II',
            component: Eingaben2
        },
        {
            path: '/Komponenten',
            name: 'Komponenten',
            component: Komponenten
        }
    ]
})
