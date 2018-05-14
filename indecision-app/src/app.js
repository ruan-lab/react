// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    console.log('form submitted');
    render()
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()* app.options.length);
    const option = app.options[randomNum];
    console.log(randomNum);
}
const appRoot = document.getElementById('app');


const render = () => {
    const appTemplate = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length <= 1} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove all</button>
            <ol>
                { app.options.map((option,key) => <li key={key}>{option}</li> )}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    )
    ReactDOM.render(appTemplate, appRoot);
}

render();