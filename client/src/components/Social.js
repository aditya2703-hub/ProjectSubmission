import React from 'react'
import InstaIcon from '../images/insta.svg'
import FacebookIcon from '../images/fb.svg'
import LinkedIn from '../images/linkedin.svg'
import Github from '../images/github.svg'

const Social = () => {


  return (
    <div className='social-icons'>
      <a href="https://www.instagram.com/justt.samyak" rel='norefer' ><img src={InstaIcon} alt="" /></a>
      <a href="https://www.facebook.com/profile.php?id=100007721321905" ><img src={FacebookIcon} alt="" /></a>
      <a href="https://www.linkedin.com/in/samyakjain507/" ><img src={LinkedIn} alt="" /></a>
      <a href="https://github.com/Samyak507" ><img src={Github} alt="" /></a>
        
       
       
    </div>
  )
}

export default Social;