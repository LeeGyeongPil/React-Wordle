import React, {Component} from 'react'
import CharBox from './CharBox'

class Row extends Component {
    constructor(props) {
        super(props)
        this.charRef = JSON.parse(JSON.stringify(Array(5).fill(React.createRef())));
    }

    checkWord = (word, inword) => {
        for (var idx in inword) {
            this.charRef[idx].current.checkChar(word, inword[idx])
        }
    }

    inputWord = (input) => {
        for (var idx = 0;idx < 5;idx++) {
            this.charRef[idx].current.inputChar(input[idx] || '')
        }
    }

    reset() {
        this.charRef.forEach((ref) => {
            ref.current.setState({ char: '', result: '' })
        })
    }

    render() {
        return (
            <div className='wordle-row'>
                <CharBox round={this.props.round} index={1} ref={this.charRef[0]} />
                <CharBox round={this.props.round} index={2} ref={this.charRef[1]}/>
                <CharBox round={this.props.round} index={3} ref={this.charRef[2]}/>
                <CharBox round={this.props.round} index={4} ref={this.charRef[3]}/>
                <CharBox round={this.props.round} index={5} ref={this.charRef[4]}/>
            </div>
        )
    }
}

export default Row