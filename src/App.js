import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import './components/singleBook.css'
// import MyCard from './components/SingleBook';
// import FantasyBooks from './data/fantasy.json'




function App() {
  return (
    <div>
    <WarningSign text='whatever'/>
    <MyBadge text='MyBadge' color='primary'/>
    {/* <MyCard book={FantasyBooks[1]} /> */}
    <BookList/>
    </div>
  )
}

export default App;
