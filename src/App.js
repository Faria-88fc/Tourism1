
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddNewService from './Pages/AddNewService/AddNewService';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import MyBookings from './Pages/MyBookings/MyBookings';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders'
import TripBooking from './Pages/TripBooking/TripBooking';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/addnewservice'>
            <AddNewService></AddNewService>
          </PrivateRoute>
          <Route path='/login'>
                <Login></Login>
          </Route>
          <Route path='/manageAllBookings'>
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <PrivateRoute path='/myBookings'>
          <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute path='/pk/:pkkey'>
            <TripBooking></TripBooking>
          </PrivateRoute>
          <Route path='*'>
                <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

        </div>
        );
}

        export default App;
