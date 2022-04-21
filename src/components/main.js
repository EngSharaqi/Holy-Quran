import React, { Component } from 'react';
import axios from 'axios';
import './main.css';

class Main extends Component {
    state = {
        fullSurah: [],
        picNum: 1,
        handlePickSurah: []
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
        
        axios.get("http://api.alquran.cloud/v1/quran/quran-uthmani")
        .then(res => {
            this.setState({
                fullSurah: res.data.data.surahs,
                text: aya => aya.text
            }); 

            
            var surahName = [];
            
            this.state.fullSurah.map( name => {
                this.state.handlePickSurah.push(name.name);
                
            })
            console.log(surahName.indexOf("سُورَةُ ٱلْفَاتِحَةِ")+1);
            
            // var handlePickSurah = ()=>{
            //     return console.log(document.getElementsByTagName("button").innerHTML);
            //     // console.log(surahName.indexOf(document.getElementsByTagName("button").innerHTML)+1);
            // }

            // surahName.forEach((el, l)=>{
            //     console.log(`${l} => ${el}`)
            // })
            //  
            //  
            // this.state.fullSurah.map(name => console.log(name.text))
            // this.state.fullSurah.map(name => console.log(name.text_imlaei))
            // this.state.fullSurah.map(name => name.ayahs.map( aya => console.log(aya.text))
            // this.state.fullSurah.map(name => {name.ayahs.map(aya => console.log(aya.text))})
        });

        
        // this.state.fullSurah.map(name => console.log(name.text))

    }
    handlePic = (e) =>{
        // console.log(e.target.value)
        this.setState({

        })
        console.log(this.state.handlePickSurah.indexOf(e.target.value)+1)
    }
    render (){
        return (
        <div className="texts">
{/* this.state.fullSurah.map(name => {name.ayahs.map(aya => console.log(aya.text))}) */}

            <div>
                {/* {this.state.fullSurah.map( name => <div><button id= "2" onKeyPress={this.handlePic} type="submit">{name.name}</button> </div>) } */}

                {this.state.fullSurah.map( name => <div><input id= "2" onClick={this.handlePic} type="submit" value = {name.name} /> </div>) }
                


            </div>
                {/* {this.state.fullSurah.map( name => <span> <span>{name.page_number}</span> <span> {name.text_imlaei} </span> <span> ({(name.verse_key).slice(2, name.verse_key.length)}) </span></span>)} */}

            {/* {this.state.fullSurah.map( name => (document.getElementsByTagName("span").getAttribute("class") === "1") ? <p> ({(name.verse_key).slice(2, name.verse_key.length)}) </p> : <span><span> {name.text_imlaei} </span> <span className={name.verse_key.slice(2, name.verse_key.length)}> ({(name.verse_key).slice(2, name.verse_key.length)}) </span></span>)}        */}
        </div>

        );
    }
}

export default Main;