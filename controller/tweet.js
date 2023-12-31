import * as tweetRepository from '../data/tweet.js'
import * as usersRepository from '../data/auth.js'
import { getSocketIO } from '../connection/socket.js'

export async function getTweets(req, res){
    const username = req.query.username
    const data = await(username
        ? tweetRepository.getAllByUsername(username)
        : tweetRepository.getAll())
    res.status(200).json(data)
}

// getTweet
export async function getTweet(req, res, next){
    const id = req.params.id;
    const tweet = await tweetRepository.getById(id)
    if (tweet){
        res.status(200).json(tweet)
    }else{
        res.status(404).json({message: `Tweet id(${id}) not found`})
    }
}

// createTweet
export async function createTweet(req, res, next){
    const {text} = req.body;
    const tweet = await tweetRepository.create(text, req.userId)
    res.status(201).json(tweet)
    getSocketIO().emit('tweets', tweet)
}

// updateTweet
export async function updateTweet(req, res, next){
    const id = req.params.id
    const text = req.body.text
    const tweet = await tweetRepository.getById(id)
    if(!tweet){
        res.status(404).json({message: `Tweet id(${id}) not found`})
    }
    if(tweet.userId !== req.userId){
        return res.sendStatus(403)
    }
    const update = await tweetRepository.update(id, text)
    res.status(200).json(update)
}

// deleteTweet
export async function deleteTweet(req, res){
    const id = req.params.id
    const tweet = await tweetRepository.getById(id)
    if(!tweet){
        res.status(404).json({message: `Tweet id(${id}) not found`})
    }
    if(tweet.userId !== req.userId){
        return res.sendStatus(403)
    }
    await tweetRepository.remove(id)
    res.sendStatus(204)
}