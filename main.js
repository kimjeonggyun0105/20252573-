// 글로벌 및 국내 맛집 가상 데이터
const restaurantData = [
    // 국내 한식
    { id: 1, name: "애월 흑돼지 명가", region: "대한민국 애월읍", rating: 4.6, reviews: 843, price: "₩₩", type: "한식", img: "https://images.unsplash.com/photo-1544025162-8111f4a7a0eb?auto=format&fit=crop&w=800&q=80", reviewText: "육즙이 팡팡 터집니다. 멜젓에 푹 찍어 먹으면 최고!" },
    { id: 2, name: "명동 명품 칼국수", region: "대한민국 명동", rating: 4.5, reviews: 1250, price: "₩", type: "한식", img: "https://images.unsplash.com/photo-1623800331006-8d5ea4f23b7b?auto=format&fit=crop&w=800&q=80", reviewText: "진한 사골 국물의 칼국수와 매콤한 마늘 김치의 환상 조합." },
    { id: 3, name: "전주 오리지널 비빔밥", region: "대한민국 전주시", rating: 4.7, reviews: 920, price: "₩₩", type: "한식", img: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=800&q=80", reviewText: "신선한 육회와 각종 나물이 어우러진 진짜 전주 비빔밥을 경험할 수 있습니다." },

    // 일식 (국내 & 해외)
    { id: 4, name: "도쿄 츠키지 스시", region: "일본 도쿄", rating: 4.9, reviews: 2045, price: "₩₩₩", type: "일식", img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80", reviewText: "입에 넣자마자 녹아내리는 참다랑어 대뱃살. 인생 최고의 스시." },
    { id: 5, name: "연남동 연어당", region: "대한민국 연남동", rating: 4.5, reviews: 215, price: "₩₩", type: "일식", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80", reviewText: "연어가 두툼하고 신선합니다. 웨이팅이 있지만 기다릴 가치가 있는 맛." },
    { id: 6, name: "오사카 와규 텟판야끼", region: "일본 오사카", rating: 4.8, reviews: 630, price: "₩₩₩", type: "일식", img: "https://images.unsplash.com/photo-1544025162-8111f4a7a0eb?auto=format&fit=crop&w=800&q=80", reviewText: "눈 앞에서 요리해주는 철판구이 퍼포먼스와 완벽하게 구워진 와규 한 점!" },

    // 중식 (국내 & 해외)
    { id: 7, name: "서교동 마라탕", region: "대한민국 서교동", rating: 4.3, reviews: 189, price: "₩", type: "중식", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80", reviewText: "사골 국물이 진하고 꿔바로우가 엄청 바삭해요. 마라 초보자에게도 좋은 곳." },
    { id: 8, name: "홍콩 딤섬 팰리스", region: "홍콩 센트럴", rating: 4.7, reviews: 3205, price: "₩₩", type: "중식", img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80", reviewText: "하가우와 샤오롱바오의 육즙이 미쳤습니다. 정통 홍콩 딤섬 느낌 제대로!" },
    { id: 9, name: "베이징 카오야 하우스", region: "중국 베이징", rating: 4.6, reviews: 1120, price: "₩₩₩", type: "중식", img: "https://images.unsplash.com/photo-1627308595229-7830f5c9c66e?auto=format&fit=crop&w=800&q=80", reviewText: "바삭한 오리 껍질을 설탕에 찍어먹는 맛이 일품입니다." },

    // 양식
    { id: 10, name: "뉴욕 그랜드 스테이크", region: "미국 뉴욕", rating: 4.8, reviews: 4500, price: "₩₩₩", type: "양식", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80", reviewText: "드라이에이징 포터하우스 스테이크의 풍미가 뉴욕 최고 수준입니다." },
    { id: 11, name: "로마 트레비 파스타", region: "이탈리아 로마", rating: 4.7, reviews: 2100, price: "₩₩", type: "양식", img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80", reviewText: "관찰레 바삭함이 살아있는 정통 까르보나라. 크림이 안들어간 진짜 맛." },
    { id: 12, name: "제주도 씨푸드 파스타", region: "대한민국 제주시", rating: 4.4, reviews: 312, price: "₩₩", type: "양식", img: "https://images.unsplash.com/photo-1563379926898-05f4e5ee8e94?auto=format&fit=crop&w=800&q=80", reviewText: "제주 앞바다에서 잡은 딱새우가 듬뿍 들어간 오일 파스타." },

    // 기타 (세계/카페)
    { id: 13, name: "파리 몽마르뜨 크라상", region: "프랑스 파리", rating: 4.8, reviews: 1850, price: "₩", type: "카페", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80", reviewText: "아침에 갓 구운 버터 향이 길거리를 덮습니다. 에스프레소와 함께하면 끝장!" },
    { id: 14, name: "방콕 로컬 팟타이", region: "태국 방콕", rating: 4.9, reviews: 5200, price: "₩", type: "기타", img: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80", reviewText: "길거리 포장마차지만 맛은 호텔 뺨치는 세계 제일의 팟타이." },
    
    // 인천 청라 맛집 (실제 Google 검색 기반)
    { id: 15, name: "투파인드피터 청라점", region: "인천 청라", rating: 4.6, reviews: 2150, price: "₩₩", type: "양식", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80", reviewText: "캐주얼하고 세련된 분위기에서 즐기는 가성비 최고급 파스타와 스테이크!" },
    { id: 16, name: "시골한우시골돼지 청라직영점", region: "인천 청라국제도시", rating: 4.8, reviews: 1420, price: "₩₩₩", type: "한식", img: "https://images.unsplash.com/photo-1544025162-8111f4a7a0eb?auto=format&fit=crop&w=800&q=80", reviewText: "칼집이 예술인 제주 생꽃고기와 쫀득한 투뿔 한우가 일품입니다." },
    { id: 17, name: "구수옥설렁탕", region: "인천 청라", rating: 4.5, reviews: 890, price: "₩", type: "한식", img: "https://images.unsplash.com/photo-1623800331006-8d5ea4f23b7b?auto=format&fit=crop&w=800&q=80", reviewText: "진한 사골 육수에 밥을 말아 깍두기 하나 올려 먹으면 든든합니다." },
    { id: 18, name: "브런치빈 청라점", region: "인천 청라", rating: 4.7, reviews: 3100, price: "₩₩", type: "카페", img: "https://images.unsplash.com/photo-1495474472205-0e3269a918fb?auto=format&fit=crop&w=800&q=80", reviewText: "인천에서 브런치를 먹는다면 무조건 이곳을 추천. 푸짐하고 맛있습니다." },
    { id: 19, name: "해미루", region: "인천 청라", rating: 4.4, reviews: 1100, price: "₩", type: "한식", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80", reviewText: "직접 빚어 속이 꽉 찬 수제 만두전골. 식사시간엔 항상 웨이팅이 있습니다." }
];

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('results-grid');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const resultsCount = document.getElementById('results-count');
    const resultsTitle = document.getElementById('results-title');
    const emptyState = document.getElementById('empty-state');
    const header = document.getElementById('navbar');
    const tags = document.querySelectorAll('.tag');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let currentQuery = '';
    let currentCategory = 'all';

    // 스크롤 헤더 디자인
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 카테고리별 디자인 매핑 (이모티콘 및 단색/그라데이션 배경)
    const getCategoryStyles = (type) => {
        const styles = {
            '한식': { emoji: '🍲', bg: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' },
            '분식': { emoji: '🥘', bg: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)' },
            '중식': { emoji: '🍜', bg: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)' },
            '일식': { emoji: '🍣', bg: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)' },
            '양식': { emoji: '🍕', bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
            '카페': { emoji: '☕', bg: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)' },
            '기타': { emoji: '🍗', bg: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)' }
        };
        return styles[type] || styles['기타'];
    };

    // 카드 생성 함수 (블로그 리뷰 링크 추가)
    const createCardHTML = (restaurant) => {
        // 실제 네이버 블로그 검색으로 연결되는 링크 생성 (지역명 중복 방지)
        const searchKeyword = `${restaurant.name} 맛집`;
        const blogLink = `https://search.naver.com/search.naver?query=${encodeURIComponent(searchKeyword)}`;
        const styleInfo = getCategoryStyles(restaurant.type);

        return `
            <div class="card fade-in-up" onclick="window.open('${blogLink}', '_blank')" style="cursor: pointer;" title="네이버에서 검색하기">
                <div class="card-img-wrapper" style="background: ${styleInfo.bg}; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">
                    <span class="badge" style="position: absolute; top: 15px; left: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">${restaurant.type}</span>
                    <div style="font-size: 4.5rem; filter: drop-shadow(0px 8px 8px rgba(0,0,0,0.2));">${styleInfo.emoji}</div>
                    <div style="color: white; font-weight: 800; font-size: 1.1rem; letter-spacing: 5px; text-shadow: 0 2px 5px rgba(0,0,0,0.3); margin-top: 8px;">${restaurant.type}</div>
                </div>
                <div class="card-content">
                    <div class="card-meta">
                        <span class="region"><i class="fas fa-map-marker-alt" style="color:#ff6b6b; margin-right:5px"></i>${restaurant.region}</span>
                        <span class="price">${restaurant.price}</span>
                    </div>
                    <h3 class="card-title">${restaurant.name}</h3>
                    <div class="card-review">
                        "${restaurant.reviewText}"
                    </div>
                    <div class="card-footer">
                        <div class="rating">
                            <i class="fas fa-star"></i> ${restaurant.rating}
                            <span>(${restaurant.reviews} 리뷰)</span>
                        </div>
                        <span style="color:var(--primary); font-weight:600; font-size:0.9rem;">
                            네이버 검색 <i class="fas fa-search" style="font-size:0.8rem; margin-left:3px"></i>
                        </span>
                    </div>
                </div>
            </div>
        `;
    };

    // 가상의 식당 데이터를 무한 생성하는 AI 제너레이터 함수
    const generateDynamicMockData = (query) => {
        // 사소한 읍면동 및 방대한 음식 카테고리 템플릿
        const mockNames = {
            '한식': ['본죽', '한솥도시락', '원할머니보쌈', '육쌈냉면', '하남돼지집', '이차돌', '연안식당', '채선당', '홍익육개장', '새마을식당', '명륜진사갈비', '놀부보쌈', '백채김치찌개', '가마솥 소머리 국밥', '명품 한우 정육식당', '제주 흑돼지 숯불구이', '전통 산채 비빔밥', '순대국밥 전문점', '김치찌개 명가', '전주 콩나물국밥', '백반 정식', '매운 갈비찜', '시골 청국장'],
            '분식': ['감탄떡볶이', '국대떡볶이', '청년다방', '바르다김선생', '얌샘김밥', '싸다김밥', '신불떡볶이', '걸작떡볶이치킨', '두끼떡볶이', '홍콩반점0410', '동대문 엽기떡볶이', '신전떡볶이', '죠스떡볶이', '고봉민김밥', '김밥천국', '매콤 달달 떡볶이', '수제 튀김 전문점', '왕돈까스', '시장 떡볶이', '꼬마김밥', '라볶이 명가'],
            '중식': ['마라공방', '홍콩반점', '짬뽕지존', '이비가짬뽕', '보배반점', '취영루', '딘타이펑', '크리스탈제이드', '몽중헌', '탕화쿵푸 마라탕', '하오츠 마라탕', '불맛 직화 짬뽕', '수제 딤섬', '향원각', '진짜 짜장', '북경 오리', '사천 마라탕', '찹쌀 탕수육 전문점', '동네 중화반점', '양꼬치 전문점'],
            '일식': ['역전우동0410', '홍대돈부리', '소소한식당', '아비꼬', '멘야산다이메', '스시로', '미소야', '쿠우쿠우', '코코이찌방야', '갓파스시', '토리키치', '스시 오마카세', '심야식당 이자카야', '수제 돈카츠', '카레 전문점', '사시미 하우스', '야끼토리', '텐동 & 냉소바', '수제 라멘', '연어 덮밥'],
            '양식': ['맥도날드', '롯데리아', '맘스터치', 'KFC', '노브랜드버거', '피자스쿨', '피자알볼로', '미스터피자', '매드포갈릭', '빕스(VIPS)', '애슐리', '아웃백스테이크하우스', '서가앤쿡', '롤링파스타', '쉐이크쉑', '버거킹', '도미노피자', '화덕 피자', '이탈리안 파스타', '수제 버거', '프렌치 레스토랑', '유러피안 와인 비스트로', '시카고 피자'],
            '카페': ['배스킨라빈스', '던킨도너츠', '크리스피크림도넛', '파리바게뜨', '뚜레쥬르', '폴바셋', '할리스', '엔제리너스', '공차', '팔공티', '디저트39', '메가커피', '컴포즈커피', '더벤티', '스타벅스', '투썸플레이스', '빽다방', '이디야', '설빙', '디저트 부티크', '베이커리 카페', '오션뷰 라운지', '수플레 팬케이크', '마카롱 전문점', '핸드드립 카페', '스페셜티 커피'],
            '기타': ['깐부치킨', '호시기두마리치킨', '지코바치킨', '굽네치킨', '자담치킨', '바른치킨', '역전할머니맥주', '금별맥주', '인쌩맥주', '크라운호프', '교촌치킨', 'BHC치킨', 'BBQ치킨', '푸라닭', '노랑통닭', '처갓집양념치킨', '써브웨이', '이삭토스트', '에그드랍', '옛날 통닭', '단짠 푸팟퐁커리', '베트남 쌀국수', '멕시칸 타코야']
        };

        const allFranchises = Object.values(mockNames).flat();
        const foodKeywords = ['냉면','국밥','떡볶이','비빔밥','치킨','피자','버거','커피','마라탕','파스타','스시','짜장','짬뽕','돈까스','디저트','케이크','삼겹살','소고기','고기','회','초밥','덮밥','우동','라멘','라볶이','김밥','보쌈','갈비'];
        
        // 검색어가 음식인지 지역인지 판별하는 지능형 모듈
        let isFoodSearch = false;
        if (foodKeywords.some(f => query.includes(f)) || allFranchises.some(f => f.includes(query) || query.includes(f))) {
            if (query.length < 10) isFoodSearch = true; 
        }

        let initialGenerated = [];
        let indexCnt = 0;

        if (isFoodSearch) {
            // [음식 검색 모드]: '냉면' 치면 전국의 핫플 지역에서 냉면 가게들을 대량 생성
            const regions = ['서울 강남', '서울 홍대', '서울 이태원', '서울 종로', '인천 청라', '인천 송도', '인천 부평', '경기 분당', '경기 판교', '경기 일산', '부산 해운대', '부산 서면', '부산 광안리', '제주 애월', '제주 서귀포', '대구 동성로', '대전 둔산동', '광주 상무지구', '전주 한옥마을', '우리동네'];
            const prefixes = ['원조', '수제', '소문난', '인생', '명품', '최고의', '전통', '눈물나는 가성비', '착한'];

            const hasSpace = query.trim().includes(' ');
            const guessedRegion = hasSpace ? query.trim().split(' ')[0] : ''; // 띄어쓰기가 있다면 첫 단어를 지역으로 추정

            for (let i = 0; i < 45; i++) {
                let randomRegion = hasSpace ? guessedRegion : regions[Math.floor(Math.random() * regions.length)];
                let finalName = '';
                
                if (hasSpace) {
                    // 구체적인 복합 검색 (예: "고척돔 냉면")
                    const pfx = prefixes[Math.floor(Math.random() * prefixes.length)];
                    const format = Math.random();
                    if (format < 0.4) {
                        finalName = `${pfx} ${query}`; // 원조 고척돔 냉면
                    } else if (format < 0.7) {
                        finalName = `${query} 전문점`; // 고척돔 냉면 전문점
                    } else {
                        finalName = `${query} 본점`;   // 고척돔 냉면 본점
                    }
                } else {
                    // 단어 하나 검색 (예: "냉면")
                    const isBrand = allFranchises.some(f => f.includes(query) && query.length >= 2);
                    if (isBrand || query.length > 5) {
                        finalName = `${randomRegion} ${query}`;
                    } else {
                        const pfx = prefixes[Math.floor(Math.random() * prefixes.length)];
                        finalName = `${randomRegion} ${pfx} ${query}`;
                    }
                }

                // 음식명에 따른 적절한 이모지 및 카테고리 자동 유추
                let matchedType = '기타';
                for(const [type, names] of Object.entries(mockNames)) {
                    if (names.some(n => n.includes(query)) || (type === '한식' && query.includes('냉면'))) {
                        matchedType = type; break;
                    }
                }
                if (matchedType === '기타') {
                    const types = Object.keys(mockNames);
                    matchedType = types[Math.floor(Math.random() * types.length)];
                }

                initialGenerated.push({
                    id: 'gen_food_' + Date.now() + '_' + indexCnt++,
                    name: finalName,
                    region: randomRegion,
                    rating: (4.0 + Math.random() * 0.9).toFixed(1),
                    reviews: Math.floor(Math.random() * 2500) + 100,
                    price: "₩".repeat(Math.floor(Math.random() * 3) + 1),
                    type: matchedType,
                    reviewText: `요즘 ${randomRegion}에서 제일 핫한 ${query} 맛집입니다! 방문객 폭주 중!`
                });
            }
        } else {
            // [지역 검색 모드]: '청라' 치면 청라 지역에 모든 일반 프랜차이즈 식당 생성
            Object.keys(mockNames).forEach(type => {
                mockNames[type].forEach(suffix => {
                    initialGenerated.push({
                        id: 'gen_loc_' + Date.now() + '_' + indexCnt++,
                        name: `${query} ${suffix}`,
                        region: query,
                        rating: (3.5 + Math.random() * 1.4).toFixed(1),
                        reviews: Math.floor(Math.random() * 950) + 12,
                        price: "₩".repeat(Math.floor(Math.random() * 3) + 1),
                        type: type,
                        reviewText: `최근 ${query} 동네 주민들이 많이 찾고 있는 숨겨진 ${type} 로컬 맛집입니다! 강력 추천.`
                    });
                });
            });
        }
        
        // 데이터 블렌딩 후 45개 리밋 출력
        const shuffled = initialGenerated.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 45);
    };

    // 렌더링 로직
    const renderResults = () => {
        // 기입력된 데이터에서 검색 필터링
        let filtered = restaurantData.filter(item => {
            const matchSearch = item.region.toLowerCase().includes(currentQuery) || item.name.toLowerCase().includes(currentQuery);
            const matchCategory = currentCategory === 'all' ? true : (item.type === currentCategory || (currentCategory === '기타' && !['한식','분식','중식','일식','양식','카페'].includes(item.type)));
            return matchSearch && matchCategory;
        });

        // 💡 검색어가 입력되었다면 45종의 프랜차이즈 및 다양한 식당을 풍부하게 추가로 합쳐줍니다.
        if (currentQuery) {
            const dynamicList = generateDynamicMockData(currentQuery);
            const dynamicFiltered = dynamicList.filter(item => {
                return currentCategory === 'all' ? true : item.type === currentCategory;
            });
            // 기존 찐맛집(하드코딩) + 새로운 프랜차이즈 식당 통합 (순서 섞기)
            filtered = [...filtered, ...dynamicFiltered];
        }

        gridContainer.innerHTML = '';
        
        let titleText = currentQuery ? `'${currentQuery}' 맛집 리스트` : '모든 맛집 리스트';
        if (currentCategory !== 'all') {
            titleText += ` (${currentCategory})`;
        }

        if (filtered.length === 0) {
            gridContainer.classList.add('hidden');
            emptyState.classList.remove('hidden');
            resultsTitle.textContent = titleText;
            resultsCount.innerHTML = `해당 카테고리의 검색 결과가 없습니다.`;
        } else {
            gridContainer.classList.remove('hidden');
            emptyState.classList.add('hidden');
            resultsTitle.textContent = titleText;
            resultsCount.innerHTML = `실시간 검색된 맛집 <span class="highlight">${filtered.length}</span>곳을 찾았습니다!`;
            
            filtered.forEach((restaurant, index) => {
                const html = createCardHTML(restaurant);
                gridContainer.insertAdjacentHTML('beforeend', html);
                
                const cards = gridContainer.querySelectorAll('.card');
                const lastCard = cards[cards.length - 1];
                lastCard.style.animationDelay = `${index * 0.05}s`;
            });
        }
    };

    // 검색 실행
    const handleSearch = () => {
        currentQuery = searchInput.value.trim().toLowerCase();
        renderResults();
        
        const resultsSection = document.querySelector('.results-section');
        window.scrollTo({
            top: resultsSection.offsetTop - 80,
            behavior: 'smooth'
        });
    };

    // 검색어(태그) 설정 시 이벤트
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            searchInput.value = tag.getAttribute('data-search');
            handleSearch();
        });
    });

    // 엔터키 및 검색버튼 이벤트
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // 필터 카테고리 로직 구현
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentCategory = btn.getAttribute('data-type');
            renderResults(); // 카테고리만 바꾸고 현재 검색 상태 유지
        });
    });

    // 첫 실행
    renderResults();
});
