import React from 'react';
import {Course} from "../../Types/Course";
import './CourseCard.scss';

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({course}) => {
    return (
        <div className="course-card">
            <img src={course.image} alt={course.name}/>
            <h4>{course.name}</h4>
        </div>
    );
};
export default CourseCard;