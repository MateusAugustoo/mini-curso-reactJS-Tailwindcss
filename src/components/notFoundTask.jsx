import { OctagonX } from 'lucide-react'

export function NotFoundTask() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen gap-4'>
        <OctagonX 
          size={160}
          className='text-violet-700/70'
        />
        <h2 className='text-3xl font-bold text-violet-700/70'>
          Task not found!
        </h2>
      </div>
    </>
  )
}