// let rootEl= document.getElementById('root');

// // let h1=React.createElement('h1',null,"Hello From React");
// let h1=React.createElement('h1',{id:"adi", className:"123"},"Hello From React");

// // when we use React we use className in place of class because class is reserved keyword in JS
// let root= ReactDOM.createRoot(rootEl);
// root.render(h1);

//-------------------------------------------------------------------



// let rootEl= document.getElementById('root');

// // let h1=React.createElement('h1',null,"Hello From React");
// let h1=React.createElement('div',null,React.createElement('div',null,React.createElement('h1',null,"Mai hu div ke andar")));

// // when we use React we use className in place of class because class is reserved keyword in JS
// let root= ReactDOM.createRoot(rootEl);
// root.render(h1);







//-----------------------------------------


let rootEl= document.getElementById('root');

// let h1=React.createElement('h1',null,"Hello From React");
let h1=<div>
    <div>
        <h1>Hello From h1.1</h1>
    </div>
    <div>
        <h1>Hello From h1.2</h1>
    </div>
</div>

// when we use React we use className in place of class because class is reserved keyword in JS
let root= ReactDOM.createRoot(rootEl);
root.render(h1);

