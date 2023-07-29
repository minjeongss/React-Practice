import React, {useEffect, useInsertionEffect, useState} from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [checked,setChecked]=useState(false);
    const handleChange=()=>setChecked((prev)=>!prev);

    useEffect(()=>{ //무한loop에 빠지지 않도록
        fetch(`data/${checked ? 'sale_' : ''}products.json`)
        .then(res=>res.json())
        .then(data=>{
            console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
            setProducts(data);
        });
        return ()=>{
            console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
        }
    },[checked]); //두번째 인자는 dependency
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

