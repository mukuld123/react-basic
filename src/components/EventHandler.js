import React from 'react'

function EventHandler() {
    function buttonClicked()
    {
        console.log('A button is clicked');
    }

  return (
    <div>
        <button onClick={ buttonClicked }>Clickkk</button>

    </div>
  )
}

export default EventHandler