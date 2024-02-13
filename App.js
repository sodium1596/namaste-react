import React from "react";
import ReactDOM from "react-dom/client";


// JSX (transpiled before it reached to JS engine) - Parcel - Babel

// JSX -> Babel transpiles it to React.createElement -> ReactElement - JS Object -> HTMLElement(render)
const footer = (<h2 className="head" tabIndex="5">Footer Element</h2>);


// React Functional Component

const TitleComponent = () => (
    <h1 className="head" tabIndex="5">
        Title Component
    </h1>
);

// Component Composition

const HeadingComponent = () => (
    <div id="container">
        <TitleComponent />
        <h2 className="heading">Heading Component</h2>
        {footer}
    </div>
);

// The above can be also written as below
// const HeadingComponent = () => {
//     return <h1>Recat Functional Component</h1>;
// };


const root = ReactDOM.createRoot(document.getElementById("root"));

// For rendering a React Element
// root.render(heading);

// For rendering a React Component
root.render(<HeadingComponent />);

