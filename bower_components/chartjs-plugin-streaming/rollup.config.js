const pkg = require('./package.json');

const banner = `/*
 * @license
 * ` + pkg.name + `
 * http://github.com/nagix/chartjs-plugin-streaming/
 * Version: ` + pkg.version + `
 *
 * Copyright ` + (new Date().getFullYear()) + ` Akihiko Kusanagi
 * Released under the MIT license
 * https://github.com/nagix/` + pkg.name + `/blob/master/LICENSE.md
 */`;

export default {
	entry: 'src/index.js',
	dest: 'dist/' + pkg.name + '.js',
	banner: banner,
	format: 'umd',
	moduleName: pkg.name,
	external: [
		'moment',
		'chart.js'
	],
	globals: {
		moment: 'moment',
		'chart.js': 'Chart'
	}
};
