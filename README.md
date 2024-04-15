
## Features

### 1. You have course name along with the course details, price and credit.

### 2. One can add the credits until they have spent 20 credits by Select Button.  In the right side you have the added courses and total credits.  

### 3. If the total credit is exceeding 20 credits or the credit hour is getting lesser than 0 credits you have toast messages to see the reason.



## State Managements
 
### const [selectedCourse, setSelectedCourse] = useState([]);
###  const [hour, setHour] = useState(20);
###  const [totalCredit, setTotalCredit] = useState(0);


### We have these states in our code. At first we have selectedCourse state to store the array of objects of the course then for every click in the button which is in the course component which triggers the function in the app component and this function then set the new added course using setSelectedCourse.

## Flow of the states

### (First one) 
### 1.Declared the states for taking array ([])
### 2.Declared a function to change the state in the app compo.
### 3. Send the function to the Courses - > Course -> buttonClicked with the desired paramenter and return to the function in the app compo and set the state then -> send the Current state to the SelectedCourse in the app compo.We have done it in the app compo because it has the courses compo and SelectedCompo, so it is the parent componenent to make the connections.


### (Second One) 
### 1.Declared the states for taking Integer (20) // 20 for the initial Credits Remaining in the state.
### 2.Declared a function to change the state in the app compo.
### 3. Send the function to the Courses - > Course -> buttonClicked with the desired paramenter and return to the function in the app compo and set the state. then -> send the Current state to the SelectedCourse in the app compo.


### (Third One) 
### 1.Declared the states for taking Integer (0) // 0 for the initial Credits Remaining in the state.
### 2.Declared a function to change the state in the app compo.
### 3. Send the function to the Courses - > Course -> buttonClicked with the desired paramenter and return to the function in the app compo and set the state. then -> send the Current state to the SelectedCourse in the app compo.
 

