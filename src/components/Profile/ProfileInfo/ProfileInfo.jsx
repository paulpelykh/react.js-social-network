import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <p>{props.profile.aboutMe}</p>
        <p>facebook: {props.profile.contacts.facebook}</p>
        <p>twitter: {props.profile.contacts.twitter}</p>
        <p>instagram: {props.profile.contacts.instagram}</p>
        <p>fullName: {props.profile.fullName}</p>
      </div>
    </div>
  );
}

export default ProfileInfo;