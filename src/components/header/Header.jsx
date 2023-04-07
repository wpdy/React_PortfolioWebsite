import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.css'

const Header = () => {
    return (
        <Navbar className='header'>
            <Container>
                <Nav className='navnames'>
                    <Link to="/" className='nav-link linkname'>Home</Link>
                    <Link to="/skills" className='nav-link linkname'>Skills</Link>
                    <Link to="/projects" className='nav-link linkname'>Projects</Link>
                    <Link to="/contacts" className='nav-link linkname'>Contacts</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Header
