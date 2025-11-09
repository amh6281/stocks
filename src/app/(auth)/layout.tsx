import Image from 'next/image'
import Link from 'next/link'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
    <main className='auth-layout'>
        <section className='auth-left-section scrollbar-hide-default'>
            <Link href='/' className='auth-logo'>
                <Image
                    src='/assets/icons/logo.svg'
                    alt='Signalist logo'
                    width={140}
                    height={32}
                    className='h-8 w-auto'
                />
            </Link>
            <div className='flex-1 pb-6 lg:pb-8'>{children}</div>
        </section>
        <section className='auth-right-section'>
            <div className='relative z-10 lg:mt-4 lg:mb-16'>
                <blockquote className='auth-blockquote'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum incidunt
                    amet, blanditiis repellat consequatur beatae quam sequi labore facere deleniti
                    et suscipit, iure quos obcaecati facilis dolores placeat sint!
                </blockquote>
                <div className='flex items-center justify-between'>
                    <div>
                        <cite className='auth-testimonial-author'>- 홍길동</cite>
                        <p className='text-gray-500 max-md:text-xs'>테스트 사용자</p>
                    </div>
                    <div className='flex items-center gap-0.5'>
                        {[1, 2, 3, 4, 5].map(star => (
                            <Image
                                src='/assets/icons/star.svg'
                                alt='Star'
                                key={star}
                                width={20}
                                height={20}
                                className='h-5 w-5'
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='relative flex-1'>
                <Image
                    src='/assets/images/dashboard.png'
                    alt='Dashboard Preview'
                    width={1440}
                    height={1150}
                    className='auth-dashboard-preview absolute top-0'
                />
            </div>
        </section>
    </main>
)

export default Layout
