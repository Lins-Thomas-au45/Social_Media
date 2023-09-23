import React from 'react'
import PostSide from '../../components/postside/PostSide'
import RightSide from '../../components/RightSide/RightSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import './Home.css'
const Home = () => {
    return (
        <div className="Home">
            <ProfileSide/>
            <PostSide/>
            <RightSide/>
        </div>
    )
}

export default Home