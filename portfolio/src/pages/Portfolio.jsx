import Image from "../assets/bookbusta.png";
import Project from "../components/Project";

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
        {projs.map((project, i) =>(
         <Project key={i} project={project} />
       ) )  }
      </div>
    </section>
  );
}
export default Portfolio;
