//ProjectList (компонент без состояния): отвечает исключительно за отображение списка карточек проектов,
//которые он получает от родительского компонента.

export default function ProjectList({ projects }){

    return(
            <div className="projects">
                {projects.map(
                    project => {
                        return <img key={project.img} className="project" src={project.img} />
                    })}
            </div> 
    )
}