
import PropTypes from 'prop-types';
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoBookOutline } from "react-icons/io5";


const Course = ({ course,selectCourse,Decrease}) => {
    const { cover_pic, course_title, description, price, credit } = course;
    console.log(course);
    return (
        <div className='mt-6'>
            {/* left side cards */}
            <div className="w-96 border-4 mb-4 p-4 rounded-xl" style={{ height: '500px', overflow: 'hidden' }} >
                <figure><img className='h-48' src={cover_pic} alt={course_title} /></figure>

                <div>
                    <h2 className='text-2xl font-bold mt-4'>{course_title}</h2>
                    <p className='mt-4 text-zinc-500'>{description}</p>
                </div>

                <div className='flex items-center gap-x-12'>
                    <LiaDollarSignSolid className='mt-4 text-2xl' />
                    <span className='mt-5 font-bold text-zinc-500'> Price: {price}</span>
                    <IoBookOutline className='mt-5 text-2xl' />
                    <span className='mt-5 font-semibold text-zinc-500'>Credit: {credit}</span>
                </div>

                <button
                onClick={()=> {selectCourse(course);
                    Decrease(credit);
                    }}

                className='rounded-xl mt-8 ml-3 p-2 w-80 font-bold' style={{ color: 'white', background: 'aqua' }}>SELECT</button>
            </div>
        </div>



    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    Decrease: PropTypes.func.isRequired,
    selectCourse: PropTypes.func.isRequired
}

export default Course;