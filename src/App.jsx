import Courses from "./components/Courses/Courses";
import Selected_Courses from "./components/selected_sourses/Selected_Courses";
import Header from "./components/header/Header";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [hour, setHour] = useState(20);

  const selectCourse = (course) => {  

    if (!selectedCourse.find(selected => selected.id === course.id)) {
      setSelectedCourse([...selectedCourse, course]);
      console.log("tip lagse");
    } else {
      toast.dark('This course is already added!'); 
    }
   
    };


    const Decrease = (credit) => {
      if (hour - credit >= 0) {
        const new_ = hour - credit;
        setHour(new_);
        console.log('hello')
      }

      else {
        toast.dark('Sorry! You have less credit to add this!!');

      }
    }
    return (
      <>
        <Header></Header>
        <div className="flex">
          <Courses selectCourse={selectCourse} Decrease={Decrease} />
          {/* {selectedCourses.map((selected) => (
          <Selected_Courses key={selected.id} selected={selected} />
        ))} */}
          <Selected_Courses selectedCourse={selectedCourse} hour={hour}></Selected_Courses>
          <ToastContainer></ToastContainer>
        </div>
      </>
    );
  }
