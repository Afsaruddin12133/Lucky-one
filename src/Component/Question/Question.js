import React from 'react';

const Question = () => {
    return (
        <div>
           <h1> * How does React Work?</h1>
           <p><b>Ans.</b>React is a javascript libraries.React contains  reusable JavaScript code we called it components. </p>
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
          
        </div>
    );
};

export default Question;