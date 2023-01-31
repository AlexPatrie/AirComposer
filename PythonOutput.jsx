import React from "react";

const PythonOutput = () => {
    const SCRIPT = `
        def func(x, y):
            return [n for n in range(x * y)] if x < 1 else [n for n in range(round(x / y))]

        a = 5
        b = 6
        print(func(a, b))
    `
    return (
        <div className="App-pythonOutput">
            <py-script dangerouslySetInnerHTML={{__html: SCRIPT}}/>
        </div>
    )
};

export default PythonOutput;





  

