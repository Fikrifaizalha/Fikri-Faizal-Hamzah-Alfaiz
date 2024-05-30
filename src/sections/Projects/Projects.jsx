import styles from './ProjectsStyles.module.css';
import redVelvet from '../../assets/rv.png';
import ecommerce from '../../assets/np.png';
import polygon from '../../assets/Polygon.png';
import uidesign from '../../assets/uidesign.png';
import ProjectCard from '../../common/ProjectCard';




function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
       src={redVelvet}
       link= 'https://github.com/Fikrifaizalha/Website-Red-Velvet'
       h3="Red Velvet"
       p="Profile Website"
       />
        <ProjectCard
       src={ecommerce}
       link= 'https://github.com/Fikrifaizalha/npure'
       h3="Skintific"
       p="E-Commerce Website"
       />
        <ProjectCard
       src={polygon}
       link= 'https://dribbble.com/shots/24153182-Website-Mobile-Design'
       h3="Polygon"
       p="Website & App Design"
       />
        <ProjectCard
       src={uidesign}
       link= 'https://dribbble.com/shots/24152492-Mobile-App-UI'
       h3="Npure"
       p="Mobile App Design"
       />
      </div>
    </section>
  );
}

export default Projects;
