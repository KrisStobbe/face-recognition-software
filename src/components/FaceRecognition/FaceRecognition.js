import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box}) => {
	console.log('check', imageUrl)
	return (
		<div className = 'center imgUpdate'>
			<img id='inputimage' src={imageUrl} width='auto' height='auto' />
			<div className ='bounding-box'></div>
		</div>
	);
}

export default FaceRecognition;