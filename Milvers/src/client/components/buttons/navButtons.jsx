import { Link } from 'react-router-dom';



const NavButtons = (props) => {

    const { name, link, number,visibility  } = props


    return (
    <li className='li-nav'>
     <Link onClick={() => visibility(false)} to={link} smooth='true' className="a-nav-link nav-button-container" >
        
        <p className='number'>{number}</p>


        <p >{name} </p>


        </Link>
    </li>
    )
}


export default NavButtons