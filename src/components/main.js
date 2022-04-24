import React, { Component } from 'react';
import axios from 'axios';
import './main.css';

class Main extends Component {
    state = { fullSurah: [] } 

    componentDidMount = () => {
        axios.get("http://api.alquran.cloud/v1/surah/" + ((this.props.match.params.num) !== undefined ? this.props.match.params.num : "1"))
        .then(res => { this.setState({ fullSurah: res.data.data.ayahs }) });
        document.getElementById('p').style.minHeight = window.innerHeight + 'px'
    }
    
    render (){
        return (
        <div className="texts">
            <div>
                <p id='p'>{ this.state.fullSurah.map( text => <span><span> {text.text} </span> <span> ({text.numberInSurah}) </span></span>) }</p>
            </div>
        </div>
        );
    }
}

export default Main;