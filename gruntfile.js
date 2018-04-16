module.exports = function(grunt)
{
    grunt.initConfig(
        {
            pkg:grunt.file.readJSON('package.json'),
            uglify:{
                build:{
                    files:[{
                        expand: true,
                        cwd: 'assets/css',
                        src: '**/*.css',
                        dest:'dest/css'
                    }]
                }
            },

            connect:{
                meta:{
                    port:1338,
                    base:'tasks',
                    src: '../actividad2/index.html'
                }
            }
        });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['uglify','connect:meta']);
}