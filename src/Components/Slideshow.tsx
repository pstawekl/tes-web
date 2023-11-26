import 'react-slideshow-image/dist/styles.css'
import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideContainerStyle = {
    width: '500px',
    height: '600px',
    margin: '0 auto',
}

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000',
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px',
    width: '500px',
}

const leftContainerStyle = {
    display: 'flex',
    width: '50%',
    height: '100%',
}

export interface SlideshowProps {
    slideImages: {
        url: string,
        name: string,
        type: any,
        description: string
    }[];
}

export function Slideshow(props: SlideshowProps) {
    const [certName, setCertName] = useState<string>('');
    const slideImages = props.slideImages;
    return (
        <div className="slide-container" style={slideContainerStyle}>
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...leftContainerStyle, flexDirection: 'column', flexWrap: 'wrap', }}>{slideImage.name}{slideImage.type}</div>
                        <div><div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}></div></div>
                        <div><span>{slideImage.description}</span></div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}
