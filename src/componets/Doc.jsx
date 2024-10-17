import React from 'react'
import project1 from '../../assets/doc/project_1.png'
import project2 from '../../assets/doc/project_2.png'
import project3 from '../../assets/doc/project_3.png'
import device1 from '../../assets/doc/device_1.png'
import device2 from '../../assets/doc/device_2.png'
import device3 from '../../assets/doc/device_3.png'
import device4 from '../../assets/doc/device_4.png'
import Code from './Code'
const Doc = () => {
  return (
    <div className='doc'>
        <div className="guide">
            <div className="part1">
                <p className='title'>1. Creation Project</p>
                <div className='container'>
                <div className="step">
                <p>1.Click On Plus to Create new Project to add all related devices in single place</p>
                    <img src={project1} alt="img" />
                </div>
                <div className="step">
                <p>2.Give the Project name and description.then click on create project</p>
                    <img src={project2} alt="img" />
                </div>
                <div className="step">
                    <p>3.Project was successfully created with zero(0) devices</p>
                    <img src={project3} alt="img" />

                </div>
                </div>

            </div>
            <div className="part1">
                <p className='title'>2.Adding Device to Project</p>
                <div className='container'>
                <div className="step">
                <p>1.Click On Project to Go particular project devices </p>
                    <img src={project3} alt="img" />
                </div>
                <div className="step">
                <p>2.Actually at initial stage no devices are there inside the Project(DEVICES:0).we need to add devices by clicking on plus icon in bottom.</p>
                    <img src={device1} alt="img" />
                </div>
                <div className="step">
                    <p>3.Then we need to select category of particular device.</p>
                    <img src={device2} alt="img" />

                </div>
                <div className="step">
                    <p>4.Device was created and added inside the particular project and we can also add more devices in single project.</p>
                    <img src={device3} alt="img" />

                </div>
                </div>

            </div>


        </div>
     
    </div>
  )
}

export default Doc