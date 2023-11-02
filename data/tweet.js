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
];

export async function getAll() {
    return tweets
}

export async function getAllByUsername(){
    return tweets.filter((tweet)=> tweet.username === username)
}

export async function getById(id){
    return tweets.find((tweet)=> tweet.id === id)
}

export async function create(text, name, username){
    const tweet = {
        id:'10',
        text,
        createdAt: new Date.now().toString(),
        name,       //name:name이랑 같음    이름 같으면 :안써도됨
        username
    }
    tweets = [tweet, ...tweets]
    return tweets
}

export async function update(){
    const tweet = tweets.find((tweet) =>tweet.id === id)
    if (tweet){
        tweet.text = text
    }
    return tweet;
}

export async function remove(id){
    tweets = tweets.filter((tweet)=> tweet.id !== id)
}