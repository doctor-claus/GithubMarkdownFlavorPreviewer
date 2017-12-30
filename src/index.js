import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import RawInput from './components/raw_input';
import marked from 'marked';
class App extends Component {
	constructor(props){
		super(props);
		this.state = { value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n'}
	}
	changeText(term){
		this.setState({ value: term });
	}
	markup(value){
		return { __html: marked(value, {sanitize: true})}
	}
	render(){
		return (
			<div className= "row">
				<div className= "col-md-6">
					<RawInput onTextChange = {term => this.changeText(term)} value= {this.state.value}/>
				</div>
				<div className= "col-md-6">
					<span dangerouslySetInnerHTML= {this.markup(this.state.value)} />
				</div>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.querySelector('.container'));
//AIzaSyCoy__H8Xkxej2dEFuXjgV36D-0czkn0AU YT API key