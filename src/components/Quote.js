import '../css/Quote.css'

function Quote() {
    return (
        <div className='quote-bg'>
            <p style=
                {{ color: '#fff', textAlign: 'center', fontSize: '24px', paddingTop: '50px' }}>
                "Choose your Medicare plan <u>with the rest of your life in mind.</u>"</p>
            <p style=
                {{ color: '#fff', textAlign: 'center', fontSize: '16px', paddingBottom: '50px' }}>
                – Steve Vernon, author of <em>Retirement Game-Changers</em></p>
        </div>
    )
}

export default Quote