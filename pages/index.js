
import Image from 'next/image'

import Vercel from '../public/vercel.svg'

export default function Home() {
  return (
    <div className="backgroundWaitlist text-red-800 m-12">
            1 svg, one png and background image
            <Vercel className="m-12"/>
            <Image className="mt-12" src="/some.png" alt="Vercel Logo" width={600} height={400} />

    </div>
  )
}
