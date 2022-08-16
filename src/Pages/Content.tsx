import React from 'react'
import AddCard from '../components/Cards/AddCard'
import LargeCard from '../components/Cards/LargeCard'
import Footer from '../Layouts/Accordion'


function Content() {

    return (
        <>
            <div className="ml-96">
                <div className="bg-slate-50 basis-3/5 ml-48">
                    <img src="../../images/homeP.jpeg" className="px-10 py-6" />
                    <div className="static z-0">
                        <h3 className="text-left mx-20 font-semibold antialiased text-lg	">Starbucks®’ta yaz b aşk a! ❤️🏖️</h3>
                        <p className="mx-20 text-md	font-normal	 text-left my-5 antialiased">Yaza keyif katan, baristalarımız tarafından özenle hazırlanan yeni cool lezzetlerimizle tanış! 😎 Banana Split Frappuccino® Blended Beverage ile çikolata ve muzun enfes birleşimi, Passionfruit Raspberry Frappuccino® Blended Beverage ile çarkıfelek meyvesi ve ahududunun muhteşem uyumu mağazalarımızda seni bekliyor! 😋🥳🏃🏻‍♀️</p>
                    </div>
                    <AddCard
                        title='Yazına renk katacak Starbucks® ürünleri Hepsiburada’da!'
                        description='Birbirinden farklı renk ve tasarımları ile Starbucks® kupa ve termosları Hepsiburada’da seni bekliyor!'
                        buttonText='HepsiBurada'
                        image={"https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfNzY4MjQ5M2M4NTNlNDhmMmJhZTJjNTMzMjVlOGE3NTQiLCJ0aW1lc3RhbXAiOjE2NjA1OTY3ODM4OTIsImNsYWltcyI6e30sImlhdCI6MTY2MDU5Njc4MywiZXhwIjoxNjYwNTk3MDgzLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.iuIdH-SsAzDFLuKFeC6ga0PJLc7kC33AQk2WMtRt9xc&data=eyJpbWFnZUlkIjoiMDIwMTI4NTUtYWYyNC00NjM3LWIzMDgtM2ZlZWNjZGM4MzEzIiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&"}
                    />
                    <AddCard
                        title=''
                        description='Starbucks® Delivers ile siparişini ver, sen neredeysen kahven oraya gelsin!'
                        buttonText='Yemek Sepeti'
                        buttonText2='Getir Yemek'
                        image={"https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfNzY4MjQ5M2M4NTNlNDhmMmJhZTJjNTMzMjVlOGE3NTQiLCJ0aW1lc3RhbXAiOjE2NjA1OTY3ODM4OTIsImNsYWltcyI6e30sImlhdCI6MTY2MDU5Njc4MywiZXhwIjoxNjYwNTk3MDgzLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.iuIdH-SsAzDFLuKFeC6ga0PJLc7kC33AQk2WMtRt9xc&data=eyJpbWFnZUlkIjoiNWJjNjQ5YzktMGFlNS00ZWU4LWI2M2YtNTU0YWU0M2VjNzFkIiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&"}
                    />
                    <AddCard
                        title=''
                        description='Starbucks® Mobil Uygulaması’nın ayrıcalıklı dünyası ve güncel kampanyalardan haberdar ol.'
                        buttonText='Hemen İncele'
                        image={"https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfNzY4MjQ5M2M4NTNlNDhmMmJhZTJjNTMzMjVlOGE3NTQiLCJ0aW1lc3RhbXAiOjE2NjA1OTY3ODM4OTIsImNsYWltcyI6e30sImlhdCI6MTY2MDU5Njc4MywiZXhwIjoxNjYwNTk3MDgzLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.iuIdH-SsAzDFLuKFeC6ga0PJLc7kC33AQk2WMtRt9xc&data=eyJpbWFnZUlkIjoiOTA3OTY5YzMtYjI4OS00ZWRiLTgwNTItZTQ5NzQyZTk5ZWQzIiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&"}
                    />
                    <AddCard
                        title='Dondurma mevsimi kahveyle birleşti!'
                        description='Affogato ve Cold Brew Float Starbucks Reserve™ mağazalarında seni bekliyor!'
                        buttonText='Detaylı Bilgi'
                        image={"https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfNzY4MjQ5M2M4NTNlNDhmMmJhZTJjNTMzMjVlOGE3NTQiLCJ0aW1lc3RhbXAiOjE2NjA1OTY3ODM4OTIsImNsYWltcyI6e30sImlhdCI6MTY2MDU5Njc4MywiZXhwIjoxNjYwNTk3MDgzLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.iuIdH-SsAzDFLuKFeC6ga0PJLc7kC33AQk2WMtRt9xc&data=eyJpbWFnZUlkIjoiYzk1ZmZlYmItMWVjNy00ZjExLTlmNTQtMDVhODY2MzJjZDc1IiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&"}
                    />
                    <AddCard
                        title='Eşsiz bir deneyim seni bekliyor!'
                        description='Egzotik bölgelerden nadir kahve çekirdeklerini özenle topladık ve Milano Roastry’de ustalıkla kavurduk. Her fincan kahve ayrı bir hikaye demek ve belki de bu hikayenin bir daha tekrarı yok!'
                        buttonText='Detaylı Bilgi'
                        image={"https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfNzY4MjQ5M2M4NTNlNDhmMmJhZTJjNTMzMjVlOGE3NTQiLCJ0aW1lc3RhbXAiOjE2NjA1OTY3ODM4OTIsImNsYWltcyI6e30sImlhdCI6MTY2MDU5Njc4MywiZXhwIjoxNjYwNTk3MDgzLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.iuIdH-SsAzDFLuKFeC6ga0PJLc7kC33AQk2WMtRt9xc&data=eyJpbWFnZUlkIjoiZThkOGQ4MjItMWRjNS00MGQ3LTllMDgtYTI0YjYxY2NjYjMyIiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&"}
                    />
                    <LargeCard />
                    <div className='p-10'>
                        <hr />
                    </div>
                    <Footer />
                </div>

            </div>
        </>
    )
}

export default Content