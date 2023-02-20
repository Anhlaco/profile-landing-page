import { Link } from 'react-router-dom'

import './Member.css'
import Avartar from '../../assets/images/avatar.jpg'
import { FaFacebookF, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa'

const Member = () => {
  const memberName = [
    {
      id: 1,
      name: 'Đỗ Khắc Tuấn Vũ',
      skills: 'Front-end Developer',
      link: '/vu',
    },
    {
      id: 2,
      name: 'Điền Đức Minh',
      skills: 'Front-end Developer',
      link: '/minh',
    },
    {
      id: 3,
      name: 'Tuấn Tú',
      skills: 'Front-end Developer',
      link: '/tu',
    },
    {
      id: 4,
      name: 'Ánh Nguyễn',
      skills: 'Front-end Developer',
      link: '/anh',
    },
  ]
  return memberName.map((member) => {
    return (
      <Link to={member.link} key={member.id} className='member__link'>
        <div className='member__container'>
          <img src={Avartar} alt='Avatar' className='member__avatar' />
          <h3 className='member__name'>{member.name}</h3>
          <p className='member__skills'>{member.skills}</p>
          <div className='member__social'>
            <div className='member__social--item'>
              <FaFacebookF className='social--item--fb' />
            </div>
            <div className='member__social--item'>
              <FaTwitter className='social--item--tw' />
            </div>
            <div className='member__social--item'>
              <FaYoutube className='social--item--ytb' />
            </div>
            <div className='member__social--item'>
              <FaGithub className='social--item--git' />
            </div>
          </div>
        </div>
      </Link>
    )
  })
}

export default Member
