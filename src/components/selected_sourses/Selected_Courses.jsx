import Courses_Added from "./Courses_Added";
import PropTypes from 'prop-types';


const Selected_Courses = ({selectedCourse,hour,totalCredit}) => {
  return (
    <>
      <div className='mt-6 w-96 h-auto border-4 p-8 rounded-xl text-center'>
        <h3 className='text-2xl text-emerald-400 font-bold'>Credit Hour Remaining : {hour}hr
         
        </h3>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <h2 className='text-2xl font-medium'>
          Course Name:
          {
            selectedCourse.map(course => (
              <Courses_Added key={course.id} course={course}></Courses_Added>
            ))
          }

        </h2>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className="text-2xl text-gray-600">Total Credit Hour: {totalCredit}</p>



      </div>

    </>

  );
}

Selected_Courses.propTypes = {
  selectedCourse: PropTypes.array.isRequired,
  hour: PropTypes.number.isRequired,
  totalCredit: PropTypes.number.isRequired
};

export default Selected_Courses;