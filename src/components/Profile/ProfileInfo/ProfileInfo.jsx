import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';
import userPhoto from '../../.././assets/images/user.svg';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  
  let photo;
  if (!props.profile.photos.large) {
    photo = userPhoto;
  } else photo = props.profile.photos.large;

  let {facebook, twitter, instagram} = props.profile.contacts;

  return (
    <div>
      {/* <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div> */}
      <div className={s.descriptionBlock}>
        <img className={s.profileImage} src={photo} />
        <p>{props.profile.status}</p>
        <p>About me: {props.profile.aboutMe}</p>
        <p>facebook: <a href={facebook}>{facebook}</a></p>
        <p>twitter: <a href={twitter}>{twitter}</a></p>
        <p>instagram: <a href={instagram}>{instagram}</a></p>
        <p>fullName: {props.profile.fullName}</p>
      </div>
    </div>
  );
}

export default ProfileInfo;