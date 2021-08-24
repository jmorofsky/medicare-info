import '../css/Headshot.css'
import headshot from '../images/headshot.png'

function Headshot() {
    return (
        <div className='headshot'>
            <h1 className='headingText'>HELPING YOU UNDERSTAND MEDICARE</h1>
            <img src={headshot} alt='Meghan Morofsky headshot' className='headshotImg' />
        </div>
    )
}

export default Headshot