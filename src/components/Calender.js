import React, { useState } from 'react';
import Calendar from 'react-calendar'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose} from '@fortawesome/free-solid-svg-icons';

import '../styles/Calendar.css'


const MyComponent = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); 
  const [showList,setShowList] =useState(false);
  const [data,setdata]=useState({id:'',d:''});

  const handleClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleChange = (date) => {
    setSelectedDate(date);
    let orderid = ['ORD001', 'ORD002', 'ORD003', 'ORD004', 'ORD005', 'ORD006', 'ORD007', 'ORD008', 'ORD009', 'ORD010'];
    let id=orderid[Math.floor(Math.random()*10)];
    let d=date.toLocaleDateString();
    setdata({id:id,d:d});
    setShowCalendar(false);
    setShowList(true);

  };

  return (
    <div className='calender'>
      <button className='button1' onClick={handleClick}>Calendar Toggle</button>
      {showCalendar && (
        <Calendar   value={selectedDate} onChange={handleChange} />
      )}
      {showList && (
        <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={() => setShowList(false)}><FontAwesomeIcon icon={faClose} /></span>
            <h3>Order Details</h3>
            <div>Order ID: {data.id}</div>
            <div>Expected Delivery Date: {data.d}</div>

        </div>
    </div>
      )}
    </div>
  );
};

export default MyComponent;