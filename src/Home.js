import React from 'react'

export default function Home() {
    const hash = window.location.hash;

    return (
        <div>
            <div className='text-center my-4'>
                <h1>The Small Catechism</h1>
                <p className='lead'>by Dr. Martin Luther</p>
                <a className='btn btn-primary' href={`/preface${hash}`}>Read the Catechism now</a>
            </div>

            <div className='my-5'>
                <h2>Contents</h2>
                <div className='my-4'>
                    <h3>The 6 Chief Parts</h3>
                    <div className='list-group'>
                        <a href={`/ten-commandments${hash}`} className='list-group-item list-group-item-action'>The Ten Commandments</a>
                        <a href={`/creed${hash}`} className='list-group-item list-group-item-action'>The Creed</a>
                        <a href={`/lords-prayer${hash}`} className='list-group-item list-group-item-action'>The Lord's Prayer</a>
                        <a href={`/baptism${hash}`} className='list-group-item list-group-item-action'>The Sacrament of Holy Baptism</a>
                        <a href={`/confession${hash}`} className='list-group-item list-group-item-action'>Confession</a>
                        <a href={`/lords-supper${hash}`} className='list-group-item list-group-item-action'>The Sacrament of the Altar</a>
                    </div>
                </div>

                <div className='my-4'>
                    <h3>Appendix</h3>
                    <div className='list-group'>
                        <a href={`/prayers${hash}`} className='list-group-item list-group-item-action'>Prayers</a>
                        <a href={`/table-of-duties${hash}`} className='list-group-item list-group-item-action'>Table of Duties</a>
                    </div>
                </div>
            </div>

        </div>
        
    )
}
