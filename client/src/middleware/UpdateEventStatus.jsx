import React, { useState, useEffect } from 'react';

function YourComponent() {
    const API_URL = "http://localhost:3000";
    fetch(`${API_URL}/api/event/updateStatusNA`, {method: "PUT"})
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching status:', error);
      });
    
}

export default YourComponent;