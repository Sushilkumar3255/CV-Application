import React, { useState } from 'react';
import "./main.css";

const EducationExperience = () => {
    const [educationList, setEducationList] = useState([]);

    const handleAddClick = (e) => {
        e.preventDefault();
        const schoolName = e.target.elements.schoolName.value;
        const studyTitle = e.target.elements.studyTitle.value;
        const studyDate = e.target.elements.studyDate.value;
        const newEducationList = [
            ...educationList,
            { schoolName, studyTitle, studyDate},
        ];
        setEducationList(newEducationList);
        e.target.reset();
    }

    const handleDeleteClick = (index) => {
        const newEducationList = [...educationList];
        newEducationList.splice(index, 1);
        setEducationList(newEducationList);
    }

    return (
        <div className='container'>
            <h2>Education</h2>
            {educationList.map((education, index) => (
                <div key={index} className="card">
                    <div className="card-content">
                        <div className="card-item">
                            <span>School Name:</span>
                            <span>{education.schoolName}</span>
                        </div>
                        <div className="card-item">
                            <span>Title of Study:</span>
                            <span>{education.studyTitle}</span>
                        </div>
                        <div className="card-item">
                            <span>Date of Study:</span>
                            <span>{education.studyDate}</span>
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
                            name="schoolName"
                            placeholder="Enter school name"
                            required
                        />
                        <input
                            type="text"
                            name="studyTitle"
                            placeholder="Enter title of study"
                            required
                        />
                        <input
                            type="text"
                            name="studyDate"
                            placeholder="Enter date of study"
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

export default EducationExperience
