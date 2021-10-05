import React, { useEffect, useState } from "react";
import SingleComment from "./SingleComment";

// class Comments extends React.Component {
//   state = {
//     comments: [],
//   };

//   fetchComments = async (query) => {
//     try {
//       let response = await fetch(
//         "https://striveschool-api.herokuapp.com/api/comments/" + query,
//         {
//           method: "GET",
//           headers: {
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDgiLCJpYXQiOjE2MzMwMDM5MjEsImV4cCI6MTYzNDIxMzUyMX0.OhncilzE54YO6RtM09jbHh1Dd-2eELntDIQ7MfPkyQ8",
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (response.ok) {
//         let data = await response.json();
//         this.setState({
//           comments: data
//         })

//         console.log(this.state.comments)

//         console.log(data);

//       } else {
//         console.log("no");
//       }
//     } catch {
//       console.log("error");
//     }
//   };

//   componentDidMount = () => {
//     this.fetchComments(this.props.query);
//   };

//   render() {
//     return (
//       <>

//         {this.state.comments.map(e => {
//           return <SingleComment key={e._id} comment={e.comment} rating={e.rate} id={e._id}/>
//         } )}
//       </>
//     );
//   }
// }

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const url = "https://striveschool-api.herokuapp.com/api/comments/";

    const fetchComments = async (query) => {
      try {
        let response = await fetch(
          url + query,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDgiLCJpYXQiOjE2MzMwMDM5MjEsImV4cCI6MTYzNDIxMzUyMX0.OhncilzE54YO6RtM09jbHh1Dd-2eELntDIQ7MfPkyQ8",
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          let data = await response.json();
          this.setState({
            comments: data,
          });

          console.log(this.state.comments);

          console.log(data);
        } else {
          console.log("no");
        }
      } catch {
        console.log("error");
      }
    };

    fetchComments(this.props.query)
  }, []);

  
};

export default Comments;
