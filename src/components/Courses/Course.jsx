
    import PropTypes from 'prop-types';
    import { LiaDollarSignSolid } from "react-icons/lia";
    import { IoBookOutline } from "react-icons/io5";


    const Course = ({ course }) => {
        const { cover_pic, course_title, description, price ,credit} = course;
        console.log(course);
        return (
            <div className='mt-6'>
                <div className="w-96 border-4 mb-4 p-4 rounded-xl" style={{ height: '430px', overflow: 'hidden' }} >
                    <figure><img src={cover_pic} alt={course_title} /></figure>
                    <div>
                        <h2 className='text-2xl font-bold mt-4'>{course_title}</h2>
                        <p className='mt-4'>{description}</p>
                    </div>
                    <div className='flex items-center gap-x-12'>
                    <LiaDollarSignSolid className='mt-4 text-2xl'/>
                    <span className='mt-5 font-bold '> Price: {price}</span>
                    <IoBookOutline className='mt-5 text-2xl' />
                    <span className='mt-5 font-semibold'>Credit: {credit}</span>
                    </div>
                    

                </div>
            </div>

        );
    };

    Course.propTypes = {
        course: PropTypes.object.isRequired
    }

    export default Course;