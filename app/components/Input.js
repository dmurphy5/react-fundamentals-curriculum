var React = require('react');

class Input extends React.Component {
    render() {
        return (
            <div className='input-container'>
                <h1>Enter a City and State</h1>
                <form>
                    <input
                        className="input"
                        placeholder="Austin, TX"
                        type="text"
                        autoComplete="off"/>
                    <button 
                        className="button button-success"
                        type="submit">
                        Get Weather
                    </button>
                </form>
            </div>
        )
    }
}

module.exports = Input;