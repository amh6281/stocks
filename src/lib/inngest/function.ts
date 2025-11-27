import { sendWelcomeEmail } from '../nodemailer'
import { inngest } from './client'
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from './prompts'

export const sendSignUpEmail = inngest.createFunction(
    { id: 'sign-up-email' },
    { event: 'app/user.created' },
    async ({ event, step }) => {
        const userProfile = `
        - Investment goals: ${event.data.investmentGoals}
        - Risk tolerance: ${event.data.riskTolerance}
        - Preferred industry: ${event.data.preferredIndustry}
        `

        const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace('{{userProfile}}', userProfile)

        const response = await step.ai.infer('generate-welcome-intro', {
            model: step.ai.models.gemini({ model: 'gemini-2.5-flash-lite' }),
            body: {
                contents: [
                    {
                        role: 'user',
                        parts: [{ text: prompt }],
                    },
                ],
            },
        })

        await step.run('send-welcome-email', async () => {
            const part = response.candidates?.[0]?.content?.parts?.[0]
            const introText =
                (part && 'text' in part ? part.text : null) ||
                '가입을 축하드립니다. 지금부터 투자에 더 나은 결정을 내릴 수 있도록 도와드리겠습니다.'

            const {
                data: { email, name },
            } = event
            return await sendWelcomeEmail({ email, name, intro: introText })
        })

        return {
            success: true,
            message: '이메일 전송 완료',
        }
    },
)
