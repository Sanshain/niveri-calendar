//@ts-check
import babel from 'rollup-plugin-babel'

import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import typescript from 'rollup-plugin-typescript2';

import alias from '@rollup/plugin-alias';
import es3 from 'rollup-plugin-es3';
import css from 'rollup-plugin-css-only';
import postcss from 'rollup-plugin-postcss'
import commonjs from "@rollup/plugin-commonjs";
import json from '@rollup/plugin-json';
// import postcss from 'rollup-plugin-postcss'


import { execSync } from "child_process";
import fs from "fs";
import path from "path";


const dist = 'build'
// const production = !process.env.ROLLUP_WATCH
let production = true;
const development = !production

const options = {
	prerender: false,
	source: {
		file: 'index__prer'
	},
	target: {
		dirname: dist,
		ssr: 'init'
	}
}


export default {
	input: `./source/DatePicker.jsx`,
	output: {
		file: `${dist}/bundle.esm.js`,
		// format: 'iife',
		// format: 'umd',
		format: 'es',
		sourcemap: true,
		name: 'NiveriCalendar',
	},
	plugins: [
		// json(),
		alias({
			entries: [
				{ find: 'react/hooks', replacement: 'preact/hooks' },
				{ find: 'react', replacement: 'preact/compat' },
				{ find: 'react-dom', replacement: 'preact/compat' }
			]
		}),
		resolve({
			browser: true,
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
		}),
		// development && serve({			
		// 	open: true,
		// 	port: 3000,
		// 	contentBase: dist,
		// 	historyApiFallback: true
		// }),
		// development && livereload({
		// 	watch: dist
		// }),
		babel({
			exclude: 'node_modules/**'
		}),
		// typescript({
		// 	typescript: require('typescript')
		// }),				
		commonjs(),
		es3(),
		css({
			output: 'style/bundle.css',
			// minimize: production
		}),
		// css({ output: false }),
		// postcss({
		// 	extract: 'style/bundle.css',
		// 	minimize: production,
		// 	modules: true
		// }),
		production && terser()
	]
}


if (options.prerender) {

	const file = path.resolve(__dirname, options.target.dirname, options.target.ssr + '.js');
	if (fs.existsSync(file)) {

		execSync(`cd ${dist} && node ` + options.target.ssr);
		console.log('prerender finished');
	}
}