import React, { useState } from "react";
import "./main.css";

const Skills = () => {
    const [skill, setSkill] = useState("");
    const [skillList, setSkillList] = useState([]);
    
    const handleAddClick = () => {
        if (skill !== "") {
            const newSkillList = [...skillList, skill];
            setSkillList(newSkillList);
            setSkill("");
        }
    }

    const handleDeleteClick = (index) => {
        const newSkillList = [...skillList];
        newSkillList.splice(index, 1);
        setSkillList(newSkillList);
    }

    return (
        <div className="container">
            <h2>Skills</h2>
            {skillList.map((skill, index) => (
                <div key={index} className="card">
                    <div className="card-content card-content-1">
                        <div className="card-item">
                            <span>{skill}</span>
                        </div>
                        <div className="card-actions">
                            <button onClick={() => handleDeleteClick(index)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="card">
                <div className="card-content">
                    <input
                        type="text"
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                        placeholder="Enter skill"
                        required
                    />
                </div>
                <div className="card-actions">
                    <button onClick={handleAddClick}>Add Skill</button>
                </div>
             </div>
        </div>
    )
}

export default Skills
