import '../css/Medicare.css'

function Medicare() {
    return (
        <div className='medicare' id='medicare'>
            <div style={{ overflow: 'hidden' }}>
                <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fill: '#ffffff', width: '100%', height: 15, }}
                >
                    <path d="M60 120L0 0h120L60 120zm120 0L120 0h120l-60 120zm120 0L240 0h120l-60 120zm120 0L360 
                    0h120l-60 120zm120 0L480 0h120l-60 120zm120 0L600 0h120l-60 120zm120 0L720 0h120l-60 120zm120 
                    0L840 0h120l-60 120zm120 0L960 0h120l-60 120zm120 0L1080 0h120l-60 120z" />
                </svg>
            </div>

            <div className='medicare-container'>
                <h2 className='medicare-title'>What is Medicare?</h2>
                <p className='medicare-text'>Medicare is a health insurance for people aged 65 or older, people with
                    certain disabilities under the age of 65, or any age with end-stage renal disease.
                </p>
                <p className='medicare-text'>Medicare is broken down into four parts: Part A, Part B, Part C, and
                    Part D. The insurance coverage it provides helps individuals save on their health care costs.
                </p>
            </div>
        </div>
    )
}
export default Medicare