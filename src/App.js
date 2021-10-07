import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import WarningSign from './components/WarningSign';
// import MyBadge from './components/MyBadge';
import BookList from "./components/BookList";
import "./components/singleBook.css";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import MyCard from './components/SingleBook';
// import FantasyBooks from './data/fantasy.json'
import Registration from "./components/Registration";

function App() {
  return (
    <div>
      <Router>
        <MyNavbar brand="StriveBooks" />
        <Route path="/" exact component={() => {

          return <BookList />
        }}/>
        <Route path="/Registration" component={Registration} />
        
          
          
        

      {/* <WarningSign text='whatever'/> */}
      {/* <MyBadge text='MyBadge' color='primary'/> */}
      {/* <MyCard book={FantasyBooks[1]} /> */}
      
      </Router>
    </div>
  );
}

export default App;
