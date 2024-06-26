function Card({children}) {
return <div className="bg-lime-500 w-screen h-screen font-mono flex justify-center items-center"> 
        <div className="bg-gray-500 w-[auto] h-[auto] px-10 py-5 rounded-2xl border-4 border-black flex flex-col items-center">
            {children}
        </div>
    </div>
}

export default Card; 