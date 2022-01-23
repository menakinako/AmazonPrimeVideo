import ChannelSlide from '../model/csSchema.js';

//This api brings data from database
export const getChannelSlides = async(request, response)=>{
    try {
        const channelslides = await ChannelSlide.find({});
        response.json(channelslides)
    } catch (error) {
        console.log("error: ", error);
    }
}
//call this api through redux from ui
export const getChannelSlideById = async(request, response)=>{
    try {
        const channelslide = await ChannelSlide.findOne({"id": request.params.id});
        response.json(channelslide);
    } catch (error) {
        console.log("error:", error.message);
    }
}