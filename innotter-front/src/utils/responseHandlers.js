import unliked_path from '../images/like.svg'
import liked_path from '../images/liked.svg'


export class ResponseHandler {
    constructor(user) {
        this.curr_user_id = user["user"]["id"]
    }

    checkUserInLikesArray = (response) => {
    let array = response.likes
    if (array.includes(this.curr_user_id)){
        return liked_path
    }
    return unliked_path
    }

    checkUserInFollowersArray = (response) => {
        let array = response.followers
        if (array.includes(this.curr_user_id)){
            return "unfollow"
        }
        return "follow"
        }
}