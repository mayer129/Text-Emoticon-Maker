export default function Greeting({user, gratitudes, hasSubmittedToday}) {
    return (
        <div className="text-white text-6xl">
            <h1>
                Hello, <span className="text-pink-300">{user.email}</span>!
            </h1>
            { /* && if. ? if else */
                hasSubmittedToday ? (
                    <h2 className="font-black">Today you're grateful for &nbsp; 
                    <span className="text-blue-300">
                        {gratitudes.slice(-1)[0]}</span> 
                    </h2>
                ) : (
                    <h2 className="font-black">What are you grateful for today?</h2>
                )
            }
        </div>
    )
}
