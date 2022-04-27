import NavBarList from '../navbar/NavBarList';
import Profile from '../navbar/Profile';
import Shopping from '../navbar/Shopping';
import './NavBar.css';

const NavBar = () => {

    return (
        <nav>
            <ul>
                <NavBarList links={['Home','About', 'Contact']}/>
            </ul>

            <div className='profile'>
                <Shopping />
                <Profile />
            </div>
        </nav>
    );
}
 
export default NavBar;