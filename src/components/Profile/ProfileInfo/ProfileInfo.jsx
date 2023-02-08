import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  return (
    <div>
      <div className={s.discriptionBlock}>
        ava + disc
      </div>
      <div className={s.avatar}>
        <img src="https://thumb.tildacdn.com/tild3033-3831-4862-a662-363963376437/-/resize/254x/-/format/webp/Moeny2.png" alt="" />
      </div>
    </div>

  )
}

export default ProfileInfo;