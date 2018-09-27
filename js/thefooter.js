class TheFooter extends React.Component {
  constructor(props) {
    super(props);
    this.expandProfile = this.expandProfile.bind(this);
    this.profileImg = React.createRef();
    this.profileImgImg = React.createRef(); //this.profileShown*
  }

  expandProfile(e) {
    e.preventDefault();

    if (this.profileShown) {
      return;
    }

    this.profileShown = 1;
    this.profileImg.current.animate([{
      height: "0px",
      opacity: 0
    }, {
      height: this.profileImgImg.current.scrollHeight + "px",
      opacity: 1
    }], {
      duration: 800,
      fill: "forwards",
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" //easeoutcubic

    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("p", null, "Website made by: ", React.createElement("a", {
      href: "",
      onClick: this.expandProfile
    }, "Me"), " of course. Who else?"), React.createElement("div", {
      className: "profile-img",
      ref: this.profileImg
    }, React.createElement("img", {
      src: "img/me.jpg",
      ref: this.profileImgImg
    })), React.createElement("a", {
      href: "https://github.com/risonakamo/site"
    }, "This site's github"));
  }

}