// Assets
import angular from 'assets/languages/angular.webp';
import c_sharp from 'assets/languages/c_sharp.webp';
import css from 'assets/languages/css.webp';
import fluter from 'assets/languages/fluter.webp';
import html from 'assets/languages/html.webp';
import java_script from 'assets/languages/java_script.webp';
import java from 'assets/languages/java.webp';
import js from 'assets/languages/js.webp';
import microsoft_net from 'assets/languages/microsoft_net.webp';
import node_js from 'assets/languages/node_js.webp';
import php from 'assets/languages/php.webp';
import python from 'assets/languages/python.webp';
import react from 'assets/languages/react.webp';


// Models
import { LanguagesProps } from './models';

const languages: LanguagesProps = [
    [
        {
            src: java,
            alt: 'java',
        },
        {
            src: python,
            alt: 'python',
        },
        {
            src: microsoft_net,
            alt: 'microsoft_net',
        },
        {
            src: angular,
            alt: 'angular',
        },
    ],
    [
        {
            src: java_script,
            alt: 'java_script',
        },
        {
            src: php,
            alt: 'php',
        },
        {
            src: c_sharp,
            alt: 'c_sharp',
        },
        {
            src: react,
            alt: 'react',
        },
    ],
    [
        {
            src: css,
            alt: 'css',
        },
        {
            src: html,
            alt: 'html',
        },
        {
            src: js,
            alt: 'js',
        },
        {
            src: node_js,
            alt: 'node_js',
        },
        {
            src: fluter,
            alt: 'fluter',
        },
    ],
];

export { languages };
