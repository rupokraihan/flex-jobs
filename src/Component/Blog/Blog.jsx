import React from 'react';

const Blog = () => {
  return (
    <div className="my-container">
      <div className="bg-purple-300 p-6 rounded-xl mb-8">
        <h1 className="text-3xl font-bold mb-4">
          1.When should use Context api?
        </h1>
        <p className="text-xl font-medium">
          Answer: The Context API in React should be used when data or state
          that needs to be shared across multiple components in your
          application.Context API is a React built-in feature. Context API can
          solve many problems that modern applications face, related to state
          management. <br /> example, props drilling . <br />
          The props drilling problem occurs when you pass a prop somewhere down
          the tree. When a project grows, data passing through props.
          <br />
          Using the Context API, you can create a context object that holds the
          shared data or state, and then provide that context to any component
          that needs it.Context API can be used when you need to update the
          state of multiple components at the same time.
          <br />
          In summary, the Context API should be used when you have complex state
          that needs to be shared between multiple components and prop drilling
          is becoming difficult to manage.
        </p>
      </div>

      <div className="bg-purple-300 p-6 rounded-xl mb-8">
        <h1 className="text-3xl font-bold mb-4">
          2.What is Custom Hook in react?
        </h1>
        <p className="text-xl font-medium">
          Answer: In React, a custom hook is a function that allows you to reuse
          logic across different components. It's essentially a JavaScript
          function that uses some of the built-in React hooks. custom hook can
          be shared between components. <br />
          To create a custom hook in React, simply define a function that uses
          one or more of the built-in hooks and then return the values need.
          Then import and use this custom hook in any component that needs it.
          <br />
          By creating a custom hook reuse this functionality throughout
          application without having to duplicate code or manage complex state
          logic in each component. This can help keep your code DRY (Don't
          Repeat Yourself) and reduce code duplication.
          <br />
          Overall, custom hooks can help you to write cleaner, more reusable
          code in React by encapsulating functionality and making it easy to
          share across components and also Custom hooks are a powerful tool for
          creating reusable logic in React applications.
        </p>
      </div>
      <div className="bg-purple-300 p-6 rounded-xl mb-8">
        <h1 className="text-3xl font-bold mb-4">
          3.What is useRef and what work it?
        </h1>
        <p className="text-xl font-medium">
          Answer: In React, useRef is a hook that provides a way to create a
          mutable reference that persists across component renders. It can be
          used to store a reference to a DOM element or any other value that
          needs to persist across renders.
          <br />
          useRef returns a mutable ref object that can hold a value. The ref
          object has a current property that can be read and modified. When you
          modify the current property of the ref object, it does not trigger a
          re-render of the component, unlike state or props updates. <br />
          To use useRef, first need to call the hook and provide an initial
          value then access the current value of the reference using the current
          property.So this can be useful for performance optimizations, or for
          cases where need to store a value or element reference across multiple
          renders and useRef a useful tool for storing values that don't need to
          be part of the component state, such as a timer ID, previous props or
          state values, or other arbitrary data.
        </p>
      </div>
      <div className="bg-purple-300 p-6 rounded-xl mb-8">
        <h1 className="text-3xl font-bold mb-4">
          4.What is useMemo and what work it?
        </h1>
        <p className="text-xl font-medium">
          Answer: In React, useMemo is a hook that memoizes the result of a
          function and returns a cached value until one of the dependencies has
          changed. The purpose of useMemo is to optimize performance by avoiding
          unnecessary recalculations of expensive or complex computations.
          <br />
          useMemo can be used to memoize any value that can be computed using a
          function, such as the result of an API call, a filtered list, or a
          sorted array. By memoizing the result can avoid unnecessary
          recalculations and improve the performance for component.
          <br />
          It's important to note that useMemo is not always necessary, and
          should only be used when a computationally expensive or complex
          operation that want to memoize. In some cases, the cost of memoization
          may outweigh the benefits, and may be better off simply recalculating
          the value on each render.
        </p>
      </div>
    </div>
  );
};

export default Blog;