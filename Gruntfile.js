/**
 * nb-foundation
 *
 * @author Hein Bekker <hein@netbek.co.za>
 * @copyright (c) 2015 Hein Bekker
 * @license http://www.gnu.org/licenses/agpl-3.0.txt AGPLv3
 */

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: ['/*',
				' * <%= pkg.name %>',
				' * <%= pkg.homepage %>',
				' * @author <%= pkg.author.name %> <<%= pkg.author.email %>>',
				' * @copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>',
				' * @license <%= pkg.license.url %> <%= pkg.license.type %>',
				' */\n'].join('\n')
		},
		jshint: {
			all: ['Gruntfile.js', 'tasks/**/*.js', 'tests/tests/*.js']
		},
		clean: {
			init: ['build', 'dist'],
			exit: ['build'],
		},
		concat: {
			dist: {
				src: ['src/css/**/*.css'],
				dest: 'dist/css/<%= pkg.name %>.css'
			}
		},
		cssmin: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				files: [{
						src: ['src/css/**/*.css'],
						dest: 'dist/css/<%= pkg.name %>.min.css'
					}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', [
		'clean:init',
		'concat',
		'cssmin',
		'clean:exit',
	]);

};