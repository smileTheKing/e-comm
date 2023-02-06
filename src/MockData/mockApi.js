  // eslint-disable-next-line
 
 const mockData =  [
    {
        q:'Can you explain what React is and why it is used?',
        a:'React is a JavaScript library for building user interfaces. It is used for creating reusable components that can be rendered on the front-end of a web application. This allows developers to create complex and dynamic interfaces without having to write a lot of code.'
    },
    {
        q:'Can you explain the difference between a "state" and a "props" in React?',
        a:'Props are input values that are passed to a React component from its parent. They are used to configure the behavior and appearance of a component. On the other hand, state is an internal data store that is managed by the component itself. It is used to track changes to the component\'s data and determine when the component needs to re-render itself.'
    },
    {
        q:'How does React\'s virtual DOM work and why is it useful?',
        a:'React\'s virtual DOM is a JavaScript representation of the actual DOM. It allows React to efficiently update the real DOM by only making changes to the parts of the DOM that have actually changed, rather than re-rendering the entire page. This makes React applications faster and more performant.'
    },
    {
        q:'Can you explain the difference between a "function" and a "class" component in React?',
        a:'Function components are simple JavaScript functions that accept props as input and return a React element. On the other hand, class components are JavaScript classes that extend the React.Component class. They provide more features and capabilities, such as local state, lifecycle methods, and the ability to handle user events.'
    },
    {
        q:'Can you explain what a higher-order component is in React and how it is used?',
        a:'A higher-order component (HOC) is a function that takes a component as an argument and returns a new component. HOCs are used to add additional functionality to existing components, such as managing state, handling events, or applying additional styles. They allow developers to reuse code and abstract common logic into a reusable component.'
    },
    {
        q:'What are some of the important features of React?',
    // eslint-disable-next-line   
        a:"React has multiple features that are used for unique purposes. The important ones are as mentioned below:\n React makes use of a single-direction data flow model.\n\
        It deals with complete server-side data processing and handling.\
        React uses Virtual DOM that has many advantages of its own."
    }
]

export default mockData;
