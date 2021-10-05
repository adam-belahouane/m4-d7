import React from "react";

class SingleComment extends React.Component {
    
    
    render() {
        
        return (
            <div key={this.props.id}>
            <p >{this.props.comment} {this.props.rating}/5</p>
            </div>
            )
  }
}

export default SingleComment;
