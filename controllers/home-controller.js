import HomeSlide from '../model/hsSchema.js';

//This api brings data from database
export const getHomeSlides = async(request, response)=>{
    try {
        const homeslides = await HomeSlide.find({});
        response.json(homeslides)
    } catch (error) {
        console.log("error: ", error);
    }
}
//call this api through redux from ui
export const getHomeSlideById = async(request, response)=>{
    try {
        const homeslide = await HomeSlide.findOne({"id": request.params.id});
        response.json(homeslide);
    } catch (error) {
        console.log("error:", error.message);
    }
}