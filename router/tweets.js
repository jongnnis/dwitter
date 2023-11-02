import express from "express";
import * as tweetController from '../controller/tweet.js' 

const router = express.Router();

let tweets = [
    {
        id: '1',
        text: '안녕하세요!',
        createdAt: Date.now().toString(),
        name: '김사과',
        username: 'apple',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYEhHx-OXQF1NqVRXPL8R50ggKje3hQTvIA&usqp=CAU'
    },
    {
        id: '2',
        text: '반갑습니다!',
        createdAt: Date.now().toString(),
        name: '반하나',
        username: 'banana',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYEhHx-OXQF1NqVRXPL8R50ggKje3hQTvIA&usqp=CAU'
    }
]

// GET / tweets
// GET / tweets?username=:username
router.get('/', tweetController.getTweets)

// GET / tweets/:id
router.get('/:id', tweetController.getTweet)


// POST / tweets
router.post('/', tweetController.createTweet)

// PUT / tweets/:id
router.put('/:id', tweetController.updateTweet)

// DELETE / tweets/:id
router.delete('/:id', tweetController.deleteTweet)

export default router;