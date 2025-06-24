import { useName } from "./NameContext";

export function NameSetterComponent(){
    const {name, setName} = useName();

    function handleChangeName(e){
       return setName(e.target.value);
    }

    return(
        <>
        <input onChange={(e)=> handleChangeName(e)} value={name}/>
        <p>{name}</p>
        </>
    )
}