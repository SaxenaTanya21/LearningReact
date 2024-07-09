//Creating nested HTML Structure inside React code
/*
<div id="parent">
<div id="child">
<h1>I am h1 tag</h1>
<h2>I am h2 tag</h2>
</div>
<div id="child2">
<h3>I am h3 tag</h3>
<h4>I am h4 tag</h4>
</div>
</div>
*/

//Passing single child
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am h1 tag")
//   )
// );

//Passing multiple childs
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "I am h3 tag"),
    React.createElement("h4", {}, "I am h4 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);

//Creating a single HTML TAG----h1 inside React
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React!!"
// );
// root.render(heading);
