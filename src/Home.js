import React from 'react'

export default function Home() {
    return (
        <div>
            <div className='text-center my-4'>
                <h1>The Small Catechism</h1>
                <p className='lead'>by Dr. Martin Luther</p>
                <a className='btn btn-primary' href='/preface'>Read the Catechism now</a>
            </div>

            <div className='my-5'>
                <h2>Contents</h2>
                <div className='my-4'>
                    <h3>The 6 Chief Parts</h3>
                    <div className='list-group'>
                        <a href='/ten-commandments' className='list-group-item list-group-item-action'>The Ten Commandments</a>
                        <a href='/creed' className='list-group-item list-group-item-action'>The Creed</a>
                        <a href='/lords-prayer' className='list-group-item list-group-item-action'>The Lord's Prayer</a>
                        <a href='/baptism' className='list-group-item list-group-item-action'>The Sacrament of Holy Baptism</a>
                        <a href='/confession' className='list-group-item list-group-item-action'>Confession</a>
                        <a href='/lords-supper' className='list-group-item list-group-item-action'>The Sacrament of the Altar</a>
                    </div>
                </div>

                <div className='my-4'>
                    <h3>Appendix</h3>
                    <div className='list-group'>
                        <a href='/prayers' className='list-group-item list-group-item-action'>Prayers</a>
                        <a href='/table-of-duties' className='list-group-item list-group-item-action'>Table of Duties</a>
                    </div>
                </div>
            </div>

        </div>
        
    )
}
