import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



import FantasyBooks from "../data/fantasy.json";

import FormControl from "react-bootstrap/FormControl";
import SingleBook from "./SingleBook";


const BookList = (props) => {
  const [title, setTitle] = useState("")
  const [filteredBooks, setfilteredBooks] = useState(FantasyBooks)
  

  const filteredBooksList = (query) => {
    let filteredBooks = FantasyBooks.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );

    setfilteredBooks( filteredBooks );
  };

  return (
    <Container>
      <Row>
        <FormControl className="my-3"
          placeholder="Book Title"
          aria-label="Book Title"
          value={title}
          onChange={
            // this will happen every time I input a keystroke
            (e) => {
              setTitle(e.target.value)
              filteredBooksList(e.target.value)
              
            }
          }
        />

        {filteredBooks.map((book) => (
          <Col key={book.asin} xs={3}>
            <SingleBook book={book} />
          </Col>
        ))} 
      </Row>
    </Container>
  );
}
  



// class BookList extends Component {
  // state = {
  //   title: "",
  //   filteredBooks: FantasyBooks,
  // };

  // filtreBooksList = (query) => {
  //   let filteredBooks = FantasyBooks.filter((book) =>
  //     book.title.toLowerCase().includes(query.toLowerCase())
  //   );

  //   this.setState({ filteredBooks });
  // };

//   render() {
//     return (
//       <Container>
//         <Row>
//           <FormControl
//             placeholder="Book Title"
//             aria-label="Book Title"
//             value={this.state.title}
//             onChange={
//               // this will happen every time I input a keystroke
//               (e) => {
//                 this.setState({
//                   // with the ... your making a copy of all the properties
//                   // already existing into this.state.reservation
//                   title: e.target.value,
//                   // and then you're just overwriting ONE property
//                 });
//                 this.filtreBooksList(e.target.value)
//               }
//             }
//           />

//           {this.state.filteredBooks.map((book) => (
//             <Col key={book.asin} xs={2}>
//               <SingleBook book={book} />
//             </Col>
//           ))} 
//         </Row>
//       </Container>
//     );
//   }
// }

export default BookList;