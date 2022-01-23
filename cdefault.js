import { channelslides } from "./constants/slides.js";
import ChannelSlide from './model/csSchema.js'

const CDefaultData = async()=>{
   try {
       await ChannelSlide.deleteMany({});
       await ChannelSlide.insertMany(channelslides);

       console.log("Channelslide Data are imported successfully");
   } catch (error) {
       console.log("Error: ",error.message);
   }
}

export default CDefaultData;