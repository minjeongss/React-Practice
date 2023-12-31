import { useEffect, useState } from "react";

export default function useProducts({salesOnly}){
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(undefined);
    const [products, setProducts] = useState([]);

    useEffect(()=>{ //무한loop에 빠지지 않도록
        setLoading(true);
        setError(undefined);
        fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
        .then(res=>res.json())
        .then(data=>{
            console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
            setProducts(data);
        }).catch(e=>setError('에러가 발생했음!'))
        .finally(()=>setLoading(false));
        return ()=>{
            console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
        }
    },[salesOnly]); //두번째 인자는 dependency

    return [loading,error,products];
}