import React from 'react'

const Ball = () => {
    const [isLoading, setIsLoading] = useState(true);


      const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

      const handleMouseMove = (event) => {
            setTimeout(() => {
                  setCursorPosition({ x: event.clientX, y: event.clientY });


            }, 100)
      };

  return (
    <div>Ball</div>
  )
}

export default Ball