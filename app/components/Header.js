var React = require('react');

class Header extends React.Component {
    render() {
        return (
            <div className="navbar">
                <h1>Header</h1>
                <div className="nav-input">
                    <input
                        className="input"
                        placeholder="Austin, TX"
                        type="text"
                        autoComplete="off"/>
                    <button
                        className="button button-success">
                        Get Weather
                    </button>
                </div>
            </div>
        )
    }
}

module.exports = Header;