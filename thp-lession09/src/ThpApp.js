import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ThpStudentList from './components/ThpStudentList';

function ThpApp() {
  // Sử dụng hàm useState của hook 
  const [thpStudentList, setThpStudentList] = useState([]);
  
  // get data from api
  const thpGetStudent = async () => {
    try {
      const response = await axios.get("https://666a5ad37013419182cef6da.mockapi.io/api/thpv1/thpStudent");
      setThpStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    thpGetStudent();
  }, []);

  return (
    <div className="container border mt-5 p-3">
      <h2 className='text-center'>Xử lý các chức năng CRUD - Hook</h2>
      <hr />
      <ThpStudentList renderThpStudentList={thpStudentList} />
    </div>
  );
}

export default ThpApp;
