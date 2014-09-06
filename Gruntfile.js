module.exports = function(grunt) {
  grunt.initConfig({
		exec: {
			test: "npm test",

      cucumber: "bundle exec cucumber",

      jshint: "jshint .",
      csslint: "csslint .",
      scss_lint: "scss-lint .",
      tidy: "find . -type d -name node_modules -prune -o -type f -name '*.html' -print -exec tidy -qe {} \\; 2>&1 | grep -v 'nav>'",
      aspelllint: "bundle exec aspelllint .",
      lili: "bundle exec lili ."
		}
  });

  grunt.loadNpmTasks("grunt-exec");

  grunt.registerTask("default", [
    "exec:jshint",
    "exec:csslint",
    "exec:scss_lint",
    "exec:tidy",
    "exec:lili"
  ]);

  grunt.registerTask("lint", [
    "exec:jshint",
    "exec:csslint",
    "exec:tidy",
    "exec:lili"
  ]);

  grunt.registerTask("jshint", ["exec:jshint"]);
  grunt.registerTask("csslint", ["exec:csslint"]);
  grunt.registerTask("scss_lint", ["exec:scss_lint"]),
  grunt.registerTask("tidy", ["exec:tidy"]);
  grunt.registerTask("aspelllint", ["exec:aspelllint"]);
  grunt.registerTask("lili", ["exec:lili"]);
};
