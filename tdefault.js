import { tvslides } from "./constants/slides.js";
import TvSlide from './model/tvSchema.js'

const TDefaultData = async()=>{
   try {
       await TvSlide.deleteMany({});
       await TvSlide.insertMany(tvslides);

       console.log("Tvslide Data are imported successfully");
   } catch (error) {
       console.log("Error: ",error.message);
   }
}

export default TDefaultData;