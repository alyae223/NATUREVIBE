import React, { useEffect, useRef } from 'react';
import './Links.css';

function VideoPlayer() {
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
        <div>
            <video 
                ref={videoRef} 
                width="640"  // Adjusted width
                height="480" // Adjusted height
                controls 
                muted 
                onEnded={handleVideoEnded} 
                id='vid'
            >
                <source src="imagess/ULLFE8265.MOV" type="video/mp4" id='V1'/>
            </video>
        </div>
    );
}

export default VideoPlayer;
