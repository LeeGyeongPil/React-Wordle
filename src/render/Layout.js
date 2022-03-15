import React, {Component} from 'react'

class Layout extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.status === 'processing') {
            document.getElementsByClassName('layout-form')[0].classList.add('disable')
        } else if (this.props.status !== 'init'){
            if (this.props.status === 'success') {
                document.querySelector('.layout-form span').innerText = 'Congratulation!'
            } else if (this.props.status === 'fail') {
                document.querySelector('.layout-form span').innerText = 'GAME OVER'
            }
            document.getElementsByClassName('layout-form')[0].classList.remove('disable')
        }
    }

    render() {
        return (
            <div className='layout-form'>
                <div className='bg'></div>
                <span></span>
                <button onClick={this.props.func}>New Game</button>
            </div>
        )
    }
}

export default Layout