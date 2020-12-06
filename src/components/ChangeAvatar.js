/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import './ChangeAvatar.css';

const ChangeAvatar = (togglePop) => {
  const handleClick = () => {
    togglePop.toggle();
  };

  const avatarSrc = 'https://blog.nebrass.fr/wp-content/uploads/Homer-Simpson-4-200x200.jpg';
  const avatars = [avatarSrc, avatarSrc, avatarSrc, avatarSrc, avatarSrc, avatarSrc,
    avatarSrc, avatarSrc, avatarSrc, avatarSrc, avatarSrc, avatarSrc,
    avatarSrc, avatarSrc, avatarSrc, avatarSrc, avatarSrc, avatarSrc];

  return (
    <div className="modal">
      <div className="modal_content" onChange={ handleClick }>
        <span className="close" onClick={ handleClick }>&times;    </span>
        {
          avatars.map((avatar, id) => (
            <img key={ id } src={ avatar } alt="avatar" className="avatar-change" />
          ))
        }
      </div>
    </div>
  );
};

export default ChangeAvatar;
