import express from 'express';
import { userSignup, userLogin } from '../controllers/user-controller.js';
import {getHomeSlides, getHomeSlideById} from '../controllers/home-controller.js'
import {getTvSlides, getTvSlideById} from '../controllers/tv-controller.js'
import {getChannelSlides, getChannelSlideById} from '../controllers/channel-controller.js'


const router = express.Router();

//with the help of this api saves data which came from ui from frontend  to mongodb database
router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/homeslides', getHomeSlides);
router.get('/homeslide/:id', getHomeSlideById);
router.get('/tvslides', getTvSlides);
router.get('/tvslide/:id', getTvSlideById);
router.get('/channelslides', getChannelSlides);
router.get('/channelslide/:id', getChannelSlideById);

export default router;