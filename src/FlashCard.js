import React, { Component } from 'react';
import './styles.scss';

class FlashCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sideA: Object.assign({}, this.props.sideA),
            sideB: Object.assign({}, this.props.sideB)
        };
    }

    render() {
        return (
            <div className="flashcard">
                <div className="flashcard__flipper">
                    <div className="flashcard__sideA">
                        SIDE A
                    </div>
                    <div className="flashcard__sideB">
                        SIDE B
                    </div>
                </div>
            </div>
        )
    }
}

export default FlashCard;