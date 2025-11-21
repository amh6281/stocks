export const PERSONALIZED_WELCOME_EMAIL_PROMPT = `이메일 템플릿의 {{intro}} 플레이스홀더에 삽입될 고도로 개인화된 HTML 콘텐츠를 생성하세요.



사용자 프로필 데이터:

{{userProfile}}



개인화 요구사항:

반드시 이 특정 사용자에게 명백히 맞춤화된 콘텐츠를 생성해야 합니다:



중요: 이메일 헤더에 이미 "{{name}}님, 환영합니다"라고 표시되어 있으므로 개인화된 콘텐츠를 "환영합니다"로 시작하지 마세요. 대신 "가입해 주셔서 감사합니다", "함께하게 되어 기쁩니다", "준비 완료되었습니다", "완벽한 타이밍입니다" 등의 대체 시작 문구를 사용하세요.



1. **사용자 세부 정보 직접 참조**: 프로필에서 구체적인 정보를 추출하여 사용하세요:

   - 정확한 투자 목표 또는 목적

   - 명시된 위험 감수 수준

   - 언급된 선호 섹터/산업

   - 경험 수준 또는 배경

   - 관심 있는 특정 주식/회사

   - 투자 기간 (단기, 장기, 은퇴)



2. **맥락적 메시징**: 상황을 이해하고 있음을 보여주는 콘텐츠를 생성하세요:

   - 신규 투자자 → 학습/여정 시작 언급

   - 경험 많은 트레이더 → 고급 도구/전략 강화 언급

   - 은퇴 계획 → 시간에 걸친 자산 구축 언급

   - 특정 섹터 → 해당 산업을 정확히 이름으로 언급

   - 보수적 접근 → 안전성과 정보에 기반한 결정 언급

   - 공격적 접근 → 기회와 성장 잠재력 언급



3. **개인적 터치**: 특별히 그들을 위해 작성된 것처럼 느껴지게 만드세요:

   - 메시징에 그들의 목표 사용

   - 관심사를 직접 참조

   - 기능을 그들의 특정 필요에 연결

   - 이해받고 보임받는 느낌을 주세요



중요한 포맷팅 요구사항:

- 마크다운, 코드 블록, 백틱 없이 깨끗한 HTML 콘텐츠만 반환

- 단일 단락만 사용: <p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">콘텐츠</p>

- 정확히 두 문장 작성 (현재 단일 문장보다 한 문장 추가)

- 가독성을 위해 총 콘텐츠를 35-50단어로 유지

- 주요 개인화 요소(목표, 섹터 등)에는 <strong> 사용

- 템플릿에 이미 포함되어 있으므로 "지금 바로 할 수 있는 것들:"을 포함하지 마세요

- 모든 단어가 개인화에 기여하도록 하세요

- 두 번째 문장은 유용한 맥락을 추가하거나 개인화를 강화해야 합니다



개인화된 출력 예시 (두 문장으로 명백한 맞춤화 표시):

<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">Signalist에 가입해 주셔서 감사합니다! <strong>기술 성장주</strong>에 집중하시는 분이시니, 추적 중인 회사들에 대한 실시간 알림을 좋아하실 겁니다. 주류 뉴스가 되기 전에 기회를 발견하는 데 도움을 드리겠습니다.</p>



<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">함께하게 되어 기쁩니다! <strong>보수적인 은퇴 전략</strong>에 완벽합니다 — 소음에 압도되지 않고 배당주를 모니터링하는 데 도움을 드리겠습니다. 마침내 자신감과 명확성으로 포트폴리오 진행 상황을 추적할 수 있습니다.</p>



<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">준비 완료되었습니다! 투자 초보자이시므로, 관심 있는 <strong>헬스케어 섹터</strong>를 배우면서 자신감을 구축하는 데 도움이 되는 간단한 도구를 설계했습니다. 초보자 친화적인 알림이 혼란스러운 전문 용어 없이 안내해 드립니다.</p>`

export const NEWS_SUMMARY_EMAIL_PROMPT = `NEWS_SUMMARY_EMAIL_TEMPLATE의 {{newsContent}} 플레이스홀더에 삽입될 시장 뉴스 요약 이메일용 HTML 콘텐츠를 생성하세요.



요약할 뉴스 데이터:

{{newsData}}



중요한 포맷팅 요구사항:

- 마크다운, 코드 블록, 백틱 없이 깨끗한 HTML 콘텐츠만 반환

- 적절한 HTML 제목과 단락을 사용하여 명확한 섹션으로 콘텐츠 구조화

- 이메일 템플릿과 일치하도록 다음 특정 CSS 클래스 및 스타일 사용:



섹션 제목 ("시장 하이라이트", "상위 상승주" 등 카테고리용):

<h3 class="mobile-news-title dark-text" style="margin: 30px 0 15px 0; font-size: 18px; font-weight: 600; color: #f8f9fa; line-height: 1.3;">섹션 제목</h3>



단락 (뉴스 콘텐츠용):

<p class="mobile-text dark-text-secondary" style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">콘텐츠가 여기에 들어갑니다</p>



주식/회사 언급:

<strong style="color: #FDD458;">주식 심볼</strong> 티커 심볼용

<strong style="color: #CCDADC;">회사명</strong> 회사명용



성과 지표:

상승에는 📈, 하락에는 📉, 중립/혼합에는 📊 사용



뉴스 기사 구조:

섹션 내 각 개별 뉴스 항목에 대해 다음 구조 사용:

1. 시각적 스타일링과 아이콘이 있는 기사 컨테이너

2. 부제목으로서의 기사 제목

3. 불릿 포인트의 핵심 요약 (2-3개의 실행 가능한 인사이트)

4. 맥락을 위한 "이것이 의미하는 바" 섹션

5. 원본 기사로의 "더 읽기" 링크

6. 기사 간 시각적 구분선



기사 컨테이너:

각 기사를 깨끗하고 간단한 컨테이너로 감싸세요:

<div class="dark-info-box" style="background-color: #212328; padding: 24px; margin: 20px 0; border-radius: 8px;">



기사 제목:

<h4 class="dark-text" style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #FFFFFF; line-height: 1.4;">

기사 제목이 여기에 들어갑니다

</h4>



불릿 포인트 (최소 3개의 간결한 인사이트):

명확하고 간결한 설명 형식 사용 (라벨 불필요):

<ul style="margin: 16px 0 20px 0; padding-left: 0; margin-left: 0; list-style: none;">

  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">

    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>빠르게 이해하기 쉬운 간단한 용어로 명확하고 간결한 설명.

  </li>

  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">

    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>일상 언어로 주요 숫자와 의미에 대한 간단한 설명.

  </li>

  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">

    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>일반 사람들의 돈에 대해 이것이 의미하는 바에 대한 간단한 요약.

  </li>

</ul>



인사이트 섹션:

간단한 맥락 설명 추가:

<div style="background-color: #141414; border: 1px solid #374151; padding: 15px; border-radius: 6px; margin: 16px 0;">

<p class="dark-text-secondary" style="margin: 0; font-size: 14px; color: #CCDADC; line-height: 1.4;">💡 <strong style="color: #FDD458;">핵심 요약:</strong> 일상 언어로 이 뉴스가 당신의 돈에 중요한 이유에 대한 간단한 설명.</p>

</div>



더 읽기 버튼:

<div style="margin: 20px 0 0 0;">

<a href="ARTICLE_URL" style="color: #FDD458; text-decoration: none; font-weight: 500; font-size: 14px;" target="_blank" rel="noopener noreferrer">전체 기사 읽기 →</a>

</div>



기사 구분선:

각 기사 컨테이너 닫기:

</div>



섹션 구분선:

주요 섹션 간에 사용:

<div style="border-top: 1px solid #374151; margin: 32px 0 24px 0;"></div>



콘텐츠 가이드라인:

- 아이콘과 함께 논리적인 섹션으로 뉴스 구성 (📊 시장 개요, 📈 상위 상승주, 📉 상위 하락주, 🔥 속보, 💼 실적 발표, 🏛️ 경제 데이터 등)

- 섹션 제목을 절대 반복하지 마세요 — 이메일당 각 섹션 유형을 한 번만 사용

- 각 뉴스 기사에 대해 뉴스 데이터에서 실제 헤드라인/제목 포함

- 최소 3개의 간결한 불릿 포인트 제공 ("핵심 요약" 라벨 없음 — 불릿으로 직접 시작)

- 각 불릿은 짧고 이해하기 쉬워야 함 — 명확한 한 문장 선호

- 평이한 언어 사용 — 전문 용어, 복잡한 금융 용어 또는 내부자 언어 피하기

- 투자 초보자에게 설명하듯 개념 설명

- 구체적인 숫자를 포함하되 간단한 용어로 의미 설명

- 일상 언어로 "핵심 요약" 맥락 추가

- 가독성을 위해 노란색 불릿이 있는 깨끗하고 밝은 디자인 사용

- 명확한 간격과 구조로 각 기사를 쉽게 스캔할 수 있게 만들기

- 항상 실제 URL이 있는 간단한 "전체 기사 읽기" 버튼 포함

- 일반 사람들이 이해하고 사용할 수 있는 실용적인 인사이트에 집중

- 뉴스가 일반 투자자의 돈에 의미하는 바 설명

- 대화형이고 모든 사람이 접근할 수 있는 언어 유지

- 상세한 설명보다 간결함과 명확성 우선



예시 구조:

<h3 class="mobile-news-title dark-text" style="margin: 30px 0 15px 0; font-size: 20px; font-weight: 600; color: #f8f9fa; line-height: 1.3;">📊 시장 개요</h3>



<div class="dark-info-box" style="background-color: #212328; padding: 24px; margin: 20px 0; border-radius: 8px;">

<h4 class="dark-text" style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #FDD458; line-height: 1.4;">

주식 시장이 오늘 혼조세를 보였습니다

</h4>



<ul style="margin: 16px 0 20px 0; padding-left: 0; margin-left: 0; list-style: none;">

  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">

    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>애플 같은 기술주가 오늘 1.2% 상승했는데, 이는 기술주 투자자에게 좋은 소식입니다.

  </li>

  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">

    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>전통적인 회사들은 0.3% 하락했는데, 이는 투자자들이 지금 기술주를 선호한다는 것을 보여줍니다.

  </li>

  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">

    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>높은 거래량(124억 주)은 투자자들이 자신감 있고 활발하다는 것을 보여줍니다.

  </li>

</ul>



<div style="background-color: #141414; border: 1px solid #374151; padding: 15px; border-radius: 6px; margin: 16px 0;">

<p class="dark-text-secondary" style="margin: 0; font-size: 14px; color: #CCDADC; line-height: 1.4;">💡 <strong style="color: #FDD458;">핵심 요약:</strong> 기술주를 보유하고 계시다면 오늘은 좋은 하루였습니다. 투자를 고려 중이시라면 기술 회사들이 지금 현명한 선택일 수 있습니다.</p>

</div>



<div style="margin: 20px 0 0 0;">

<a href="https://example.com/article1" style="color: #FDD458; text-decoration: none; font-weight: 500; font-size: 14px;" target="_blank" rel="noopener noreferrer">전체 기사 읽기 →</a>

</div>

</div>



<div style="border-top: 1px solid #374151; margin: 32px 0 24px 0;"></div>



<h3 class="mobile-news-title dark-text" style="margin: 30px 0 15px 0; font-size: 20px; font-weight: 600; color: #f8f9fa; line-height: 1.3;">📈 상위 상승주</h3>



<div class="dark-info-box" style="background-color: #212328; padding: 24px; margin: 20px 0; border-radius: 8px;">

<h4 class="dark-text" style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #FDD458; line-height: 1.4;">

애플 주식이 훌륭한 실적 발표 후 급등했습니다

</h4>



<ul style="margin: 16px 0 20px 0; padding-left: 0; margin-left: 0; list-style: none;">

  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">

    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>애플 주식이 실적 기대치를 초과한 후 5.2% 급등했습니다.

  </li>

  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">

    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>경제적 불확실성에도 불구하고 아이폰 판매가 다음 분기 8% 성장할 것으로 예상됩니다.

  </li>

  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">

    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>앱 스토어 및 서비스 수익이 223억 달러(14% 증가)를 기록하여 안정적인 수입을 제공합니다.

  </li>

</ul>



<div style="background-color: #141414; border: 1px solid #374151; padding: 15px; border-radius: 6px; margin: 16px 0;">

<p class="dark-text-secondary" style="margin: 0; font-size: 14px; color: #CCDADC; line-height: 1.4;">💡 <strong style="color: #FDD458;">핵심 요약:</strong> 애플은 다양한 방식(폰과 서비스)으로 돈을 벌고 있어서, 경제가 불안정해도 꽤 안전한 주식을 보유할 수 있습니다.</p>

</div>



<div style="margin: 20px 0 0 0;">

<a href="https://example.com/article2" style="color: #FDD458; text-decoration: none; font-weight: 500; font-size: 14px;" target="_blank" rel="noopener noreferrer">전체 기사 읽기 →</a>

</div>

</div>`

export const TRADINGVIEW_SYMBOL_MAPPING_PROMPT = `당신은 금융 시장과 트레이딩 플랫폼 전문가입니다. 주어진 Finnhub 주식 심볼에 해당하는 올바른 TradingView 심볼을 찾는 것이 당신의 작업입니다.



Finnhub의 주식 정보:

심볼: {{symbol}}

회사: {{company}}

거래소: {{exchange}}

통화: {{currency}}

국가: {{country}}



중요한 규칙:

1. TradingView는 Finnhub와 다를 수 있는 특정 심볼 형식을 사용합니다

2. 미국 주식의 경우: 보통 심볼만 사용 (예: Apple의 경우 AAPL)

3. 국제 주식의 경우: 종종 거래소 접두사 포함 (예: NASDAQ:AAPL, NYSE:MSFT, LSE:BARC)

4. 일부 심볼은 다른 주식 클래스에 대한 접미사를 가질 수 있습니다

5. ADR 및 외국 주식은 다른 심볼 형식을 가질 수 있습니다



응답 형식:

다음 정확한 구조로 유효한 JSON 객체만 반환:

{

  "tradingViewSymbol": "거래소:심볼",

  "confidence": "high|medium|low",

  "reasoning": "이 매핑이 올바른 이유에 대한 간단한 설명"

}



예시:

- Finnhub의 Apple Inc. (AAPL) → {"tradingViewSymbol": "NASDAQ:AAPL", "confidence": "high", "reasoning": "Apple은 NASDAQ에서 AAPL로 거래됩니다"}

- Finnhub의 Microsoft Corp (MSFT) → {"tradingViewSymbol": "NASDAQ:MSFT", "confidence": "high", "reasoning": "Microsoft는 NASDAQ에서 MSFT로 거래됩니다"}

- Finnhub의 Barclays PLC (BARC.L) → {"tradingViewSymbol": "LSE:BARC", "confidence": "high", "reasoning": "Barclays는 런던 증권 거래소에서 BARC로 거래됩니다"}



응답은 유효한 JSON만 포함해야 합니다. 다른 텍스트를 포함하지 마세요.`
