import Card from 'react-bootstrap/Card'
import { Component } from 'react'
import Comments from './Comments'




/*





8.Convert your SingleBook component to a class, and create its state containing a selected 
boolean property.
Clicking on a SingleBook should toggle its selected state property. If the selected property
is true, the SingleBook should have some styling that reflects that state change, visually.




*/


class MyCard extends Component {
  state = {
    selected: false

  }

  handleToggle = () => {
    this.setState({ selected: !this.state.selected });
  }

  render() {

    return (

      


        <Card  onClick={this.handleToggle} className={this.state.selected ? "selected" : null} key={this.props.book.asin} >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            {
              this.state.selected &&
              <Comments query={this.props.book.asin}/> 
            }
          </Card.Body>
        </Card>



    )

  }

}




export default MyCard