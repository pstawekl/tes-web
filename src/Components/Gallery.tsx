import React, { useEffect, useState } from "react";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";


export interface GalleryProps {
    galleryImages: GalleryImage[];
}


export enum certificateType {
    KURS,
    CERTYFIKAT
}

export type GalleryImage = {
    src: string,
    name: string,
    description: string,
    certType?: certificateType
    width: number,
    height: number,
    index: number,
};

export interface LightboxImage {
    [name: string]: {
        isOpen?: boolean,
        index?: number,
    }
}

export default function Gallery(props: GalleryProps) {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);
    const captionsRef = React.useRef(null);

    const closeLightbox = () => {
        const scrolled = document.documentElement.scrollTop;
        setCurrentImage(0);
        setViewerIsOpen(false);
        if (scrolled > 200) {
            document.getElementsByClassName('scroll-button-icon')[0]?.classList.add('slide-in');
        }
    };

    useEffect(() => {
        if (currentImage !== 0) {
            setViewerIsOpen(true);
        }
    }, [currentImage])

    function openLightbox(canOpen: boolean): boolean {
        if (canOpen)
            document.getElementsByClassName('scroll-button-icon')[0]?.classList.remove('slide-in');

        return canOpen;
    }

    return (
        <div>
            <div className="gallery" style={{ display: 'flex' }}>
                {
                    props.galleryImages.map((image, index) => {
                        return (
                            <div className="column is-4" onClick={e => {
                                e.preventDefault();
                                setCurrentImage(image.index);
                            }}>
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={image.src} alt={image.name} />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                props.galleryImages.map((image, index) => {
                    return (
                        <Lightbox
                            open={openLightbox(Boolean(image.index === currentImage && viewerIsOpen))} //Boolean(image.index === currentImage && viewerIsOpen)
                            close={() => closeLightbox()}
                            plugins={[Captions]}
                            slides={[{
                                src: image.src,
                                title: image.name,
                                description: image.description
                            }]}
                            captions={{ ref: captionsRef }}
                            noScroll={{ disabled: true }}
                        />
                    )
                })
            }
        </div>
    );
}
