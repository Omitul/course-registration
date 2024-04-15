import Courses from "./components/Courses/Courses";
import Selected_Courses from "./components/selected_sourses/Selected_Courses";
import Header from "./components/header/Header";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [hour, setHour] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);

  var add;

  const selectCourse = (course,credit) => {
    if(hour - credit <  0){
      toast.dark('You have less credits to add this!');
      return;
    };

    add = !selectedCourse.find(selected => selected.id === course.id);
    if (add ) {
      setSelectedCourse([...selectedCourse, course]);
      console.log("tip lagse");
    } else {
      toast.dark('This course is already added!');
    }

  };

  const Decrease = (credit) => {
    if (!add) {
      return;
    }
    if (hour - credit >= 0) {
      const new_ = hour - credit;
      setHour(new_);
      console.log('hello')
    }

    else {
      toast.dark('Sorry! You have less credit to add this!!');

    }
  }

  const SumCredit = (credit) => {
        if(!add)return;

        const new_ = totalCredit + credit;
        if(totalCredit + credit <= 20)
        setTotalCredit(new_);

        else {
          toast.dark('Sorry! You cant get more than 20 credits!!',{
                    position:'bottom-right'        
          });
        }
  }


  return (
    <>
      <Header></Header>
      <div className="flex">
        <Courses selectCourse={selectCourse} Decrease={Decrease} SumCredit={SumCredit}/>
        {/* {selectedCourses.map((selected) => (
          <Selected_Courses key={selected.id} selected={selected} />
        ))} */}
        <Selected_Courses selectedCourse={selectedCourse} hour={hour} totalCredit = {totalCredit}></Selected_Courses>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}
