import type { ReactNode } from 'react'
import { KOFI_URL } from '../data/content'

interface GetBupkisLinkProps {
  className?: string
  children: ReactNode
}

export default function GetBupkisLink({ className = 'btn-primary', children }: GetBupkisLinkProps) {
  return (
    <a
      href={KOFI_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}
