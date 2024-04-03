import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    const [loadTime, setLoadTime] = useState(null);
    const [imageLoadTimes, setImageLoadTimes] = useState({});

    useEffect(() => {
        const startTime = performance.now();
        fetch('https://api.unsplash.com/photos?client_id=bquVrKirRcmRKrDZcZFn7bKk41S1DpcLP1Q46OPGd74')
            .then(response => response.json())
            .then(data => {
                setImages(data);
                const endTime = performance.now();
                const timeTaken = endTime - startTime;
                setLoadTime(timeTaken);
            });
    }, []);

    useEffect(() => {
        const imageLoadStartTimes = {};
        const imageLoadEndTimes = {};

        images.forEach(image => {
            const img = new Image();
            img.onload = () => {
                const endTime = performance.now();
                const timeTaken = endTime - imageLoadStartTimes[image.id];
                setImageLoadTimes(prevState => ({
                    ...prevState,
                    [image.id]: timeTaken
                }));
            };
            imageLoadStartTimes[image.id] = performance.now();
            img.src = image.urls.small;
            imageLoadEndTimes[image.id] = performance.now();
        });
    }, [images]);

    return (
        <div className="image-gallery-container">
            {loadTime && <div className="load-time">Loading time: {loadTime.toFixed(2)} milliseconds⏱</div>}
            <div className="image-gallery">
                {images.map(image => (
                    <div key={image.id} className="image-item">
                        <img src={image.urls.small} alt={image.alt_description} />
                        {imageLoadTimes[image.id] && (
                            <div className="image-load-time">Image Loading Time: {imageLoadTimes[image.id].toFixed(2)} milliseconds⏱</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;


