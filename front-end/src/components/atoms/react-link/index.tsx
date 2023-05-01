import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

export interface NavLinkProps extends LinkProps {
  children: React.ReactElement
}

export default function ReactLink({ children, href, ...props }: NavLinkProps) {
  const router = useRouter()
  console.log(href)
  return (
    <Link href={href} data-active={router.pathname === href ? true : false} {...props}>
      { children }
    </Link>
  )
}