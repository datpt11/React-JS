import React, { Component } from 'react';
class Arrcordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: true
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }
    render() {
        const { heading, children } = this.props;
        const { isCollapsed } = this.state;
        return (
            <div className="Accordion">
                <div className="Heading" onClick={this.onClick}>
                    <h2>{heading}</h2>
                </div>
                { !isCollapsed && <div className="content">{children}</div> }
            </div>
        );
    }
}
export default Arrcordion;