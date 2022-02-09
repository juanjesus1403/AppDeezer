import React,{Component} from 'react'

class Search extends Component {

    state={
        search : ''

    }
    handleInputChange = (e) =>{
        this.setState({search : e.target.value})
    }

    submitSearch = (e) => {
        e.preventDefault();
        let {search} = this.state;
        this.props.searchAlbums(search)
        console.log(search)
    }
    


    render(){
    return (
        <div className="search mb-2">
            <form onSubmit={(e) => this.submitSearch(e)} >
                <div className="row">
                    <div className="col-md-10">
                        <div className="form-group">
                            <input 
                            type="text"
                            placeholder="Buscar"
                            className="form-control p-3"
                            value={this.state.search}
                            onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <button type="submit" className="btn btn-secondary btn-lg">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            
        </div>
    )
}
}

export default Search;