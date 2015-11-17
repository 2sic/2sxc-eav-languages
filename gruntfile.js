module.exports = function (grunt) {
    "use strict";
    var distRoot = "dist/";
    var tmpRoot = "tmp/";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        clean: {
            dist: distRoot + "**/*", // only do this when you will re-copy the eav stuff into here
            tmp: tmpRoot + "**/*"
        },

        copy: {
            i18n: {
                files: [
                    {
                        expand: true,
                        cwd: "src/i18n/", 
                        src: ["**/*.json"],
                        dest: "dist/i18n/", 
                        rename: function (dest, src) {
                            return dest + src.replace(".json", ".js");
                        }
                    }

                ]
            }
        },

        watch: {
            i18n: {
                files: ["gruntfile.js", "src/**"],
                tasks: ["build"]
            }
        }


    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");

    // Default task(s).
    grunt.registerTask("watch2build", ["watch:i18n"]);
    grunt.registerTask("build", [
        "clean:tmp",
        "copy"
    ]);
};