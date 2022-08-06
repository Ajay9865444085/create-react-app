import React from "react";
import './App.css';
class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: "" };
    }
     function App() {
    //Initializing the state
    const [state, setState] = React.useState({ sume: 0 });

    const changesume = () => {
        let currentsume = state.sume + 1;
        setState({ ...state, sume: currentsume });

    }

    return (
        <div className="App">
            <header className="App-header">
                <p>{state.sume}</p>
                <button onClick={changesume} >currentsume</button>


            </header>
        </div>
    );
}
export default App;
