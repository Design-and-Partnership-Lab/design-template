import Link from 'next/link'

export default function Roles({}) {
    return (

<div className="flex h-screen">
    <div className="flex w-3/6 justify-center items-center bg-edsightpink-100">
        <div className="text text-white m-10">
            <p className="text-5xl font-bold pb-4">How do you plan on using Edsight? Select your role.</p>
            <p>Teachers send surveys to their students. Facilitators send surveys to their Professional Development participants.</p>
        </div>
    </div>
    
        
    <div className="flex flex-col w-3/6 bg-white">

        <div className="flex justify-center items-start mt-5">
            <ul className="steps">
                <li className="step step-secondary gap-2">Terms and Conditions</li>
                <li className="step step-secondary gap-2">Select Role</li>
                <li className="step gap-2">Confirmation</li>
                <li className="step gap-2">Add Courses</li>
            </ul>
        </div>

        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mt-16 text-edsightnavy-300">I plan on using Edsight...</h1>

            <div className="space-y-4 my-10">
                <div className="alert bg-edsightgray-500 w-[400px]">
                    <div>
                        <input type="checkbox" className="checkbox"/>
                        <span className="font-bold text-edsightnavy-300">As a teacher (with courses of students)</span>
                    </div>
                </div>
    
                <div className="alert bg-edsightgray-500 w-[400px]">
                    <div>
                        <input type="checkbox" className="checkbox"/>
                        <span className="font-bold text-edsightnavy-300">As a facilitator (with cohorts of teachers)</span>
                    </div>
                </div>
                <div className="alert bg-edsightgray-500 w-[400px]">
                    <div>
                        <input type="checkbox" className="checkbox"/>
                        <span className="font-bold text-edsightnavy-300">As a both a teacher and facilitator</span>
                    </div>
                </div>
                <div className="alert bg-edsightgray-500 w-[400px]">
                    <div>
                        <input type="checkbox" className="checkbox"/>
                        <span className="font-bold text-edsightnavy-300">As a viewer (none of the above)</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center">

            <div className="buttons flex flex-row justify-items-end mt-8 gap-2">
                <Link href="/Terms">
                    <button className="btn bg-transparent border-hidden text-edsightnavy-300 hover:bg-edsightlightgray-100">Back</button>
                </Link>
                <Link href="/Confirmation">
                    <button className="btn bg-edsightteal-100 border-hidden text-white hover:bg-edsightteal-200">Continue</button>
                </Link>
            </div>

        </div>
    </div>
</div>
    )
}