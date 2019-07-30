const sass = require("node-sass");

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    watch: {
      options: {
        livereload: true,
        interrupt: true,
        atBegin: true
      },
      sass: {
        files: "./src/**/*.scss",
        tasks: ["sass"]
      },
      pug: {
        files: "./src/**/*.pug",
        tasks: ["pug"]
      },
      assets: {
        files: "./src/task4/assets/**/*",
        tasks: ["copy"]
      }
    },
    copy: {
      main: {
        cwd: "./src/task4/assets",
        expand: true,
        src: "**/*",
        dest: "./build/task4/assets"
      }
    },
    pug: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: [
          {
            expand: true,
            cwd: "./src",
            src: ["**/*.pug"],
            dest: "build/",
            ext: ".html"
          }
        ]
      }
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        expand: true,
        cwd: "./src",
        src: ["**/*.scss"],
        dest: "build/",
        ext: ".css"
      }
    }
  });

  grunt.registerTask("default", ["sass"]);
};
