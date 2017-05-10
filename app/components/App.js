var React = require('react');
var Header = require('./Header');
var Input = require('./Input');

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Input />
            </div>
        )
    }
}

module.exports = App;