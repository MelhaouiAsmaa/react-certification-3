import { useValue } from "./GenericContext";

export function NameSetterComponent(){
    const [value, setValue] = useValue();

    function handleChangeName(e){
       return setValue(e.target.value);
    }

    return(
        <>
        <input onChange={(e)=> handleChangeName(e)} value={value}/>
        <p>{value}</p>
        </>
    )
}