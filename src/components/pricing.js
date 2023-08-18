import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/row";
import ListGroup from "react-bootstrap/ListGroup";

const pricingData = [
  {
    id: 1,
    plan: "Okurmen Kids",
    price: "13000 сом бир айга",
    features: [
      "6 ай окуу",
      "англиский",
      "эки кундун биринде сабактар болот",
      "OPEN SPACE",
    ],
    link: "https://www.google.com",
  },
  {
    id: 2,
    plan: "BOOTCAMP",
    price: "16000 сом бир айга",
    features: [
      "3 ай окуу",
      "англиский",

      "Free Hosting",
      "Support & Assistance",
      "Okurmen",
    ],
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    plan: "Ultimate",
    price: "£349",
    features: [
      "Wireframing",
      "Visual Design",
      "Unlimited pages",
      "Free Hosting",
      "Support & Assistance",
      "Okurmen",
    ],
    link: "https://www.twitter.com",
  },
];

function AppPricing() {
  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>pricing &amp; plans</h2>
          <div className="subtitle">cheack our pricing &amp; plans</div>
        </div>
        <Row>
          {pricingData.map((pricing) => {
            return (
              <Col sm={4} key={pricing.id}>
                <div className="heading">
                  <h3>{pricing.plan}</h3>
                  <span className="price">{pricing.price}</span>
                </div>
                <div className="content">
                  <ListGroup>
                    {pricing.features.map((feature, index) => {
                      return (
                        <ListGroup.Item key={index}>{feature}</ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </div>
                <div className="btn-holder">
                  <a href={pricing.link} className="btn btn-primary">
                    Order Now
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppPricing;
