import React from 'react'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../profilecard/ProfileCard'
import FollowersCard from '../followerscard/FollowersCard'
import './ProfileSide.css'

const ProfileSide = () => {
  return (
<div className="ProfileSide">
<LogoSearch/>
<ProfileCard/>
<FollowersCard/>
</div> 
 )
}

export default ProfileSide