'use client';
import { useState, useEffect } from 'react';
import Courses from './components/Courses'
import LoadingPage from './loading';
import CourseSearch from './components/CourseSearch';

export default function Home() {
  const [courses, setCousrses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () =>{
      const res = await fetch ('/api/courses');
      const data = await res.json()
      setCousrses(data)
      setLoading(false)
    };
    fetchCourses();
  }, [])
  if(loading){
    <LoadingPage/>
  }

  return (
    <>
      <CourseSearch getSearchResult={(result)=>(
        setCousrses(result)
      )}/> 
      <Courses courses={courses}/>
    </>
  )
}
