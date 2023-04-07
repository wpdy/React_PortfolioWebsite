import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Projects.css'

const Projects = () => {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
      };

    return (
        <div className='cardcon'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://kinsta.com/wp-content/uploads/2020/04/code-review-tools.png" />
                <Card.Body>
                    <Card.Title>React Js</Card.Title>
                    <Card.Text>
                        MovieLand
                    </Card.Text>
                    <Button onClick={() => openInNewTab('https://react-movie-land.vercel.app/')}>Live Preview</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Projects