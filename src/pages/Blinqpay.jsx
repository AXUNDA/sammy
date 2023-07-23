import React,{useEffect} from 'react'

const Blinqpay = () => {

    useEffect(() => {
        window.open( 
            "https://merchant.blinqpay.io/login");
      
    }, []);
  return (
    <div>Blinqpay</div>
  )
}

export default Blinqpay