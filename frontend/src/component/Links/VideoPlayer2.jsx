import React, { useEffect, useRef } from 'react';
import './Links.css';

function VideoPlayer2() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log('Autoplay prevented:', error);
            });
        }
    }, []);

    const handleVideoEnded = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0; 
            videoRef.current.play();
        }
    };
      
    return (
        <div style={{ marginLeft:'210px'}}>
            <video 
                ref={videoRef} 
                 // Adjusted width
                height="300" // Adjusted height
               
                muted 
                onEnded={handleVideoEnded} 
                id='vid'
            >
                <source src="imagess\video3.mp4" type="video/mp4" id='V2'/>
            </video>
        </div>
    );
}

export default VideoPlayer2;
