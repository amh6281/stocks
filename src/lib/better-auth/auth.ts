import { betterAuth } from 'better-auth'
import { mongodbAdapter } from 'better-auth/adapters/mongodb'
import { connectToDatabase } from '@/database/mongoose'
import { nextCookies } from 'better-auth/next-js'

// 싱글톤 패턴: 인증 인스턴스를 한 번만 생성하여 재사용
let authInstance: ReturnType<typeof betterAuth> | null = null

/**
 * 인증 인스턴스를 생성하고 반환하는 함수
 * 싱글톤 패턴으로 구현되어 여러 번 호출되어도 동일한 인스턴스를 반환
 */
const getAuth = async () => {
    // 이미 인스턴스가 생성되어 있다면 기존 인스턴스 반환
    if (authInstance) return authInstance

    // Mongoose를 통해 MongoDB 데이터베이스 연결
    const mongoose = await connectToDatabase()
    const db = mongoose.connection.db

    if (!db) throw new Error('Failed to connect to database')

    // better-auth 인스턴스 생성 및 설정
    authInstance = betterAuth({
        // MongoDB 어댑터를 사용하여 데이터베이스 연결 설정
        database: mongodbAdapter(db as any),
        secret: process.env.BETTER_AUTH_SECRET,
        baseURL: process.env.BETTER_AUTH_URL,
        // 이메일/비밀번호 인증 설정
        emailAndPassword: {
            enabled: true, // 이메일/비밀번호 인증 활성화
            disableSignUp: false, // 회원가입 기능 활성화
            requireEmailVerification: false, // 이메일 인증 필수 여부 (비활성화)
            minPasswordLength: 8, // 최소 비밀번호 길이
            maxPasswordLength: 128, // 최대 비밀번호 길이
            autoSignIn: true, // 회원가입 후 자동 로그인 활성화
        },
        // Next.js 쿠키 처리
        plugins: [nextCookies()],
    })

    return authInstance
}

export const auth = await getAuth()
