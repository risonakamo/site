window.onload=main;

function main()
{
    ReactDOM.render(React.createElement(Entry,{
        data:{
            img:"test1.png",
            title:"hey",
            description:"adasd",
            github:"ada"
        }
    }),document.querySelector(".holder2"));
}
