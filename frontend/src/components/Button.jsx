function Button({label, onclick}) {
    return <div className="w-full flex justify-center">
        <button onClick={onclick} className="bg-lime-500 m-2 text-xl font-bold py-2 w-full rounded-lg hover:bg-black hover:text-lime-500 ease-out duration-300 hover:scale-105">{label}</button>
    </div>
}

export default Button;