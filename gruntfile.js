module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
			dist: {
				files: {
					'css/style.css': 'css/style.scss'
				}
			}
		},
        watch: {
			sass: {
				files: ['css/style.scss'],
				tasks: ['sass']
			},
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['watch']);
};
