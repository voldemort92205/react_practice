
const hello = (
    <div>
    <h1>Hello World!!</h1>
    <p>the paragraph</p>
    </div>
);

//ReactDOM.render(<h1>Hello World!!</h1>, document.getElementById("root"))
//ReactDOM.createRoot(document.getElementById("root")).render(hello);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(hello);