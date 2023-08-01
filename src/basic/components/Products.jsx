import React, {useEffect, useInsertionEffect, useState} from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {
    const [checked,setChecked]=useState(false);
    //데이터 요청
    const [loading,error,products]=useProducts({salesOnly:checked});
    const handleChange=()=>setChecked((prev)=>!prev);

    //실제 화면 반영
    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
    return (
        <div>
            <input id="checkbox" type="checkbox" value={checked} onChange={handleChange}/>
            <label htmlFor="checkbox">Show Only 🔥 Sale</label>
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

