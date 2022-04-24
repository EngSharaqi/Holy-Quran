import React, { Component } from 'react';
import axios from 'axios';
import './slider.css';

class Slider extends Component{
    state = {
        fullSurah: [],
        picNum: 1,
        handlePickSurah: [],
        details: []
    }
    componentDidMount = () => {
        axios.get("http://api.alquran.cloud/v1/quran/quran-uthmani")
        .then(res => {
            this.setState({ fullSurah: res.data.data.surahs }); 
            
            this.state.fullSurah.map( name => { this.state.handlePickSurah.push(name.name) })
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
        document.getElementById('side-nav').style.minHeight = window.innerHeight + 'px'
    }

    handleDark = () => {
        document.getElementById('light').style.display = 'inline-block';
        document.getElementById('dark').style.display = 'none';
        document.querySelector('body').classList.add('darkMode');
        document.querySelector('.nav').classList.add('darkMode', 'darkModeNav');
        document.querySelector('footer').classList.add('darkMode', 'darkModefooter');
        document.querySelector('body').classList.remove('lightMode');
        document.querySelector('#side-nav').classList.add('darkMode');
    }
    handleLight = () => {
        document.getElementById('light').style.display = 'none';
        document.getElementById('dark').style.display = 'inline-block';
        document.querySelector('body').classList.add('lightMode');
        document.querySelector('.nav').classList.remove('darkMode', 'darkModeNav');
        document.querySelector('footer').classList.remove('darkMode', 'darkModefooter');
        document.querySelector('body').classList.remove('darkMode');
        document.querySelector('#side-nav').classList.remove('darkMode');
    }
    render(){
        return(
            <nav>
                <div class="row nav">
                    <div class="container">
                        <div class="row">
                            <div class="col logo">ترتيل</div>
                            <div class="col" id="slider-action">
                                <div className='row sideNav'>
                                    <div className='col-12 sideNavBurger'>
                                        <i className="fa-solid fa-moon" id='dark' onClick={this.handleDark}></i>
                                        <i class="fa-regular fa-sun" id='light' onClick={this.handleLight}></i>
                                        <i  onClick={this.handleOpenSlider} className="fa-solid fa-bars" id="burgerNav"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row hide" id="side-nav">
                        <div class='container'>
                            <div class='closeSign'>
                                <button onClick={this.handleCloseSlider} id="close"><i className="fa-solid fa-xmark"></i></button>
                            </div>
                        </div>
                        <a class="logo" href="/">ترتيل</a>
                        <form action={"/" + this.state.Num}>
                            <div class="col-xs-12">
                                {this.state.fullSurah.map(name => 
                                    <div className="row card-info" id="cardInfo" onClick={this.handlePic}>
                                        <div className='col-12'>
                                            <input id="2" type="submit" value={name.name} />
                                        </div>
                                        <div className="col-12">
                                            <div className="row info">
                                                <div className='col'>
                                                    <p className='numberOfSurah'> {name.number} </p>
                                                    <p>رقم السورة</p>
                                                </div>
                                                <div className='col'>
                                                    <p className='numberOfSurah'> {(name.revelationType) === 'Meccan' ? "مكية" : "مدنية"} </p>
                                                    <p>النوع</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Slider;