import './Card.css';


export const Card = ({ project }) => {

    return (<div className='wrapper_main'>
        <div className="project">
            <div className='project_preview'>
                <img src={project.img} alt="photo" className="photo" />
            </div>
            <div className='project_description'>
                <h1 className='project_description_title'>{project.name}</h1>
                <p className='project_description_text'>{project.description}</p>
                <div className='project_description_buttons'>
                    <div className='btn_content'>
                        <a href={project.demoLink} target='_blank'><button>Demo</button></a>
                    </div>
                    <div className='btn_content'>
                        <a href={project.gitlink} target='_blank'><button>Github</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

