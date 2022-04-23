import React, { Component } from 'react';
import axios from 'axios';
import './main.css';

class Main extends Component {
    state = {
        fullSurah: []
    }
   
    /*
        {
            number: 288,
            text: 'وَاتَّقُوا يَوْمًا تُرْجَعُونَ فِيهِ إِلَى اللَّهِ… كُلُّ نَفْسٍ مَا كَسَبَتْ وَهُمْ لَا يُظْلَمُونَ',
            numberInSurah: 281,
            juz: 3,
            manzil: 1,
        …}
        hizbQuarter: 19
        juz: 3
        manzil: 1
        number: 288
        numberInSurah: 281
        page: 47
        ruku: 39
        sajda: false
        text: "وَاتَّقُوا يَوْمًا تُرْجَعُونَ فِيهِ إِلَ
     */

     // http://api.alquran.cloud/v1/quran/quran-uthmani
// http://api.alquran.cloud/v1/surah/2

    
    componentDidMount = () => {
        
        axios.get("http://api.alquran.cloud/v1/surah/" + ((this.props.match.params.num) !== ''? this.props.match.params.num : this.props.match.params.num == "1"))
        
        .then(res => {
            this.setState({
                fullSurah: res.data.data.ayahs
            }); 
            // hizbQuarter: 1
            // juz: 1
            // manzil: 1
            // number: 1
            // numberInSurah: 1
            // page: 1
            // ruku: 1
            // sajda: false
            // text: "﻿بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
            // this.state.fullSurah.map( name => console.log(name.text))
            
        });

    }
   
    render (){
        
        return (
        <div className="texts">
            <div>
                <p>{ this.state.fullSurah.map( text => <span><span> {text.text} </span> <span> ({text.numberInSurah}) </span></span>) }</p>
            </div>
        </div>
        );
    }
}

export default Main;