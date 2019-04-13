import React from 'react';

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <p className="Dialog-title">
                {props.title}
            </p>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

function WelcomeDialog(props) {
    return (
        <Dialog title="Welcome" message="Thank you for visiting our spacecraft!"/>
    )
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}

function Contacts() {
    return <div className="Contacts" />;
}

function Chat() {
    return <div className="Chat" />;
}

function App(props) {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            }
        />
    )
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleChange(e) {
        this.setState({
            login: e.target.value
        });
    }

    handleSignUp(e) {
        alert(`Welcome aboard, ${this.state.login}!`);
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program" message="How should we refer to you?">
                <input type="text" value={this.state.login} onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        );
    }
}

export { WelcomeDialog, App, SignUpDialog };