import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

declare global {
    var mongooseCache: {
        // 연결된 mongoose 인스턴스
        conn: typeof mongoose | null
        // 연결 Promise
        promise: Promise<typeof mongoose> | null
    }
}

// 캐시 변수
let cached = global.mongooseCache

if (!cached) {
    // 전역 캐시 빈 객체 초기화
    cached = global.mongooseCache = { conn: null, promise: null }
}

export const connectToDatabase = async () => {
    // MongoDB URI가 설정되지 않았다면 에러
    if (!MONGODB_URI) throw new Error('MONGODB_URI must be set within .env')

    // 이미 연결되어 있다면 기존 연결 반환 (재사용)
    if (cached.conn) return cached.conn

    // 연결 Promise가 없다면 새로운 연결 시작
    if (!cached.promise) {
        // mongoose.connect를 호출하여 연결 Promise를 생성하고 캐시에 저장
        // bufferCommands: false 옵션 - 버퍼링을 비활성화
        cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false })
    }

    // 연결 시도
    try {
        // Promise 완료될 때까지 대기, 연결된 인스턴스를 캐시에 저장
        cached.conn = await cached.promise
    } catch (err) {
        // 연결 실패 시 Promise를 null로 초기화, 에러 발생
        cached.promise = null
        throw err
    }

    // 연결 성공 콘솔 출력
    console.log(`Connected to database ${process.env.NODE_ENV} - ${MONGODB_URI}`)

    // 연결된 mongoose 인스턴스 반환
    return cached.conn
}
