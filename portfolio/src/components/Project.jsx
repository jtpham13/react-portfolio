function Project({project}, i){
    return(
        <div key={i} className="card">
            <img className="card-img-top" src={project.image}/>
            <div className="card-body">
             <a href={project.link}>{project.name}</a>
            </div>
        </div>
    );
}

export default Project;