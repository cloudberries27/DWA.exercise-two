import React from 'react'

export default function PageWrapper({cloudy, children}){
  const night = '0,0,0'
  const blueSky = '100, 156, 245'
  const cloudySky ='100, 156, 245'
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
      backgroundColor: `rgba(${currentSky})`
    }}>
      {children}
    </div>
  )
}
