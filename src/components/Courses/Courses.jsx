import React, { useEffect, useState } from 'react';
import Course from './Course';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('courses.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className='grid grid-cols-3 gap-2' style={{ maxWidth: '1200px', margin:'auto'}}>
      {courses.map( course => (
        <Course key={course.id} course = {course}></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {};

export default Courses;
