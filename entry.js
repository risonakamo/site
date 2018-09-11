const React = require("react");
/*Entry(object data)
  data:{
    img
    title
    description
    github
  }*/


class Entry extends React.Component {
  render() {
    return React.createElement("div", {
      className: "entry"
    }, React.createElement("img", {
      src: this.props.data.img
    }), React.createElement("h2", null, this.props.data.title), React.createElement("p", null, this.props.data.description), React.createElement("a", {
      href: this.props.data.github
    }, "view github"));
  }

}

module.exports = Entry;