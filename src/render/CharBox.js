import React, {Component} from 'react'

class CharBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            char: '',
            result: ''
        }
    }

    checkChar(word, char) {
        let result = ''
        if (word[this.props.index-1] === char) {
            result = 'o'
        } else if (word.indexOf(char) !== -1) {
            result = 'n'
        } else {
            result = 'x'
        }
        this.setState({
            char: char,
            result: 'char-result-' + result
        })
    }

    inputChar(char) {
        this.setState({
            char: char
        })
    }

    render() {
        return (
            <div className={this.state.result}>{this.state.char}</div>
        )
    }
}

export default CharBox