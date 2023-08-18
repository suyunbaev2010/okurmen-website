import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import img1 from "../assets/img1.jpg";

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;
  return (
    <section id="about" className="block about-block">
      <Container>
        <div className="title-header">
          <h2>Биз жөнүндө</h2>
          <div className="subtitle">жөнүндө көбүрөөк билүү
          </div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit dicta veritatis sint quidem asperiores magni eaque
              praesentium temporibus, magnam, eveniet consequatur possimus
              nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit dicta veritatis sint quidem asperiores magni eaque
              praesentium temporibus, magnam, eveniet consequatur possimus
              nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!
            </p>
            <div className="progress-block">
              <h4>HTML / CSS / JavaScript</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
              <h4>html</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className="progress-block">
              <h4>React</h4>
              <ProgressBar
                now={photoshop}
                label={`${photoshop}
              %`}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
