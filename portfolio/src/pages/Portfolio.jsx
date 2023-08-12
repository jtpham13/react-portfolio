import Image from "../assets/portfolio1.png"

function Portfolio(){
    const projs = [
      {
        name: "Proj 1",
        link: "https://www.google.com/",
        image: Image,
      }
    ]
  
    return (
      <section>
        <h2>Projects</h2>
        <ul>
        {
          projs.map((project, i) => (
            <li key = {i}>
              <a href={project.link}>
                {project.name}
              </a>
              <img src={project.image}/>
            </li>
          ))
        }
        </ul>
      </section>
    )
  };
export default Portfolio;