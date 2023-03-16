import Link from 'next/link'

export default function Confirmation({}) {
    return (

<div className="flex h-screen">
    <div className="flex w-3/6 justify-center items-center bg-edsightpink-100">
        <div className="text text-white m-10">
            <p className="text-5xl font-bold pb-4">Look at you! Off to a great start.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>

    <div className="flex flex-col w-3/6 bg-white">

        <div className="flex justify-center items-start mt-5">
            <ul className="steps">
                <li className="step step-secondary gap-2">Terms and Conditions</li>
                <li className="step step-secondary gap-2">Select Role</li>
                <li className="step step-secondary gap-2">Confirmation</li>
                <li className="step gap-2">Add Courses</li>
            </ul>
        </div>

        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center m-16">
                <h1 className="text-3xl font-bold text-edsightnavy-300">Confirm Your Role(s)</h1>
                <p className="text-edsightgray-100 text-xl font-bold py-1">Does this look correct?</p>
            </div>
            

            <div className="card card-bordered border-edsightlightgray-100 w-96 h-48 bg-base-100">
                <div className="card-body flex justify-center items-center">
                  <h2 className="card-title mb-2">Bob's Workspace</h2>
                    <div className="flex flex-row gap-2  my-4">
                        <span>Role(s):</span>
                        <span className="badge badge-lg bg-edsightpurple-100 border-hidden text-white">Teacher</span>
                        <span className="badge badge-lg bg-edsightblue-100 border-hidden text-white">Facilitator</span>
                    </div>
                </div>
              </div>
        </div>
     
        <div className="buttons flex flex-row justify-center items-end gap-2 mt-24 mb-4">
            <Link href="/Roles">
                <button className="btn bg-transparent border-hidden text-edsightnavy-300 hover:bg-edsightlightgray-100">Back</button>
            </Link>
            <Link href="/Add-courses">
                <button className="btn bg-edsightteal-100 border-hidden text-white hover:bg-edsightteal-200">Continue</button>
            </Link>
        </div>
    </div>
</div>
    )
}