const gulp=require("gulp");
const less=require("gulp-less");
const babel=require("gulp-babel");
const plumber=require("gulp-plumber");

console.log("gulp is watching");

gulp.watch("*.less",()=>{
    gulp.src("*.less",{base:"."}).pipe(less()).pipe(gulp.dest("."));
});

gulp.watch("*.jsx",()=>{
    gulp.src("*.jsx",{base:"."}).pipe(plumber()).pipe(babel({presets:["@babel/preset-react"]})).pipe(gulp.dest("."));
});