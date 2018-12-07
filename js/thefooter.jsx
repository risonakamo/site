//TheFooter()
class TheFooter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.expandProfile=this.expandProfile.bind(this);

    this.state={
      //profileShown:0*
    };

    this.profileImg=React.createRef();
    this.profileImgImg=React.createRef();
  }

  //expands the image.
  //i normally use an animation library but wanted to try
  //basic animation api and didnt want to load in a library
  //for this site, at least
  expandProfile(e)
  {
    e.preventDefault();

    if (this.state.profileShown)
    {
      return;
    }

    this.setState({profileShown:1});

    try
    {
      var animationDuration=500;

      this.profileImg.current.animate([
        {height:"0px",opacity:0},
        {height:`${this.profileImgImg.current.scrollHeight}px`,opacity:1}
      ],{
        duration:animationDuration,
        fill:"forwards",
        easing:"cubic-bezier(0.215, 0.61, 0.355, 1)" //easeoutcubic
      });

      var count=0;

      var scrollDown=setInterval(()=>{
        window.scrollTo(0,document.documentElement.scrollHeight);
        count+=10;

        if (count==animationDuration)
        {
          clearInterval(scrollDown);
        }
      },10);
    }

    //if animation api doesnt work (microsoft edge) :(
    catch (err)
    {
      this.profileImg.current.style.height=`${this.profileImgImg.current.scrollHeight}px`;
      this.profileImg.current.style.opacity=1;

      setTimeout(()=>{
        window.scrollTo(0,document.documentElement.scrollHeight);
      },1);
    }
  }

  render()
  {
    var sharkButtonClass="sharkbutton";
    if (this.state.profileShown)
    {
      sharkButtonClass="sharkbutton clicked";
    }

    return (<>
      <p>Website made by <span className={sharkButtonClass} onClick={this.expandProfile}>Khang</span> of course</p>
      <div className="profile-img" ref={this.profileImg}><img src="img/me.png" ref={this.profileImgImg}/></div>
      <a href="https://github.com/risonakamo/site">This site's github</a>
    </>);
  }
}