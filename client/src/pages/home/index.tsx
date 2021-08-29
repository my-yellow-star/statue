import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import './home.css';
import BottleHead from './svg/BottleHead_white.svg';
import JugHead2 from './svg/JugHead2_white.svg';
import JugHead3 from './svg/JugHead3_white.svg';
import JugHead from './svg/JugHead_white.svg';

function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const element = ref.current as any;
    const first = element.querySelector('.first');
    gsap.from(first, {
      scrollTrigger: {
        trigger: first,
        start: 'top top',
        end: `+=${windowHeight}`,
        pin: true,
        scrub: true,
        pinSpacing: true,
      }
    });
  }, []);

  useEffect(() => {
    const element = ref.current as any;
    const height = window.innerHeight;
    const second = element.querySelector('.second');
    gsap.from(second, {
      scrollTrigger:{
        trigger: second,
        start: 'top top',
        end: `+=${7*height}px`,
        pin: true,
        scrub: true,
      }
    })
  }, []);

  return (
    <div ref={ref} style={{height: '1000vh'}}>
      <First />
      <Second />
    </div>
  );
}

function First() {
  const ref = useRef(null) as any;

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const element = ref.current.querySelector('#firstText');
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current.querySelector('.first'),
      },
    })
    t1.to(element, {
      transform: 'scale(3)',
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: `+=${0.5*windowHeight}`,
        scrub: true,
      }
    });
    t1.fromTo(element, {
      opacity: 1,
      transform: 'scale(3)'
    },{
      opacity: 0,
      transform: 'scale(4)',
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: `+=${windowHeight * 0.5}`,
        scrub: true,
      }
    });
  }, [])

  return (
    <div className="first" ref={ref}>
      <h1 id='firstText'  style={{fontSize: '40px'}}>Gallery</h1>
      <br/><br/>
      <p style={ {
          textAlign: 'center',
          fontSize: '20px',
          color: 'black',
      } }>Scroll Me</p>
    </div>
  )
}

function Second() {
  const secondRef = useRef(null) as any;
  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const element = secondRef.current.querySelector('.window');
    gsap.fromTo(element, {
      width: '0px',
    }, {
      width: `${width}px`,
      scrollTrigger: {
        trigger: secondRef.current.querySelector('#trigger'),
        start: 'bottom top',
        end: `+=${height}px`,
        scrub: true,
      }
    });
  }, []);

  useEffect(() =>  {
    const height = window.innerHeight;
    const title = secondRef.current.querySelector('#title');
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: secondRef.current.querySelector('#trigger'),
        start: 'top top',
        end: `+=${5*height}px`,
        scrub: 1,
      }
    });
    let t2 = t1.fromTo(title, {
      opacity: 0,
      letterSpacing: '10px',
    }, {
      opacity: 1,
      letterSpacing: '0',
    });

    const imageItems = secondRef.current.querySelectorAll('.imageItem');
    imageItems.forEach((item: any) => {
      let image = item.querySelector('.image');
      t2 = t2.fromTo(image,  {
        transform: 'translate(-20px, 30px)',
        opacity: 0,
      }, {
        transform: 'translate(0, 0)',
        opacity: 1,

      })
    });
    imageItems.forEach((item: any) => {
      let text = item.querySelector('.imageText');
      t2 = t2.to(text, {
        opacity: 1,

      });
    })
    // t2.to(secondRef.current.querySelector('.window'), {
    //   opacity: 0,
    // })
  }, []);

  return (
    <div id='second' ref={secondRef} className="second">
      <BlackGallery/>
      <div className='second-background'/>
      <div id='trigger' style={{marginTop: '0', height:0}}/>
    </div>
  )
}

function BlackGallery() {
  return (
    <div className='window' style={{color: 'white'}}>
      <div className='wrapper'>
        <h1 id='title'>Rorem ipsum</h1>
        <div id='content'>
          <div className='imageWindow'>
            <div className='imageItem'>
              <img className='image' src={JugHead} alt='JugHead'/>
              <p className='imageText'>He heard the loud impact before he ever saw the result. It had been so loud that
                it had actually made him jump back in his seat. As soon as he recovered from the surprise, he saw the
                crack in the windshield. It seemed to be an analogy of the current condition of his life.</p>
            </div>
            <div className='imageItem'>
              <img className='image' src={JugHead2} alt='JugHead2'/>
              <p className='imageText'>Spending time at national parks can be an exciting adventure, but this wasn't the
                type of excitement she was hoping to experience. As she contemplated the situation she found herself in,
                she knew she'd gotten herself in a little more than she bargained for. It wasn't often that she found
                herself in a tree staring down at a pack of wolves that were looking to make her their next meal.</p>
            </div>
            <div className='imageItem'>
              <img className='image' src={JugHead3} alt='JugHead3'/>
              <p className='imageText'>It was a weird concept. Why would I really need to generate a random paragraph?
                Could I actually learn something from doing so? All these questions were running through her head as she
                pressed the generate button. To her surprise, she found what she least expected to see.</p>
            </div>
            <div className='imageItem'>
              <img className='image' src={BottleHead} alt='BottleHead'/>
              <p className='imageText'>Eating raw fish didn't sound like a good idea. "It's a delicacy in Japan," didn't
                seem to make it any more appetizing. Raw fish is raw fish, delicacy or not.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;