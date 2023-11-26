import React, { useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";


export interface GalleryProps {
    galleryImages: GalleryImage[];
}


export enum certificateType {
    KURS,
    CERTYFIKAT
}

export type GalleryImage = {
    url: string,
    name: string,
    description: string,
    certType?: certificateType
};

export function Gallery(props: GalleryProps) {
    const [open, setOpen] = useState(false);
    const captionsRef = React.useRef(null);
    let slideImages: SlideImage[] = [];
    props.galleryImages.map((galleryImage) => {
        slideImages.push({src: galleryImage.url, title: galleryImage.name, description: galleryImage.description});
    });

    return (
        <div className="gallery">
            <button type="button" onClick={() => setOpen(true)}>
                Open Lightbox
            </button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slideImages}
                plugins={[Captions]}
                captions={{ ref: captionsRef }}
            />
        </div>
    )
}