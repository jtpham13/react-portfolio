import Image from "../assets/bookbusta.png";

function Portfolio() {
  const projs = [
    {
      name: "Proj 1",
      link: "https://www.google.com/",
      image: Image,
    },
    {
      name: "Proj 1",
      link: "https://www.google.com/",
      image: Image,
    },
    {
      name: "Proj 1",
      link: "https://www.google.com/",
      image: Image,
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div className="project-wrapper">
        {projs.map((project, i) => (
          <div key={i} className="card">
            <img className="class-img-top" src={project.image} />
            <div className="card-body">
              <a href={project.link}>{project.name}</a>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Portfolio;
