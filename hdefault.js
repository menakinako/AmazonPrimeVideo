import { homeslides } from "./constants/slides.js";
import HomeSlide from './model/hsSchema.js'

const HDefaultData = async()=>{
   try {
       await HomeSlide.deleteMany({});
       await HomeSlide.insertMany(homeslides);

       console.log("Homeslide Data are imported successfully");
   } catch (error) {
       console.log("Error: ",error.message);
   }
}

export default HDefaultData;