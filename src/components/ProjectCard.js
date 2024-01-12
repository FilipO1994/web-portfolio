import { Col } from "react-bootstrap"


export const ProjectCard = ({title,description, imgUrl, link}) =>{
    return(
        <Col  md={6} className="singleProject">
        <div className="proj-imgbx">

            <img src={imgUrl} alt="" />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span> <br/>
                <a href={link} target="_blank">Go to project</a>
            </div>
        </div></Col>
    )

}

// popraw zdjeica w projktach i w kontakcie gdy na szerszje przegladarce astronauta ma byc widac caly 