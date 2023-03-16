import Link from 'next/link'

export default function Onboarding({}) {
    return (
      <div className="flex h-screen">
      <div className="flex w-3/6 justify-center items-center bg-edsightpink-100">
        <div className="text text-white m-10">
          <p className="text-5xl font-bold pb-4">What insights will you gain today?</p>
          <p>Welcome to Edsight, a visual learning analytics platform for pedagogical improvement and research in education.</p>
        </div>
      </div>
          
      <div className="flex w-3/6 bg-white justify-center items-center flex-col gap-6">
        <p className="font-bold text-edsightgray-300">Log in options:</p>
        <button className="btn btn-wide bg-red-500 border-hidden text-white gap-3 hover:bg-red-600 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
          Sign in with email</button>
        <button className="btn btn-wide bg-white border-solid border-edsightlightgray-100 text-black gap-3 hover:bg-edsightlightgray-100">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
          Sign in with Google
        </button>

        <div className="flex flex-col w-80 border-opacity-50">
          <div className="divider"></div>
        </div>
        


        <p className="font-bold text-edsightgray-300">Are you new? Welcome!</p>
        <Link href="/Terms">
          <button className="btn btn-wide bg-edsightteal-100 border-hidden text-white hover:bg-edsightteal-200">Create an Account</button>
        </Link>
        <div className="flex items-center gap-2 text-edsightgray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-question-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 16v.01" />
            <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          </svg>
          <p className="text-sm text-edsightgray-200">
            Brought to you by the PMR2 Research Network.</p>
        </div>
        
      </div>
   
  </div>

    )

}


