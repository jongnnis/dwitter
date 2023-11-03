/*
    회원가입
    router.post('/signup', ...)

    로그인
    router.post('/login', ...)

    JWT 확인
    router.get('/me', ...)
*/

import express from "express";
import {body, param, validationResult} from 'express-validator'
import * as tweetController from '../controller/tweet.js' 
// import {validate} from "../middleware/validator.js"

const router = express.Router();

// 회원가입  /tweets/signup
router.post('/signup', tweetController.signUpTweet)

// 로그인   /tweets/login
router.post('/login', tweetController.loginTweet)

export default router;