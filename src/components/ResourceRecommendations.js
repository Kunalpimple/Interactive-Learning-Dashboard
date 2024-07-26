import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/ResourceRecommendation.css';

const ResourceRecommendation = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/resources')
      .then(response => {
        setResources(response.data);
      })
      .catch(error => {
        console.error('Error fetching the resource data:', error);
      });
  }, []);

  return (
    <div className="resource-recommendations">
      <h2>Resource Recommendations</h2>
      <div className="resources-list">
        {resources.map(resource => (
          <div key={resource.id} className="resource-item">
            <img src={resource.thumbnail} alt={resource.title} className="resource-thumbnail" />
            <div className="resource-details">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceRecommendation;
