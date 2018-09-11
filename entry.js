if (typeof module != "undefined") {
  const React = require("react");

  module.exports = Entry;
}
/*Entry(object data)
  data:{
    img
    title
    description
    github
  }*/


class Entry extends React.Component {
  render() {
    var githubData = {
      class: "",
      href: this.props.data.github,
      text: ["view github", "github unavailable"],
      textIndex: 0
    };

    if (this.props.data.github == "private") {
      githubData.class = "unavailable";
      githubData.href = null;
      githubData.textIndex = 1;
    }

    return React.createElement("div", {
      className: "entry"
    }, React.createElement("img", {
      src: this.props.data.img
    }), React.createElement("h2", null, this.props.data.title), React.createElement("p", null, this.props.data.description), React.createElement("a", {
      className: githubData.class,
      href: githubData.href
    }, githubData.text[githubData.textIndex]));
  }

}