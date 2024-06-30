import React from 'react';
import "./ref.css"

interface ReferProps {
  userId: string;
}

const Refer: React.FC<ReferProps> = ({ userId }) => {

  const inviteLink = `https://t.me/Bitbrawl_mini_bot?start=${userId}`;
const sharelink=`https://t.me/share/url?url=https://t.me/Bitbrawl_mini_bot?start=${userId}`;
   
const handleInviteClick = () => {
    window.Telegram.WebApp.openLink(sharelink);
  };

  console.log(userId);

  return (
    <>
    <h2 className='reftitle'>Referral</h2>
    <button className='referbutton' onClick={handleInviteClick}>Invite Friends +</button>
    <p className='reflink'>Your invite link:</p>
    <p className='refinvite'> {inviteLink}</p>
  </>
  );
};

export default Refer;
