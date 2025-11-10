'use client'
import InputField from '@/components/forms/InputField'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: 'KR',
            investmentGoals: 'Growth',
            riskTolerance: 'Low',
            preferredIndustry: 'Technology',
        },
        mode: 'onBlur',
    })

    const onSubmit = async (data: SignUpFormData) => {
        try {
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <h1 className='form-title'>회원가입</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                {/* Inputs */}
                <InputField
                    name='fullName'
                    label='이름'
                    placeholder='이름을 입력해주세요.'
                    register={register}
                    error={errors.fullName}
                    validation={{ required: '이름은 필수 입력 사항입니다.', minLength: 2 }}
                />

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
                    {isSubmitting ? '계정 생성 중...' : '투자 시작하기'}
                </Button>
            </form>
        </>
    )
}

export default SignUp
