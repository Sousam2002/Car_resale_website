import {Outlet , Link} from 'react-router-dom';
import { Fragment } from 'react';
import './navigation.style.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg' ;
const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to = '/'>
            <CrwnLogo className = 'logo'/>
            </Link>
          
          <div className='nav-links-container'>
            <Link className='nav-link' to='/'>
            SHOP
            </Link>
          </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  };

export default Navigation;