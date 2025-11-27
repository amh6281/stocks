'use server'

import { auth } from '@/lib/better-auth/auth'
import { inngest } from '../inngest/client'

export const signUpWithEmail = async ({
    email,
    password,
    fullName,
    investmentGoals,
    riskTolerance,
    preferredIndustry,
}: SignUpFormData) => {
    try {
        const response = await auth.api.signUpEmail({ body: { email, password, name: fullName } })

        if (response) {
            await inngest.send({
                name: 'app/user.created',
                data: {
                    email,
                    name: fullName,
                    investmentGoals,
                    riskTolerance,
                    preferredIndustry,
                },
            })
        }
        return { success: true, data: response }
    } catch (err) {
        console.log('회원가입 실패', err)
        return { success: false, message: '회원가입 실패' }
    }
}
