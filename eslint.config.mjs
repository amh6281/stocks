import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    plugins: ['tailwindcss'],
    rules: {
      'no-undef': 'off', // 정의되지 않은 변수 사용을 비활성화
      'tailwindcss/no-custom-classname': 'off', // 커스텀 클래스명 사용 허용
      'tailwindcss/classnames-order': 'off', // 클래스 순서 검사 비활성화
      'prefer-arrow-callback': 'off', // 화살표 함수 강제 비활성화
      'prefer-template': 'off', // 템플릿 리터럴 강제 비활성화
      'react/function-component-definition': 'off', // 함수 컴포넌트 정의 방식 자유화
      'react/jsx-no-useless-fragment': 'off', // 불필요한 Fragment 경고 비활성화
    },
  }),
];

export default eslintConfig;
