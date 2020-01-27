import React, {Component} from 'react';
import {Counter} from './Counter';

export class Link extends Component {
    state = {
        isShowCounter: false,
    };

    handleLink = (e) => {
        e.preventDefault();
        this.setState(({isShowCounter}) => ({isShowCounter: !isShowCounter}));
    };

    render() {
        const {isShowCounter} = this.state;

        return <>
            <p style={{
                fontSize: 'small',
                marginTop: 10,
                marginBottom: 0
            }}>
                <a href="#" onClick={this.handleLink}>
                    {(isShowCounter) ? 'Hide stats' : 'Show stats'}
                </a>
            </p>

            {isShowCounter && <Counter newMessages={this.props.newMessages}
                                       totalMessages={this.props.totalMessages}/>}
        </>
    }
}