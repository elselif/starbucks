import React from 'react'
import GreenButton from '../Buttons/GreenButton'

function LargeCard() {
    return (
        <>
            <div className="p-10 pt-7">
                <div >
                    <img src="https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfYmYyZmZlZTU0ZGJmNGJmODllMjQzNTE2MzgwZGQ1NDgiLCJ0aW1lc3RhbXAiOjE2NjA2MTgzODA4NjEsImNsYWltcyI6e30sImlhdCI6MTY2MDYxODM4MCwiZXhwIjoxNjYwNjE4NjgwLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.vY8uZ-QGlxGqr3_WOEfBjQL2qp76fit7q0F9mBNlecE&data=eyJpbWFnZUlkIjoiMmMxMGRkYzMtYTEzMS00MWMxLWE2ZTktNGZhOTg2OGY0YzVjIiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&" alt="" />
                </div>
                <div>
                    <p className='text-left font-normal p-10 '>
                        Kahveye bizdeyiz! ☕. Mağazalarımızda oturumun yanında “Gel-Al”, “Paket Servis” ve “CarHop” hizmetlerimiz ile yanında olmaya devam ediyoruz. ☺️💚
                        <br />
                        <GreenButton title='Detaylı Bilgi' />
                    </p>

                </div>
            </div>
        </>
    )
}

export default LargeCard