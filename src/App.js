import React from 'react';
import PreloadCriticalImages from './components/PreloadCriticalImages';
import ImageGallery from './ImageGallery';
import LazyImage from './components/LazyImage';
import PerformanceAnalysis from './components/PerformanceAnalysis';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <h1>Optimized Image Gallery</h1>
            <PreloadCriticalImages />
            <ImageGallery />
            <LazyImage />
            <PerformanceAnalysis />
        </div>
    );
};

export default App;




