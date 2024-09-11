import React, { useState } from 'react';

function WheelEventComponent() {
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleWheel = (event) => {

    event.preventDefault();
    console.log(event);
    console.log(event.nativeEvent);

    // // Detect whether the wheel is scrolling up or down
    // const delta = event.deltaY > 0 ? -10 : 10;

    // // Update zoom level
    // setZoomLevel((prevZoom) => Math.min(Math.max(prevZoom + delta, 50), 200)); // Constrain between 50% and 200%
  };

  return (
    <div
      onWheel={handleWheel}
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'lightgreen',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: `${zoomLevel}%`,
        overflow: 'hidden',
      }}
    >
      Zoomable Content ({zoomLevel}%)
    </div>
  );
}

export default WheelEventComponent;