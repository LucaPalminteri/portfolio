import WorkContainer from "@/src/components/WorkContainer/WorkContainer";
import {works} from '@/src/utils/works'

export default async function WorkPage () {
  return (
    <div className="max-w-2xl mt-10">
        <h2 className="font-semibold text-2xl">My Work</h2>
        <p>Dedicated to creating products that developers love and sharing knowledge with the next generation. 
          Here&lsquo;s a snapshot of my journey.</p>
        <WorkContainer works={works}/>
    </div>
  )
}