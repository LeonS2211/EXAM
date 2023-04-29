
const calcularTemp = () => {
    
    const radios = document.getElementsByName(`dec`)
    const selected = Array.from(radios).find(radio => radio.checked).value;
    const temp= document.getElementById(`Temp`).value
    if(selected == "C"){
        var calc = (Number(temp) *9/5) + 32;
        alert(`La temperatura calculada es ${calc} F`);
    }else{
        var calc = (Number(temp)-32) * 5/9;
        alert(`La temperatura calculada es ${calc} C`);
    }
    
}