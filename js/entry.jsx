//EntryTop(object data)
//data: array of arrays of data. will randomise each array before pushing them all.
class EntryTop extends React.Component
{
  constructor(props)
  {
    super(props);

    this.flattenedData=[];
    for (var x=0,l=this.props.data.length;x<l;x++)
    {
      randomiseArray(this.props.data[x]);
      this.flattenedData.push(...this.props.data[x]);
    }
  }

  render()
  {
    return (<>
      {this.flattenedData.map((x,i)=>{
        return <Entry data={x} key={i}/>
      })}
    </>);
  }
}

/*Entry(object data)
  data:{
    img
    title
    description
    github: give string "private" to denote private unavailable github
    imgtags: array of type tags that correspond to images in tagicons dir
    site?: optional link to directly navigate the site if the entry is for a site
    powerpoint?: optional link for powerpoint
  }*/
class Entry extends React.Component
{
  render()
  {
    var githubData={
      class:"",
      href:this.props.data.github,
      text:["view github","github unavailable"],
      textIndex:0
    }

    if (this.props.data.github=="private")
    {
      githubData.class="unavailable";
      githubData.href=null;
      githubData.textIndex=1;
    }

    if (!this.props.data.imgtags)
    {
      this.props.data.imgtags=[];
    }

    return (
      <div className="entry">
        <img src={this.props.data.img}/>
        <h2>
          {this.props.data.title}
          <span>
            {this.props.data.imgtags.map((x,i)=>{
              return <img src={`tagicons/${x}.png`} key={i} title={x}/>
            })}
          </span>
        </h2>
        <p dangerouslySetInnerHTML={{__html:this.props.data.description}}></p>
        <a className={githubData.class} href={githubData.href}>{githubData.text[githubData.textIndex]}</a>
        {(()=>{
          var additionalLinks=[];

          //if there is a site link
          if (this.props.data.site)
          {
            additionalLinks.push(<a className="sitelink"
              href={this.props.data.site} key="additional1">visit this site</a>);
          }

          //if there is a powerpoint link
          if (this.props.data.powerpoint)
          {
            additionalLinks.push(<a className="sitelink" href={this.props.data.powerpoint}
              key="additional2">google drive presentation</a>);
          }

          return additionalLinks;
        })()}
      </div>
    );
  }
}