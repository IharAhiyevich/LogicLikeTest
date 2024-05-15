import React, {useEffect, useState} from 'react';
import DashboardCoursesBlock from "../../Components/DashboardCoursesBlock/DashboardCoursesBlock";
import axios from "axios";
import {Tags} from "../../Types/Tags";
import {Course} from "../../Types/Course";
import DashboardTags from "../../Components/DashboardTags/DashboardTags";
import './Dashboard.css';

const DashboardPage = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [tags, setTags] = useState<Tags[]>([]);
    const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
    const getCourses = async () => {
        try {
            const response = await axios({
                url: `https://logiclike.com/docs/courses.json`,
                method: 'GET',
            });
            setCourses(response.data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };
    const handleClickTag = (tagName: string) => {
        const updatedTags = tags.map(tag => ({
            ...tag,
            selected: tag.name === tagName
        }));
        setTags(updatedTags);

        if (tagName === 'Все темы') {
            setFilteredCourses(courses);
        } else {
            const filtered = courses.filter(course => course.tags.includes(tagName));
            setFilteredCourses(filtered);
        }
    };

    useEffect(() => {
        if (!loading) {
            const uniqueTags = Array.from(new Set(courses.flatMap(course => course.tags)))
                .map(tag => ({name: tag, selected: false}));
            setTags([{name: 'Все темы', selected: true}, ...uniqueTags]);
            setFilteredCourses(courses);
        }
    }, [courses, loading]);


    useEffect(() => {
        getCourses()
    }, [])

    return (
        <div className='app'>
            <DashboardTags tags={tags} handleClickTag={handleClickTag}/>
            {loading ? <p>Loading...</p> : <DashboardCoursesBlock courses={filteredCourses}/>}
        </div>
    );
}

export default DashboardPage;
