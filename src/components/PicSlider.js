import "./PicSlider.css";
import '../index.css';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { useEffect, useState } from "react";
import ImageArray from "./ImageArray";
import NavDots from "./NavDots";



function PicSlider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [newIndex, setNewIndex] = useState('');
  // const [currentPic, setCurrentPic] = useState('');
  // const [currentDot, setCurrentDot] = useState('');


  const showCurrentPic = () => {
    const pics = document.querySelectorAll(".slider-pic");
    Array.from(pics).forEach((pic) => {
      const index = parseInt(pic.dataset.index);
      if(index === currentIndex) {
        pic.classList.remove("hidden");
        return;
      }
    })
  }
  const checkCurrentDot = () => {
    const dots = document.querySelectorAll(".nav-dot");
    Array.from(dots).forEach((dot) => {
      const index = parseInt(dot.dataset.index);
      if(index === currentIndex) {
        dot.checked = true;
        return;
      }
    })
  }
  // SET STARTING PIC AND DOT ON MOUNT
  useEffect(() => {
    showCurrentPic();
    checkCurrentDot();
  });

  const handleRightClick = () => {
    if(currentIndex <= props.images.length) {
      setCurrentIndex(currentIndex + 1);
      updateCurrentPic();
      updateCurrentDot();
    }
  }

  const handleLeftClick = () => {
    setCurrentIndex(currentIndex - 1);
    updateCurrentPic();
    updateCurrentDot();
  }

  //CENTER PICS IF FRAME IS WIDER
  // function centerPic(elem, cont) {
  //   const whiteSpace = cont.scrollWidth - elem.width;
  //   if (whiteSpace > 0) {
  //       elem.style.marginLeft = whiteSpace / 2;
  //   }
  // }
    // setTimeout(() => {
    //     centerPic(props.picArray[currentIndex], container);
    // }, 1000);
  // function hide(element) {
  //   element.classList.remove('fade-out');
  //   element.classList.add('hidden');
  // }
  // function show(elem) {
  //   const slider = document.getElementById("slider");
  //   const container = document.getElementById("pic-frame-inner");
  //   elem.classList.remove('hidden');
  //   setTimeout(() => {
  //       centerPic(slider, container);
  //   }, 250);
  //   slider.classList.add('fade-in');
  // }
  // function dissolve() {
  //   const slider = document.getElementById("slider");

  //   slider.classList.add('fade-out');
  //   setTimeout(function() { hide(slider) }, 1000);
  // }
  // function appear() {
  //   const slider = document.getElementById("slider");
  //   show(slider);
  //   setTimeout(function() { show(slider) }, 1000);
  // }
  // function handleDotClick(e) {
  //   dissolve(currentPic);
  //   setCurrentIndex(e.target.dataset.index);
  //   updateCurrentPic();
  //   updateCurrentDot();
  //   appear(currentPic);
  //   currentDot.checked = true;
  // }
  return(
    <div className="pic-frame-outer">
      <button 
        className="slider-btn slider-btn-left" 
        onClick={handleLeftClick}
        ><ArrowCircleLeftRoundedIcon />
      </button>
      <button 
        className="slider-btn slider-btn-right"
        onClick={handleRightClick}
        ><ArrowCircleRightRoundedIcon />
      </button>
      <div className="pic-frame-inner" id="pic-frame-inner">
        <ImageArray images={props.images} />
      </div>
      <NavDots images={props.images} />
    </div>
  )
}
export default PicSlider;