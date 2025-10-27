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
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown
