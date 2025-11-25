/**
 * Nodemailer 설정 모듈
 * Gmail SMTP 서비스를 사용하여 이메일 전송을 위한 transporter를 생성
 */
import nodemailer from 'nodemailer'
import { WELCOME_EMAIL_TEMPLATE } from './templates'

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

/**
 * 환영 이메일 전송 함수
 * 신규 가입 사용자에게 개인화된 환영 이메일을 전송합니다.
 *
 * @param {WelcomeEmailData} params - 이메일 전송에 필요한 데이터
 * @param {string} params.email - 수신자 이메일 주소
 * @param {string} params.name - 수신자 이름 (템플릿의 {{name}} 플레이스홀더에 사용)
 * @param {string} params.intro - 개인화된 인사말 HTML 콘텐츠 (템플릿의 {{intro}} 플레이스홀더에 사용)
 */
export const sendWelcomeEmail = async ({ email, name, intro }: WelcomeEmailData) => {
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE.replace('{{name}}', name).replace(
        '{{intro}}',
        intro,
    )

    // 이메일 전송 옵션 설정
    const mailOptions = {
        from: `"Signalist" <signalist@test.com>`, // 발신자 정보 (표시명, 이메일 주소)
        to: email, // 수신자 이메일 주소
        subject: `Signalist에 오신 것을 환영합니다 - 주식 시장 인사이트가 준비되었습니다!`, // 이메일 제목
        text: 'Signalist에 가입해 주셔서 감사합니다', // HTML을 지원하지 않는 클라이언트를 위한 텍스트 버전
        html: htmlTemplate, // HTML 형식의 이메일 본문 (템플릿에서 치환된 내용)
    }

    // nodemailer transporter를 사용하여 이메일 전송
    await transporter.sendMail(mailOptions)
}
