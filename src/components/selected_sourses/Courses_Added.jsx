    import React from 'react'
    import PropTypes from 'prop-types'

    const Courses_Added = ({course,len}) => {
        const {course_title,credit} = course;
    return (
        <div className='flex'>
            <p>{len}</p>
            <p className='text-zinc-500'>{course_title}</p>
        </div>
    )
    }

    Courses_Added.propTypes = {
        course:PropTypes.object.isRequired,
    }

    export default Courses_Added    