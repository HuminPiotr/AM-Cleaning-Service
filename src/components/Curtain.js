import React, {Component} from 'react';
import styled from 'styled-components'


// CSS //
const StyledCurtian = styled.div`
    width:100vw;
    height: 100vh;
    max-height: 1600px;
    background: #fff;
    position: absolute;
    top:0;
    right: 17%;

    @keyframes animCurtain {
        0%{
            transform: translateX(0);

        }
        50%{
            opacity: 1;
        }
        60%{
            opacity: 0.5;
        }
        100%{
            transform: translateX(-100%);
            opacity: 0;
        }
    }

    @media(max-width: 640px){
        display: none;
    }
`

// COMPONENT //
class Curtian extends Component {

componentDidMount() {
    const curtain = document.querySelector('.curtain');
    
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting){
            entries[0].target.style.animation = `animCurtain .8s ease-out forwards`;
        }

    }, {threshold: 0.5})

    observer.observe(curtain);
}

render(){
    return(
        <StyledCurtian className="curtain"></StyledCurtian>
    )
}
}

export default Curtian;