'use client'
import { useState, useEffect } from 'react';

function ProgressBar({ apiUrl }) {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        setProgress(data);
        // console.log(data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div className="progress-bar-container">
      
     {
        progress.map((item)=>{
            return(<div className="progress-bar" key={item._id}>
          <div className="progress" style={{ width: `${item.skillspercentage}%` }}></div>
        </div>
        )})
    }
    </div>
  );
}

export default ProgressBar;
