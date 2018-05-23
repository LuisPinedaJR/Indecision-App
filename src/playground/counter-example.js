

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        
        // State for count
        this.state = {
            count: 0
        }
    }
// lines 15-28 is working with localstorage in the browser //
// Nan = not a number //
componentDidMount(){
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
    
        if(!isNaN(count)){
            this.setState(() => ({ count }));
        }
 }
componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
        localStorage.setItem('count', this.state.count);
    }
}


// Adding and Subtracting from state
    handleAddOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
// Resetting state back to 0
    handleReset(){
        this.setState(() => {
            return {
                count : 0
            }
        });
    }

// Rendering to state calling referencing - + reset functions
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count-- ;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {

//     const templateTwo = (
//         <div>
//             <h1>Count: {count} </h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>RESET</button>
//         </div>
    
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();