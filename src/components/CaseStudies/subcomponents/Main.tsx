import bg from '../assets/bg2.jpg'

export default function Main() { 
    return (
    <div className="relative flex  items-end w-screen min-h-[100vh] md:min-h-[100vh] overflow-hidden py-24">
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover scale-105 brightness-75"
      />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-secondary/23 to-black/80" />
            <div className='relative z-10 w-full flex flex-col justify-end items-center space-y-6 mt-6 text-center self-end'>
                <p className='text-4xl sm:text-6xl md:text-7xl font-bold text-bg'>Our Success Stories</p>
                <p className='text-xl text-gray-300'>Case studies demonstrating excellence and success.</p>
            </div>
</div>
       
    );
}