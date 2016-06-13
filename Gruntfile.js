module.exports = function(grunt) {

    var tasks = ["uglify", "copy"];
    var src = ["angular-scrolled.js"];
    var min = "angular-scrolled.min.js";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            build: {
                src: src,
                dest: min
            }
        },
        watch: {
            scripts: {
                files: src,
                tasks: tasks
            }
        },
        copy: {
            demo: {
                src: [min],
                dest: "demo/" + min
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("default", tasks);
};
