import '../css/Parts.css'

function Parts() {
    return (
        <div id='parts'>
            <h1 className='headingText' style={{ margin: '75px auto', width: '700px' }}>MEDICARE PARTS</h1>

            <h3 className='partsTitle'><strong>Part A</strong></h3>
            <p className='partsText'>Part A is hospital insurance for confinement in a hospital or skilled nursing facility under original
                medicare. It also helps cover hospice and inpatient care. Part A assists with coverage for up to 150
                days after first hospitalization, and up to 100 days after first admittance into a nursing facility.
                Part A is free for seniors who worked at least 10 years in the United States and have paid into
                Medicare taxes (FICA).
            </p>

            <h3 className='partsTitle'><strong>Part B</strong></h3>
            <p className='partsText'>Part B is medical insurance and covers physician services, outpatient care, test supplies, and home
                health care under original Medicare. Part B has a monthly fee for two seniors. It also assists with
                surgeon fees, bloodwork, ambulance fees, lab services, and more.
            </p>

            <h3 className='partsTitle'><strong>Part C</strong></h3>
            <p className='partsText'>Part C is also known as Medicare Advantage. It is administered by private
                insurance companies. Medicare Advantage plans take over your Medicare
                and include Part A, Part B, and usually prescription drug coverage. It is
                similar to having a HMO network.
            </p>

            <h3 className='partsTitle'><strong>Part D</strong></h3>
            <p className='partsText'>Part D is for prescription drug coverage. Part D plans are offered by insurance companies and other
                private companies approved by Medicare. Medicare Prescription Drug coverage also provides protection
                for people who have very high drug costs, or from unexpected prescription drug bills in the future.
            </p>
        </div>
    )
}

export default Parts