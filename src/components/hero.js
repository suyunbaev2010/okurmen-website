import Carousel from "react-bootstrap/Carousel";
let heroData = [
  {
    id: 1,
    image: require("../assets/img-hero1.jpg"),
    title: "Вебсайтыңыз үчүн идеалдуу дизайн  ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../assets/img-hero2.jpg"),
    title: "Келечектеги каржылык планыңызды баштаңыз",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../assets/img-hero3.jpg"),
    title: "Айырмачылыктан ырахат алыңыз",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.twitter.com",
  },
];

function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img src={hero.image} alt={"slide" + hero.id} />
              <Carousel.Caption>
                <h3>{hero.title}</h3>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                Көбүрөөк билүү
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default AppHero;
