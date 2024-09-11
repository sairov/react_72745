import React, { useEffect, useRef, useState } from 'react';

function ResizeObserverComponent() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      // Get the width and height from the observed element
      const { width, height } = entries[0].contentRect;
      setSize({ width, height });
    });

    // Observe the div element for size changes
    if (divRef.current) {
      observer.observe(divRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>Agranda el contenedor para ver sus valores de ancho y alto</h1>
      <div
        ref={divRef}
        style={{
          width: '50%',
          height: '200px',
          color: 'white',
          display: 'grid',
          placeItems: 'center',
          fontSize: 48,
          backgroundColor: 'crimson',
          resize: 'both',
          overflow: 'auto',
        }}
      >
        Resizable Div
      </div>
      <p style={{
        margin: '50px 0',
        fontSize: 24
      }}>
        Width: {size.width}px, Height: {size.height}px
      </p>
    </div>
  );
}

export default ResizeObserverComponent;
