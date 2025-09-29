export default function Button({ content , className}: {content:string , className?:string}) { 


    return (
        <p className={`px-5 py-2 rounded-xl font-bold text-gray-800 text-sm lg:text-base transition-all duration-300 bg-bg uppercase hover:bg-bg/60 hover:text-black hover:cursor-pointer ${className}`}>{ content}</p>

    );
}