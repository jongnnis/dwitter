import bcypt from 'bcrypt'

let users = [
    {
        id:'1',
        username: 'apple',
        password: '$2b$10$6NVVL4gEtPh684Ncn2sCRe/LPe0u4kRkhBYSoiLx4bTGW5gwQ58Dy',
        name:'김사과',
        email: 'apple@aple.com',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYEhHx-OXQF1NqVRXPL8R50ggKje3hQTvIA&usqp=CAU'
    }
]

export async function signup(id, username, password, name, email, url) {
    const password_bcrypt = bcypt.hashSync(password, 10)
    const user = {
        id,
        username,
        password: password_bcrypt,
        name,
        email,
        url
    }
    users = [user, ...users]
    return users
}

export async function login(id, password){
    const user = users.find((user)=>user.id === id)
    // const password_bcrypt = bcypt.hashSync(password, 10)
    return bcypt.compareSync(password, user.password)
}