import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Menu from '../component/Menu';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Home from './Home';
// import Serviecs from './Serviecs';

const MainPage = () => {
  return (
    <>
      <BrowserRouter>
        <div className='MainPage'>
          <div className='main-page-inner'>
            <div className='mainLeft bg-white'>
              <Menu />
            </div>

            <div className='mainRight bg-white '>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/skills' component={Skills} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />

                <Redirect to='/' />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default MainPage;
