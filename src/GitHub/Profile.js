import React from 'react';
import PropTypes from 'prop-types';
import "./profile.scss";

const Profile = props => {
    const profile = props;
    return (
        <div className="profile">
            <img src={profile.avatar_url} />
            <div className="info">
                <div className="name">{profile.name}</div>
                <div>{profile.login}</div>
                <div className="company">{profile.company}</div>
                <div>{profile.location}</div>
                <div className="repo">{profile.public_repos}</div>
            </div>
        </div>
    );
};

Profile.propTypes = {
};

export default Profile;