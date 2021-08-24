import '../css/Navigation.css'
import medicare from '../images/medicare.png'

function Navigation() {
    return (
        <div className='navigation'>
            <img src={medicare} alt='Medicare icon' className='logo' />
            <p className='logoText'><strong>Medicare with Meghan Morofsky</strong></p>

            <ul className='navBar'>
                <li className='navItem'><a href='#about' className='linkText'>About Meghan</a></li>
                <li className='navItem'><a href='#mission' className='linkText'>My Mission</a></li>
                <li className='navItem'><a href='#medicare' className='linkText'>What is Medicare</a></li>
                <li className='navItem'><a href='#parts' className='linkText'>Medicare Parts</a></li>
                <li className='navItem'><a href='#contact' className='linkText'>Contact Me</a></li>
            </ul>
        </div>
    )
}

export default Navigation