import React from 'react'

const DownloadApp = () => {

  const videoURL = "https://www.youtube.com/watch?v=PO5vGcV3nGo&ab_channel=Gr%C3%B3fImola"
  return (
    <section id="about-app" className="section-p1">
        <h1>Download Our App</h1>
        <iframe width="660" height="415" 
          src="https://www.youtube.com/embed/VAIy8cZWV9I" 
          title="Somebody Told Me - The Killers - Yousician - Guitar - Level 1 - Basic RIff" 
          frameborder="0" 
          allow="accelerometer; 
          autoplay; 
          clipboard-write; 
          encrypted-media; 
          gyroscope; 
          picture-in-picture; 
          web-share" allowfullscreen>
        </iframe>
    </section>
  )
}

export default DownloadApp