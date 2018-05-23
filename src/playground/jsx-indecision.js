console.log("app js is running");

// jsx  - Javascript XML
const app = {
    title: 'Indecision App',
    subtitle: 'This is decision making app',
    options: []
};

function appName(title){
    if(title){
        return <h1>{title}</h1>;
    }
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
  
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const appRoot = document.getElementById('app');


const render = () => {  
    const template = (
        <div>
            <h1>{(app.title ? app.title : 'No title yet').toUpperCase()}</h1>

            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : "No Options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>

            <ol>
                {
                app.options.map((option) => <li key={option}>Item: {option}</li>)
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
    
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();


// TemplateTwo var JSX expression
// use information + location

// const user = {
//     name: 'Luis Pineda',
//     age: '30',
//     location: 'Ft. Lauderdale'
// };

// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>;
//     }
// }

// const templateTwo = (
//     <div>
//         <h1>{(user.name ? user.name : 'Anonymous').toUpperCase()} </h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

