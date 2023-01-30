import like from '../images/liked.svg'
import smile from '../images/smile.svg'
import post from '../images/post.svg'
import { Link } from 'react-router-dom'
import '../styles/users.css'

const UserItem = (props) => {
    return(<div className="user-block">
    <Link to="/user-account" className="users-username">{props.username}</Link>
    <div className="statistics">
        <ul className="stat-list">
            <li>173</li>
            <li><img src={like} className="list-img" alt="like"></img></li>
            <li>20</li>
            <li><img src={smile} className="list-img" alt="smile"></img></li>
            <li>15</li>
            <li><img src={post} className="post" alt="post"></img></li>
        </ul>
    </div>
</div>)
}

export default UserItem
