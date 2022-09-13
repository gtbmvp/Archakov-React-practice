import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import posts from "../data/posts";

const Home = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      {posts.map((post, idx) => (
        <Col key={post.id}>
          <Card>
            <Card.Img variant="top" src={post.imageUrl} />
            <Card.Body>
              <Card.Title>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </Card.Title>
              <Card.Text>{post.text.slice(0, 100)}...</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Home;
