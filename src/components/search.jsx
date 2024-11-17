import { SearchIcon } from 'lucide-react'

export function SearchTask({value, onChange}) {
  return (
    <div className='w-52 relative'>
      <input 
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search task"
        className="absolute w-full py-2 px-4 rounded-lg border-2 border-slate-200 focus:outline-none placeholder:text-violet-700/55" 
      />
      <SearchIcon className='absolute right-2 top-3 text-violet-700/55'/>
    </div>
  )
}