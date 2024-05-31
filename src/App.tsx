import React, {useEffect, useState} from 'react';
import './App.scss';
import {config} from "./utils/config";
import {CourseInterface} from "./interfaces/course.interface";
import {TagList} from "./components/tags";
import styled from "styled-components";
import {CourseCard} from "./components/card";

const Container = styled.div`
    padding: 24px;
    align-items: flex-start;

    @media screen and (max-width: 700px) {
        display: block;
    }
`;


function App() {
    const [tags, setTags] = useState<string[]>([]);
    const [activeTag, setActiveTag] = useState<string | null>(null);

    const [courses, setCourses] = useState<CourseInterface[]>([]);
    const [filteredCourses, setFilteredCourses] = useState<CourseInterface[]>([]);

    useEffect(() => {
        fetch(`${config.API_URL}/docs/courses.json`).then(res => res.json()).then((items: CourseInterface[] = []) => {
            let tmpTags: string[] = [];
            items.forEach(item => {
                tmpTags = [...tmpTags, ...item.tags];
            })
            setTags(Array.from(new Set(tmpTags)));

            setCourses(items)
            setFilteredCourses(items)
        });
    }, []);

    useEffect(() => {
        setFilteredCourses(courses.filter(course => !activeTag || course.tags.includes(activeTag)));
    }, [activeTag]);

    return (<Container className={'flex gap-4'}>
            <div className={'flex-shrink-0'}>
                <TagList tags={tags} onTagChange={setActiveTag} activeTag={activeTag}/>
            </div>
            <div className={'flex flex-shrink-1 flex-wrap gap-3 w-full'}>
                {filteredCourses.map((course) => <CourseCard key={course.id} item={course}/>)}
            </div>
        </Container>
    );
}

export default App;
