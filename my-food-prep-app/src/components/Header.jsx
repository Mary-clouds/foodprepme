//navigation bar
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header>
            <nav>
                <h1 className="logo">FoodPrepMe</h1>
                <ul className='nav-list'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery List</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;