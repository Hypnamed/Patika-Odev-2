import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)

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