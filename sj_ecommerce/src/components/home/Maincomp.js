import React, {useEffect} from 'react'
import Baanner from './Baanner'
import Slide from './Slide';
import './home.css';
import { getProducts } from '../redux/actions/action';
import {useDispatch,useSelector} from "react-redux";

const Maincomp = () => {

    const {products} = useSelector(state => state.getproductsdata);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    },[dispatch]);

    return (
        <div className='home_section'>
            <div className='baanner_part'>
                <Baanner />
            </div>
            <Slide title="Deal Of The Day" />
            <Slide title="Brand's" />
            <div className='center_img'>
                <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/Event/JanART/Eventpage/AF/top/hero/v1/V2/Premium_Brands_3000x800._SX3000_QL85_FMpng_.png" alt="" />
            </div>
            <Slide title="Upto 80% off" />
        </div>
    )
}

export default Maincomp