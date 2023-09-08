/* The Gallery class is a React component that renders two GalleryItem components with different
titles, images, and descriptions. */
import React from "react";
import GalleryItem from "./galleryItem";
import Image1 from '../assets/hornbeast-1.jpg'
import Image2 from '../assets/hornbeast-2.jpg'

class Gallery extends React.Component {
    render() {
        return (
           <>
           <GalleryItem title="Mannoth Tooth Dog" image={Image2}
           description="A dog with Mammoth teeth" />
           <GalleryItem title="3 Horn Dog" image={Image1}
           description="A dog with 3 horns" />
           </> 
        )
    }
}
export default Gallery;