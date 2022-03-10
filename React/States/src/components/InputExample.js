import React, { useState } from 'react'

function InputExample() {
    const [name, setName] = useState("")
    return (
    <div>
        Lütfen bir isim giriniz <br />
        <input value={name} onChange={(event) => setName(event.target.value)}/> {/* Bir değişiklik sonucu gelen yeni değeri setName ile name'nin içine yazdır. */}
        <br />
        Merhaba {name}
    </div>
  )
}

export default InputExample