const React = require('react')
const Default = require('./default')

function Home() {
    return (
        <Default>
            <main className='text-center'>
                <h1>Rest Rant</h1>
                <br/>
                <hr className='w-50' size='10' />
                <br/>
                <div className='text-center'>
                    <img src="/images/pancakes.avif" alt="Pancakes" />
                </div>
                <br/>
                <a href='/places'>
                    <button className='btn btn-primary'>Places</button>
                </a>
            </main>
        </Default>
    )
}

module.exports = Home
