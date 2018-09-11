const React=require("react");
const ReactDOMServer=require("react-dom/server");
const Entry=require("./entry");

console.log(ReactDOMServer.renderToString(React.createElement(Entry,{
    data:{
        img:"a",
        title:"aa",
        description:"aa",
        github:"adasd"
    }
})));