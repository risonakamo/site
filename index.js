window.onload=main;

function main()
{
    getData("entrydata.json",(data)=>{
        ReactDOM.render(React.createElement(React.Fragment,null,
            data.map((x,i)=>{
                return React.createElement(Entry,{key:i,data:x});
            })
        ),document.querySelector(".entry-holder"));
    });
}

function getData(file,callback)
{
    var r=new XMLHttpRequest();
    r.open("GET",file);

    r.onreadystatechange=()=>{
        if (r.readyState==4)
        {
            callback(JSON.parse(r.response));
        }
    };

    r.send();
}