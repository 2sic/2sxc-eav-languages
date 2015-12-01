module.exports = function (grunt) {
    "use strict";
    var srcRoot = "src/i18n/",
        distRoot = "dist/",
        tmpRoot = "tmp/",
        tmpAnalytics = "tmp/analyt/",
        analysisRoot = "analysis/";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        clean: {
            dist: distRoot + "**/*", // only do this when you will re-copy the eav stuff into here
            tmp: tmpRoot + "**/*"
        },

        /* This is an experimental block - will merge the few changes in -en-uk with the master -en */
        /* 2015-11-29 dm - seems to work, but not very generic yet. Will persue more when I have a real use case */
        //"merge-json": {
        //    "en-uk": {
        //        src: [ srcRoot + "admin-en.json", srcRoot + "admin-en-uk.json" ],
        //        dest: tmpRoot + "admin-en-uk.js"
        //    }
        //},
        
        copy: {
            enUk: {
                files: [

                ]
            },
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

        /* Experiment to flatten the JSON for reviewing translation completeness */
        //flatten_json: {
        //    main: {
        //        files: [
        //            {
        //                expand: true,
        //                src: [srcRoot + "*-en.json"],
        //                dest: analysisRoot
        //            }
        //        ]
        //    }
        //},

        /* Experimeting with wrapping the flattened jsons with [ and ] */
        /* note: doesn't work ATM*/
        //concat: {
        //    options: {
        //        banner: "[",
        //        footer: "]"
        //    },
        //    default: {
        //        src: [analysisRoot + "**/*.json"],
        //        dest: tmpAnalytics
        //        //,
        //        //dest: 
        //    }
        //    //default_options: {
        //    //    files: [
        //    //      {
        //    //          prepend: "[",
        //    //          append: "]",
        //    //          input: analysisRoot + "**/*.json" //,
        //    //          //output: 'path/to/output/file'
        //    //        }
        //    //     ]
        //    //}
        //},

        /* Watchers to auto-compile while working on it */
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
    grunt.loadNpmTasks("grunt-merge-json");
    // grunt.loadNpmTasks("grunt-flatten-json");
    // grunt.loadNpmTasks("grunt-contrib-concat");

    // Default task(s).
    grunt.registerTask("build-auto", ["watch:i18n"]);
    grunt.registerTask("build", [
        "clean:tmp",
        "copy"
    ]);
};