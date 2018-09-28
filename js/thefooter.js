class TheFooter extends React.Component {
  constructor(props) {
    super(props);
    this.expandProfile = this.expandProfile.bind(this);
    this.state = {//profileShown:0*
    };
    this.profileImg = React.createRef();
    this.profileImgImg = React.createRef();
  }

  expandProfile(e) {
    e.preventDefault();

    if (this.state.profileShown) {
      return;
    }

    this.setState({
      profileShown: 1
    });
    var animationDuration = 500;
    this.profileImg.current.animate([{
      height: "0px",
      opacity: 0
    }, {
      height: this.profileImgImg.current.scrollHeight + "px",
      opacity: 1
    }], {
      duration: animationDuration,
      fill: "forwards",
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" //easeoutcubic

    });
    var count = 0;
    var scrollDown = setInterval(() => {
      window.scrollTo(0, document.documentElement.scrollHeight);
      count += 10;

      if (count == animationDuration) {
        clearInterval(scrollDown);
      }
    }, 10);
  }

  render() {
    var sharkButtonClass = "sharkbutton";

    if (this.state.profileShown) {
      sharkButtonClass = "sharkbutton clicked";
    }

    return React.createElement(React.Fragment, null, React.createElement("p", null, "Website made by: ", React.createElement("span", {
      className: sharkButtonClass,
      onClick: this.expandProfile
    }, "Me"), " of course. Who else?"), React.createElement("div", {
      className: "profile-img",
      ref: this.profileImg
    }, React.createElement("img", {
      src: "img/me.png",
      ref: this.profileImgImg
    })), React.createElement("a", {
      href: "https://github.com/risonakamo/site"
    }, "This site's github"));
  }

}