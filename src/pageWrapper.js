import React from 'react'

export default function PageWrapper({cloudy, children}){
  const wrapperOpacity = cloudy ? (cloudy + 0.01) : 0
  const night = '0,0,0'
  const blueSky = '135, 286, 235'
  const cloudySky ='176, 196, 222'
  const currentDate = new Date()
  const currentTime = currentDate.getHours()

  let currentSky = blueSky

  if(cloudy > 50){currentSky = cloudySky}
  if(currentTime > 19 || currentTime < 5){currentSky = night}


  return(
    <div style={{
      height: '100%',
      width: '100%',
      minHeight: '100vh',
      minWidth: '100vw',
      backgroundColor: `rgba(${currentSky},${wrapperOpacity})`
    }}>
      {children}
    </div>
  )
}
