const gulp=require("gulp");
const less=require("gulp-less");

console.log("gulp is watching");

gulp.watch("*.less",()=>{
    gulp.src("*.less",{base:"."}).pipe(less()).pipe(gulp.dest("."));
});