import unliked_path from '../images/like.svg'
import liked_path from '../images/liked.svg'


export const likeHandler = (response, user) => {
    let likes_arr = response.likes
    let user_obj = JSON.parse(user)
    let curr_user_id = user_obj["user"]["id"]
    if (likes_arr.includes(curr_user_id)){
        return liked_path
    }
    return unliked_path
}