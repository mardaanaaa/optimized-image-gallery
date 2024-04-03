import { useEffect } from 'react';

const PreloadCriticalImages = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = '/path/to/critical-image.jpg';
        link.as = 'image';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return null;
};

export default PreloadCriticalImages;



