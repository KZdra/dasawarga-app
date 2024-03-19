import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

function Button(props:{title:String ,logoUrl:string,href:string}) {
  return (
    <>
     <Link className="flex max-h-28 max-w-20 flex-col transition duration-300 ease-in-out items-center hover:bg-blueR-500 p-2 rounded-lg shadow-md" href={props.href}>
    <Image
    src={props.logoUrl}
    width={48}
    height={48}
    alt='button'
    />
    <span className="text-sm font-medium mt-1">{props.title}</span>
  </Link>
  </>
  )
}

export default Button