import Image from "../assets/bookbusta.png";
import Project from "../components/Project";
import Image2 from "../assets/ontherocks.png";
// import Image3 from "../assets/notetaker.png";
import Image4 from "../assets/habityourway.png";

function Portfolio() {
  const projs = [
    {
      name: "Bookbusta",
      link: "https://bookbusta-950538aa625f.herokuapp.com/",
      image: Image,
    },
    {
      name: "On the Rocks",
      link: "https://blickenderfer.github.io/ontherocks/",
      image: Image2,
    },
    {
      name: "Habit your way",
      link: "https://github.com/slmov215/habit-your-way",
      image: Image4,
    },
    {
      name: "Habit your Way",
      link: "https://github.com/slmov215/habit-your-way",
      image: Image4
      
    }
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
