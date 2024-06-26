function InputBox({label, onchange}){
return <div className="text-xl m-2">
        <div className="font-semibold m-1">{label}</div>
        <input type='text' onChange={onchange} placeholder={`Enter ${label}`} className="p-2 rounded-lg focus:outline-none"></input>
    </div>
}

export default InputBox; 