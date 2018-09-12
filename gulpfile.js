const gulp=require("gulp");
const less=require("gulp-less");
const babel=require("gulp-babel");
const plumber=require("gulp-plumber");

console.log("gulp is watching");

gulp.watch("css/*.less",()=>{
    gulp.src("css/index.less",{base:"css"}).pipe(less()).pipe(gulp.dest("css"));
});

gulp.watch("js/*.jsx",()=>{
    gulp.src("js/*.jsx",{base:"js"}).pipe(plumber()).pipe(babel({presets:["@babel/preset-react"]})).pipe(gulp.dest("js"));
});