import React, {Component} from 'react'
import Row from './Row'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            round: 0,
            word: ''
        }
        this.rowRef = JSON.parse(JSON.stringify(Array(6).fill(React.createRef())));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.input !== prevProps.input && this.props.round === prevProps.round) {
            this.rowRef[prevProps.round-1].current.inputWord(this.props.input)
        } else if (this.props.round !== prevState.round && prevProps.round > 0 && this.props.input == '') {
            this.rowRef[prevProps.round-1].current.checkWord(this.state.word, this.props.inword)
        } 
    }

    reset() {
        this.rowRef.forEach((ref) => {
            ref.current.reset()
        })
        this.setState({
            round: 0,
            word: ''
        })
    }

    render() {
        return (
            <React.StrictMode>
                <Row round={1} ref={this.rowRef[0]} />
                <Row round={2} ref={this.rowRef[1]} />
                <Row round={3} ref={this.rowRef[2]} />
                <Row round={4} ref={this.rowRef[3]} />
                <Row round={5} ref={this.rowRef[4]} />
                <Row round={6} ref={this.rowRef[5]} />
            </React.StrictMode>
        )
    }
}

export default Board