module.exports = function(grunt){

  grunt.initConfig({
        responsive_images:{
            dev:{
                options:{
                    engine:'im',
                    sizes:[{
                        name:'small',
                        width:'30%',
                        suffix:'',
                        quality:20
                    },
                    {
                        name:'large',
                        width:'50%',
                        suffix:'',
                        quality:40
                    }]
                },
                files:[{
                    expand:true,
                    src:['img/**/*.{jpg,gif,png}'],
                    dest:'dist/'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-responsive-images');

    grunt.registerTask('default',['responsive_images']);
};