import { betterAuth } from 'better-auth'
import { mongodbAdapter } from 'better-auth/adapters/mongodb'
import { connectToDatabase } from '@/database/mongoose'
import { nextCookies } from 'better-auth/next-js'

// ===========================================
// 🔹 싱글톤 패턴: 한 번만 만들어서 계속 재사용
// ===========================================

// 이 변수에 인증(auth) 객체를 저장.
// 처음 getAuth() 호출 시에만 실제 객체가 만들어지고, 이후에는 이 객체를 그대로 사용
let authInstance: ReturnType<typeof betterAuth> | null = null

/**
 * 인증 객체(auth 인스턴스)를 생성하거나 기존 것을 반환하는 함수
 *
 * 인스턴스
 * - 클래스/함수 등을 통해 만들어진 실제 객체
 * - 여기서는 betterAuth()를 실행하면 나오는 "인증 기능을 가진 객체"가 인스턴스
 *
 * 싱글톤
 * - 한 앱에서 단 하나만 존재하는 객체
 * - 여러 페이지나 여러 번 호출해도 같은 객체를 공유
 */
const getAuth = async () => {
    // 이미 만들어져 있는 인스턴스가 있다면 그대로 반환
    if (authInstance) return authInstance

    // DB 연결 (Mongoose 사용)
    const mongoose = await connectToDatabase()
    const db = mongoose.connection.db

    if (!db) throw new Error('Failed to connect to database')

    // better-auth 객체 생성
    // 여기서 만들어지는 객체가 "인증 인스턴스"
    authInstance = betterAuth({
        // MongoDB 어댑터를 통해 DB와 연결
        database: mongodbAdapter(db as any),
        secret: process.env.BETTER_AUTH_SECRET, // JWT/세션 비밀키
        baseURL: process.env.BETTER_AUTH_URL, // 인증 관련 URL
        emailAndPassword: {
            enabled: true, // 이메일/비밀번호 로그인 활성화
            disableSignUp: false, // 회원가입 가능
            requireEmailVerification: false, // 이메일 인증 불필요
            minPasswordLength: 8, // 비밀번호 최소 길이
            maxPasswordLength: 128, // 비밀번호 최대 길이
            autoSignIn: true, // 가입 후 자동 로그인
        },
        // Next.js 전용 플러그인: 쿠키 처리
        plugins: [nextCookies()],
    })

    // 만들어진 인스턴스를 반환
    return authInstance
}

// ===========================================
// 🔹 실제로 인증 객체를 가져와 export
// 이걸 다른 파일에서 import 해서 사용 가능
// ===========================================
export const auth = await getAuth()
