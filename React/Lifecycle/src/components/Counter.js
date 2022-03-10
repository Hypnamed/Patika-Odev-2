import React, { useEffect, useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Sayıda değişiklik algılandı")

        setInterval(() => {
            setCount((c) => c + 1)
        }, 1000);
        
    }, [count])

    return(
        <div className='App'>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Arttır
            </button>
            <button onClick={() => setCount(count - 1)}>
                Düşür
            </button>
        </div>
    )
}

export default Counter;