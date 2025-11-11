'use client'
import { SelectField, InputField } from '@/components/forms'
import { Button } from '@/components/ui/button'
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/constants/widget'
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

                <SelectField
                    name='investmentGoals'
                    label='투자 목표'
                    placeholder='투자 목표를 선택해주세요.'
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required
                />

                <SelectField
                    name='riskTolerance'
                    label='위험 감수 성향'
                    placeholder='위험 감수 성향을 선택해주세요.'
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                />

                <SelectField
                    name='preferredIndustry'
                    label='선호 산업'
                    placeholder='선호 산업을 선택해주세요.'
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                />

                <Button type='submit' disabled={isSubmitting} className='yellow-btn mt-5 w-full'>
                    {isSubmitting ? '계정 생성 중...' : '투자 시작하기'}
                </Button>
            </form>
        </>
    )
}

export default SignUp
