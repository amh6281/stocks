/**
 * Nodemailer 설정 모듈
 * Gmail SMTP 서비스를 사용하여 이메일 전송을 위한 transporter를 생성
 */
import nodemailer from 'nodemailer'

/**
 * Gmail SMTP 서비스를 사용하는 nodemailer transporter 인스턴스
 * 환경 변수에서 이메일 계정 정보를 가져와 인증
 *
 * @requires EMAIL_USER - Gmail 계정 이메일 주소
 * @requires EMAIL_PASSWORD - Gmail 앱 비밀번호 또는 계정 비밀번호
 */
export const transporter = nodemailer.createTransport({
    service: 'gmail', // Gmail SMTP 서비스 사용
    auth: {
        user: process.env.EMAIL_USER, // Gmail 계정 이메일 주소
        pass: process.env.EMAIL_PASSWORD, // Gmail 앱 비밀번호
    },
})
