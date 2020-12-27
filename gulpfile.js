const gulp = require("gulp")
const apidoc = require("gulp-apidoc")

gulp.task("apidoc", function (done) {
  apidoc(
    {
      src: "src/",
      dest: "docs",
    },
    done,
  )
})

gulp.task("default", gulp.series("apidoc"))
