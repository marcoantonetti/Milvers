import { Link } from 'react-router-dom';



const NavButtons = (props) => {

    const { name, link  } = props


    return (
    <li className= "nav-button flex-row" >

        {/* <Link to={link} smooth='true' className="a-nav-link"> */}

        {name} 

        {/* </Link> */}

    </li>
    )
}


export default NavButtons