'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import InputField from '@/components/forms/InputField'
import FooterLink from '@/components/forms/FooterLink'

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    })

    const onSubmit = async (data: SignInFormData) => {
        try {
            console.log('Sign in', data)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <h1 className='form-title'>로그인</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <InputField
                    name='email'
                    label='이메일'
                    placeholder='이메일을 입력해주세요.'
                    register={register}
                    error={errors.email}
                    validation={{
                        required: '이메일은 필수 입력 사항입니다.',
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: '올바른 이메일 형식이 아닙니다.',
                    }}
                />
                <InputField
                    name='password'
                    label='비밀번호'
                    placeholder='비밀번호를 입력해주세요.'
                    type='password'
                    register={register}
                    error={errors.password}
                    validation={{ required: '비밀번호는 필수 입력 사항입니다.', minLength: 8 }}
                />

                <Button type='submit' disabled={isSubmitting} className='yellow-btn mt-5 w-full'>
                    {isSubmitting ? '로그인 중...' : '로그인'}
                </Button>

                <FooterLink text='계정이 없으신가요?' linkText='회원가입' href='/sign-up' />
            </form>
        </>
    )
}
export default SignIn
