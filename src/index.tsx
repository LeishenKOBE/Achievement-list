import * as React from "react";
import * as ReactDom from "react-dom";

let root: HTMLElement | null = document.getElementById("root");

let props = { className: "title" };
let element = React.createElement("div", props, "hello");

ReactDom.render(element, root);
