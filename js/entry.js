//EntryTop(object data)
//data: array of arrays of data. will randomise each array before pushing them all.
class EntryTop extends React.Component {
  constructor(props) {
    super(props);
    this.flattenedData = [];

    for (var x = 0, l = this.props.data.length; x < l; x++) {
      randomiseArray(this.props.data[x]);
      this.flattenedData.push(...this.props.data[x]);
    }
  }

  render() {
    return React.createElement(React.Fragment, null, this.flattenedData.map((x, i) => {
      return React.createElement(Entry, {
        data: x,
        key: i
      });
    }));
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

    if (!this.props.data.imgtags) {
      this.props.data.imgtags = [];
    }

    return React.createElement("div", {
      className: "entry"
    }, React.createElement("img", {
      src: this.props.data.img
    }), React.createElement("h2", null, this.props.data.title, React.createElement("span", null, this.props.data.imgtags.map((x, i) => {
      return React.createElement("img", {
        src: `tagicons/${x}.png`,
        key: i,
        title: x
      });
    }))), React.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: this.props.data.description
      }
    }), React.createElement("a", {
      className: githubData.class,
      href: githubData.href
    }, githubData.text[githubData.textIndex]), (() => {
      var additionalLinks = []; //if there is a site link

      if (this.props.data.site) {
        additionalLinks.push(React.createElement("a", {
          href: this.props.data.site,
          key: "additional1"
        }, "visit this site"));
      } //if there is a powerpoint link


      if (this.props.data.powerpoint) {
        additionalLinks.push(React.createElement("a", {
          href: this.props.data.powerpoint,
          key: "additional2"
        }, "google drive presentation"));
      }

      return additionalLinks;
    })());
  }

}