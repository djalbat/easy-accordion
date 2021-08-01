"use strict";

import { AccordionArticle } from "../../../index";  ///

import { linksURI } from "../../uris";
import { linksPath } from "../../paths";

export default class LinksAccordionArticle extends AccordionArticle {
  childElements() {
    return (

      <div>
        <h1>
          Links
        </h1>
      </div>

    );
  }

  static uri = linksURI;

  static path = linksPath;

  static title = "Links";

  static defaultProperties = {
    className: "code"
  };
}
