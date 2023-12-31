import {Suspense} from 'react'
import Repo from "@/app/components/Repo";
import RepoDirs from '@/app/components/RepoDirs';
import Link from 'next/link';
import LoadingPage from '@/app/loading';

function RepoPage({params: {name}}) {
  return (
    <div className='card'>
    <Link href='/code/repos' className='btn btn-back'>
      Back To Repositories
    </Link>
    <Suspense fallback={<div>Loading repo.....</div>}>
        <Repo name={name}/>
    </Suspense>
    <Suspense fallback={<LoadingPage>Loading repo.....</LoadingPage>}>
        <RepoDirs name={name}/>
    </Suspense>
    </div>
  )
}

export default RepoPage