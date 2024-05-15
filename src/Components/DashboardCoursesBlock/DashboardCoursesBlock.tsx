import React from 'react';
import CourseCard from "../CourseCard/CourseCard";
import {Course} from "../../Types/Course";
import './DashboardCoursesBlock.scss';

interface DashboardCoursesBlockComponentProps {
    courses: Course[];
}

const DashboardCoursesBlock: React.FC<DashboardCoursesBlockComponentProps> = ({courses}) => {
    return (
        <div className="course-list">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course}/>
            ))}
        </div>
    );
};

export default DashboardCoursesBlock;
