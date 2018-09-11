// const React=require("react");

/*Entry(object data)
  data:{
    img
    title
    description
    github
  }*/
class Entry extends React.Component
{
  render()
  {
    return (
      <div className="entry">
        <img src={this.props.data.img}/>
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.description}</p>
        <a href={this.props.data.github}>view github</a>
      </div>
    );
  }
}

// module.exports=Entry;