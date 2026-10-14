import React from 'react';
import './src/index.css';

export default function EquipmentCard({ name, type, serialNumber, status, imageUrl }) {
  // Determine status color dynamically
  const statusClass = status.toLowerCase() === 'available' ? 'status-available' : 'status-maintenance';

  return (
    <div className="equipment-card">
      <div className="card-image-container">
        <img src={imageUrl || 'https://placeholder.com'} alt={name} className="card-image" />
        <span className={`status-badge ${statusClass}`}>{status}</span>
      </div>
      
      <div className="card-content">
        <span className="equipment-type">{type}</span>
        <h3 className="equipment-name">{name}</h3>
        <p className="equipment-serial">ID: <span>{serialNumber}</span></p>
        
        <button className="card-button" onClick={() => alert(`Viewing details for ${name}`)}>
          View Details
        </button>
      </div>
    </div>
  );
}

