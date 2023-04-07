import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Projects.css'

const Projects = () => {

    return (
        <div className='cardcon'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://kinsta.com/wp-content/uploads/2020/04/code-review-tools.png" />
                <Card.Body>
                    <Card.Title>React Js</Card.Title>
                    <Card.Text>
                        MovieLand
                    </Card.Text>
                    <a href="https://react-movie-land.vercel.app/"><Button>Live Preview</Button></a>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Projects