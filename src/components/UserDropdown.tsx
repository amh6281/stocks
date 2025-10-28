'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { LogOut } from 'lucide-react'
import NavItems from './NavItems'

const UserDropdown = () => {
    const router = useRouter()

    const handleSignOut = async () => {
        router.push('/sign-in')
    }

    const user = { name: 'test', email: 'test@test.com' }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='ghost'
                    className='flex items-center gap-3 text-gray-400 hover:text-yellow-500'
                >
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src='https://github.com/shadcn.png' />
                        <AvatarFallback className='bg-yellow-500 text-sm font-bold text-yellow-900'>
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className='hidden flex-col items-start md:flex'>
                        <span className='text-base font-medium text-gray-400'>{user.name}</span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='text-gray-400'>
                <DropdownMenuLabel>
                    <div className='relative flex items-center gap-3 py-2'>
                        <Avatar className='h-10 w-10'>
                            <AvatarImage src='https://github.com/shadcn.png' />
                            <AvatarFallback className='bg-yellow-500 text-sm font-bold text-yellow-900'>
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col'>
                            <span className='text-base font-medium text-gray-400'>{user.name}</span>
                            <span className='text-sm text-gray-500'>{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className='bg-gray-600' />
                <DropdownMenuItem
                    onClick={handleSignOut}
                    className='text-md cursor-pointer font-medium text-gray-100 transition-colors focus:bg-transparent focus:text-yellow-500'
                >
                    <LogOut className='mr-2 hidden h-4 w-4 sm:block' />
                    로그아웃
                </DropdownMenuItem>
                <DropdownMenuSeparator className='bg-gray-600 sm:hidden' />
                <nav className='sm:hidden'>
                    <NavItems />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown
