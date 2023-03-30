const React = require('react')
const Default = require('./default')

function Error404() {
    return (
        <Default>
            <main>
                <h1>404 Page Not Found</h1>
                <div>
                    <img src="/images/nick_young_what.jpg" alt="Pancakes" />
                </div>
                <h3>This doesn't exist</h3>
            </main>
        </Default>
    )
}

module.exports = Error404