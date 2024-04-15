import React, { useEffect, useState } from 'react';
import Course from './Course';

import PropTypes from 'prop-types';

const Courses = ({selectCourse,Decrease}) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('courses.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className='grid grid-cols-3 gap-2' style={{ maxWidth: '1200px', margin:'auto'}}>
      {courses.map( course => (
        <Course key={course.id} course = {course}
        selectCourse = {selectCourse}
        Decrease={Decrease}
        >  
        </Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
    selectCourse: PropTypes.func.isRequired,      
    Decrease:PropTypes.func.isRequired 
};

export default Courses;
