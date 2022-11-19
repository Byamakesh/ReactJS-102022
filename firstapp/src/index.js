import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header'

const App = () => {
    return (
        <div>
            <Header />
            <h1>Hi From React</h1>
            <h2>Test Component</h2>
        </div>
    )
}

// ReactDOM.render(<App />, document.getElementById('root'))

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);