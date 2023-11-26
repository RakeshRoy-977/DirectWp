import React, { useState } from 'react'
import "./Home.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Home = () => {

    const [userNumber, setuserNumber] = useState(null)

    const handelConnect = () => {
        window.open(`https://api.whatsapp.com/send?phone=${userNumber}`)
    }

    return (
        <>
            <main className='appBox'>
                <div className='inputBox'>
                    <PhoneInput
                        placeholder='WhatsApp Number....'
                        country={'in'}
                        value={userNumber}
                        onChange={(e)=>setuserNumber(e)}
                    />                   
                <button className='connectBtn' onClick={handelConnect}>Connect</button>

                </div>
            </main>
        </>
    )
}

export default Home