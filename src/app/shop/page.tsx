import ImageGallery from "@/app/components/ImageGallery"; // ImageGallery component ko import karein
import Pinkbox from "@/app/components/pinkbox";
import Shopnavbar from "@/app/components/shopnavbar";
import Shoptopsection from "@/app/components/shoptopsection"

import Gallerybtn from "../components/gallerybtn";
const Shop = () => {
  return (
    <div >
     
        <Shoptopsection/>
      <Shopnavbar/>
        <ImageGallery />
        <Gallerybtn/>
        <Pinkbox/>
      
    </div>
  );
};

export default Shop;


