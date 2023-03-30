const React = require('react')
const Default = require('../default.jsx')

function Edit(data) {
    return (
        <Default>
            <main>
                <h1>Edit Place</h1>
                <br />
                <form method='POST' action={`/places/${data.place.id}?_method=PUT`}>
                    <div className='row'>
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Name</label>
                            <input
                                className="form-control"
                                id="name"
                                name="name"
                                type="text"
                                value={data.place.name}
                                required />
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Picture</label>
                            <input
                                className="form-control"
                                id="pic"
                                name="pic"
                                type="text"
                                value={data.place.pic} />
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input
                                className="form-control"
                                id="city"
                                name="city"
                                type="text"
                                value={data.place.city} />
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input
                                className="form-control"
                                id="state"
                                name="state"
                                type="text" 
                                value={data.place.state}/>
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input
                                className="form-control"
                                id="cuisines"
                                name="cuisines"
                                type="text"
                                required 
                                value={data.place.cuisines}/>
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="founded">Year Founded</label>
                            <input 
                                className="form-control" 
                                id="founded" 
                                name="founded"
                                type="number"
                                value={data.place.founded} />
                        </div>
                        <br />
                    </div>
                    <br/>
                    <input className="btn btn-primary" type="submit" value="Submit Changes" />
                </form>
            </main>
        </Default>
    )
}

module.exports = Edit