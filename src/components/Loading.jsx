import React, {useEffect, useRef} from 'react';

export default function Loading(){
  const container = useRef(null);

  useEffect(() => {
    const animationUrl = "https://assets9.lottiefiles.com/packages/lf20_touohxv0.json";
    if(window.lottie && container.current){
      window.lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationUrl
      });
    }
  }, []);

  return (
    <div className="loading-center">
      <div ref={container} style={{width:320, height:320}}></div>
      <h4 className="mt-3">Loading your learning experience...</h4>
    </div>
  );
}