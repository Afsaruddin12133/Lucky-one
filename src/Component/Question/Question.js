import React from 'react';

const Question = () => {
    return (
        <div>
           <h1> * How does React Work?</h1>
           <p><b>Ans.</b>React is a javascript libraries.React contains  reusable JavaScript code we called it components.React have syntactic sugar in JSX it is creating very specific JavaScript objects.But look like html but it is not a html.It Make tree to Virtual dom and compairing real dom. React don't re-render hole application it work work hot render what we need. </p>
           <h1> * Different between Props and State?</h1>
           <b>Ans...</b> <br />
           <h2><u>Props :</u></h2>
           <h4>Data pass from one component to another conmponent.</h4>
           <h4>Read-only</h4>
           <h4>You can pass anything</h4>
           <h4>You can not modified</h4>
          <h2> <u>State :</u></h2>
           <h4>Data pass within the component.</h4>
           <h4>Read and write</h4>
           <h4>You can pass anything</h4>
           <h4>You can modified within the component</h4>
           <h1> * How useState Work?</h1>
           <p><b>Ans.</b>useState is react hooks. hook does not work class component . it work with functional component.when you need added a state this time you can use useState hooks.You pass the initial state to this function and it returns a variable with the current state value  and another function to update this value. it work useState. </p>
        </div>
    );
};

export default Question;