import React from 'react'

const Profile = ({fullName,bio, imgSrc, profession}) => {
    return (
        <div>
            <h1> {fullName} </h1> 
            <h2>{bio}</h2> 
            <img src= {imgSrc} />
            <h2> {profession} </h2>

        </div>
    )
}

export default Profile
