# Easy Accordion

A responsive accordion and associated navigation.

There is an accordion element, which can take an array of arrays of articles, together with a navigation element. The two can be used in tandem or independently. They are responsive in the sense that they can be easily styled to work together with only one of them showing at any one time. They can also be made to respond to changes in the browser's address bar.   

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). What this means is that Easy *will* now help you with the architecture of your large application. So although Easy elements will continue to work standalone, their use with Juxtapose is recommended.

### Related projects

- [Easy](https://github.com/djalbat/easy) Elements that abstract away from the DOM.
- [Easy Layout](https://github.com/djalbat/easy-layout) Layout elements that work with CSS flexbox.
- [Easy File System](https://github.com/djalbat/easy-file-system) A file system explorer and a rubbish bin.
- [Easy RichTextarea](https://github.com/djalbat/easy-richTextarea) A textarea element that handles and hands off events well.
- [Easy Drag and Drop](https://github.com/djalbat/easy-drag-and-drop) Drag and drop functionality for Easy elements.

## Installation

You can install Easy Layout with [npm](https://www.npmjs.com/):

    npm install easy-accordion

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy-accordion.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding`src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

A view class that utilises both the accordion and associated navigation is shown below:

```
import Accordion from "./accordion";
import ArticlesArray from "./articlesArray";
import AccordionNavigation from "./navigation/accordion";

class View extends Element {
  showArticle(uri, instantly, callback) {
    this.updateAccordion(uri, instantly, callback);
    this.updateAccordionNavigation(uri);
  }

  childElements() {
    const showArticle = this.showArticle.bind(this);
    
    return ([

      <Accordion ArticlesArray={ArticlesArray} showArticle={showArticle} />,
      <AccordionNavigation ArticlesArray={ArticlesArray} showArticle={showArticle} />

    ]);
  }

  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
```

Note that local instances of both the accordion and associated navigation have been used in order that custom styles can be applied. This is explained in greater detail in the section on styles that comes next. You must pass a `showArticles()` method to both as well as an array of arrays of articles:

```
const ArticlesArray = [ ///
  [ HomeAccordionArticle, LinksAccordionArticle, ButtonsAccordionArticle, HeadingsAccordionArticle ],
  CodesAccordionArticle,
  InputsAccordionArticle,
  SectionsAccordionArticle
];

export default ArticlesArray;
```

In fact not all the elements of the outermost array need to be arrays, single articles are coerced into arrays automatically. For genuine arrays the first element is taken as the main article in that it's title is shown in the accordion and navigation buttons. There is no second level navigation to enable the other articles to be shown. However, if they are shown by means of links or whatever, both the accordion and navigation will respond by enabling the button of corresponding to the first article in the array, thus allowing the user to navigate back to it. 

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
