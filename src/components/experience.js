import React, { useState } from "react";
import "./main.css";

const ExperienceInformation = () => {
    const [experienceList, setExperienceList] = useState([]);

    const handleAddClick = (e) => {
        e.preventDefault();
        const company = e.target.elements.company.value;
        const jobRole = e.target.elements.jobRole.value;
        const joiningDate = e.target.elements.joiningDate.value;
        const newExperienceList = [
            ...experienceList,
            { company, jobRole, joiningDate },
        ];
        setExperienceList(newExperienceList);
        e.target.reset();
    };
  
    const handleDeleteClick = (index) => {
        const newExperienceList = [...experienceList];
        newExperienceList.splice(index, 1);
        setExperienceList(newExperienceList);
    };
  
    return (
        <div className="container">
            <h2>Experience Information</h2>
            {experienceList.map((experience, index) => (
                <div key={index} className="card">
                    <div className="card-content">
                        <div className="card-item">
                            <span>Company:</span>
                            <span>{experience.company}</span>
                        </div>
                        <div className="card-item">
                            <span>Job Role:</span>
                            <span>{experience.jobRole}</span>
                        </div>
                        <div className="card-item">
                            <span>Date of Joining:</span>
                            <span>{experience.joiningDate}</span>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleDeleteClick(index)}>Delete</button>
                    </div>
                </div>
             ))}
            <div className="card">
                <form onSubmit={handleAddClick}>
                    <div className="card-content">
                        <input
                            type="text"
                            name="company"
                            placeholder="Enter company name"
                            required
                        />
                        <input 
                            type="text" 
                            name="jobRole" 
                            placeholder="Enter job role" 
                            required
                        />
                        <input
                            type="text"
                            name="joiningDate"
                            placeholder="Enter date of joining"
                            required
                        />
                    </div>
                    <div className="card-actions">
                        <button type="submit">Add Experience</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ExperienceInformation
