// Generated on 2015-07-09 using generator-angular-component 0.2.3
'use strict';

module.exports = function (grunt) {

	// Configurable paths
	var yoConfig = {
		livereload: 35729,
		src       : 'src',
		dist      : 'dist'
	};

	// Livereload setup
	var lrSnippet = require('connect-livereload')({port: yoConfig.livereload});
	var mountFolder = function (connect, dir) {
		return connect.static(require('path').resolve(dir));
	};

	// Load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration
	grunt.initConfig({
		pkg    : grunt.file.readJSON('package.json'),
		yo     : yoConfig,
		meta   : {
			banner: '/**\n' +
			' * multi-line-ellipsis\n' +
			' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
			' * @link <%= pkg.homepage %>\n' +
			' * @author <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
			' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
			' */\n'
		},
		open   : {
			server: {
				path: 'http://localhost:<%= connect.options.port %>'
			}
		},
		clean  : {
			dist  : {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= yo.dist %>/*',
						'!<%= yo.dist %>/.git*'
					]
				}]
			},
			server: '.tmp'
		},
		watch  : {
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			},
			sass     : {
				files: ['<%= yo.src %>/*.scss'],
				tasks: ['sass:dist']
			},
			app      : {
				files  : [
					'<%= yo.src %>/*.html',
					'{.tmp,<%= yo.src %>}/*.css',
					'{.tmp,<%= yo.src %>}/*.js'
				],
				options: {
					livereload: yoConfig.livereload
				}
			},
			test     : {
				files: '<%= jshint.test.src %>',
				tasks: ['jshint:test', 'qunit']
			}
		},
		connect: {
			options   : {
				port    : 9000,
				hostname: '0.0.0.0' // Change this to '0.0.0.0' to access the server from outside.
			},
			livereload: {
				options: {
					middleware: function (connect) {
						return [
							lrSnippet,
							mountFolder(connect, '.tmp'),
							mountFolder(connect, yoConfig.src)
						];
					}
				}
			}
		},
		sass   : {
			options: {
				//debugInfo   : true
				style: 'expanded',
				sourcemap : 'none'   // 'auto'
			},
			dist   : {
				files: [
					{
						expand: true,
						cwd   : '<%= yo.src %>',
						src   : ['*.scss'],
						dest  : '<%= yo.dist %>',
						ext   : '.css'
					}
				]
			},
			server : {
				files: [
					{
						expand: true,
						cwd   : '<%= yo.src %>',
						src   : ['*.scss'],
						dest  : '.tmp/styles',
						ext   : '.css'
					}
				]
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: '<%= yo.dist %>',
					src: ['*.css', '!*.min.css'],
					dest: '<%= yo.dist %>',
					ext: '.min.css'
				}]
			}
		},
		jshint : {
			gruntfile: {
				options: {
					jshintrc: '.jshintrc'
				},
				src    : 'Gruntfile.js'
			},
			src      : {
				options: {
					jshintrc: '.jshintrc'
				},
				src    : ['<%= yo.src %>/*.js']
			},
			test     : {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src    : ['test/**/*.js']
			}
		},
		jscs   : {
			src    : '<%= yo.src %>/{,*/}*.js',
			options: {
				config            : '.jscsrc',
				esnext            : true, // If you use ES6 http://jscs.info/overview.html#esnext
				verbose           : true, // If you need output with rule names http://jscs.info/overview.html#verbose
				requireCurlyBraces: ['if']
			}
		},
		karma  : {
			options: {
				configFile: 'test/karma.conf.js',
				browsers  : ['PhantomJS']
			},
			unit   : {
				configFile: 'test/karma.conf.js',
				singleRun: true
			},
			server : {
				autoWatch: true
			}
		},
		ngmin  : {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist   : {
				src : ['<%= yo.src %>/*.js'],
				dest: '<%= yo.dist %>/multi-line-ellipsis.js'
			}
			// dist: {
			//   files: {
			//     '/.js': '/.js'
			//   }
			// }
		},
		concat : {
			options: {
				banner      : '<%= meta.banner %>',
				stripBanners: true
			},
			dist   : {
				src : ['<%= yo.src %>/*.js'],
				dest: '<%= yo.dist %>/multi-line-ellipsis.js'
			}
		},
		uglify : {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist   : {
				src : '<%= concat.dist.dest %>',
				dest: '<%= yo.dist %>/multi-line-ellipsis.min.js'
			}
		}
	});

	grunt.registerTask('test', [
		'jshint',
		'jscs',
		'karma:unit'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'sass:dist',
		'cssmin',
		'ngmin:dist',
		'uglify:dist'
	]);

	grunt.registerTask('release', [
		'test',
		'bump-only',
		'dist',
		'bump-commit'
	]);

	grunt.registerTask('default', [
		'test',
		'build'
	]);

};
