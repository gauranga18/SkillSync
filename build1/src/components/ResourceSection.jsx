import React from 'react'
import {useState, useEffect} from 'react'
const ResourceSection = () => {
  const [resources, setResources] = useState([]);
  useEffect(()=>{
fetch('../DB/Courses.json')
.then(res => res.json())
    .then(data => setCourses(data));
  },[])
  return (
    <div>
      
    </div>
  )
}

export default ResourceSection
