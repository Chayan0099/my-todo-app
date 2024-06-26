import {Link} from 'react-router-dom'; 
function BottomWarning({label, to, path}) {
    return <div className="w-[95%]">
        <hr className="border-t border-2 border-black my-2"></hr>
        <div className='flex text-sm gap-2 font-semibold'>
        <p>{label}</p>
        <Link to={to} className='underline pointer hover:text-blue-500'>{path}</Link>
        </div>
    </div>
}

export default BottomWarning; 