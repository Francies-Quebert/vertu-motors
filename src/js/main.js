import $ from 'jquery';
import Header from '../components/Header.html';
import SvgLogo from '../components/svg.html';
import Banner from '../components/homepage/Banner.html';
import Slider from '../components/homepage/Slider.html';
import interior from '../assets/interior.png';
import charge from '../assets/charge.png';

// Create a new image element



$(function () {

    $('.svg-logo').load(SvgLogo);
    $('header').load(Header);
    $('.banner__1').load(Banner);
    $('.slider').load(Slider, (() => {

    }));

    $('.banner__2').load(Banner, () => {
        $('.banner__2 .card__title').text('Explore the new BMW interior')
        $('.banner__2 img.small').attr('src', interior)
    });

    $('.banner__3').load(Banner, () => {
        $('.banner__3 .card__title').text('Electrifying performance with the BMW i4')
        $('.banner__3 img.small').attr('src', charge)
    });

})
