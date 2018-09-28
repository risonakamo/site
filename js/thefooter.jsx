class TheFooter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.expandProfile=this.expandProfile.bind(this);

    this.profileImg=React.createRef();
    this.profileImgImg=React.createRef();
    //this.profileShown*
  }

  expandProfile(e)
  {
    e.preventDefault();

    if (this.profileShown)
    {
      return;
    }

    this.profileShown=1;

    this.profileImg.current.animate([
      {height:"0px",opacity:0},
      {height:this.profileImgImg.current.scrollHeight+"px",opacity:1}
    ],{
      duration:800,
      fill:"forwards",
      easing:"cubic-bezier(0.215, 0.61, 0.355, 1)" //easeoutcubic
    });
  }

  render()
  {
    return (<>
      <p>Website made by: <a href="" onClick={this.expandProfile}>Me</a> of course. Who else?</p>
      <div className="profile-img" ref={this.profileImg}><img src="img/me.png" ref={this.profileImgImg}/></div>
      <a href="https://github.com/risonakamo/site">This site's github</a>
    </>);
  }
}