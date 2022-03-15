import React, {Component} from 'react'
import Board from './render/Board'
import Layout from './render/Layout'
import df from './data.json'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            word: '',
            input: '',
            inword: '',
            round: 0,
            status: 'init'
        }
        this.boardRef = React.createRef()
        this.newLayout = React.createRef()
    }

    componentDidMount() {
        window.addEventListener('keydown', this.keyInput)
    }

    getWord() {
        return df.data[Math.random() * df.data.length | 0].toUpperCase()
    }

    reset = () => {
        if (this.state.status !== 'init') {
            this.boardRef.current.reset()
        }
    }

    newGame = (e) => {
        this.reset()
        const st = {
            word: this.getWord(),
            round: 1,
            status: 'processing',
        }
        this.setState(st)
        this.boardRef.current.setState(st)
    }

    send = (e) => {
        let status = this.state.status,
            round = this.state.round
        if (this.state.word === this.state.input) {
            status = 'success'
        } else if (this.state.round === 6) {
            status = 'fail'
        }
        this.setState({
            inword: this.state.input,
            input: '',
            status: status,
            round: round + 1
        })
    }

    onlyEng = (e) => {
        const txt = document.getElementsByClassName('word-text')[0]
        txt.value = txt.value.replace(/[^A-Za-z]/ig, '')
    }

    keyInput = (e) => {
        if (this.state.status === 'processing') {
            if (e.keyCode === 8 
                && this.state.input.length > 0
            ) {
                if (this.state.input.length === 1) {
                    var input = ''
                } else {
                    var input = this.state.input.substring(0, this.state.input.length - 1)
                }
                this.setState({
                    input: input
                })
            } else if (e.keyCode === 13 
                && this.state.input.length === 5
            ) {
                this.send()
            } else if (e.keyCode > 64 && e.keyCode < 91 
                && this.state.input.length < 5
            ) {
                this.setState({
                    input: this.state.input + e.key.toUpperCase()
                })
            }
        }
    }

    render() {
        return (
            <React.StrictMode>
                <Layout status={this.state.status} func={this.newGame} ref={this.newLayout}></Layout>
                <div id='board-wrap'>
                    <Board
                        round={this.state.round}
                        word={this.state.word}
                        ref={this.boardRef}
                        inword={this.state.inword}
                        input={this.state.input}
                    />
                </div>
            </React.StrictMode>
        );
    }
}

export default App