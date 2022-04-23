import React, { Component } from 'react';
import axios from 'axios';
import './slider.css';

class Slider extends Component{
    state = {
        fullSurah: [],
        picNum: 1,
        handlePickSurah: [],
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
                fullSurah: res.data.data.surahs
            }); 
            
            this.state.fullSurah.map( name => {
                this.state.handlePickSurah.push(name.name);
                
            })
        });
    }
    
    handlePic = (e) =>{
        this.setState({
            Num: this.state.handlePickSurah.indexOf(e.target.value)+1
        })
    }        


    handleCloseSlider = () => {
        document.getElementById("side-nav").classList.add("hide");
        document.getElementById("side-nav").classList.remove("open");
    }

    handleOpenSlider = () => {
        document.getElementById("side-nav").classList.remove("hide");
        document.getElementById("side-nav").classList.add("open");
    }
    render(){
        // console.log(this.state.handlePickSurah.indexOf(this.state.Num)+1)
        return(
            <nav>
                <div class="row nav">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 logo">ترتيل</div>
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" id="slider-action" onClick={this.handleOpenSlider}>تصفح السور</div>
                        </div>
                    </div>

                    <div class="row hide" id="side-nav">
                    <button onClick={this.handleCloseSlider} id="close">X</button>
                        <a class="logo" href="/">ترتيل</a>
                        <form action={"/" + this.state.Num}>
                            <div class="col-xs-12">
                                
                                
                                {this.state.fullSurah.map(name => <div><input id="2" onClick={this.handlePic} type="submit" value={name.name} /> </div>)}

                            </div>
                            {/* <div class="" id="slider-action">تصفح السور</div> */}
                        </form>

                    </div>
                </div>
            </nav>
        );
    }
}

export default Slider;