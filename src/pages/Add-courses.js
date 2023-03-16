import Link from 'next/link'

export default function AddCourses({}) {
    return (
    <div className="flex h-screen">
    <div className="flex w-3/6 justify-center items-center bg-edsightpink-100">
        <div className="text text-white m-10">
            <p className="text-5xl font-bold pb-4">Right on! We are almost done.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>

    <div className="flex flex-col w-3/6 bg-white">

        <div className="flex justify-center items-start mt-5">
            <ul className="steps">
                <li className="step step-secondary gap-2">Terms and Conditions</li>
                <li className="step step-secondary gap-2">Select Role</li>
                <li className="step step-secondary gap-2">Confirmation</li>
                <li className="step step-secondary gap-2">Add Courses</li>
            </ul>
        </div>

        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center m-12">
                <h1 className="text-3xl font-bold text-edsightnavy-300">Add Courses</h1>
            </div>

            <div className="card card-compact card-bordered border-edsightlightgray-100 rounded-lg w-96 bg-base-100">
                <div className="card-body">
                  <div className="card-actions justify-end">
                    <button className="btn btn-square border-hidden btn-sm bg-transparent hover:bg-edsightlightgray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                          </svg>                    
                        </button>
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-2">
                        <p className="flex items-center gap-1 text-edsightnavy-300 font-bold">
                            Subject
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-question-circle" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 16v.01" />
                                <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            </svg>
                        </p>
                        <input type="text" placeholder="e.g. Math" className="input input-bordered w-full max-w-sm" />
                    </div>

                    <div className="space-y-2">
                        <p className="flex items-center gap-1 text-edsightnavy-300 font-bold">
                            PD Group Name
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-question-circle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 16v.01" />
                                <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            </svg>
                        </p>
                        <input type="text" placeholder="e.g. Grade 6 Teachers" className="input input-bordered w-full max-w-sm" />
                    </div>
                  </div>
                </div>
              </div>



            <button className="btn btn-outline border-edsightlightgray-100 w-96 mt-5 flex flex-col gap-2 h-20 text-edsightnavy-300 hover:bg-edsightlightgray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                </svg>
                Add Cohort
            </button>
        </div>
        
     
        <div className="buttons flex flex-row justify-center items-end gap-2 mt-8 mb-4">
            <Link href="/Confirmation">
                <button className="btn bg-transparent border-hidden text-edsightnavy-300 hover:bg-edsightlightgray-100">Back</button>
            </Link>
            <Link href="">
                <button className="btn bg-edsightteal-100 border-hidden text-white hover:bg-edsightteal-200">Finish</button>
            </Link>
        </div>
    </div>
</div>
    )
}