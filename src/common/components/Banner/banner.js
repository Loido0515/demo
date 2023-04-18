import React from "react";
import banner1 from '../../../img/banner1.png'
import banner2 from '../../../img/banner2.jpg'
import {FontAwesomeIcon} from "@fortawesome/fontawesome-svg-core"
import './banner.css'


class Banner extends React.Component{
    constructor(props) {
        super(props);
        this.banners = [banner1, banner2];
        this.changeBannerIntv = null;
        this.state = {
            counter: 0
        }
    }

    changeBannerImage(){
        this.setState(prev => {
            const newCounter = (prev.counter + 1) % 2;
            return {
                ...prev,
                counter: newCounter
            }
        })
    }

    componentDidMount() {
        this.changeBannerIntv = setInterval(this.changeBannerImage.bind(this), 2000)
    }

    componentWillUnmount() {
        if(this.changeBannerIntv != null){
            clearInterval(this.changeBannerIntv);
        }
    }

    render() {
        return (
            <div className="banner">
                <img className="banner__img" src={this.banners[this.state.counter]} alt="" />
                
            </div>
        )
    }
};

export default Banner
