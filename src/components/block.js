import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const blogData = [
  {
    id: 1,
    image: require("../assets/blog1.jpg"),
    time: "15 Nov 2016",
    title: "Menegers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../assets/blog2.jpg"),
    time: "10 Nov 2016",
    title: "Teachers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../assets/blog3.jpg"),
    time: "07 Nov 2016",
    title: "Director",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
    link: "https://www.twitter.com",
  },
];

function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from blog</h2>
          <div className="subtitle">get your latets news from blog</div>
        </div>
        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id}>
                <div className="holder">
                  <Card>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                      <time>{blog.time}</time>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                      <a href={blog.link} className="btn btn-primary">
                        Read More <i className="fas fa-chevron-right"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppBlog;
