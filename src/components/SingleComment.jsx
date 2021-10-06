import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

// class SingleComment extends React.Component {

//     render() {

//         return (
//             <div key={this.props.id}>
//             <p >{this.props.comment} {this.props.rating}/5</p>
//             </div>
//             )
//   }
// }

const deleteComment = async (asin) => {
  const url = "https://striveschool-api.herokuapp.com/api/comments/";
  const myHeaders = new Headers({
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDgiLCJpYXQiOjE2MzMwMDM5MjEsImV4cCI6MTYzNDIxMzUyMX0.OhncilzE54YO6RtM09jbHh1Dd-2eELntDIQ7MfPkyQ8",
  });
  try {
    let response = await fetch(url + asin, {
      method: "DELETE",
      headers: myHeaders,
    });
    if (response.ok) {
      alert("comment deleted!");
    } else {
      alert("comment NOT deleted!");
    }
  } catch (error) {
    alert("not deleted");
  }
};

const SingleComment = (props) => {
  return (
    <div key={props._id}>
      <ListGroupItem>
        {props.comment} {props.rating}/5
        <Button
        variant="danger"
        className="ml-2"
        onClick = {() => deleteComment(props._id)}
        >Del</Button>
      </ListGroupItem>
    </div>
  );
};

export default SingleComment;
