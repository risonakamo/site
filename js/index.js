window.onload=main;

function main()
{
    getData("entrydata.json",(data)=>{
        ReactDOM.render(React.createElement(EntryTop,{data}),document.querySelector(".entry-holder"));
    });

    toggleResume();
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

//shuffle array in place
function randomiseArray(array)
{
    var t;
    var ri;
    for (var x=array.length-1;x>0;x--)
    {
        ri=randint(0,x);
        t=array[x];
        array[x]=array[ri];
        array[ri]=t;
    }
}

function randint(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;
}

function toggleResume()
{
    var topbox=document.querySelector(".top-box");
    var seperatorText=document.querySelector(".show-label");
    var seperatorTextStrings=["Show Resume Information","Hide Resume Information"];
    var seperatorTextIndex=0;
    document.querySelector(".seperator").addEventListener("click",(e)=>{
        topbox.classList.toggle("expanded");

        seperatorTextIndex=seperatorTextIndex?0:1;
        seperatorText.innerText=seperatorTextStrings[seperatorTextIndex];
    });
}