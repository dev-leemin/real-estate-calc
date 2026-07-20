export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  date: string
  readTime: number
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'acquisition-tax-2026',
    title: '취득세율 총정리 2026 — 1·2·3주택과 법인까지',
    description: '2026년 현재 기준 주택 수별 취득세율을 한눈에 정리합니다. 1주택부터 3주택 이상, 법인까지 세율 차이와 계산 방법을 구체적인 수치로 설명합니다.',
    category: '취득세',
    date: '2026-01-10',
    readTime: 7,
    content: `<h2>취득세란 무엇인가</h2>
<p>취득세는 부동산을 취득할 때 납부하는 지방세입니다. 근거 법령은 <strong>지방세법 제7조</strong>이며, 취득일로부터 60일 이내에 신고·납부해야 합니다. 납부 기한을 넘기면 신고불성실가산세 20%와 납부지연가산세가 별도로 부과됩니다.</p>
<h2>2026년 주택 수별 취득세율</h2>
<p>2020년 7·10 대책 이후 개정된 지방세법에 따라 주택 수에 따라 세율이 크게 달라집니다. 아래 표는 <strong>지방세법 제13조의2</strong> 기준입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">구분</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">비조정지역</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">조정대상지역</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">1주택</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">1% ~ 3%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">1% ~ 3%</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">2주택</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">1% ~ 3%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>8%</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">3주택 이상</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>8%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>12%</strong></td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">법인</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>12%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>12%</strong></td>
    </tr>
  </tbody>
</table>
<h2>기본 세율 구간 (1주택 기준)</h2>
<p>1주택자 또는 비조정지역 2주택자는 취득 금액에 따라 세율이 달라집니다. <strong>지방세법 제11조 제1항 제8호</strong>에 규정된 내용입니다.</p>
<ul>
  <li>6억 원 이하: <strong>1%</strong></li>
  <li>6억 원 초과 ~ 9억 원 이하: 취득가액 구간 비례 계산 (1% → 3%)</li>
  <li>9억 원 초과: <strong>3%</strong></li>
</ul>
<h2>부가세 포함 실효세율</h2>
<p>취득세 본세 외에 <strong>지방교육세</strong>(취득세의 10%)와 <strong>농어촌특별세</strong>(전용면적 85㎡ 초과 시 취득세의 10%)가 추가됩니다. 중과세율(8%, 12%) 적용 시에는 농어촌특별세가 취득세의 20%로 높아집니다.</p>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>계산 예시:</strong> 조정대상지역 내 2주택자가 6억 원짜리 아파트 취득 시 → 취득세 8% = 4,800만 원, 지방교육세 80만 원, 농어촌특별세 960만 원 → 합계 약 5,840만 원
</div>
<h2>주택 수 산정 기준</h2>
<p>주택 수는 취득일 기준 세대 전원이 보유한 주택을 합산합니다. <strong>지방세법 시행령 제28조의4</strong>에 따르면 분양권과 입주권도 주택 수에 포함됩니다(2021년 1월 1일 이후 취득분부터). 단, 상속으로 취득한 주택은 5년간 주택 수에서 제외하는 특례가 있습니다.</p>
<h3>주택 수 제외 대상</h3>
<ul>
  <li>공시가격 1억 원 이하 주택 (지방세법 시행령 제28조의2)</li>
  <li>노인복지주택</li>
  <li>가정어린이집으로 사용 중인 주택</li>
</ul>
<h2>신고·납부 방법</h2>
<p>취득일로부터 60일 이내에 해당 부동산 소재지 시·군·구청 세무과에 신고하고 납부해야 합니다. 위택스(www.wetax.go.kr) 또는 이택스를 통한 온라인 신고도 가능합니다.</p>`,
  },
  {
    slug: 'adjusted-area-acquisition-tax',
    title: '조정대상지역 취득세 중과 — 8%와 12% 기준 완전 정리',
    description: '조정대상지역에서 주택을 취득할 때 적용되는 8%, 12% 중과세율의 기준과 예외 사항을 상세히 설명합니다.',
    category: '취득세',
    date: '2026-01-20',
    readTime: 6,
    content: `<h2>조정대상지역이란</h2>
<p>조정대상지역은 주택가격 상승률이 물가 상승률의 1.3배를 초과하거나 청약 경쟁률이 과열된 지역을 <strong>주택법 제63조의2</strong>에 따라 국토교통부장관이 지정합니다. 지정과 해제가 수시로 이뤄지므로 취득 전 반드시 확인해야 합니다.</p>
<h2>중과세율 적용 기준</h2>
<p><strong>지방세법 제13조의2</strong>에 따라 조정대상지역 내 주택 취득 시 세대 기준 주택 보유 수에 따라 다음과 같이 세율이 달라집니다.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">취득 후 보유 주택 수</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">적용 세율</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">비고</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">1주택</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">1% ~ 3%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">일반세율</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">2주택</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>8%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">중과</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">3주택 이상</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>12%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">중과</td>
    </tr>
  </tbody>
</table>
<h2>중과 제외 예외 사항</h2>
<p>모든 경우에 중과세율이 적용되는 것은 아닙니다. <strong>지방세법 시행령 제28조의2</strong>에서 다음과 같은 예외를 인정합니다.</p>
<ul>
  <li>공시가격 <strong>1억 원 이하</strong> 주택 취득</li>
  <li>주택을 취득한 후 <strong>3년 이내</strong> 종전 주택을 처분하는 일시적 2주택</li>
  <li>혼인으로 인한 합가 후 <strong>5년 이내</strong> 처분하는 경우</li>
  <li>상속으로 취득하는 경우 (상속 개시일로부터 5년간 주택 수 제외)</li>
  <li>지방 저가주택 (수도권·광역시·세종시 외, 공시가 3억 원 이하)</li>
</ul>
<h3>일시적 2주택 특례 상세</h3>
<p>기존 주택을 보유한 상태에서 조정대상지역 내 신규 주택을 취득한 경우, 취득일로부터 <strong>3년 이내</strong>에 종전 주택을 처분하면 일반세율(1~3%)을 적용받을 수 있습니다.</p>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>주의:</strong> 일시적 2주택 특례를 적용받으려면 취득 시점에 미리 신고해야 합니다. 사후에 경정청구를 통해 환급받을 수도 있으나, 처음부터 일반세율로 신고하는 것이 유리합니다.
</div>
<h2>실제 납부세액 계산</h2>
<p>중과세율 적용 시 지방교육세와 농어촌특별세도 함께 높아집니다.</p>
<ul>
  <li>취득세 8% 적용 시: 지방교육세 0.4%, 농어촌특별세 0.6% → 총 약 <strong>9%</strong></li>
  <li>취득세 12% 적용 시: 지방교육세 0.4%, 농어촌특별세 1% → 총 약 <strong>13.4%</strong></li>
</ul>
<p>9억 원 아파트를 3주택 이상(조정대상지역)으로 취득한다면 납부세액은 약 9억 × 13.4% = <strong>1억 2,060만 원</strong>에 달합니다.</p>
<h2>지역 지정 현황 확인 방법</h2>
<p>국토교통부 부동산 관련 공고(www.molit.go.kr)와 부동산플래닛, 리얼하우스 등에서 조정대상지역 지정 현황을 실시간으로 확인할 수 있습니다. 지정·해제는 고시일 기준으로 적용되므로 고시 날짜도 함께 확인해야 합니다.</p>`,
  },
  {
    slug: 'officetel-acquisition-tax',
    title: '오피스텔 취득세 — 주택용 vs 업무용, 세율이 달라진다',
    description: '오피스텔은 취득 목적과 실제 사용 용도에 따라 취득세율이 달라집니다. 주택용과 업무용의 세율 차이와 판단 기준을 정리합니다.',
    category: '취득세',
    date: '2026-02-05',
    readTime: 5,
    content: `<h2>오피스텔의 세법상 지위</h2>
<p>오피스텔은 건축법상 업무시설로 분류되지만, 실제 주거 목적으로 사용되는 경우가 많습니다. 취득세 측면에서는 <strong>취득 시점의 용도</strong>를 기준으로 주택용(주거용)인지 업무용인지 판단합니다.</p>
<h2>업무용 오피스텔 취득세</h2>
<p>업무용(상업용)으로 분류된 오피스텔은 <strong>지방세법 제11조 제1항 제7호</strong>에 따라 취득세 <strong>4%</strong>가 적용됩니다. 여기에 농어촌특별세 0.2%, 지방교육세 0.4%가 추가되어 실효세율은 약 <strong>4.6%</strong>입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">구분</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">취득세</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">지방교육세</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">농어촌특별세</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">합계</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">업무용 오피스텔</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">4%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">0.4%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">0.2%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>4.6%</strong></td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">주거용 오피스텔 (1주택)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">1~3%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">0.1~0.3%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">비과세</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>1.1~3.3%</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">주거용 오피스텔 (2주택, 조정)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">8%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">0.4%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">0.6%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>9%</strong></td>
    </tr>
  </tbody>
</table>
<h2>주거용 판단 기준</h2>
<p>오피스텔이 주거용으로 분류되려면 다음 요건 중 하나를 충족해야 합니다.</p>
<ul>
  <li>취득자가 전입신고를 하고 실거주하는 경우</li>
  <li>임차인이 전입신고를 한 경우 (임대차계약서 확인)</li>
  <li><strong>주택임대사업자</strong> 등록 후 주거용으로 임대하는 경우</li>
</ul>
<h3>주거용 전환 시 주의사항</h3>
<p>업무용으로 취득 후 주거용으로 전환하면 차액 세금이 추징될 수 있습니다. <strong>지방세법 제13조의3</strong>에 따라 취득일로부터 <strong>60일</strong> 이내에 용도를 확정하고 신고해야 합니다.</p>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>절세 포인트:</strong> 주택을 보유하지 않은 1주택자로서 주거용 오피스텔을 취득하면 일반 주택과 동일하게 1~3% 세율이 적용됩니다. 반면 이미 주택이 있다면 조정대상지역 여부에 따라 8% 또는 12%가 부과될 수 있습니다.
</div>
<h2>분양권 상태에서의 취득세</h2>
<p>오피스텔 분양권은 준공 후 소유권보존등기 시점에 취득세를 납부합니다. 분양가를 기준으로 취득세가 계산되며, 분양권 전매 시에는 별도 취득세가 발생하지 않습니다. 단, 분양권도 2021년 이후 취득분부터 주택 수 산정에 포함됩니다.</p>`,
  },
  {
    slug: 'gift-acquisition-tax',
    title: '증여로 집 받을 때 취득세 — 생각보다 큰 세금',
    description: '부동산을 증여로 취득할 때 납부해야 하는 취득세율과 과세표준, 시가인정액 기준을 상세히 안내합니다.',
    category: '취득세',
    date: '2026-02-15',
    readTime: 6,
    content: `<h2>증여 취득세 기본 구조</h2>
<p>부동산을 증여받으면 매매와 달리 별도의 취득세가 부과됩니다. <strong>지방세법 제11조 제1항 제2호</strong>에 따라 증여로 인한 취득의 경우 세율은 <strong>3.5%</strong>가 기본입니다. 그러나 조정대상지역 내 3억 원 이상 주택을 증여받는 경우에는 중과세율이 적용됩니다.</p>
<h2>증여 취득세율 요약</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">구분</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">취득세율</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">합계(부가세 포함)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">일반 증여 (비조정 또는 3억 미만)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">3.5%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">약 3.8%</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">조정대상지역 3억 이상 주택 증여</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>12%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>약 13.4%</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">비주택(토지, 상가 등) 증여</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">3.5%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">약 3.8%</td>
    </tr>
  </tbody>
</table>
<h2>과세표준: 시가인정액</h2>
<p>증여 취득세의 과세표준은 <strong>지방세법 제10조의2</strong>에 따라 시가인정액을 사용합니다. 2023년 1월 1일 이후부터 기존 시가표준액(공시가격) 기준에서 시가인정액 기준으로 변경되었습니다.</p>
<h3>시가인정액 적용 순서</h3>
<ol>
  <li>증여일 전 <strong>6개월</strong>~후 3개월 내 매매·경매·공매 사례가 있으면 그 금액</li>
  <li>감정평가를 받은 경우 감정가액</li>
  <li>위 두 가지가 없으면 <strong>공시가격(시가표준액)</strong> 적용</li>
</ol>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>주의:</strong> 2023년부터 시가인정액 기준 전환으로 과세표준이 높아졌습니다. 인근 실거래가가 있다면 공시가격이 아닌 실거래가 수준으로 과세됩니다.
</div>
<h2>증여세와의 관계</h2>
<p>증여 취득세는 증여세와 별개로 납부해야 합니다. 증여세는 <strong>상속세 및 증여세법</strong>에 따라 증여받은 가액에서 공제 후 과세되며, 취득세는 지방세법에 따라 별도 납부합니다.</p>
<h3>계산 예시</h3>
<p>조정대상지역 내 시가 6억 원 주택을 자녀에게 증여하는 경우:</p>
<ul>
  <li>취득세: 6억 × 12% = <strong>7,200만 원</strong></li>
  <li>지방교육세: 6억 × 0.4% = 240만 원</li>
  <li>농어촌특별세: 6억 × 1% = 600만 원</li>
  <li>취득세 합계: <strong>약 8,040만 원</strong></li>
  <li>증여세: 별도 (증여재산공제 5,000만 원 후 누진세율 적용)</li>
</ul>
<h2>배우자·직계존비속 간 증여 시 유의점</h2>
<p>배우자 간 증여는 <strong>상속세 및 증여세법 제53조</strong>에 따라 6억 원까지 증여세가 비과세되지만, 취득세는 감면 없이 그대로 납부해야 합니다. 취득세 측면에서는 증여자와 수증자의 관계가 세율에 영향을 주지 않습니다.</p>`,
  },
  {
    slug: 'inheritance-acquisition-tax',
    title: '상속 부동산 취득세 계산법 — 상속세와 별도 납부',
    description: '부동산을 상속받을 때 내야 하는 취득세 계산법과 상속세와의 차이점, 납부 기한 및 특례 사항을 정리합니다.',
    category: '취득세',
    date: '2026-02-25',
    readTime: 5,
    content: `<h2>상속과 취득세</h2>
<p>상속으로 부동산을 취득하는 경우에도 취득세를 납부해야 합니다. <strong>지방세법 제11조 제1항 제1호</strong>에 따라 상속으로 인한 취득의 세율은 <strong>2.8%</strong>입니다(농지는 2.3%). 이는 매매(1~3%)나 증여(3.5%)와 다른 별도 세율입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">취득 원인</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">취득세율</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">비고</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">상속 (주택)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>2.8%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">농지 2.3%</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">매매 (주택)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">1~3%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">취득가액 기준</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">증여 (주택)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">3.5%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">조정 3억 이상 12%</td>
    </tr>
  </tbody>
</table>
<h2>납부 기한</h2>
<p>상속 취득세의 납부 기한은 상속개시일(피상속인 사망일)이 속하는 달의 말일로부터 <strong>6개월</strong> 이내입니다. 이는 일반 매매(60일)보다 훨씬 깁니다. <strong>지방세법 제20조 제1항</strong>에 규정되어 있습니다. 외국에 주소를 둔 상속인은 9개월까지 연장됩니다.</p>
<h2>과세표준</h2>
<p>상속 취득세의 과세표준은 <strong>시가인정액</strong>이 원칙입니다. 다만 상속의 경우 매매 사례 등 시가인정액 산정이 어렵다면 <strong>시가표준액(공시가격)</strong>을 사용할 수 있습니다.</p>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>절세 포인트:</strong> 상속 개시 전후 6개월 내 인근 유사 주택의 거래사례가 있다면 시가인정액이 올라갈 수 있습니다. 반면 공시가격이 적용되면 취득세 부담이 낮아집니다.
</div>
<h2>상속과 주택 수 산정</h2>
<p><strong>지방세법 시행령 제28조의2</strong>에 따라 상속으로 취득한 주택은 상속개시일로부터 <strong>5년</strong> 동안 주택 수 산정에서 제외합니다. 따라서 상속주택이 있는 상태에서 새 주택을 취득해도 5년 내라면 중과세율 산정 시 상속주택을 제외하고 계산합니다.</p>
<h3>협의분할 등기 시 주의</h3>
<p>상속 재산의 협의분할로 특정 상속인이 부동산 전체를 취득하는 경우에도 법정 상속분 초과분에 대해서는 증여세가 부과될 수 있습니다. 단, 취득세는 상속세율(2.8%)이 그대로 적용됩니다.</p>
<h2>상속세와의 차이</h2>
<p>상속세는 <strong>상속세 및 증여세법 제1조</strong>에 따라 피상속인(사망자)의 유산 전체에 대해 과세되며, 취득세는 각 부동산을 개별로 취득한 상속인에게 부과됩니다. 따라서 두 세금은 납세의무자와 과세 기준이 다릅니다.</p>
<ul>
  <li>상속세: 피상속인의 전체 유산 기준, 상속인 전원이 연대 납세의무</li>
  <li>취득세: 각 부동산별로 취득한 상속인 개인이 납부</li>
</ul>`,
  },
  {
    slug: 'corporation-acquisition-tax',
    title: '법인 명의 주택 취득세 12% — 왜 이렇게 높은가',
    description: '법인이 주택을 취득할 때 적용되는 12% 취득세율의 배경과 예외 사항, 법인 명의 주택 보유의 세금 전체 구조를 설명합니다.',
    category: '취득세',
    date: '2026-03-05',
    readTime: 6,
    content: `<h2>법인 주택 취득세 12% 도입 배경</h2>
<p>2020년 7·10 부동산 대책의 일환으로 <strong>지방세법 제13조의2 제1항</strong>이 개정되어 법인이 주택을 취득할 경우 주택 수나 조정대상지역 여부와 무관하게 일률적으로 <strong>12%</strong>의 취득세가 적용됩니다. 이는 개인 명의 대신 법인 명의를 활용한 규제 회피를 차단하기 위한 목적입니다.</p>
<h2>법인 취득세 세율 구조</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">구분</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">취득세</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">지방교육세</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">농어촌특별세</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">합계</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">법인 주택 취득</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>12%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">0.4%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">1.0%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>약 13.4%</strong></td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">법인 비주택 취득</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">4%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">0.4%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">0.2%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">약 4.6%</td>
    </tr>
  </tbody>
</table>
<h2>예외: 12% 미적용 법인 유형</h2>
<p>다음에 해당하는 법인은 12% 중과세율이 적용되지 않습니다. <strong>지방세법 시행령 제28조의5</strong>에서 규정합니다.</p>
<ul>
  <li>공공주택사업자 (LH, SH 등)</li>
  <li>주택건설사업자가 <strong>건설 목적</strong>으로 취득하는 경우</li>
  <li>주택도시기금이 출자한 법인</li>
  <li>사원용 기숙사로 사용하기 위한 주택 취득</li>
  <li>공시가격 1억 원 이하 주택 취득</li>
</ul>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>주의:</strong> 예외 요건을 충족한다고 자의적으로 판단하면 위험합니다. 취득 목적 변경이나 요건 미충족 시 차액 취득세와 가산세가 추징됩니다.
</div>
<h2>법인 주택 보유 시 추가 세금</h2>
<p>법인이 주택을 취득하면 취득세 외에도 다양한 세금 부담이 추가됩니다.</p>
<h3>종합부동산세</h3>
<p>법인이 보유한 주택은 <strong>종합부동산세법 제9조</strong>에 따라 공제 없이 과세됩니다. 개인은 9억 원 기본공제가 있지만, 법인은 공제 없이 전액 과세됩니다. 세율도 법인은 2주택 이하 2.7%, 3주택 이상 5.0%로 높습니다.</p>
<h3>양도소득세 추가 과세</h3>
<p>법인이 주택을 양도할 경우 법인세에 추가세율이 붙습니다. <strong>법인세법 제55조의2</strong>에 따라 주택 양도 시 법인세율에 <strong>20%p(미등기 40%p)</strong>가 가산됩니다.</p>`,
  },
  {
    slug: 'acquisition-tax-reduction',
    title: '취득세 감면 조건과 신청 방법 — 합법적으로 줄이는 법',
    description: '생애최초 주택, 농어촌 주택, 임대사업자 등록 등 다양한 취득세 감면 제도와 신청 방법을 안내합니다.',
    category: '취득세',
    date: '2026-03-15',
    readTime: 7,
    content: `<h2>취득세 감면 제도 개요</h2>
<p>지방세특례제한법과 조세특례제한법에는 다양한 취득세 감면 제도가 있습니다. 요건을 갖추면 세금을 크게 줄일 수 있으나, 사후 추징 조건이 있으므로 유의해야 합니다.</p>
<h2>주요 감면 제도 목록</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">감면 제도</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">감면율</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">근거 법령</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">생애최초 주택 취득</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>최대 200만 원</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">지방세특례제한법 제36조의3</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">장기임대주택 등록</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">50% 감면</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">지방세특례제한법 제31조</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">전용면적 40㎡ 이하 소형주택</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">50% 감면</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">지방세특례제한법 제31조</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">신혼부부 주택 취득</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">50% 감면</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">지방세특례제한법 제36조의2</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">농어촌주택 취득</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">50% 감면</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">지방세특례제한법 제78조</td>
    </tr>
  </tbody>
</table>
<h2>생애최초 주택 감면 상세</h2>
<p><strong>지방세특례제한법 제36조의3</strong>에 따라 생애 처음으로 주택을 취득하는 경우 최대 200만 원까지 취득세를 감면받을 수 있습니다.</p>
<h3>요건</h3>
<ul>
  <li>세대원 전원이 주택을 소유한 적이 없을 것</li>
  <li>취득가액 12억 원 이하 주택</li>
  <li>취득 후 3개월 이내 전입신고 및 거주</li>
</ul>
<h3>감면액 계산</h3>
<ul>
  <li>취득세 산출세액이 200만 원 이하: <strong>전액 면제</strong></li>
  <li>취득세 산출세액이 200만 원 초과: 200만 원 공제 후 나머지 납부</li>
</ul>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>사후 추징 주의:</strong> 생애최초 감면을 받은 후 3개월 내 전입신고를 하지 않거나, 3년 이내 매도·증여하면 감면받은 세액이 추징됩니다.
</div>
<h2>장기임대주택 감면</h2>
<p>민간임대주택법에 따라 장기일반민간임대주택(10년 임대)으로 등록하는 경우 취득세 50%를 감면받습니다. 단, 전용면적 60㎡ 이하, 취득가액 3억 원(수도권 외 1.5억 원) 이하 요건이 있습니다.</p>
<h2>신청 방법</h2>
<ol>
  <li>취득일로부터 60일 이내에 관할 시·군·구청 세무과에 방문 또는 위택스 온라인 신고</li>
  <li>취득세 감면 신청서 제출 (관할 지자체 서식 사용)</li>
  <li>요건 증명 서류 첨부 (가족관계증명서, 주민등록등본 등)</li>
</ol>`,
  },
  {
    slug: 'new-apartment-acquisition-tax',
    title: '신축 분양 아파트 취득세 — 분양가 vs 시세 어느 쪽 기준?',
    description: '신축 아파트 분양 취득 시 취득세 과세표준과 계산 방법, 분양가와 시세 중 어느 쪽을 적용하는지 명확히 정리합니다.',
    category: '취득세',
    date: '2026-03-25',
    readTime: 5,
    content: `<h2>신축 분양 아파트 취득세 과세표준</h2>
<p>신축 분양 아파트의 경우 취득세 과세표준은 원칙적으로 <strong>분양가(취득가액)</strong>를 기준으로 합니다. <strong>지방세법 제10조</strong>에 따르면 유상 취득의 경우 실제 지급한 금액이 과세표준이며, 분양가에는 부가가치세는 제외하되 발코니 확장비, 옵션비 등 계약서상 포함된 금액은 포함합니다.</p>
<h2>분양가 vs 시세 논란</h2>
<p>프리미엄이 높은 신규 아파트의 경우 분양가보다 시세가 훨씬 높은 경우가 있습니다. 그러나 취득세는 <strong>실제 취득가액(분양가)</strong>을 기준으로 하므로, 시세가 아무리 높아도 분양계약서상 금액으로 신고하면 됩니다.</p>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>단, 주의:</strong> 지방세법 제10조의2에 따른 시가인정액이 분양가보다 높은 경우 과세당국이 시가인정액을 과세표준으로 결정할 수 있습니다.
</div>
<h2>취득 시점과 납부 기한</h2>
<p>신축 아파트의 취득세 납부 시점은 잔금 납부일 또는 소유권보존등기일 중 빠른 날로부터 <strong>60일</strong> 이내입니다.</p>
<h3>납부 일정 예시</h3>
<ol>
  <li>2025년 10월: 분양 계약 체결 (취득세 납부 의무 미발생)</li>
  <li>2026년 5월: 중도금 납부 (취득세 납부 의무 미발생)</li>
  <li>2026년 8월: 잔금 납부 → <strong>취득일 발생</strong></li>
  <li>2026년 10월: 취득세 납부 기한 (잔금일로부터 60일)</li>
</ol>
<h2>취득세 세율 적용</h2>
<p>분양 아파트의 취득세율도 동일하게 취득 당시 보유 주택 수에 따라 결정됩니다. 잔금 납부일 기준 세대 전원의 주택 수를 산정합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">주택 수 (취득 후)</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">비조정지역</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">조정대상지역</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">1주택</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">1~3%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">1~3%</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">2주택</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">1~3%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>8%</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">3주택 이상</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>8%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>12%</strong></td>
    </tr>
  </tbody>
</table>
<h2>발코니 확장비 등 포함 여부</h2>
<p>분양가에는 기본 분양대금 외에 발코니 확장비, 시스템에어컨, 빌트인 가전 등 옵션 비용도 포함됩니다. 이들이 분양계약서에 명시되어 있다면 과세표준에 합산해야 합니다. 입주 후 개인이 선택해 설치한 옵션은 제외됩니다.</p>`,
  },
  {
    slug: 'acquisition-tax-penalty',
    title: '취득세 납부 기한과 가산세 — 놓치면 20% 추가',
    description: '취득세 납부 기한을 놓쳤을 때 발생하는 신고불성실가산세와 납부지연가산세 계산 방법을 정리합니다.',
    category: '취득세',
    date: '2026-04-05',
    readTime: 4,
    content: `<h2>취득세 납부 기한 기본 규정</h2>
<p><strong>지방세법 제20조</strong>에 따라 취득세 납부 기한은 원칙적으로 취득일로부터 <strong>60일</strong> 이내입니다. 취득일이란 잔금 지급일 또는 등기·등록일 중 빠른 날을 기준으로 합니다. 단, 상속의 경우 상속개시일이 속하는 달 말일로부터 6개월입니다.</p>
<h2>납부 기한을 넘겼을 때 가산세</h2>
<p>기한 내 신고를 하지 않거나 납부를 미루면 두 가지 가산세가 부과됩니다.</p>
<h3>1. 신고불성실가산세</h3>
<p><strong>지방세기본법 제53조</strong>에 따라 기한 후 신고 시 납부세액의 <strong>20%</strong>가 부과됩니다. 단, 자진신고 시 감면이 적용됩니다.</p>
<ul>
  <li>기한 후 1개월 이내 신고: 50% 감면 → 실효 가산세 <strong>10%</strong></li>
  <li>1~3개월 이내 신고: 30% 감면 → 실효 가산세 <strong>14%</strong></li>
  <li>3~6개월 이내 신고: 20% 감면 → 실효 가산세 <strong>16%</strong></li>
  <li>6개월 초과: 감면 없음 → 가산세 <strong>20%</strong></li>
</ul>
<h3>2. 납부지연가산세</h3>
<p><strong>지방세기본법 제55조</strong>에 따라 납부가 지연된 기간에 대해 하루 <strong>0.022%</strong>(연 8.03%)의 이자성 가산세가 부과됩니다.</p>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>계산 예시:</strong> 취득세 1,000만 원을 기한 이후 2개월 추가 지연 납부 시 → 신고불성실가산세 140만 원, 납부지연가산세 약 13만 원 → 합계 약 153만 원 추가 부담
</div>
<h2>미등기 취득 가중 규정</h2>
<p>부동산을 취득한 후 등기하지 않고 보유하는 경우, <strong>지방세법 제15조</strong>에 따라 세율이 더 높아집니다. 원래 1~3%인 취득세가 미등기 상태에서는 해당 세율의 <strong>3배</strong>에 달하는 가중세율이 적용될 수 있습니다.</p>
<h2>가산세 면제 사유</h2>
<p>천재지변, 화재, 전쟁 등 불가항력적 사유로 기한을 넘긴 경우 가산세 면제를 신청할 수 있습니다. <strong>지방세기본법 제56조</strong>에 규정되어 있으며, 관할 지자체에 면제 신청서를 제출해야 합니다.</p>
<h2>납부 방법</h2>
<ul>
  <li>위택스(www.wetax.go.kr) 온라인 납부</li>
  <li>은행 CD/ATM 기기 납부</li>
  <li>관할 시·군·구청 직접 방문 납부</li>
  <li>ARS 전화 납부 (지역별 상이)</li>
</ul>`,
  },
  {
    slug: 'first-home-acquisition-tax-reduction',
    title: '생애최초 주택 취득세 감면 200만원 — 조건과 신청법',
    description: '생애 처음 주택을 구입하는 분들을 위한 취득세 감면 제도를 조건, 한도, 신청 방법까지 상세히 안내합니다.',
    category: '취득세',
    date: '2026-04-15',
    readTime: 5,
    content: `<h2>생애최초 취득세 감면 개요</h2>
<p><strong>지방세특례제한법 제36조의3</strong>에 따라 생애 처음으로 주택을 취득하는 경우 최대 200만 원까지 취득세를 감면받을 수 있습니다. 2023년 3월 14일 이후 취득분부터 소득 기준이 폐지되어 소득과 무관하게 요건만 갖추면 됩니다.</p>
<h2>감면 요건</h2>
<ul>
  <li>세대원 <strong>전원</strong>이 과거 주택을 소유한 사실이 없을 것</li>
  <li>취득가액 <strong>12억 원 이하</strong> 주택 (초과 시 감면 불가)</li>
  <li>취득 후 <strong>3개월 이내</strong> 전입신고 필수</li>
  <li>실거주 요건: 3개월 이내 전입 후 거주 유지</li>
</ul>
<h2>감면 금액</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">취득세 산출세액</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">감면 금액</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">실납부액</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">200만 원 이하</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>전액</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">0원</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">200만 원 초과</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>200만 원</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">산출세액 - 200만 원</td>
    </tr>
  </tbody>
</table>
<h2>실제 적용 예시</h2>
<p>5억 원 아파트를 생애 처음 취득하는 경우(비조정지역, 85㎡ 이하):</p>
<ul>
  <li>취득세 1%: 500만 원</li>
  <li>지방교육세 0.1%: 50만 원</li>
  <li>취득세 산출세액: 550만 원</li>
  <li>감면: 200만 원</li>
  <li>실납부액: <strong>350만 원</strong></li>
</ul>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>참고:</strong> 200만 원 감면은 취득세 본세에서만 적용되며, 지방교육세와 농어촌특별세는 별도로 납부합니다.
</div>
<h2>신청 방법</h2>
<ol>
  <li>관할 시·군·구청 세무과 또는 위택스(www.wetax.go.kr) 접속</li>
  <li>취득세 신고 시 생애최초 감면 신청 항목 선택</li>
  <li>첨부 서류: 주민등록등본, 가족관계증명서, 매매계약서 사본</li>
  <li>감면 결정 후 차액 납부</li>
</ol>
<h2>사후 추징 조건</h2>
<p>감면을 받은 후 3개월 이내 전입신고를 하지 않거나, 3년 이내 해당 주택을 처분하거나 임대하면 감면받은 세액 전액이 추징됩니다. 부득이한 사유(전근, 취학 등)는 예외가 인정되나 반드시 사전에 관할 세무서에 신고해야 합니다.</p>`,
  },
  {
    slug: 'one-home-nontaxable',
    title: '1주택 비과세 요건 완벽 정리 — 2년 보유·거주의 모든 것',
    description: '1세대 1주택 양도소득세 비과세 요건인 2년 보유와 거주 조건을 상세히 분석하고, 예외 사항과 적용 방법을 정리합니다.',
    category: '양도소득세',
    date: '2026-04-25',
    readTime: 7,
    content: `<h2>1세대 1주택 비과세 개요</h2>
<p>1세대 1주택을 양도할 때 일정 요건을 충족하면 양도소득세가 비과세됩니다. <strong>소득세법 제89조 제1항 제3호</strong>에 근거하며, 양도가액이 12억 원 이하인 경우 전액 비과세, 초과분은 과세됩니다.</p>
<h2>핵심 요건: 2년 보유</h2>
<p>주택을 취득한 날로부터 양도일까지 <strong>2년 이상 보유</strong>해야 합니다. 조정대상지역 내 2017년 8월 3일 이후 취득한 주택은 보유 2년에 더해 <strong>2년 이상 거주</strong>도 해야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">지역·취득 시점</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">보유 요건</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">거주 요건</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">비조정지역</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>2년</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">불요</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">조정대상지역 (2017.8.3 이후 취득)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>2년</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>2년</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">조정대상지역 (2017.8.2 이전 취득)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>2년</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">불요</td>
    </tr>
  </tbody>
</table>
<h2>거주 요건 예외</h2>
<p><strong>소득세법 시행령 제154조 제1항</strong>에 따라 아래 경우에는 거주 요건 없이 비과세를 받을 수 있습니다.</p>
<ul>
  <li>해외 이주로 인한 출국 전 양도</li>
  <li>1년 이상 국외 거주가 필요한 근무지 이동</li>
  <li>취학·직장 이전으로 세대원 모두가 다른 시·군으로 이사하는 경우</li>
  <li>질병 요양 목적으로 1년 이상 다른 지역 거주 후 양도</li>
</ul>
<h2>보유 기간 기산점</h2>
<p>보유 기간의 기산점은 원칙적으로 <strong>취득일</strong>입니다. 취득일은 잔금 지급일 또는 소유권이전등기일 중 빠른 날입니다. 다만, 상속받은 주택은 피상속인의 취득일부터 기산합니다.</p>
<h3>주의사항: 재건축·재개발 주택</h3>
<p>재건축·재개발로 멸실된 주택을 신축받은 경우 보유 기간은 종전 주택 취득일부터 계산하되, 거주 기간은 실제 거주 기간만 인정합니다.</p>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>12억 원 초과분 과세:</strong> 양도가액이 12억 원을 초과하는 경우 전체 비과세가 아닌 12억 원 이하분만 비과세됩니다. 예를 들어 15억 원에 양도하면 15억 × (3억/15억) = 3억 원에 해당하는 차익에 대해 과세됩니다.
</div>
<h2>비과세 신청 방법</h2>
<p>양도소득세 비과세는 별도 신청 없이 확정신고 시 해당 내용을 기재하면 됩니다. 양도일이 속하는 다음 달 말일까지 예정신고(선택)하거나, 다음 해 5월에 확정신고합니다. 비과세 요건이 충족되면 납부세액이 0원이 됩니다.</p>`,
  },
  {
    slug: 'long-term-holding-deduction',
    title: '장기보유특별공제 최대 80% 받는 법',
    description: '부동산을 장기간 보유할 때 양도차익에서 공제되는 장기보유특별공제의 공제율과 적용 방법, 1주택과 다주택의 차이를 정리합니다.',
    category: '양도소득세',
    date: '2026-05-05',
    readTime: 6,
    content: `<h2>장기보유특별공제란</h2>
<p>장기보유특별공제는 부동산을 3년 이상 보유한 경우 양도차익에서 일정 비율을 공제해주는 제도입니다. <strong>소득세법 제95조</strong>에 규정되어 있으며, 보유 기간이 길수록 공제율이 높아집니다.</p>
<h2>1세대 1주택 공제율</h2>
<p>1세대 1주택의 경우 보유 기간과 거주 기간 각각 4%씩 공제되어 최대 <strong>80%</strong>까지 공제됩니다. <strong>소득세법 제95조 제2항</strong> 및 시행령 제159조의4에 따른 내용입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">보유 기간</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">보유 공제율</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">거주 공제율</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">합계</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">3년 이상</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">12%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">12%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">24%</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">5년 이상</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">20%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">20%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">40%</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">8년 이상</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">32%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">32%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">64%</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">10년 이상</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">40%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">40%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>80%</strong></td>
    </tr>
  </tbody>
</table>
<h2>일반 부동산 및 다주택 공제율</h2>
<p>1세대 1주택이 아닌 경우에는 보유 기간만 인정되며, 공제율도 낮습니다.</p>
<ul>
  <li>3년 이상: <strong>6%</strong></li>
  <li>5년 이상: <strong>10%</strong></li>
  <li>10년 이상: <strong>20%</strong></li>
  <li>15년 이상: <strong>30%</strong></li>
</ul>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>다주택 중과 시 공제 불가:</strong> 조정대상지역 내 다주택자 중과세율 적용 시에는 장기보유특별공제가 적용되지 않습니다(소득세법 제104조의3). 중과에서 제외된 경우에만 공제가 가능합니다.
</div>
<h2>최대 80% 공제 조건 충족 방법</h2>
<p>장기보유특별공제 80%를 받으려면 1세대 1주택으로 <strong>보유 10년 이상 + 거주 10년 이상</strong>이 필요합니다. 거주 기간이 짧다면 보유 기간 공제(40%)만 받게 됩니다.</p>
<h3>거주 기간 계산 주의</h3>
<p>거주 기간은 실제로 해당 주택에 전입신고 후 거주한 기간을 합산합니다. 중간에 이사를 나갔다가 다시 들어온 경우 각 거주 기간을 합산합니다.</p>
<h2>실제 절세 효과 계산</h2>
<p>10년 이상 보유·거주 1주택을 5억 원 차익으로 양도하는 경우:</p>
<ul>
  <li>양도차익: 5억 원</li>
  <li>장기보유특별공제 80%: 4억 원 공제</li>
  <li>과세표준: 약 9,750만 원 (기본공제 250만 원 차감)</li>
  <li>세율 35% 구간 적용 시 납부세액: 약 1,970만 원</li>
</ul>`,
  },
  {
    slug: 'temporary-two-homes',
    title: '일시적 2주택 비과세 특례 — 3년 이내 조건 완벽 정리',
    description: '이사 과정에서 발생하는 일시적 2주택 상황에서 양도소득세 비과세를 받기 위한 요건과 기간 규정을 상세히 설명합니다.',
    category: '양도소득세',
    date: '2026-05-15',
    readTime: 6,
    content: `<h2>일시적 2주택 비과세란</h2>
<p>이사 목적으로 신규 주택을 취득한 후 종전 주택을 처분하는 과정에서 일시적으로 2주택이 된 경우, 종전 주택을 일정 기간 내에 양도하면 1주택 비과세를 적용받을 수 있습니다. <strong>소득세법 시행령 제155조 제1항</strong>에 근거합니다.</p>
<h2>핵심 요건</h2>
<ul>
  <li>종전 주택 취득 후 <strong>1년 이상</strong> 경과 후 신규 주택 취득</li>
  <li>신규 주택 취득일로부터 <strong>3년 이내</strong>에 종전 주택 양도</li>
  <li>종전 주택이 1세대 1주택 비과세 요건(2년 보유, 조정지역 2년 거주) 충족</li>
</ul>
<h2>적용 기간 정리</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">신규 취득 지역</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">종전 주택 처분 기한</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">비고</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">비조정지역</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>3년</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"></td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">조정대상지역</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>3년</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">2022년 5월 개정 이후</td>
    </tr>
  </tbody>
</table>
<p>2022년 5월 이전에는 조정대상지역→조정대상지역 이전 시 1년으로 단축되었으나, 2022년 5월 10일 이후 모두 <strong>3년</strong>으로 통일되었습니다.</p>
<h2>종전 주택 1년 이상 보유 요건</h2>
<p>신규 주택 취득 전에 종전 주택을 <strong>1년 이상</strong> 보유해야 합니다. 이 요건을 충족하지 못하면 일시적 2주택 특례를 적용받을 수 없습니다.</p>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>주의:</strong> 분양권도 주택 수에 포함(2021년 이후 취득)되므로, 분양권 취득도 종전 주택 1년 이상 보유 후 취득해야 합니다.
</div>
<h2>처분 기한 계산 방법</h2>
<p>3년의 기산점은 신규 주택의 <strong>취득일</strong>입니다. 취득일로부터 3년이 되는 날까지 종전 주택의 잔금을 수령해야 합니다. 계약일이 아닌 잔금 수령일을 기준으로 합니다.</p>
<h3>계산 예시</h3>
<ul>
  <li>종전 주택 취득일: 2022년 3월 10일</li>
  <li>신규 주택 취득일: 2023년 6월 20일</li>
  <li>종전 주택 처분 기한: 2026년 6월 20일까지 잔금 수령</li>
</ul>
<h2>실수 사례와 주의점</h2>
<p>일시적 2주택 특례는 종전 주택이 비과세 요건(2년 보유 및 거주)을 갖춰야 합니다. 종전 주택을 2년 미만 보유하거나 조정지역에서 2년 거주를 채우지 못한 경우 특례를 받더라도 비과세가 적용되지 않습니다.</p>`,
  },
  {
    slug: 'basic-deduction-250',
    title: '양도소득세 기본공제 250만원 — 매년 한 번 꼭 챙기세요',
    description: '양도소득세 계산 시 매년 공제되는 기본공제 250만 원의 적용 시기와 방법, 활용 전략을 안내합니다.',
    category: '양도소득세',
    date: '2026-05-25',
    readTime: 4,
    content: `<h2>기본공제 250만 원이란</h2>
<p><strong>소득세법 제103조</strong>에 따라 양도소득이 있는 경우 연간 <strong>250만 원</strong>의 기본공제가 적용됩니다. 이는 양도차익에서 필요경비와 장기보유특별공제를 공제한 후의 과세표준에서 250만 원을 추가로 차감하는 방식입니다.</p>
<h2>기본공제 계산 위치</h2>
<p>양도소득세 계산 순서는 다음과 같습니다.</p>
<ol>
  <li>양도차익 = 양도가액 - 취득가액 - 필요경비</li>
  <li>과세표준 = 양도차익 - 장기보유특별공제</li>
  <li>양도소득금액 = 과세표준 - <strong>기본공제 250만 원</strong></li>
  <li>산출세액 = 양도소득금액 × 세율</li>
</ol>
<h2>연간 1회 적용 원칙</h2>
<p>기본공제 250만 원은 <strong>1년에 1회</strong>만 적용됩니다. 같은 해에 2개 이상의 부동산을 양도한 경우에도 합산하여 250만 원 1회만 공제됩니다.</p>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>활용 전략:</strong> 양도차익이 250만 원 이하인 경우 세금이 0원이 됩니다. 여러 자산을 양도할 계획이라면 연도를 분산하여 매년 250만 원씩 기본공제를 활용하는 것이 유리합니다.
</div>
<h2>소액 부동산 양도 활용</h2>
<p>예를 들어 차익이 500만 원인 토지를 두 해에 나눠서 양도한다면 각각 250만 원씩 기본공제를 받아 세금이 0원이 될 수 있습니다. 반면 같은 해에 한 번에 양도하면 250만 원 공제 후 250만 원에 대해 세금이 부과됩니다.</p>
<h2>다주택자 중과 시 기본공제</h2>
<p>다주택자 중과세율이 적용되는 경우에도 기본공제 250만 원은 동일하게 적용됩니다.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">항목</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">일반 과세</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">다주택 중과</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">기본공제 250만 원</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">적용</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">적용</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">장기보유특별공제</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">적용</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>미적용</strong></td>
    </tr>
  </tbody>
</table>
<h2>신고 방법</h2>
<p>기본공제는 양도소득세 확정신고(매년 5월) 또는 예정신고(양도월 다음다음 달 말일) 시 신고서에 자동으로 반영됩니다. 별도 신청 없이 기재하면 됩니다.</p>`,
  },
  {
    slug: 'multi-home-capital-gains',
    title: '다주택자 양도소득세 중과세율 — 조정지역 얼마나 무거운가',
    description: '2주택 이상 보유자가 조정대상지역 주택을 팔 때 적용되는 중과세율을 설명합니다. 기본세율에 20~30%p 추가 부과되는 구조와 계산 예시를 제공합니다.',
    category: '양도소득세',
    date: '2026-01-25',
    readTime: 8,
    content: `<h2>다주택자 양도세 중과란</h2>
<p>조정대상지역 내 주택을 2주택 이상 보유한 상태에서 양도할 경우, 기본 누진세율에 추가로 중과세율이 붙습니다. 근거는 <strong>소득세법 제104조</strong>입니다.</p>
<h2>2026년 중과세율</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;">주택 수</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;">조정지역</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;">비조정지역</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">2주택</td><td style="border:1px solid #d1d5db;padding:8px 12px;color:#dc2626;">기본세율 + 20%p</td><td style="border:1px solid #d1d5db;padding:8px 12px;">기본세율</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">3주택 이상</td><td style="border:1px solid #d1d5db;padding:8px 12px;color:#dc2626;">기본세율 + 30%p</td><td style="border:1px solid #d1d5db;padding:8px 12px;">기본세율 + 10%p</td></tr>
  </tbody>
</table>
<h2>계산 예시: 조정지역 2주택자</h2>
<p>양도차익이 1억 원인 경우, 기본세율 35%(누진공제 1,544만원 적용) + 20%p = 최대 55%가 적용됩니다. 실제 세액은 <strong>약 3,956만원</strong>(지방소득세 포함 4,352만원)에 달합니다.</p>
<h2>중과 배제 요건</h2>
<ul>
  <li>일시적 2주택(3년 이내 기존 주택 처분)</li>
  <li>상속주택(5년 이내 상속 주택 양도)</li>
  <li>지방 저가 주택(공시가격 3억 이하, 수도권 제외 일부 지역)</li>
  <li>장기임대주택(8년 이상 임대 등록)</li>
</ul>
<h2>절세 전략</h2>
<p>보유 주택 수를 줄이거나, 비조정지역 주택부터 먼저 양도하는 방법을 고려하세요. 또한 오래 보유한 주택의 장기보유특별공제를 최대한 활용하는 것이 중요합니다.</p>`,
  },
  {
    slug: 'presale-rights-capital-gains',
    title: '분양권·입주권 양도세 계산법',
    description: '분양권과 입주권을 양도할 때 적용되는 양도소득세 세율과 계산 방법, 주택 수 포함 기준을 정리합니다.',
    category: '양도소득세',
    date: '2026-06-15',
    readTime: 6,
    content: `<h2>분양권·입주권의 세법상 구분</h2>
<p>분양권은 주택 분양 계약에 따라 취득하는 권리이고, 입주권은 재건축·재개발 조합원이 갖는 새 아파트 입주 권리입니다. 두 가지 모두 양도 시 양도소득세가 과세되지만 세율과 과세 방식에 차이가 있습니다.</p>
<h2>분양권 양도세 세율</h2>
<p><strong>소득세법 제104조 제1항 제11호</strong>에 따라 분양권 양도 시 보유 기간에 따라 세율이 달라집니다.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">보유 기간</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">세율</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">비고</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">1년 미만</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>70%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"></td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">1년 이상 ~ 2년 미만</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>60%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"></td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">2년 이상</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>60%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">2021.6.1 이후 취득</td>
    </tr>
  </tbody>
</table>
<p>2021년 6월 1일 이후 취득한 분양권은 보유 기간에 관계없이 <strong>최소 60%</strong> 세율이 적용됩니다. 이는 분양권 전매를 통한 단기 투기를 억제하기 위한 조치입니다.</p>
<h2>입주권 양도세</h2>
<p>입주권은 분양권과 다르게 <strong>관리처분계획인가일</strong> 이후 취득한 권리입니다. 입주권 양도 시에는 원칙적으로 일반 주택과 동일한 세율(6~45%)이 적용되나, 1세대 1주택 비과세는 받을 수 없습니다.</p>
<h3>입주권 비과세 예외</h3>
<p><strong>소득세법 시행령 제155조 제15항</strong>에 따라 1세대 1주택자가 관리처분계획인가로 인해 입주권을 보유하게 된 경우, 종전 주택의 취득일부터 보유 기간을 기산하여 비과세 요건 충족 시 비과세가 적용될 수 있습니다.</p>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>주의:</strong> 분양권은 2021년 1월 1일 이후 취득분부터 주택 수 산정에 포함됩니다. 따라서 분양권 취득만으로도 다주택자로 분류될 수 있습니다.
</div>
<h2>양도차익 계산</h2>
<p>분양권의 양도차익은 양도가액(전매 시 수령 금액)에서 취득가액(분양금액 + 프리미엄)을 차감한 금액입니다. 분양권 취득 후 납입한 계약금·중도금도 취득가액에 포함됩니다.</p>`,
  },
  {
    slug: 'overseas-real-estate-tax',
    title: '해외 부동산 양도세 — 이중과세 방지 협약 활용법',
    description: '해외에서 부동산을 취득하거나 양도할 때 한국에서 납부해야 하는 세금과 이중과세 방지 협약을 통한 세액공제 방법을 안내합니다.',
    category: '양도소득세',
    date: '2026-06-25',
    readTime: 7,
    content: `<h2>해외 부동산과 국내 과세 의무</h2>
<p>한국 거주자(소득세법상 국내에 주소 또는 183일 이상 거소를 둔 자)는 <strong>소득세법 제3조</strong>에 따라 국내외 모든 소득에 대해 납세 의무가 있습니다. 따라서 해외 부동산을 양도하여 발생한 차익도 한국에 신고하고 세금을 납부해야 합니다.</p>
<h2>해외 부동산 양도세 신고 의무</h2>
<p><strong>소득세법 제110조</strong>에 따라 해외 부동산 양도 시 양도일이 속하는 연도의 다음 해 5월에 확정신고를 해야 합니다. 예정신고는 해외 부동산의 경우 의무가 아닙니다.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">항목</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">국내 부동산</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">해외 부동산</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">예정신고</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">의무 (양도월+2월 말)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">임의</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">확정신고</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">다음 해 5월</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>다음 해 5월 의무</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">세율</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">6~45%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">6~45% (국내와 동일)</td>
    </tr>
  </tbody>
</table>
<h2>이중과세 방지 협약(조세조약)</h2>
<p>한국은 80개국 이상과 이중과세 방지 협약을 맺고 있습니다. 해외에서 납부한 세금은 <strong>소득세법 제57조</strong>에 따라 외국납부세액공제로 한국 세액에서 차감할 수 있습니다.</p>
<h3>외국납부세액공제 계산</h3>
<ul>
  <li>공제 한도 = 국내 산출세액 × (해외소득 / 국내외 총소득)</li>
  <li>실제 납부한 외국세액이 공제 한도 이하면 전액 공제</li>
  <li>공제 한도 초과분은 다음 10년간 이월 공제 가능</li>
</ul>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>중요:</strong> 조세조약 미체결국(일부 국가)에서 취득한 부동산은 이중과세 방지가 어렵습니다. 취득 전 해당 국가와 한국 간 조세조약 체결 여부를 확인하세요.
</div>
<h2>해외 부동산 취득 신고</h2>
<p>해외 부동산을 취득할 때는 <strong>외국환거래법</strong>에 따라 한국은행에 취득 신고를 해야 합니다. 미신고 시 외국환거래법 위반으로 과태료가 부과됩니다. 또한 해외 부동산 임대소득이 있다면 매년 5월 종합소득세 신고 시 포함해야 합니다.</p>
<h2>양도차익 계산 시 주의</h2>
<p>해외 부동산의 취득가액과 양도가액은 거래 당시 <strong>기준환율</strong>로 원화 환산합니다. 취득 시와 양도 시 환율이 다르면 환차손익도 양도차익에 포함됩니다. 이 점에서 국내 부동산과 계산 방식이 다릅니다.</p>`,
  },
  {
    slug: 'equal-payment-vs-equal-principal',
    title: '원리금균등 vs 원금균등 — 총 이자 차이와 선택 기준',
    description: '주택담보대출 상환 방식인 원리금균등상환과 원금균등상환의 이자 총액 차이와 어떤 경우에 각 방식을 선택해야 하는지 설명합니다.',
    category: '대출',
    date: '2025-12-10',
    readTime: 6,
    content: `<h2>두 가지 상환 방식 개요</h2>
<p>주택담보대출의 대표적인 상환 방식은 원리금균등상환과 원금균등상환입니다. 두 방식 모두 원금과 이자를 함께 갚아나가는 방식이지만, 매월 납부하는 금액의 구성과 총 이자 부담이 다릅니다.</p>
<h2>원리금균등상환</h2>
<p>원리금균등상환은 매달 납부하는 <strong>총 금액(원금+이자)이 일정</strong>합니다. 초기에는 이자 비중이 높고 후기에는 원금 비중이 높아집니다. 대부분의 은행 주택담보대출에서 기본 방식으로 제공합니다.</p>
<h3>계산 공식</h3>
<p>월 상환액 = 대출금 × [월이자율 × (1+월이자율)^상환기간] / [(1+월이자율)^상환기간 - 1]</p>
<h2>원금균등상환</h2>
<p>원금균등상환은 매달 납부하는 <strong>원금이 일정</strong>합니다. 이자는 잔액에 비례하므로 초기에는 이자 부담이 크고, 갈수록 줄어듭니다. 초기 월 납부액이 원리금균등보다 높습니다.</p>
<h2>총 이자 비교</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">조건</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">원리금균등</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">원금균등</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">대출금 3억 원, 30년, 연 4%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">총 이자 약 <strong>2억 1,544만 원</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">총 이자 약 <strong>1억 8,025만 원</strong></td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">초기 월 납부액</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">약 143만 원 (일정)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">초기 약 183만 원, 말기 약 84만 원</td>
    </tr>
  </tbody>
</table>
<p>원금균등상환이 원리금균등보다 총 이자 부담이 약 <strong>3,500만 원</strong> 적습니다. 그 대신 초기 납부 부담이 높습니다.</p>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>선택 기준:</strong> 초기 자금 여유가 있고 총 이자를 줄이고 싶다면 원금균등, 매달 일정한 금액 납부를 원하거나 초기 현금 부담을 줄이고 싶다면 원리금균등을 선택하세요.
</div>
<h2>DSR 계산에 미치는 영향</h2>
<p>총부채원리금상환비율(DSR)은 연간 원리금 상환액을 연소득으로 나눈 값입니다. 원리금균등은 초기 월 납부액이 낮아 DSR 산정에 유리한 경우가 있습니다. 단, 금융감독원 DSR 기준(은행 40% 이내)을 반드시 확인해야 합니다.</p>
<h2>중도상환 전략</h2>
<p>원금균등상환으로 대출 후 여유 자금이 생긴 경우, 중도상환을 통해 잔액을 줄이면 이자 절감 효과가 더 큽니다. 중도상환 시에는 중도상환수수료(3년 이내, 약 1.2~1.5%)를 반드시 확인하세요.</p>`,
  },
  {
    slug: 'ltv-dti-dsr-guide',
    title: 'LTV DTI DSR 완벽 이해 — 2026년 대출 한도 기준',
    description: '주택담보대출 시 적용되는 LTV, DTI, DSR의 개념과 2026년 현재 기준을 상세히 정리합니다.',
    category: '대출',
    date: '2025-12-20',
    readTime: 7,
    content: `<h2>세 가지 대출 규제 지표 개요</h2>
<p>금융당국은 주택담보대출 한도를 제한하기 위해 세 가지 주요 지표를 사용합니다. LTV, DTI, DSR 각각의 개념과 차이를 이해해야 대출 가능 금액을 정확히 파악할 수 있습니다.</p>
<h2>LTV (담보인정비율)</h2>
<p>LTV(Loan To Value)는 주택 가치 대비 대출 가능 금액의 비율입니다. <strong>은행업감독규정 제29조</strong>에 근거하며 주택 소재지와 주택 수에 따라 달라집니다.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">구분</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">투기과열지구</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">조정대상지역</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">일반지역</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">무주택자</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>50%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>70%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>70%</strong></td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">1주택자</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>30%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>50%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>60%</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">다주택자</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>제한</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>제한</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">60%</td>
    </tr>
  </tbody>
</table>
<h2>DTI (총부채상환비율)</h2>
<p>DTI(Debt To Income)는 연간 소득 대비 주택담보대출 원리금 + 기타 대출 이자의 비율입니다. 주담대 원리금만을 따지는 점이 DSR과 다릅니다.</p>
<ul>
  <li>투기과열지구: <strong>40%</strong> 이내</li>
  <li>조정대상지역: <strong>50%</strong> 이내</li>
  <li>일반지역: 규제 없음 (은행 자율)</li>
</ul>
<h2>DSR (총부채원리금상환비율)</h2>
<p>DSR(Debt Service Ratio)은 연간 소득 대비 모든 금융부채(주담대+신용대출+카드론 등)의 원리금 합계 비율입니다. 가장 포괄적인 규제 지표입니다.</p>
<ul>
  <li>은행권: 연 소득의 <strong>40%</strong> 이내</li>
  <li>비은행권(저축은행 등): <strong>50%</strong> 이내</li>
</ul>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>예시:</strong> 연소득 6,000만 원인 경우 은행 DSR 40% = 연간 원리금 2,400만 원 이내. 월 200만 원 이내의 원리금 상환만 가능합니다.
</div>
<h2>세 지표의 우선 적용</h2>
<p>LTV, DTI, DSR 중 가장 엄격한 조건이 최종 대출 한도를 결정합니다. 예를 들어 LTV로 3억 원이 가능해도 DSR 계산 결과 2억 원만 가능하다면 2억 원이 한도입니다.</p>`,
  },
  {
    slug: 'mortgage-rate-types',
    title: '주담대 금리 유형 비교 — 고정 vs 변동 vs 혼합',
    description: '주택담보대출 금리 유형인 고정금리, 변동금리, 혼합금리(혼합형)의 특징과 금리 환경별 선택 전략을 정리합니다.',
    category: '대출',
    date: '2026-01-05',
    readTime: 6,
    content: `<h2>금리 유형 세 가지 개요</h2>
<p>주택담보대출 금리는 상환 기간 동안 금리가 변하지 않는 <strong>고정금리</strong>, 시장 금리에 연동하여 변하는 <strong>변동금리</strong>, 처음 일정 기간은 고정 후 이후 변동으로 전환되는 <strong>혼합금리</strong>로 나뉩니다.</p>
<h2>각 금리 유형 특징</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">구분</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">장점</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">단점</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">고정금리</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">금리 변동 위험 없음, 예측 가능</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">초기 금리가 변동보다 높음</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">변동금리</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">금리 하락 시 이자 감소</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">금리 상승 시 이자 증가</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">혼합금리</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">초기 안정, 후기 유연성</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">변동 전환 후 불확실성</td>
    </tr>
  </tbody>
</table>
<h2>변동금리 기준 지표</h2>
<p>변동금리는 주로 <strong>코픽스(COFIX)</strong>에 연동됩니다. 코픽스는 은행연합회가 공시하는 자금조달비용지수로, 매월 15일 신규취급액 기준과 잔액 기준으로 발표됩니다. 대출금리 = 코픽스 + 가산금리(스프레드)로 결정됩니다.</p>
<h2>2026년 금리 환경과 선택 전략</h2>
<p>금리 선택은 현재 금리 수준과 향후 금리 전망에 따라 달라집니다.</p>
<ul>
  <li><strong>금리 상승 예상</strong>: 고정금리 또는 혼합금리 선택</li>
  <li><strong>금리 하락 예상</strong>: 변동금리 선택</li>
  <li><strong>불확실한 경우</strong>: 혼합금리(5년 고정 후 변동)로 안정성과 유연성 절충</li>
</ul>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>참고:</strong> 한국은행 기준금리는 한국은행 통화정책위원회에서 결정하며, 주담대 금리는 기준금리와 은행 조달비용을 반영합니다. 기준금리가 0.25%p 변동할 때 변동금리도 약 0.25%p 전후로 움직입니다.
</div>
<h2>금리 비교 계산 예시</h2>
<p>대출 3억 원, 30년 상환 기준:</p>
<ul>
  <li>고정금리 4.0%: 월 납부 약 143만 원, 총 이자 약 2억 1,544만 원</li>
  <li>변동금리 3.5% (현재): 월 납부 약 134만 원, 총 이자 약 1억 8,278만 원</li>
  <li>변동금리 5.0%로 상승 시: 월 납부 약 161만 원으로 증가</li>
</ul>`,
  },
  {
    slug: 'jeonse-vs-monthly-rent',
    title: '전세 대출이자 vs 월세 — 어느 쪽이 더 이득인가',
    description: '전세 자금 대출을 받을 때의 이자 비용과 월세를 직접 내는 경우의 총 주거 비용을 비교하는 방법을 설명합니다.',
    category: '대출',
    date: '2026-01-30',
    readTime: 5,
    content: `<h2>전세와 월세 비용 비교의 핵심</h2>
<p>전세는 큰 보증금을 맡기고 월세 없이 거주하는 방식이고, 월세는 보증금이 적은 대신 매달 임대료를 냅니다. 전세 자금이 부족할 때 대출을 받는다면 이자 비용이 발생하므로 월세와 직접 비교가 가능합니다.</p>
<h2>전세 대출 이자 계산</h2>
<p>전세 대출의 이자는 전세보증금에서 자기 자본을 뺀 금액에 대출금리를 곱해 계산합니다.</p>
<ul>
  <li>전세 보증금: 3억 원</li>
  <li>자기 자본: 1억 원</li>
  <li>대출금: 2억 원</li>
  <li>대출 금리: 연 3.5%</li>
  <li>월 이자: 2억 × 3.5% / 12 = <strong>약 58만 원</strong></li>
</ul>
<h2>비교 조건 설정</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">구분</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">전세 대출 방식</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">월세 방식</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">보증금</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">3억 원 (자본 1억 + 대출 2억)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">3,000만 원</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">월 주거비</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>약 58만 원</strong> (대출이자)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>약 80만 원</strong> (월세)</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">기회비용</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">1억 × 3% = 약 25만 원/월</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">3,000만 × 3% / 12 ≈ 7.5만 원/월</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">실질 주거비</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>약 83만 원</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>약 87.5만 원</strong></td>
    </tr>
  </tbody>
</table>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>월세 세액공제:</strong> 연소득 7,000만 원 이하 무주택 세대주가 월세를 납부하면 <strong>조세특례제한법 제95조의2</strong>에 따라 연간 1,000만 원 한도로 15~17% 세액공제를 받을 수 있습니다.
</div>
<h2>전세 대출 이자 소득공제</h2>
<p>무주택 세대주가 주택 임차를 위해 대출받은 경우, <strong>소득세법 제52조 제4항</strong>에 따라 원리금 상환액의 40%(연 300만 원 한도)를 소득공제 받을 수 있습니다.</p>`,
  },
  {
    slug: 'prepayment-penalty',
    title: '중도상환수수료 계산과 절약 방법',
    description: '대출을 만기 전에 상환할 때 발생하는 중도상환수수료의 계산 방법과 수수료를 줄이거나 피하는 방법을 안내합니다.',
    category: '대출',
    date: '2026-02-20',
    readTime: 5,
    content: `<h2>중도상환수수료란</h2>
<p>중도상환수수료(조기상환수수료)는 대출 약정 기간 전에 원금을 상환할 때 은행이 부과하는 수수료입니다. 은행은 대출을 통해 일정 기간 이자 수익을 기대하므로, 조기상환 시 수익 손실을 보전하기 위해 부과합니다.</p>
<h2>중도상환수수료 계산 공식</h2>
<p>수수료 = 중도상환금액 × 중도상환수수료율 × (잔여일수 / 대출기간일수)</p>
<h3>계산 예시</h3>
<ul>
  <li>중도상환금액: 1억 원</li>
  <li>중도상환수수료율: 1.2%</li>
  <li>대출기간: 3년 (1,095일)</li>
  <li>잔여일수: 730일</li>
  <li>수수료: 1억 × 1.2% × (730/1,095) = <strong>약 80만 원</strong></li>
</ul>
<h2>금융기관별 수수료율 비교</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">금융기관</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">일반 주담대 수수료율</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">적용 기간</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">시중은행</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>1.2~1.5%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">대출 후 3년 이내</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">인터넷은행</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>0.5~1.0%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">대출 후 3년 이내</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">주택금융공사(보금자리론)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>1.2%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">대출 후 3년 이내</td>
    </tr>
  </tbody>
</table>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>무료 중도상환 허용 금액:</strong> 금융소비자보호법에 따라 주택담보대출의 경우 연간 원금의 일정 비율(보통 10~20%)까지는 수수료 없이 중도상환이 가능한 경우도 있습니다. 계약서를 반드시 확인하세요.
</div>
<h2>중도상환수수료 절약 방법</h2>
<ul>
  <li>대출 3년 이후에 상환하면 대부분 수수료 면제</li>
  <li>은행별 중도상환수수료 면제 이벤트 활용</li>
  <li>연간 허용 범위 내 부분 상환 반복</li>
  <li>인터넷은행 등 수수료율이 낮은 곳으로 대환대출 고려</li>
</ul>
<h2>대환대출 시 비교</h2>
<p>금리가 낮은 상품으로 갈아타는 대환대출의 경우 기존 대출 중도상환수수료와 신규 대출 부대비용을 합한 금액보다 이자 절감액이 크면 대환이 유리합니다. 일반적으로 금리차 0.5%p 이상, 대출 잔여 기간 2년 이상이면 대환이 유리합니다.</p>`,
  },
  {
    slug: 'comprehensive-tax-guide',
    title: '종합부동산세 계산법과 절세 포인트',
    description: '종합부동산세의 과세 기준, 세율, 공정시장가액비율, 세액 계산 방법과 합법적인 절세 방법을 상세히 설명합니다.',
    category: '종합부동산세',
    date: '2026-03-01',
    readTime: 8,
    content: `<h2>종합부동산세 개요</h2>
<p>종합부동산세(종부세)는 일정 기준을 초과하는 부동산을 보유한 경우 재산세와 별도로 국세로 부과되는 세금입니다. <strong>종합부동산세법 제1조</strong>에 근거하며, 매년 6월 1일 기준 보유 현황으로 12월에 고지·납부합니다.</p>
<h2>과세 기준</h2>
<p>종부세는 공시가격이 일정 금액을 초과하는 경우에만 부과됩니다. <strong>종합부동산세법 제7조</strong>에 따른 기준입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">구분</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">기본공제</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">비고</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">1세대 1주택자</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>12억 원</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">공시가격 기준</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">일반 (2주택 이하)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>9억 원</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">합산 공시가격</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">법인</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>없음</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">전액 과세</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">토지 (종합합산)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>5억 원</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"></td>
    </tr>
  </tbody>
</table>
<h2>공정시장가액비율과 과세표준</h2>
<p>과세표준 = (공시가격 합계 - 기본공제) × <strong>공정시장가액비율</strong></p>
<p>공정시장가액비율은 <strong>종합부동산세법 제8조</strong>에 따라 정해지며, 2024년 이후 주택분은 <strong>60%</strong>로 적용됩니다.</p>
<h2>세율</h2>
<p>주택 수와 과세표준 금액에 따라 다음 세율이 적용됩니다.</p>
<ul>
  <li>2주택 이하 (일반): 과세표준 3억 이하 <strong>0.5%</strong>, 6억 이하 <strong>0.7%</strong>, 12억 이하 <strong>1.0%</strong>, 25억 이하 <strong>1.3%</strong>, 50억 이하 <strong>1.5%</strong>, 50억 초과 <strong>2.0%</strong></li>
  <li>3주택 이상 또는 조정지역 2주택: 과세표준 3억 이하 <strong>0.5%</strong>에서 최고 <strong>5.0%</strong></li>
</ul>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>세액 공제:</strong> 1세대 1주택자는 나이와 보유 기간에 따라 세액공제를 받을 수 있습니다. 60세 이상 20%, 65세 이상 30%, 70세 이상 40%의 고령자 공제와 5~10년 보유 20%, 10~15년 40%, 15년 이상 50%의 장기보유공제(합산 최대 80%)가 있습니다.
</div>
<h2>절세 방법</h2>
<ul>
  <li>1세대 1주택 유지: 기본공제 12억 원 + 고령자·장기보유 공제 최대 80%</li>
  <li>공동명의 활용: 부부 공동명의 시 각각 9억 원 공제 = 합계 18억 원 공제</li>
  <li>임대주택 등록: 합산배제 주택으로 종부세 제외 가능</li>
</ul>`,
  },
  {
    slug: 'gift-vs-inheritance',
    title: '부동산 증여 vs 상속 — 세금 차이 비교',
    description: '부동산을 자녀에게 물려줄 때 증여와 상속 중 어느 방법이 세금 측면에서 유리한지 비교하고 전략을 제시합니다.',
    category: '증여·상속',
    date: '2026-03-20',
    readTime: 7,
    content: `<h2>증여와 상속의 세금 구조</h2>
<p>부동산을 다음 세대에 물려주는 방법은 크게 생전 증여와 사망 후 상속이 있습니다. 두 방법 모두 세금이 발생하지만 과세 방식, 공제 금액, 세율 구조가 다릅니다. 어느 쪽이 유리한지는 재산 규모, 수증자·상속인 수, 계획 시점에 따라 달라집니다.</p>
<h2>증여세 계산 구조</h2>
<p><strong>상속세 및 증여세법 제31조</strong>에 따라 증여세는 수증자별로 계산됩니다.</p>
<ul>
  <li>직계존비속(부모→자녀): <strong>5,000만 원</strong> 공제</li>
  <li>배우자: <strong>6억 원</strong> 공제</li>
  <li>기타 친족: <strong>1,000만 원</strong> 공제</li>
  <li>공제 후 과세표준에 10~50% 누진세율 적용</li>
</ul>
<h2>상속세 계산 구조</h2>
<p><strong>상속세 및 증여세법 제18조</strong>에 따라 상속세는 유산 전체에서 공제 후 과세됩니다.</p>
<ul>
  <li>기본공제: <strong>5억 원</strong></li>
  <li>배우자 상속공제: 최대 <strong>30억 원</strong> (법정상속분 또는 5억 원 중 큰 금액)</li>
  <li>인적공제: 자녀 1인당 5,000만 원, 미성년자 추가 공제</li>
  <li>세율: 10~50% 누진세율</li>
</ul>
<h2>세금 부담 비교 예시</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">조건</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">증여</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">상속</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">부동산 가액 5억, 자녀 1명</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">증여세 약 4,000만 원<br/>취득세 3.5% = 1,750만 원</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">상속세 0원 (5억 기본공제)<br/>취득세 2.8% = 1,400만 원</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">부동산 가액 15억, 자녀 2명</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">자녀별 증여 약 2억씩<br/>총 증여세 약 1억 3천만 원</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">상속세 약 2억 원<br/>(기본공제 5억+자녀공제 1억 후)</td>
    </tr>
  </tbody>
</table>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>10년 합산 규정:</strong> 상속세 및 증여세법 제47조에 따라 상속 개시 전 10년 이내 증여한 재산은 상속세 과세가액에 합산됩니다. 따라서 단순히 증여를 먼저 했다고 상속세를 완전히 피할 수 없습니다.
</div>
<h2>증여 선택이 유리한 경우</h2>
<ul>
  <li>부모가 고령으로 10년 이상 생존이 어려운 경우 → 사전 증여 효과 제한</li>
  <li>부동산 가격이 앞으로 많이 오를 것으로 예상되는 경우 → 낮은 가격에 증여</li>
  <li>수증자가 많아 분산 증여가 가능한 경우</li>
</ul>
<h2>상속 선택이 유리한 경우</h2>
<ul>
  <li>배우자가 생존해 있어 배우자 상속공제를 활용 가능한 경우</li>
  <li>재산 규모가 크지 않아 기본공제 범위 내에 들어오는 경우</li>
  <li>부모의 건강이 양호하여 계획적 자산 이전 시간이 충분한 경우</li>
</ul>`,
  },
  {
    slug: 'rental-income-tax',
    title: '임대소득세 과세 기준과 분리과세 선택법',
    description: '주택임대소득의 과세 기준, 분리과세와 종합과세 중 유리한 방식 선택 방법, 필요경비 인정 항목을 설명합니다.',
    category: '임대소득',
    date: '2026-04-10',
    readTime: 7,
    content: `<h2>주택임대소득 과세 기준</h2>
<p>주택을 임대하여 수입이 생기면 임대소득세를 납부해야 합니다. <strong>소득세법 제12조</strong>에 따라 주거용 주택 임대소득에 대한 과세 기준은 보유 주택 수와 임대 유형에 따라 다릅니다.</p>
<h2>과세 대상 기준</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">주택 수</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">임대 유형</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">과세 여부</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">1주택</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">월세</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">기준시가 12억 원 초과 시 과세</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">1주택</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">전세</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>비과세</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">2주택</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">월세</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>과세</strong></td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">2주택</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">전세</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>비과세</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">3주택 이상</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">월세 + 전세</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>과세 (간주임대료 포함)</strong></td>
    </tr>
  </tbody>
</table>
<h2>분리과세 vs 종합과세</h2>
<p>주택임대소득이 연간 <strong>2,000만 원 이하</strong>인 경우 분리과세(세율 14%)와 종합과세(다른 소득과 합산 후 6~45% 누진세율) 중 선택할 수 있습니다. <strong>소득세법 제14조 제3항 제7호</strong>에 따른 내용입니다.</p>
<h3>분리과세가 유리한 경우</h3>
<ul>
  <li>다른 소득이 많아 종합과세 시 높은 세율이 적용되는 경우</li>
  <li>종합소득세 과세표준이 4,600만 원 초과 (24% 이상 구간)</li>
</ul>
<h3>종합과세가 유리한 경우</h3>
<ul>
  <li>다른 소득이 없거나 적어 종합과세 시 낮은 세율이 적용되는 경우</li>
  <li>결손금 공제, 이월결손금 공제를 활용할 수 있는 경우</li>
</ul>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>분리과세 필요경비율:</strong> 임대주택 등록 시 60%, 미등록 시 50%의 필요경비율이 적용됩니다. 분리과세 세액 계산: (임대수입 × (1-필요경비율) - 200만 원) × 14%
</div>
<h2>등록임대사업자 혜택</h2>
<p>지방자치단체에 임대사업자로 등록하면 분리과세 시 기본공제 400만 원(미등록 200만 원)이 적용되고, 건강보험료 인상 산정에서도 일부 혜택이 있습니다. 단, 임대의무 기간(4년 또는 10년)을 지켜야 합니다.</p>`,
  },
  {
    slug: 'real-estate-tax-overview',
    title: '부동산 세금 종류 한눈에 정리 — 취득·보유·처분',
    description: '부동산 취득 단계, 보유 단계, 처분 단계에서 각각 납부해야 하는 세금의 종류와 특징을 한눈에 정리합니다.',
    category: '세금 개요',
    date: '2025-12-05',
    readTime: 6,
    content: `<h2>부동산 세금의 세 단계</h2>
<p>부동산 관련 세금은 크게 <strong>취득 단계</strong>, <strong>보유 단계</strong>, <strong>처분 단계</strong>로 나눌 수 있습니다. 각 단계마다 납부해야 하는 세금의 종류와 납부 시기가 다르므로 부동산 거래 전 전체 그림을 파악해 두는 것이 중요합니다.</p>
<h2>취득 단계 세금</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">세금 종류</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">세율</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">납부 시기</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">근거 법령</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">취득세</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">1%~12%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">취득일로부터 60일</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">지방세법 제7조</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">지방교육세</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">취득세의 10%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">취득세와 동시</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">지방세법 제150조</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">농어촌특별세</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">취득세의 10%</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">취득세와 동시</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">농어촌특별세법 제5조</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">인지세</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">5만~35만 원</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">계약서 작성 시</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">인지세법 제3조</td>
    </tr>
  </tbody>
</table>
<h2>보유 단계 세금</h2>
<ul>
  <li><strong>재산세</strong> (지방세법 제105조): 매년 6월 1일 기준, 7월과 9월에 분납</li>
  <li><strong>종합부동산세</strong> (종합부동산세법 제1조): 매년 12월 납부, 공시가 합산 초과분</li>
  <li><strong>임대소득세</strong> (소득세법 제19조): 임대소득 발생 시 매년 5월 신고</li>
</ul>
<h2>처분 단계 세금</h2>
<ul>
  <li><strong>양도소득세</strong> (소득세법 제94조): 양도 다음 달 말일까지 예정신고</li>
  <li><strong>지방소득세</strong> (지방세법 제91조): 양도소득세의 10%</li>
</ul>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>총 세금 부담 예시:</strong> 서울 아파트를 6억에 취득(1주택)하여 2년 거주 후 9억에 양도하는 경우 — 취득세 약 660만 원, 재산세 연 약 100만 원, 양도세 약 1,200만 원으로 총 약 2,060만 원 이상 납부
</div>
<h2>세금 신고·납부 주요 일정 요약</h2>
<ul>
  <li><strong>1월</strong>: 전년도 임대소득 장부 정리</li>
  <li><strong>5월</strong>: 종합소득세 확정신고 (임대소득, 양도소득 등)</li>
  <li><strong>7월</strong>: 재산세 1기분 납부</li>
  <li><strong>9월</strong>: 재산세 2기분 납부</li>
  <li><strong>12월</strong>: 종합부동산세 납부</li>
</ul>`,
  },
  {
    slug: 'reconstruction-capital-gains',
    title: '재건축 조합원 양도세 완벽 가이드',
    description: '재건축·재개발 조합원이 입주권이나 완공 후 아파트를 양도할 때 적용되는 양도소득세 계산 방법과 비과세 요건을 정리합니다.',
    category: '양도소득세',
    date: '2026-07-01',
    readTime: 7,
    content: `<h2>재건축 조합원의 세금 구조</h2>
<p>재건축·재개발 조합원은 기존 주택(종전자산)을 제공하고 새 아파트(신규자산)를 받습니다. 이 과정에서 양도소득세가 발생하는 시점과 계산 방법이 일반 주택 양도와 다릅니다.</p>
<h2>관리처분계획인가 전후 양도세 차이</h2>
<p><strong>소득세법 제89조</strong>와 <strong>시행령 제156조의2</strong>에 따라 관리처분계획인가 전후로 세금 처리가 달라집니다.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">양도 시점</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">양도 대상</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">세금 처리</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">인가 전</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">기존 주택</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">일반 주택 양도와 동일</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">인가 후 준공 전</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">입주권</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">입주권 양도 (별도 세율)</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">준공 후</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">완공 아파트</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">일반 주택 양도</td>
    </tr>
  </tbody>
</table>
<h2>조합원 1주택 비과세 특례</h2>
<p>1세대가 재건축으로 인해 기존 주택이 철거되고 입주권을 받았을 때 조합원 입주권을 양도하더라도, 다음 요건을 갖추면 비과세가 적용됩니다.</p>
<ul>
  <li>관리처분계획인가일 현재 1세대 1주택자</li>
  <li>종전 주택 취득일부터 2년 이상 보유 (조정지역 취득 시 2년 거주 포함)</li>
  <li>다른 주택을 보유하지 않을 것</li>
</ul>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>청산금 주의:</strong> 재건축 조합원이 기존 주택보다 큰 아파트를 받을 경우 차액(청산금)을 납부합니다. 이 청산금은 새 아파트의 취득가액에 포함되므로 나중에 양도세 계산 시 반드시 포함해야 합니다.
</div>
<h2>보유 기간 기산</h2>
<p>재건축 조합원의 완공 아파트 보유 기간은 <strong>종전 주택의 취득일</strong>부터 기산합니다. 단, 거주 기간은 종전 주택 거주 기간과 신축 아파트 거주 기간을 합산합니다.</p>
<h2>장기보유특별공제 적용</h2>
<p>조합원 입주권을 2년 이상 보유한 경우 장기보유특별공제를 받을 수 있습니다. 단, 입주권이 주택으로 분류되지 않는 경우 일반 기타자산 공제율(6~30%)이 적용됩니다.</p>`,
  },
  {
    slug: 'rural-special-tax',
    title: '농어촌특별세 부과 기준과 면제 조건',
    description: '부동산 취득세와 함께 부과되는 농어촌특별세의 과세 기준, 세율, 면제 대상을 상세히 안내합니다.',
    category: '취득세',
    date: '2026-07-10',
    readTime: 4,
    content: `<h2>농어촌특별세 개요</h2>
<p>농어촌특별세는 <strong>농어촌특별세법 제1조</strong>에 따라 농어촌 지역 개발 재원을 마련하기 위해 부과되는 세금입니다. 부동산 취득 시에는 취득세에 부가하여 납부하며, 취득세와 함께 신고·납부합니다.</p>
<h2>취득세와의 관계</h2>
<p>농어촌특별세는 취득세의 일정 비율로 산정됩니다. <strong>농어촌특별세법 제5조 제1항</strong>에 따른 세율은 다음과 같습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">취득 유형</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">농어촌특별세율</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">과세 기준</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">일반 주택 취득 (85㎡ 초과)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>취득세의 10%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"></td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">중과세율(8%, 12%) 주택</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>취득세의 20%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"></td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">비주택 (상가, 오피스텔 등)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>취득세의 10%</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"></td>
    </tr>
  </tbody>
</table>
<h2>면제 대상</h2>
<p><strong>농어촌특별세법 제4조</strong>에 따라 다음 경우에는 농어촌특별세가 면제됩니다.</p>
<ul>
  <li>전용면적 <strong>85㎡ 이하</strong> 주택 취득 (일반세율 적용 시)</li>
  <li>농지 취득 (자경 목적 농업인)</li>
  <li>생애최초 주택 취득세 감면 대상 주택</li>
  <li>공공사업용 토지 취득</li>
</ul>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>절세 포인트:</strong> 주택을 구입할 때 전용면적 85㎡ 이하 여부가 농어촌특별세 면제의 핵심 기준입니다. 85㎡를 약간 초과하면 오히려 세금이 늘어날 수 있으므로 면적을 꼼꼼히 확인해야 합니다.
</div>
<h2>계산 예시</h2>
<p>85㎡ 초과 주택(비조정지역 1주택)을 6억 원에 취득한 경우:</p>
<ul>
  <li>취득세 1%: 600만 원</li>
  <li>지방교육세 (취득세의 10%): 60만 원</li>
  <li>농어촌특별세 (취득세의 10%): 60만 원</li>
  <li>합계: <strong>720만 원</strong></li>
</ul>
<p>85㎡ 이하 동일 조건이라면 농어촌특별세 면제로 <strong>660만 원</strong>만 납부합니다.</p>`,
  },
  {
    slug: 'acquisition-documents',
    title: '부동산 취득 시 필요한 서류 체크리스트',
    description: '아파트나 토지를 구입할 때 필요한 서류 목록을 계약, 잔금, 등기 단계별로 정리합니다.',
    category: '취득 가이드',
    date: '2026-07-15',
    readTime: 5,
    content: `<h2>부동산 취득 단계별 필요 서류</h2>
<p>부동산을 매수할 때는 계약 체결, 잔금 납부, 소유권이전등기 각 단계마다 필요한 서류가 다릅니다. 미리 준비하지 않으면 일정이 지연될 수 있으므로 체크리스트로 관리하는 것이 좋습니다.</p>
<h2>계약 체결 단계</h2>
<ul>
  <li><strong>매수인 신분증</strong> (주민등록증 또는 운전면허증)</li>
  <li>매수인 도장 (인감도장 아니어도 무방)</li>
  <li>계약금 납입 통장 또는 현금</li>
  <li>매도인의 등기권리증 사본 확인 (진위 확인용)</li>
  <li>부동산 등기부등본 (계약 당일 발급하여 확인)</li>
  <li>토지이용계획확인서 (토지 거래 시)</li>
</ul>
<h2>잔금 납부 단계</h2>
<ul>
  <li>매수인 주민등록등본 (주소지 확인용)</li>
  <li>매수인 인감증명서 (발급 후 3개월 이내)</li>
  <li>매도인 인감증명서 (등기용, 발급 후 3개월 이내)</li>
  <li>매도인 주민등록등본</li>
  <li>부동산 매매계약서 원본</li>
  <li>잔금 납입 확인 영수증</li>
</ul>
<h2>소유권이전등기 신청 단계</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">서류명</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">발급처</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">비고</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">등기신청서</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">법원 등기소</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">법무사 대행 가능</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">취득세 납부영수증</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">위택스 또는 구청</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">등기 전 납부 필수</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">부동산거래계약신고필증</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">부동산 거래신고 시스템</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">계약일로부터 30일 내</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;">등록면허세 납부영수증</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">위택스</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"></td>
    </tr>
  </tbody>
</table>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>부동산 거래 신고 의무:</strong> 부동산 거래신고 등에 관한 법률에 따라 계약일로부터 30일 이내에 관할 시·군·구청에 실거래가를 신고해야 합니다. 미신고 시 과태료 500만 원 이하가 부과됩니다.
</div>
<h2>법무사 이용 시 필요 서류</h2>
<p>소유권이전등기는 법무사에게 대행을 맡기는 것이 일반적입니다. 법무사에게 위임 시 위임장(인감도장 날인)과 인감증명서를 추가로 제출합니다. 법무사 보수는 법무사 보수규정에 따라 거래금액 기준으로 산정됩니다.</p>`,
  },
  {
    slug: 'tax-payment-calendar',
    title: '부동산 세금 납부 일정 연간 캘린더',
    description: '재산세, 종합부동산세, 양도소득세, 임대소득세 등 부동산 관련 세금의 연간 납부 일정을 월별로 정리합니다.',
    category: '세금 개요',
    date: '2025-12-15',
    readTime: 5,
    content: `<h2>부동산 세금 연간 납부 일정 개요</h2>
<p>부동산을 보유하거나 거래하면 연중 다양한 세금 신고·납부 일정이 생깁니다. 미리 파악하지 않으면 가산세를 물 수 있으므로 연초에 전체 일정을 확인해 두는 것이 좋습니다.</p>
<h2>월별 세금 납부 캘린더</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">월</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:left;">주요 세금 일정</th>
      <th style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">근거 법령</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>2월</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">전년도 양도소득세 예정신고 마감 (12월 양도 건)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">소득세법 제105조</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>5월</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">종합소득세 확정신고 (임대소득, 양도소득 등)<br/>양도소득세 확정신고</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">소득세법 제70조, 제110조</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>6월</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">재산세·종부세 과세기준일 (6월 1일)<br/>이날 기준 보유자가 납세의무자</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">지방세법 제114조</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>7월</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">재산세 1기분 납부 (주택분 50%, 건물분 100%)<br/>납기: 7월 16일~31일</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">지방세법 제115조</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>9월</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">재산세 2기분 납부 (주택분 50%, 토지분 100%)<br/>납기: 9월 16일~30일</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">지방세법 제115조</td>
    </tr>
    <tr style="background:#f9fafb;">
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;"><strong>12월</strong></td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;">종합부동산세 납부<br/>납기: 12월 1일~15일 (분납 가능)</td>
      <td style="border:1px solid #d1d5db;padding:8px 12px;text-align:center;">종합부동산세법 제20조</td>
    </tr>
  </tbody>
</table>
<h2>양도소득세 예정신고 일정</h2>
<p>양도소득세 예정신고는 양도한 달의 말일로부터 <strong>2개월</strong> 이내에 해야 합니다. 예를 들어 3월에 잔금을 받았다면 5월 31일까지 예정신고를 해야 합니다.</p>
<div class="tip-box" style="background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
  <strong>6월 1일 기준일:</strong> 부동산을 매도할 계획이라면 6월 1일 이전에 잔금을 받으면 그해 재산세와 종부세를 납부하지 않아도 됩니다. 반대로 매수는 6월 2일 이후에 하면 그해 보유세 부담을 줄일 수 있습니다.
</div>
<h2>취득세 납부 기한</h2>
<p>부동산 취득세는 취득일로부터 60일 이내 납부입니다. 상속은 6개월, 증여는 60일입니다. 잔금일이 취득일이 되므로 잔금 지급 후 바로 달력에 60일 후 날짜를 기록해 두는 것이 좋습니다.</p>
<h2>분납 제도</h2>
<p>종합부동산세는 납부세액이 250만 원을 초과하는 경우 납부 기한 후 6개월 이내에 분납할 수 있습니다. 재산세도 세액이 250만 원을 초과하면 납기 후 2개월 내 분납 가능합니다.</p>`,
  },
]
