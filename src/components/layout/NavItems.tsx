'use client'

import { NAV_ITEMS } from '@/constants/navItems'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItems = () => {
    const pathname = usePathname()
    const isActive = (href: string) => pathname.startsWith(href)

    return (
        <ul className='flex flex-col gap-3 p-2 font-medium sm:flex-row sm:gap-10'>
            {NAV_ITEMS.map(({ href, label }) => (
                <li key={href}>
                    <Link
                        href={href}
                        className={cn(
                            'transition-colors hover:text-yellow-500',
                            isActive(href) && 'text-gray-100',
                        )}
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default NavItems
