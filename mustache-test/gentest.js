const React=require("react");
const ReactDOMServer=require("react-dom/server");

const gulp=require("gulp");
const mustache=require("gulp-mustache");

const Entry=require("../entry");

var data=ReactDOMServer.renderToString(React.createElement(Entry,{
    data:{
        img:"a",
        title:"aa",
        description:"aa",
        github:"adasd"
    }
}));

gulp.src("test.html",{base:"."})
    .pipe(mustache({
        entryData:data
    }))
    .pipe(gulp.dest("build"));
