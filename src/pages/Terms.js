import Link from 'next/link'

export default function Terms({}) {
    return (
    <div className="flex h-screen">
        <div className="flex w-3/6 justify-center items-center bg-edsightpink-100">
            <div className="text text-white m-10">
                <p className="text-5xl font-bold pb-4">Please don't skip this part.</p>
                <p>Next up, we have the user agreement policy. If you have any questions about the conditions, let us know.</p>
            </div>
        </div>

        <div className="flex flex-col w-3/6 bg-white">

            <div className="flex justify-center items-start mt-5">
                <ul className="steps">
                    <li className="step step-secondary gap-2">Terms and Conditions</li>
                    <li className="step gap-2">Select Role</li>
                    <li className="step gap-2">Confirmation</li>
                    <li className="step gap-2">Add Courses</li>
                </ul>
            </div>

            <div className="terms mt-8 mx-10">
                <h1 className="text-3xl font-bold text-edsightnavy-300">Terms and Conditions</h1>
                <p className="text-edsightgray-100 font-bold py-1">Last updated February 14, 2023.</p>
            </div>
        
            <div className="card-bordered border-edsightlightgray-100 rounded-lg bg-base-100 overflow-auto mt-4 mx-10">
                <div className="card-body">
                    <p>Consectetur adipiscing elit, sed do eiusmod temspor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        
            <div className="form-control flex flex-row mt-4 mx-10">
                <label className="label cursor-pointer gap-2">
                    <input type="checkbox" className="checkbox checkbox-secondary" />
                    <span className="label-text">I agree to the above terms and conditions.</span> 
                </label>
            </div>
        
            <div className="buttons flex flex-row justify-center items-end gap-2 mt-8 mb-4">
                <Link href="/Login">
                    <button className="btn bg-transparent border-hidden text-edsightnavy-300 hover:bg-edsightlightgray-100">Back</button>
                </Link>
                <Link href="/Roles">
                    <button className="btn bg-edsightteal-100 border-hidden text-white hover:bg-edsightteal-200">Continue</button>
                </Link>
            </div>
        </div>
    </div>

    )
}