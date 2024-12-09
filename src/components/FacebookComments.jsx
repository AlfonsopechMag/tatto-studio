import React, {useEffect} from 'react'

export const FacebookComments = ({url, width = "100%", numPost = 5 }) => {

    useEffect(() => {
        // Asegúrate de que el SDK se inicialice después de que el componente monte
        if (window.FB) {
            window.FB.XFBML.parse(); // Vuelve a analizar el contenedor para renderizar el plugin
        }
    }, []);

  return (
    <div className='container d-flex flex-column justify-content-center text-center' id='Comments'>
        <div className="col-6 mx-auto ">
          <h2 className='text-center fw-bold mt-5'>COMMENTS</h2>          
        </div>
        <div>            
            <div class="fb-comments" 
                data-href={url} 
                data-width={width}
                data-numposts={numPost}>                
            </div>
        </div>
    </div>
    
  )
}
