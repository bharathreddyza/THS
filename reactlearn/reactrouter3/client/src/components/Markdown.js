import React from 'react';
 // import './index.css';
import  ReactMarkdown from 'react-markdown'

import {Remarkable} from 'remarkable';    
// like 
class Markdown extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { 

            value: 'markdown'
        };
    }
   

    handleChange(e) {
        this.setState({ 
            value: e.target.value
        });
    }

    plaintext() {
        const mark = new Remarkable();
        return {__html: mark.render(this.state.value)};
    } 

    render() {
        const input = '# This is a header\n\nAnd this is a paragraph'

        return (
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                <textarea
                    className="input-text"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                />
                </div>
                <div className="output">
                    <h3>Markdown</h3>
                <div 
                    dangerouslySetInnerHTML={this.plaintext()}
                    className="output-text"
                >
                </div>
                </div>                
            </div>
        )
    }
}

 
export default Markdown
