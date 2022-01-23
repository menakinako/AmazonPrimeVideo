import TvSlide from '../model/tvSchema.js';

//This api brings data from database
export const getTvSlides = async(request, response)=>{
    try {
        const tvslides = await TvSlide.find({});
        response.json(tvslides)
    } catch (error) {
        console.log("error: ", error);
    }
}
//call this api through redux from ui
export const getTvSlideById = async(request, response)=>{
    try {
        const tvslide = await TvSlide.findOne({"id": request.params.id});
        response.json(tvslide);
    } catch (error) {
        console.log("error:", error.message);
    }
}