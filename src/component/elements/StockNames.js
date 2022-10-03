const stockNames = [
    'AJ네트웍스',
    'AK홀딩스',
    'BGF',
    'BGF리테일',
    'BNK금융지주',
    'BYC',
    'BYC우',
    'CJ',
    'CJCGV',
    'CJ4우(전환)',
    'CJ대한통운',
    'CJ씨푸드',
    'CJ씨푸드1우',
    'CJ우',
    'CJ제일제당',
    'CJ제일제당우',
    'CS홀딩스',
    'DB',
    'DB금융투자',
    'DB손해보험',
    'DB하이텍',
    'DB하이텍1우',
    'DGB금융지주',
    'DI동일',
    'DL',
    'DL건설',
    'DL우',
    'DL이앤씨',
    'DL이앤씨2우(전환)',
    'DL이앤씨우',
    'DN오토모티브',
    'DRB동일',
    'DSR',
    'DSR제강',
    'E1',
    'ESR켄달스퀘어리츠',
    'F&F',
    'F&F홀딩스',
    'GKL',
    'GS',
    'GS건설',
    'GS글로벌',
    'GS리테일',
    'GS우',
    'HDC',
    'HDC랩스',
    'HDC현대EP',
    'HDC현대산업개발',
    'HD현대',
    'HJ중공업',
    'HLB글로벌',
    'HMM',
    'HSD엔진',
    'IHQ',
    'JB금융지주',
    'JW생명과학',
    'JW중외제약',
    'JW중외제약2우B',
    'JW중외제약우',
    'JW홀딩스',
    'KB금융',
    'KCC',
    'KCC글라스',
    'KCTC',
    'KC그린홀딩스',
    'KC코트렐',
    'KEC',
    'KG스틸',
    'KG케미칼',
    'KH필룩스',
    'KISCO홀딩스',
    'KPX케미칼',
    'KPX홀딩스',
    'KR모터스',
    'KSS해운',
    'KT',
    'KT&G',
    'KTcs',
    'KTis',
    'LF',
    'LG',
    'LG디스플레이',
    'LG생활건강',
    'LG생활건강우',
    'LG에너지솔루션',
    'LG우',
    'LG유플러스',
    'LG이노텍',
    'LG전자',
    'LG전자우',
    'LG헬로비전',
    'LG화학',
    'LG화학우',
    'LIG넥스원',
    'LS',
    'LSELECTRIC',
    'LS네트웍스',
    'LS전선아시아',
    'LX인터내셔널',
    'LX하우시스',
    'LX하우시스우',
    'LX홀딩스',
    'LX홀딩스1우',
    'MH에탄올',
    'NAVER',
    'NHN',
    'NH올원리츠',
    'NH투자증권',
    'NH투자증권우',
    'NH프라임리츠',
    'NICE',
    'NI스틸',
    'NPC',
    'NPC우',
    'OCI',
    'PI첨단소재',
    'POSCO홀딩스',
    'S-Oil',
    'S-Oil우',
    'SBS',
    'SGC에너지',
    'SG글로벌',
    'SG세계물산',
    'SHD',
    'SH에너지화학',
    'SIMPAC',
    'SJM',
    'SJM홀딩스',
    'SK',
    'SKC',
    'SK가스',
    'SK네트웍스',
    'SK네트웍스우',
    'SK디스커버리',
    'SK디스커버리우',
    'SK디앤디',
    'SK렌터카',
    'SK리츠',
    'SK바이오사이언스',
    'SK바이오팜',
    'SK스퀘어',
    'SK아이이테크놀로지',
    'SK우',
    'SK이노베이션',
    'SK이노베이션우',
    'SK증권',
    'SK증권우',
    'SK케미칼',
    'SK케미칼우',
    'SK텔레콤',
    'SK하이닉스',
    'SNT모티브',
    'SNT에너지',
    'SNT중공업',
    'SNT홀딩스',
    'SPC삼립',
    'STX',
    'STX엔진',
    'STX중공업',
    'SUN&L',
    'TBH글로벌',
    'TCC스틸',
    'TKG휴켐스',
    'TYM',
    'WISCOM',
    'YGPLUS',
    '가온전선',
    '강남제비스코',
    '강원랜드',
    '갤럭시아에스엠',
    '경농',
    '경동나비엔',
    '경동도시가스',
    '경동인베스트',
    '경방',
    '경보제약',
    '경인양행',
    '경인전자',
    '계룡건설',
    '계양전기',
    '계양전기우',
    '고려산업',
    '고려아연',
    '고려제강',
    '광동제약',
    '광명전기',
    '광전자',
    '광주신세계',
    '교보증권',
    '교촌에프앤비',
    '국도화학',
    '국동',
    '국보',
    '국제약품',
    '그린케미칼',
    '극동유화',
    '금강공업',
    '금강공업우',
    '금비',
    '금양',
    '금호건설',
    '금호건설우',
    '금호석유',
    '금호석유우',
    '금호에이치티',
    '금호전기',
    '금호타이어',
    '기신정기',
    '기아',
    '기업은행',
    '까뮤이앤씨',
    '깨끗한나라',
    '깨끗한나라우',
    '남광토건',
    '남선알미늄',
    '남선알미우',
    '남성',
    '남양유업',
    '남양유업우',
    '남해화학',
    '넥센',
    '넥센우',
    '넥센타이어',
    '넥센타이어1우B',
    '넷마블',
    '노루페인트',
    '노루페인트우',
    '노루홀딩스',
    '노루홀딩스우',
    '녹십자',
    '녹십자홀딩스',
    '녹십자홀딩스2우',
    '농심',
    '농심홀딩스',
    '다스코',
    '다올투자증권',
    '다우기술',
    '다이나믹디자인',
    '대교',
    '대교우B',
    '대구백화점',
    '대덕',
    '대덕1우',
    '대덕전자',
    '대덕전자1우',
    '대동',
    '대동전자',
    '대림B&Co',
    '대림통상',
    '대상',
    '대상우',
    '대상홀딩스',
    '대상홀딩스우',
    '대성산업',
    '대성에너지',
    '대성홀딩스',
    '대신증권',
    '대신증권2우B',
    '대신증권우',
    '대양금속',
    '대영포장',
    '대우건설',
    '대우부품',
    '대우조선해양',
    '대웅',
    '대웅제약',
    '대원강업',
    '대원전선',
    '대원전선우',
    '대원제약',
    '대원화성',
    '대유에이텍',
    '대유플러스',
    '대창',
    '대창단조',
    '대한방직',
    '대한유화',
    '대한전선',
    '대한제강',
    '대한제당',
    '대한제당우',
    '대한제분',
    '대한항공',
    '대한항공우',
    '대한해운',
    '대한화섬',
    '대현',
    '대호에이엘',
    '더블유게임즈',
    '더존비즈온',
    '덕성',
    '덕성우',
    '덕양산업',
    '덴티움',
    '도화엔지니어링',
    '동국제강',
    '동남합성',
    '동방',
    '동방아그로',
    '동부건설',
    '동부건설우',
    '동서',
    '동성제약',
    '동성케미컬',
    '동아쏘시오홀딩스',
    '동아에스티',
    '동아지질',
    '동아타이어',
    '동양',
    '동양2우B',
    '동양고속',
    '동양생명',
    '동양우',
    '동양철관',
    '동양피스톤',
    '동원F&B',
    '동원금속',
    '동원산업',
    '동원수산',
    '동원시스템즈',
    '동원시스템즈우',
    '동일고무벨트',
    '동일산업',
    '동일제강',
    '동화약품',
    '두산',
    '두산2우B',
    '두산밥캣',
    '두산에너빌리티',
    '두산우',
    '두산퓨얼셀',
    '두산퓨얼셀1우',
    '두산퓨얼셀2우B',
    '두올',
    '드림텍',
    '디씨엠',
    '디아이',
    '디아이씨',
    '디앤디플랫폼리츠',
    '디와이',
    '디와이파워',
    '락앤락',
    '롯데관광개발',
    '롯데렌탈',
    '롯데리츠',
    '롯데손해보험',
    '롯데쇼핑',
    '롯데정밀화학',
    '롯데정보통신',
    '롯데제과',
    '롯데지주',
    '롯데지주우',
    '롯데칠성',
    '롯데칠성우',
    '롯데케미칼',
    '롯데하이마트',
    '마니커',
    '마스턴프리미어리츠',
    '만도',
    '만호제강',
    '맥쿼리인프라',
    '맵스리얼티1',
    '메리츠금융지주',
    '메리츠증권',
    '메리츠화재',
    '메타랩스',
    '명문제약',
    '명신산업',
    '모나리자',
    '모나미',
    '모두투어리츠',
    '모토닉',
    '무림P&P',
    '무림페이퍼',
    '무학',
    '문배철강',
    '미래산업',
    '미래아이앤지',
    '미래에셋글로벌리츠',
    '미래에셋맵스리츠',
    '미래에셋생명',
    '미래에셋증권',
    '미래에셋증권2우B',
    '미래에셋증권우',
    '미원상사',
    '미원에스씨',
    '미원홀딩스',
    '미원화학',
    '미창석유',
    '바다로19호',
    '방림',
    '백광산업',
    '백산',
    '범양건영',
    '베트남개발1',
    '벽산',
    '보락',
    '보령',
    '보해양조',
    '부광약품',
    '부국증권',
    '부국증권우',
    '부국철강',
    '부산산업',
    '부산주공',
    '비비안',
    '비상교육',
    '비케이탑스',
    '빙그레',
    '사조대림',
    '사조동아원',
    '사조산업',
    '사조씨푸드',
    '사조오양',
    '삼부토건',
    '삼성SDI',
    '삼성SDI우',
    '삼성공조',
    '삼성물산',
    '삼성물산우B',
    '삼성바이오로직스',
    '삼성생명',
    '삼성에스디에스',
    '삼성엔지니어링',
    '삼성전기',
    '삼성전기우',
    '삼성전자',
    '삼성전자우',
    '삼성제약',
    '삼성중공업',
    '삼성중공우',
    '삼성증권',
    '삼성출판사',
    '삼성카드',
    '삼성화재',
    '삼성화재우',
    '삼아알미늄',
    '삼양사',
    '삼양사우',
    '삼양식품',
    '삼양통상',
    '삼양패키징',
    '삼양홀딩스',
    '삼양홀딩스우',
    '삼영무역',
    '삼영전자',
    '삼영화학',
    '삼원강재',
    '삼익THK',
    '삼익악기',
    '삼일씨엔에스',
    '삼일제약',
    '삼정펄프',
    '삼진제약',
    '삼천리',
    '삼호개발',
    '삼화왕관',
    '삼화전기',
    '삼화전자',
    '삼화콘덴서',
    '삼화페인트',
    '상상인증권',
    '상신브레이크',
    '새론오토모티브',
    '샘표',
    '샘표식품',
    '서연',
    '서연이화',
    '서울가스',
    '서울식품',
    '서울식품우',
    '서원',
    '서흥',
    '선도전기',
    '선진',
    '성문전자',
    '성문전자우',
    '성보화학',
    '성신양회',
    '성신양회우',
    '성안',
    '성창기업지주',
    '세기상사',
    '세방',
    '세방우',
    '세방전지',
    '세아베스틸지주',
    '세아제강',
    '세아제강지주',
    '세아특수강',
    '세아홀딩스',
    '세우글로벌',
    '세원이앤씨',
    '세원정공',
    '세이브존I&C',
    '세종공업',
    '세진중공업',
    '세하',
    '센트랄모텍',
    '센트럴인사이트',
    '셀트리온',
    '솔루스첨단소재',
    '솔루스첨단소재1우',
    '솔루스첨단소재2우B',
    '솔루엠',
    '송원산업',
    '수산인더스트리',
    '수산중공업',
    '스카이라이프',
    '스틱인베스트먼트',
    '시디즈',
    '신대양제지',
    '신도리코',
    '신라교역',
    '신성이엔지',
    '신성통상',
    '신세계',
    '신세계I&C',
    '신세계건설',
    '신세계인터내셔날',
    '신세계푸드',
    '신송홀딩스',
    '신영와코루',
    '신영증권',
    '신영증권우',
    '신원',
    '신일전자',
    '신풍제약',
    '신풍제약우',
    '신풍제지',
    '신한서부티엔디리츠',
    '신한알파리츠',
    '신한지주',
    '신흥',
    '쌍방울',
    '쌍용C&E',
    '쌍용차',
    '써니전자',
    '쎌마테라퓨틱스',
    '쏘카',
    '씨아이테크',
    '씨에스윈드',
    '아남전자',
    '아모레G',
    '아모레G3우(전환)',
    '아모레G우',
    '아모레퍼시픽',
    '아모레퍼시픽우',
    '아세아',
    '아세아시멘트',
    '아세아제지',
    '아센디오',
    '아시아나IDT',
    '아시아나항공',
    '아이마켓코리아',
    '아이에스동서',
    '아주스틸',
    '알루코',
    '애경산업',
    '애경케미칼',
    '에넥스',
    '에스디바이오센서',
    '에스엘',
    '에스엠벡셀',
    '에스원',
    '에쓰씨엔지니어링',
    '에어부산',
    '에이리츠',
    '에이블씨엔씨',
    '에이엔피',
    '에이프로젠',
    '에이프로젠제약',
    '에이플러스에셋',
    '엔씨소프트',
    '엔에이치스팩19호',
    '엔케이',
    '엘브이엠씨홀딩스',
    '엠씨넥스',
    '영보화학',
    '영원무역',
    '영원무역홀딩스',
    '영진약품',
    '영풍',
    '영풍제지',
    '영화금속',
    '영흥',
    '예스코홀딩스',
    '오뚜기',
    '오리엔트바이오',
    '오리온',
    '오리온홀딩스',
    '와이투솔루션',
    '용평리조트',
    '우리금융지주',
    '우리종금',
    '우성',
    '우신시스템',
    '우진',
    '우진아이엔에스',
    '우진플라임',
    '웅진',
    '웅진씽크빅',
    '원림',
    '웰바이오텍',
    '윌비스',
    '유나이티드제약',
    '유니드',
    '유니온',
    '유니온머티리얼',
    '유니켐',
    '유니퀘스트',
    '유성기업',
    '유수홀딩스',
    '유안타증권',
    '유안타증권우',
    '유엔젤',
    '유유제약',
    '유유제약1우',
    '유유제약2우B',
    '유진투자증권',
    '유한양행',
    '유한양행우',
    '유화증권',
    '유화증권우',
    '율촌화학',
    '이건산업',
    '이구산업',
    '이노션',
    '이리츠코크렙',
    '이마트',
    '이수페타시스',
    '이수화학',
    '이스타코',
    '이아이디',
    '이엔플러스',
    '이연제약',
    '이월드',
    '이지스레지던스리츠',
    '이지스밸류리츠',
    '이화산업',
    '인디에프',
    '인바이오젠',
    '인스코비',
    '인지컨트롤스',
    '인천도시가스',
    '인터지스',
    '인팩',
    '일동제약',
    '일동홀딩스',
    '일성건설',
    '일성신약',
    '일신방직',
    '일신석재',
    '일양약품',
    '일양약품우',
    '일정실업',
    '일진다이아',
    '일진디스플',
    '일진머티리얼즈',
    '일진전기',
    '일진하이솔루스',
    '일진홀딩스',
    '잇츠한불',
    '자이에스앤디',
    '자화전자',
    '전방',
    '제이알글로벌리츠',
    '제이에스코퍼레이션',
    '제이준코스메틱',
    '제일기획',
    '제일약품',
    '제일연마',
    '제일파마홀딩스',
    '제주은행',
    '제주항공',
    '조광페인트',
    '조광피혁',
    '조비',
    '조선내화',
    '조선선재',
    '조일알미늄',
    '조흥',
    '종근당',
    '종근당바이오',
    '종근당홀딩스',
    '주연테크',
    '지누스',
    '지엠비코리아',
    '지역난방공사',
    '지투알',
    '진도',
    '진양산업',
    '진양폴리',
    '진양홀딩스',
    '진양화학',
    '진에어',
    '진원생명과학',
    '진흥기업',
    '진흥기업2우B',
    '진흥기업우B',
    '참엔지니어링',
    '천일고속',
    '체시스',
    '초록뱀헬스케어',
    '카카오',
    '카카오뱅크',
    '카카오페이',
    '카프로',
    '컨버즈',
    '케이비아이동국실업',
    '케이씨',
    '케이씨텍',
    '케이카',
    '케이탑리츠',
    '코람코더원리츠',
    '코람코에너지리츠',
    '코리아써우',
    '코리아써키트',
    '코리아써키트2우B',
    '코리안리',
    '코스맥스',
    '코스맥스비티아이',
    '코스모신소재',
    '코스모화학',
    '코아스',
    '코오롱',
    '코오롱글로벌',
    '코오롱글로벌우',
    '코오롱우',
    '코오롱인더',
    '코오롱인더우',
    '코오롱플라스틱',
    '코웨이',
    '콘텐트리중앙',
    '콤텍시스템',
    '쿠쿠홀딩스',
    '쿠쿠홈시스',
    '큐로',
    '크라운제과',
    '크라운제과우',
    '크라운해태홀딩스',
    '크라운해태홀딩스우',
    '크래프톤',
    '키다리스튜디오',
    '키움증권',
    '태경비케이',
    '태경산업',
    '태경케미컬',
    '태광산업',
    '태림포장',
    '태양금속',
    '태양금속우',
    '태영건설',
    '태영건설우',
    '태원물산',
    '태평양물산',
    '테이팩스',
    '텔코웨어',
    '토니모리',
    '티에이치엔',
    '티와이홀딩스',
    '티와이홀딩스우',
    '티웨이항공',
    '티웨이홀딩스',
    '파미셀',
    '팜스코',
    '팜젠사이언스',
    '팬오션',
    '퍼스텍',
    '퍼시스',
    '페이퍼코리아',
    '평화산업',
    '평화홀딩스',
    '포스코스틸리온',
    '포스코인터내셔널',
    '포스코케미칼',
    '풀무원',
    '풍산',
    '풍산홀딩스',
    '프레스티지바이오파마',
    '플레이그램',
    '하나금융지주',
    '하나제약',
    '하나투어',
    '하이브',
    '하이스틸',
    '하이트론',
    '하이트진로',
    '하이트진로2우B',
    '하이트진로홀딩스',
    '하이트진로홀딩스우',
    '한국ANKOR유전',
    '한국가스공사',
    '한국공항',
    '한국금융지주',
    '한국금융지주우',
    '한국내화',
    '한국단자',
    '한국석유',
    '한국수출포장',
    '한국쉘석유',
    '한국앤컴퍼니',
    '한국자산신탁',
    '한국전력',
    '한국전자홀딩스',
    '한국조선해양',
    '한국종합기술',
    '한국주강',
    '한국주철관',
    '한국철강',
    '한국카본',
    '한국콜마',
    '한국콜마홀딩스',
    '한국타이어앤테크놀로지',
    '한국토지신탁',
    '한국특강',
    '한국패러랠',
    '한국프랜지',
    '한국항공우주',
    '한국화장품',
    '한국화장품제조',
    '한농화성',
    '한독',
    '한라',
    '한라홀딩스',
    '한미글로벌',
    '한미반도체',
    '한미사이언스',
    '한미약품',
    '한샘',
    '한섬',
    '한성기업',
    '한세실업',
    '한세엠케이',
    '한세예스24홀딩스',
    '한솔PNS',
    '한솔로지스틱스',
    '한솔제지',
    '한솔케미칼',
    '한솔테크닉스',
    '한솔홀딩스',
    '한솔홈데코',
    '한신공영',
    '한신기계',
    '한양증권',
    '한양증권우',
    '한온시스템',
    '한올바이오파마',
    '한익스프레스',
    '한일시멘트',
    '한일철강',
    '한일현대시멘트',
    '한일홀딩스',
    '한전KPS',
    '한전기술',
    '한전산업',
    '한진',
    '한진중공업홀딩스',
    '한진칼',
    '한진칼우',
    '한창',
    '한창제지',
    '한컴라이프케어',
    '한화',
    '한화3우B',
    '한화생명',
    '한화손해보험',
    '한화솔루션',
    '한화솔루션우',
    '한화시스템',
    '한화에어로스페이스',
    '한화우',
    '한화투자증권',
    '한화투자증권우',
    '해성디에스',
    '해태제과식품',
    '핸즈코퍼레이션',
    '현대건설',
    '현대건설기계',
    '현대건설우',
    '현대그린푸드',
    '현대글로비스',
    '현대두산인프라코어',
    '현대로템',
    '현대리바트',
    '현대모비스',
    '현대미포조선',
    '현대백화점',
    '현대비앤지스틸',
    '현대비앤지스틸우',
    '현대약품',
    '현대에너지솔루션',
    '현대엘리베이',
    '현대오토에버',
    '현대위아',
    '현대일렉트릭',
    '현대제철',
    '현대중공업',
    '현대차',
    '현대차2우B',
    '현대차3우B',
    '현대차우',
    '현대차증권',
    '현대코퍼레이션',
    '현대코퍼레이션홀딩스',
    '현대퓨처넷',
    '현대해상',
    '현대홈쇼핑',
    '형지엘리트',
    '혜인',
    '호전실업',
    '호텔신라',
    '호텔신라우',
    '화성산업',
    '화승알앤에이',
    '화승엔터프라이즈',
    '화승인더',
    '화승코퍼레이션',
    '화신',
    '화인베스틸',
    '화천기계',
    '화천기공',
    '환인제약',
    '황금에스티',
    '효성',
    '효성ITX',
    '효성중공업',
    '효성첨단소재',
    '효성티앤씨',
    '효성화학',
    '후성',
    '휠라홀딩스',
    '휴니드',
    '휴비스',
    '휴스틸',
    '흥국화재',
    '흥국화재2우B',
    '흥국화재우',
    '흥아해운',
    '3S',
    'APS홀딩스',
    'AP시스템',
    'AP위성',
    'BNGT',
    'CBI',
    'CJENM',
    'CJ바이오사이언스',
    'CJ프레시웨이',
    'CMG제약',
    'CNH',
    'CNT85',
    'CS',
    'CSA코스믹',
    'DB금융스팩10호',
    'DB금융스팩8호',
    'DB금융스팩9호',
    'DMS',
    'DSC인베스트먼트',
    'EDGC',
    'EG',
    'ES큐브',
    'EV수성',
    'FSN',
    'GH신소재',
    'GRT',
    'GST',
    'HB솔루션',
    'HB테크놀러지',
    'HK이노엔',
    'HLB',
    'HLB생명과학',
    'HLB제약',
    'HLB테라퓨틱스',
    'HPSP',
    'HRS',
    'IBKS제12호스팩',
    'IBKS제13호스팩',
    'IBKS제16호스팩',
    'IBKS제17호스팩',
    'IBKS제18호스팩',
    'IBKS제19호스팩',
    'ISC',
    'ITX-AI',
    'JTC',
    'JW신약',
    'JYPEnt.',
    'KBG',
    'KBI메탈',
    'KB오토시스',
    'KCC건설',
    'KCI',
    'KD',
    'KGETS',
    'KG모빌리언스',
    'KG이니시스',
    'KH건설',
    'KH전자',
    'KH바텍',
    'KNN',
    'KPX생명과학',
    'KT서브마린',
    'KX',
    'KX하이텍',
    'LX세미콘',
    'MDS테크',
    'NEW',
    'NE능률',
    'NHN벅스',
    'NHN한국사이버결제',
    'NICE평가정보',
    'PN풍년',
    'RFHIC',
    'RF머트리얼즈',
    'S&K폴리텍',
    'SBI인베스트먼트',
    'SBI핀테크솔루션즈',
    'SBS콘텐츠허브',
    'SBW생명과학',
    'SCI평가정보',
    'SDN',
    'SFA반도체',
    'SG',
    'SG&G',
    'SGA',
    'SGA솔루션즈',
    'SGC이테크건설',
    'SK5호스팩',
    'SK6호스팩',
    'SMC&C',
    'SMLifeDesign',
    'SV인베스트먼트',
    'THEE&M',
    'THEMIDONG',
    'TJ미디어',
    'TKG애강',
    'TPC',
    'TS인베스트먼트',
    'TS트릴리온',
    'UCI',
    'WI',
    'YBM넷',
    'YTN',
    'YW',
    'iMBC',
    '가비아',
    '가온미디어',
    '가온칩스',
    '감성코퍼레이션',
    '강스템바이오텍',
    '강원에너지',
    '갤럭시아머니트리',
    '경남스틸',
    '경남제약',
    '경동제약',
    '경창산업',
    '고려시멘트',
    '고려신용정보',
    '고려제약',
    '고바이오랩',
    '고영',
    '골드앤에스',
    '골드퍼시픽',
    '골든센츄리',
    '골프존',
    '골프존뉴딘홀딩스',
    '공구우먼',
    '광림',
    '광무',
    '광진실업',
    '교보10호스팩',
    '교보11호스팩',
    '교보12호스팩',
    '교보9호스팩',
    '구영테크',
    '국보디자인',
    '국순당',
    '국영지앤엠',
    '국일신동',
    '국일제지',
    '국전약품',
    '그래디언트',
    '그리티',
    '그린플러스',
    '글로벌에스엠',
    '글로벌텍스프리',
    '글로본',
    '금강철강',
    '금화피에스시',
    '기가레인',
    '기산텔레콤',
    '까스텔바작',
    '나노',
    '나노브릭',
    '나노신소재',
    '나노씨엠에스',
    '나노엔텍',
    '나노캠텍',
    '나라엠앤디',
    '나래나노텍',
    '나무가',
    '나무기술',
    '나스미디어',
    '나우IB',
    '나이벡',
    '나이스디앤비',
    '나이스정보통신',
    '나인테크',
    '남화산업',
    '남화토건',
    '내츄럴엔도텍',
    '네오리진',
    '네오셈',
    '네오오토',
    '네오위즈',
    '네오위즈홀딩스',
    '네오이뮨텍',
    '네오크레마',
    '네오티스',
    '네오팜',
    '네오펙트',
    '네온테크',
    '네이블',
    '네이처셀',
    '네패스',
    '네패스아크',
    '넥스턴바이오',
    '넥스트아이',
    '넥스트칩',
    '넥스틴',
    '넥슨게임즈',
    '넵튠',
    '노랑풍선',
    '노바렉스',
    '노바텍',
    '노블엠앤비',
    '노을',
    '노터스',
    '녹십자엠에스',
    '녹십자웰빙',
    '녹원씨엔아이',
    '농우바이오',
    '누리플랜',
    '누리플렉스',
    '누보',
    '뉴로스',
    '뉴보텍',
    '뉴인텍',
    '뉴지랩파마',
    '뉴트리',
    '뉴파워프라즈마',
    '뉴프렉스',
    '다나와',
    '다날',
    '다믈멀티미디어',
    '다보링크',
    '다산네트웍스',
    '다올인베스트먼트',
    '다우데이타',
    '다원시스',
    '대동금속',
    '대동기어',
    '대동스틸',
    '대륙제관',
    '대림제지',
    '대명소노시즌',
    '대명에너지',
    '대모',
    '대보마그네틱',
    '대봉엘에스',
    '대성미생물',
    '대성엘텍',
    '대성창투',
    '대성파인텍',
    '대성하이텍',
    '대신밸런스제10호스팩',
    '대신밸런스제11호스팩',
    '대신밸런스제12호스팩',
    '대신정보통신',
    '대아티아이',
    '대양전기공업',
    '대양제지',
    '대원',
    '대원미디어',
    '대원산업',
    '대유',
    '대유에이피',
    '대정화금',
    '대주산업',
    '대주전자재료',
    '대창솔루션',
    '대창스틸',
    '대한과학',
    '대한광통신',
    '대한그린파워',
    '대한뉴팜',
    '대한약품',
    '대호특수강',
    '대호특수강우',
    '대화제약',
    '더네이쳐홀딩스',
    '더블유에스아이',
    '덕산네오룩스',
    '덕산테코피아',
    '덕산하이메탈',
    '덕신하우징',
    '덕우전자',
    '데브시스터즈',
    '데이타솔루션',
    '덱스터',
    '덴티스',
    '도이치모터스',
    '동구바이오제약',
    '동국S&C',
    '동국산업',
    '동국알앤에스',
    '동국제약',
    '동방선기',
    '동성화인텍',
    '동신건설',
    '동아엘텍',
    '동아화성',
    '동양에스텍',
    '동양이엔피',
    '동양파일',
    '동우팜투테이블',
    '동운아나텍',
    '동원개발',
    '동일금속',
    '동일기연',
    '동일철강',
    '동진쎄미켐',
    '동화기업',
    '두산테스나',
    '듀오백',
    '드래곤플라이',
    '드림시큐리티',
    '드림씨아이에스',
    '드림어스컴퍼니',
    '디딤',
    '디모아',
    '디바이스이엔지',
    '디스플레이텍',
    '디아이티',
    '디아크',
    '디알젬',
    '디알텍',
    '디앤씨미디어',
    '디어유',
    '디에스앤엘',
    '디에스케이',
    '디에이테크놀로지',
    '디에이피',
    '디엑스앤브이엑스',
    '디엔에이링크',
    '디엔에프',
    '디오',
    '디와이디',
    '디와이씨',
    '디와이피엔에프',
    '디이엔티',
    '디젠스',
    '디지아이',
    '디지캡',
    '디지털대성',
    '디지틀조선',
    '디케이락',
    '디케이앤디',
    '디케이티',
    '디티앤씨',
    '딜리',
    '딥노이드',
    '라닉스',
    '라온시큐어',
    '라온테크',
    '라온피플',
    '라이온켐텍',
    '라이트론',
    '라이프시맨틱스',
    '라파스',
    '래몽래인',
    '램테크놀러지',
    '랩지노믹스',
    '러셀',
    '레고켐바이오',
    '레드로버',
    '레드캡투어',
    '레몬',
    '레이',
    '레이언스',
    '레이저쎌',
    '레이크머티리얼즈',
    '레인보우로보틱스',
    '로보로보',
    '로보스타',
    '로보티즈',
    '로스웰',
    '로지시스',
    '로체시스템즈',
    '루닛',
    '루멘스',
    '루트로닉',
    '루트로닉3우C',
    '룽투코리아',
    '리노공업',
    '리노스',
    '리더스기술투자',
    '리더스코스메틱',
    '리드코프',
    '리메드',
    '리파인',
    '린드먼아시아',
    '링네트',
    '링크제니시스',
    '마니커에프앤지',
    '마이크로디지탈',
    '마이크로컨텍솔',
    '마이크로프랜드',
    '마인즈랩',
    '마크로젠',
    '매일유업',
    '매일홀딩스',
    '매커스',
    '맥스트',
    '머큐리',
    '멀티캠퍼스',
    '메가스터디',
    '메가스터디교육',
    '메가엠디',
    '메드팩토',
    '메디아나',
    '메디앙스',
    '메디콕스',
    '메디톡스',
    '메디포스트',
    '메디프론',
    '메이슨캐피탈',
    '메지온',
    '메카로',
    '메타바이오메드',
    '멕아이씨에스',
    '멜파스',
    '명성티엔에스',
    '모다이노칩',
    '모두투어',
    '모바일리더',
    '모바일어플라이언스',
    '모베이스',
    '모베이스전자',
    '모비데이즈',
    '모비릭스',
    '모비스',
    '모아데이타',
    '모아텍',
    '모트렉스',
    '모헨즈',
    '무림SP',
    '미디어젠',
    '미래나노텍',
    '미래생명자원',
    '미래에셋대우스팩5호',
    '미래에셋벤처투자',
    '미래에셋비전스팩1호',
    '미래컴퍼니',
    '미스터블루',
    '미코',
    '미코바이오메드',
    '미투온',
    '미투젠',
    '바디텍메드',
    '바른손',
    '바른손이앤에이',
    '바른전자',
    '바이넥스',
    '바이브컴퍼니',
    '바이오니아',
    '바이오다인',
    '바이오로그디바이스',
    '바이오솔루션',
    '바이오스마트',
    '바이오에프디엔씨',
    '바이오톡스텍',
    '바이오플러스',
    '바이온',
    '바이옵트로',
    '바이젠셀',
    '바텍',
    '박셀바이오',
    '배럴',
    '백금T&A',
    '버킷스튜디오',
    '범한퓨얼셀',
    '베노홀딩스',
    '베뉴지',
    '베셀',
    '베스파',
    '보광산업',
    '보라티알',
    '보로노이',
    '보성파워텍',
    '본느',
    '부방',
    '부스타',
    '뷰노',
    '뷰웍스',
    '브랜드엑스코퍼레이션',
    '브레인즈컴퍼니',
    '브리지텍',
    '브릿지바이오테라퓨틱스',
    '브이씨',
    '브이원텍',
    '브이티지엠피',
    '블루베리NFT',
    '블루콤',
    '블리츠웨이',
    '비나텍',
    '비덴트',
    '비디아이',
    '비보존헬스케어',
    '비비씨',
    '비씨엔씨',
    '비씨월드제약',
    '비아트론',
    '비에이치',
    '비에이치아이',
    '비엘',
    '비엘팜텍',
    '비엠티',
    '비올',
    '비즈니스온',
    '비츠로셀',
    '비츠로시스',
    '비츠로테크',
    '비케이홀딩스',
    '비투엔',
    '비트나인',
    '비트컴퓨터',
    '비플라이소프트',
    '비피도',
    '빅솔론',
    '빅텍',
    '빛샘전자',
    '사람인에이치알',
    '삼강엠앤티',
    '삼기',
    '삼륭물산',
    '삼목에스폼',
    '삼보모터스',
    '삼보산업',
    '삼보판지',
    '삼성머스트스팩5호',
    '삼성스팩4호',
    '삼성스팩6호',
    '삼아제약',
    '삼양옵틱스',
    '삼영에스앤씨',
    '삼영엠텍',
    '삼영이엔씨',
    '삼일',
    '삼일기업공사',
    '삼지전자',
    '삼진',
    '삼진엘앤디',
    '삼천당제약',
    '삼천리자전거',
    '삼표시멘트',
    '삼현철강',
    '삼화네트웍스',
    '상보',
    '상상인',
    '상상인인더스트리',
    '상상인제3호스팩',
    '상신이디피',
    '상신전자',
    '상아프론테크',
    '상지카일룸',
    '새로닉스',
    '새빗켐',
    '샘씨엔에스',
    '서남',
    '서린바이오',
    '서부T&D',
    '서산',
    '서암기계공업',
    '서연탑메탈',
    '서울리거',
    '서울바이오시스',
    '서울반도체',
    '서울옥션',
    '서울전자통신',
    '서울제약',
    '서원인텍',
    '서전기전',
    '서진시스템',
    '서진오토모티브',
    '서플러스글로벌',
    '서한',
    '서호전기',
    '서희건설',
    '석경에이티',
    '선광',
    '선익시스템',
    '선진뷰티사이언스',
    '성광벤드',
    '성도이엔지',
    '성우전자',
    '성우테크론',
    '성우하이텍',
    '성일하이텍',
    '성창오토텍',
    '성호전자',
    '세경하이테크',
    '세동',
    '세림B&G',
    '세명전기',
    '세보엠이씨',
    '세아메카닉스',
    '세운메디칼',
    '세원물산',
    '세종메디칼',
    '세종텔레콤',
    '세중',
    '세진티에스',
    '세코닉스',
    '세토피아',
    '세화피앤씨',
    '센코',
    '셀레믹스',
    '셀루메드',
    '셀리드',
    '셀리버리',
    '셀바스AI',
    '셀바스헬스케어',
    '셀트리온제약',
    '셀트리온헬스케어',
    '셀피글로벌',
    '소니드',
    '소룩스',
    '소마젠',
    '소프트센',
    '소프트센우',
    '소프트캠프',
    '손오공',
    '솔고바이오',
    '솔루에타',
    '솔본',
    '솔브레인',
    '솔브레인홀딩스',
    '솔트룩스',
    '솔트웨어',
    '쇼박스',
    '수산아이앤티',
    '수젠텍',
    '슈프리마',
    '슈프리마아이디',
    '슈프리마에이치큐',
    '슈피겐코리아',
    '스마트솔루션즈',
    '스맥',
    '스카이문스테크놀로지',
    '스코넥',
    '스킨앤스킨',
    '스타플렉스',
    '스톤브릿지벤처스',
    '스튜디오드래곤',
    '스튜디오산타클로스',
    '스페코',
    '승일',
    '시공테크',
    '시그네틱스',
    '시너지이노베이션',
    '시노펙스',
    '시스웍',
    '시큐브',
    '시티랩스',
    '신도기연',
    '신라섬유',
    '신라에스지',
    '신라젠',
    '신성델타테크',
    '신신제약',
    '신영스팩6호',
    '신영스팩7호',
    '신영스팩8호',
    '신원종합개발',
    '신일제약',
    '신진에스엠',
    '신테카바이오',
    '신한제10호스팩',
    '신한제6호스팩',
    '신한제7호스팩',
    '신한제8호스팩',
    '신한제9호스팩',
    '신화인터텍',
    '신화콘텍',
    '신흥에스이씨',
    '실리콘투',
    '심텍',
    '심텍홀딩스',
    '싸이맥스',
    '싸이버원',
    '싸이토젠',
    '쌍용정보통신',
    '썸에이지',
    '쎄노텍',
    '쎄니트',
    '쎄트렉아이',
    '쎌바이오텍',
    '쏠리드',
    '씨씨에스',
    '씨아이에스',
    '씨앤씨인터내셔널',
    '씨앤지하이테크',
    '씨앤투스성진',
    '씨에스베어링',
    '씨엔알리서치',
    '씨엔플러스',
    '씨유메디칼',
    '씨유테크',
    '씨이랩',
    '씨젠',
    '씨케이에이치',
    '씨큐브',
    '씨티씨바이오',
    '씨티케이',
    '아가방컴퍼니',
    '아나패스',
    '아난티',
    '아리온',
    '아모그린텍',
    '아모센스',
    '아모텍',
    '아미노로직스',
    '아미코젠',
    '아바코',
    '아바텍',
    '아비코전자',
    '아세아텍',
    '아셈스',
    '아스타',
    '아스트',
    '아스플로',
    '아시아경제',
    '아시아종묘',
    '아우딘퓨쳐스',
    '아이디스',
    '아이디스홀딩스',
    '아이디피',
    '아이비김영',
    '아이센스',
    '아이스크림에듀',
    '아이쓰리시스템',
    '아이씨디',
    '아이씨에이치',
    '아이앤씨',
    '아이에스이커머스',
    '아이에이',
    '아이엘사이언스',
    '아이엠',
    '아이오케이',
    '아이윈',
    '아이윈플러스',
    '아이즈비전',
    '아이진',
    '아이컴포넌트',
    '아이퀘스트',
    '아이큐어',
    '아이크래프트',
    '아이텍',
    '아이톡시',
    '아이티센',
    '아이티아이즈',
    '아이티엠반도체',
    '아이패밀리에스씨',
    '아주IB투자',
    '아즈텍WB',
    '아진산업',
    '아진엑스텍',
    '아톤',
    '아프리카TV',
    '안국약품',
    '안랩',
    '안트로젠',
    '알로이스',
    '알리코제약',
    '알비더블유',
    '알서포트',
    '알에스오토메이션',
    '알에프세미',
    '알에프텍',
    '알엔투테크놀로지',
    '알체라',
    '알테오젠',
    '알톤스포츠',
    '알티캐스트',
    '알파홀딩스',
    '알피바이오',
    '압타머사이언스',
    '압타바이오',
    '애니젠',
    '애니플러스',
    '애드바이오텍',
    '애머릿지',
    '액션스퀘어',
    '액토즈소프트',
    '액트로',
    '앤디포스',
    '앤씨앤',
    '앱코',
    '앱클론',
    '야스',
    '양지사',
    '어보브반도체',
    '어스앤에어로스페이스',
    '얼라인드',
    '에너토크',
    '에브리봇',
    '에스넷',
    '에스디생명공학',
    '에스디시스템',
    '에스맥',
    '에스씨디',
    '에스씨엠생명과학',
    '에스아이리소스',
    '에스앤더블류',
    '에스앤디',
    '에스앤에스텍',
    '에스에너지',
    '에스에스알',
    '에스에이엠티',
    '에스에이티',
    '에스에이티이엔지',
    '에스에프에이',
    '에스엔유',
    '에스엘바이오닉스',
    '에스엠',
    '에스엠코어',
    '에스와이',
    '에스제이그룹',
    '에스케이증권7호스팩',
    '에스코넥',
    '에스텍',
    '에스텍파마',
    '에스트래픽',
    '에스티아이',
    '에스티오',
    '에스티큐브',
    '에스티팜',
    '에스폴리텍',
    '에스퓨얼셀',
    '에스피시스템스',
    '에스피지',
    '에쎈테크',
    '에이디엠코리아',
    '에이디칩스',
    '에이디테크놀로지',
    '에이루트',
    '에이비엘바이오',
    '에이비온',
    '에이비프로바이오',
    '에이스침대',
    '에이스테크',
    '에이스토리',
    '에이에프더블류',
    '에이치시티',
    '에이치앤비디자인',
    '에이치엘사이언스',
    '에이치엠씨제4호스팩',
    '에이치엠씨제5호스팩',
    '에이치와이티씨',
    '에이치케이',
    '에이치피오',
    '에이테크솔루션',
    '에이텍',
    '에이텍티앤',
    '에이트원',
    '에이티넘인베스트',
    '에이티세미콘',
    '에이팩트',
    '에이프로',
    '에이프로젠H&G',
    '에이프릴바이오',
    '에이피티씨',
    '에치에프알',
    '에코마케팅',
    '에코바이오',
    '에코캡',
    '에코프로',
    '에코프로비엠',
    '에코프로에이치엔',
    '에코플라스틱',
    '에프알텍',
    '에프앤가이드',
    '에프앤리퍼블릭',
    '에프에스티',
    '에프엔씨엔터',
    '에프엔에스테크',
    '엑사이엔씨',
    '엑세스바이오',
    '엑셈',
    '엑스큐어',
    '엑시콘',
    '엔바이오니아',
    '엔브이에이치코리아',
    '엔비티',
    '엔시스',
    '엔시트론',
    '엔에스',
    '엔에스엔',
    '엔에이치스팩20호',
    '엔에이치스팩22호',
    '엔에이치스팩23호',
    '엔에프씨',
    '엔젠바이오',
    '엔지스테크널러지',
    '엔지켐생명과학',
    '엔케이맥스',
    '엔켐',
    '엔텔스',
    '엔투텍',
    '엔피',
    '엔피디',
    '엔피케이',
    '엘디티',
    '엘비루셈',
    '엘비세미콘',
    '엘아이에스',
    '엘앤씨바이오',
    '엘앤에프',
    '엘앤케이바이오',
    '엘엠에스',
    '엘오티베큠',
    '엘컴텍',
    '엘티씨',
    '엠게임',
    '엠로',
    '엠벤처투자',
    '엠브레인',
    '엠아이텍',
    '엠에스씨',
    '엠에스오토텍',
    '엠에프엠코리아',
    '엠케이전자',
    '엠투아이',
    '엠투엔',
    '엠플러스',
    '엠피대산',
    '연우',
    '연이비앤티',
    '영림원소프트랩',
    '영신금속',
    '영우디에스피',
    '영창케미칼',
    '영풍정밀',
    '영화테크',
    '예림당',
    '예선테크',
    '예스24',
    '예스티',
    '오가닉티코스메틱',
    '오공',
    '오디텍',
    '오로라',
    '오로스테크놀로지',
    '오르비텍',
    '오리엔탈정공',
    '오리엔트정공',
    '오리콤',
    '오비고',
    '오상자이엘',
    '오성첨단소재',
    '오션브릿지',
    '오스코텍',
    '오스테오닉',
    '오스템',
    '오스템임플란트',
    '오이솔루션',
    '오킨스전자',
    '오텍',
    '오토앤',
    '오파스넷',
    '오픈베이스',
    '오픈엣지테크놀로지',
    '오하임아이엔티',
    '올리패스',
    '올릭스',
    '옴니시스템',
    '옵투스제약',
    '옵트론텍',
    '옵티시스',
    '옵티팜',
    '와이더플래닛',
    '와이솔',
    '와이아이케이',
    '와이어블',
    '와이엔텍',
    '와이엠씨',
    '와이엠텍',
    '와이엠티',
    '와이오엠',
    '와이제이엠게임즈',
    '와이즈버즈',
    '와이지-원',
    '와이지엔터테인먼트',
    '와이팜',
    '와토스코리아',
    '우리기술',
    '우리기술투자',
    '우리넷',
    '우리로',
    '우리바이오',
    '우리산업',
    '우리산업홀딩스',
    '우리손에프앤지',
    '우리엔터프라이즈',
    '우리이앤엘',
    '우림피티에스',
    '우수AMS',
    '우양',
    '우원개발',
    '우정바이오',
    '우주일렉트로',
    '우진비앤지',
    '원바이오젠',
    '원방테크',
    '원익',
    '원익IPS',
    '원익QnC',
    '원익머트리얼즈',
    '원익큐브',
    '원익피앤이',
    '원익홀딩스',
    '원일특강',
    '원준',
    '원텍',
    '원티드랩',
    '원풍',
    '원풍물산',
    '월덱스',
    '웨이버스',
    '웨이브일렉트로',
    '웰크론',
    '웰크론한텍',
    '웹스',
    '웹젠',
    '웹케시',
    '위니아',
    '위니아에이드',
    '위닉스',
    '위더스제약',
    '위드텍',
    '위메이드',
    '위메이드맥스',
    '위메이드플레이',
    '위세아이텍',
    '위즈코프',
    '위지윅스튜디오',
    '위지트',
    '윈스',
    '윈텍',
    '윈팩',
    '윈하이텍',
    '윌링스',
    '윙입푸드',
    '유네코',
    '유니셈',
    '유니슨',
    '유니온커뮤니티',
    '유니크',
    '유니테스트',
    '유니테크노',
    '유니트론텍',
    '유라테크',
    '유바이오로직스',
    '유비벨록스',
    '유비케어',
    '유비쿼스',
    '유비쿼스홀딩스',
    '유성티엔에스',
    '유신',
    '유아이디',
    '유아이엘',
    '유안타제7호스팩',
    '유안타제8호스팩',
    '유안타제9호스팩',
    '유에스티',
    '유일로보틱스',
    '유일에너테크',
    '유진기업',
    '유진로봇',
    '유진스팩6호',
    '유진스팩7호',
    '유진스팩8호',
    '유진테크',
    '유테크',
    '유티아이',
    '유틸렉스',
    '육일씨엔에쓰',
    '율호',
    '이건홀딩스',
    '이글루',
    '이글벳',
    '이노뎁',
    '이노메트리',
    '이노시스',
    '이노와이어리스',
    '이노인스트루먼트',
    '이노테라피',
    '이녹스',
    '이녹스첨단소재',
    '이니텍',
    '이라이콤',
    '이랜시스',
    '이랜텍',
    '이루다',
    '이루온',
    '이미지스',
    '이베스트스팩5호',
    '이베스트투자증권',
    '이브이첨단소재',
    '이삭엔지니어링',
    '이상네트웍스',
    '이수앱지스',
    '이스트소프트',
    '이스트아시아홀딩스',
    '이씨에스',
    '이엔드디',
    '이엔에프테크놀로지',
    '이엔코퍼레이션',
    '이엘피',
    '이엠넷',
    '이엠앤아이',
    '이엠코리아',
    '이엠텍',
    '이오테크닉스',
    '이오플로우',
    '이원컴포텍',
    '이즈미디어',
    '이지바이오',
    '이지케어텍',
    '이지트로닉스',
    '이지홀딩스',
    '이큐셀',
    '이크레더블',
    '이트론',
    '이퓨쳐',
    '이화공영',
    '이화전기',
    '인바디',
    '인바이오',
    '인베니아',
    '인산가',
    '인선이엔티',
    '인성정보',
    '인지디스플레',
    '인카금융서비스',
    '인콘',
    '인크로스',
    '인탑스',
    '인터로조',
    '인터엠',
    '인터플렉스',
    '인텍플러스',
    '인텔리안테크',
    '인트로메딕',
    '인트론바이오',
    '인포마크',
    '인포바인',
    '인포뱅크',
    '인피니트헬스케어',
    '인화정공',
    '일승',
    '일신바이오',
    '일야',
    '일지테크',
    '일진파워',
    '잉글우드랩',
    '잉크테크',
    '자비스',
    '자연과환경',
    '자이글',
    '자이언트스텝',
    '장원테크',
    '재영솔루텍',
    '전진바이오팜',
    '정다운',
    '정상제이엘에스',
    '정원엔시스',
    '제너셈',
    '제넥신',
    '제넨바이오',
    '제노레이',
    '제노코',
    '제노포커스',
    '제놀루션',
    '제닉',
    '제로투세븐',
    '제룡산업',
    '제룡전기',
    '제우스',
    '제이브이엠',
    '제이스코홀딩스',
    '제이스텍',
    '제이시스메디칼',
    '제이씨케미칼',
    '제이씨현시스템',
    '제이앤티씨',
    '제이에스티나',
    '제이엔케이히터',
    '제이엘케이',
    '제이엠아이',
    '제이엠티',
    '제이웨이',
    '제이티',
    '제일바이오',
    '제일전기공업',
    '제일테크노스',
    '제주맥주',
    '제주반도체',
    '제테마',
    '젠큐릭스',
    '젬백스',
    '젬백스링크',
    '조광ILI',
    '조아제약',
    '조이시티',
    '좋은사람들',
    '주성엔지니어링',
    '줌인터넷',
    '중앙디앤엠',
    '중앙백신',
    '중앙에너비스',
    '지나인제약',
    '지노믹트리',
    '지놈앤컴퍼니',
    '지니너스',
    '지니뮤직',
    '지니언스',
    '지니틱스',
    '지더블유바이텍',
    '지란지교시큐리티',
    '지씨셀',
    '지아이텍',
    '지앤비에스엔지니어링',
    '지어소프트',
    '지에스이',
    '지엔씨에너지',
    '지엔원에너지',
    '지엔코',
    '지엘팜텍',
    '지오엘리먼트',
    '지투파워',
    '지티지웰니스',
    '진로발효',
    '진매트릭스',
    '진바이오텍',
    '진성티이씨',
    '진시스템',
    '진양제약',
    '차바이오텍',
    '차백신연구소',
    '참존글로벌',
    '참좋은여행',
    '창해에탄올',
    '천보',
    '청담글로벌',
    '체리부로',
    '초록뱀미디어',
    '초록뱀이앤엠',
    '초록뱀컴퍼니',
    '칩스앤미디어',
    '카나리아바이오',
    '카스',
    '카이노스메드',
    '카카오게임즈',
    '카페24',
    '캐리소프트',
    '캐스텍코리아',
    '캠시스',
    '커머스마이너',
    '컬러레이',
    '컴투스',
    '컴투스홀딩스',
    '컴퍼니케이',
    '케스피온',
    '케어랩스',
    '케어젠',
    '케이디켐',
    '케이비제20호스팩',
    '케이비제21호스팩',
    '케이비제22호스팩',
    '케이사인',
    '케이씨에스',
    '케이씨티',
    '케이씨피드',
    '케이아이엔엑스',
    '케이에스피',
    '케이엔더블유',
    '케이엔제이',
    '케이엘넷',
    '케이엠',
    '케이엠더블유',
    '케이엠제약',
    '케이옥션',
    '케이티알파',
    '케이프',
    '케이프이에스제4호',
    '케이피에스',
    '케이피에프',
    '케이피엠테크',
    '케이피티유',
    '케일럼',
    '켄코아에어로스페이스',
    '켐온',
    '켐트로닉스',
    '켐트로스',
    '코나아이',
    '코난테크놀로지',
    '코닉오토메이션',
    '코다코',
    '코데즈컴바인',
    '코드네이처',
    '코디',
    '코디엠',
    '코렌텍',
    '코리아나',
    '코리아센터',
    '코리아에셋투자증권',
    '코리아에스이',
    '코리아에프티',
    '코맥스',
    '코메론',
    '코미코',
    '코미팜',
    '코세스',
    '코센',
    '코스나인',
    '코스맥스엔비티',
    '코스메카코리아',
    '코스온',
    '코아스템',
    '코아시아',
    '코아시아옵틱스',
    '코엔텍',
    '코오롱생명과학',
    '코오롱티슈진',
    '코원플레이',
    '코웰패션',
    '코위버',
    '코윈테크',
    '코이즈',
    '코콤',
    '코텍',
    '코퍼스코리아',
    '코프라',
    '콜마비앤에이치',
    '쿠콘',
    '퀀타매트릭스',
    '큐라클',
    '큐렉소',
    '큐로컴',
    '큐로홀딩스',
    '큐리언트',
    '큐브엔터',
    '큐에스아이',
    '큐캐피탈',
    '크레버스',
    '크로바하이텍',
    '크루셜텍',
    '크리스에프앤씨',
    '크리스탈신소재',
    '크리스탈지노믹스',
    '크린앤사이언스',
    '클라우드에어',
    '클래시스',
    '클리노믹스',
    '클리오',
    '키네마스터',
    '키움제6호스팩',
    '키움제7호스팩',
    '키이스트',
    '타이거일렉',
    '탑엔지니어링',
    '탑코미디어',
    '태광',
    '태성',
    '태양',
    '태웅',
    '태웅로직스',
    '테고사이언스',
    '테라사이언스',
    '테라셈',
    '테라젠이텍스',
    '테스',
    '테크윙',
    '텔레칩스',
    '텔레필드',
    '텔콘RF제약',
    '토박스코리아',
    '토비스',
    '토탈소프트',
    '톱텍',
    '투비소프트',
    '툴젠',
    '트루윈',
    '트윔',
    '특수건설',
    '티라유텍',
    '티로보틱스',
    '티비씨',
    '티사이언티픽',
    '티씨케이',
    '티앤알바이오팹',
    '티앤엘',
    '티에스넥스젠',
    '티에스아이',
    '티에스이',
    '티엘비',
    '티엘아이',
    '티움바이오',
    '티케이케미칼',
    '티플랙스',
    '티피씨글로벌',
    '팅크웨어',
    '파나진',
    '파나케이아',
    '파라다이스',
    '파라텍',
    '파루',
    '파마리서치',
    '파멥신',
    '파버나인',
    '파세코',
    '파수',
    '파워넷',
    '파워로직스',
    '파이버프로',
    '파이오링크',
    '파인디앤씨',
    '파인디지털',
    '파인테크닉스',
    '파인텍',
    '파커스',
    '파크시스템스',
    '파트론',
    '판타지오',
    '팜스빌',
    '팜스토리',
    '패션플랫폼',
    '팬스타엔터프라이즈',
    '팬엔터테인먼트',
    '팬젠',
    '펄어비스',
    '펌텍코리아',
    '펩트론',
    '포메탈',
    '포바이포',
    '포스코ICT',
    '포스코엠텍',
    '포시에스',
    '포인트모바일',
    '포인트엔지니어링',
    '포커스에이치엔에스',
    '폴라리스세원',
    '폴라리스오피스',
    '폴라리스우노',
    '푸드나무',
    '푸드웰',
    '푸른기술',
    '푸른저축은행',
    '풍강',
    '풍국주정',
    '풍원정밀',
    '퓨런티어',
    '퓨쳐켐',
    '프럼파스트',
    '프레스티지바이오로직스',
    '프로스테믹스',
    '프로이천',
    '프로텍',
    '프롬바이오',
    '프리시젼바이오',
    '프리엠스',
    '플래스크',
    '플래티어',
    '플랜티넷',
    '플레이디',
    '플레이위드',
    '플리토',
    '피델릭스',
    '피씨디렉트',
    '피씨엘',
    '피앤씨테크',
    '피에스엠씨',
    '피에스케이',
    '피에스케이홀딩스',
    '피에스텍',
    '피에이치씨',
    '피에이치에이',
    '피엔에이치테크',
    '피엔케이피부임상연구센타',
    '피엔티',
    '피제이메탈',
    '피제이전자',
    '피코그램',
    '피플바이오',
    '피피아이',
    '픽셀플러스',
    '필옵틱스',
    '핌스',
    '핑거',
    '하나금융15호스팩',
    '하나금융16호스팩',
    '하나금융19호스팩',
    '하나금융20호스팩',
    '하나금융21호스팩',
    '하나금융22호스팩',
    '하나금융23호스팩',
    '하나금융24호스팩',
    '하나기술',
    '하나마이크론',
    '하나머스트7호스팩',
    '하나머티리얼즈',
    '하림',
    '하림지주',
    '하이딥',
    '하이로닉',
    '하이록코리아',
    '하이비젼시스템',
    '하이소닉',
    '하이제6호스팩',
    '하이제7호스팩',
    '하이즈항공',
    '하이텍팜',
    '하인크코리아',
    '하츠',
    '한국가구',
    '한국경제TV',
    '한국기업평가',
    '한국맥널티',
    '한국비엔씨',
    '한국선재',
    '한국알콜',
    '한국유니온제약',
    '한국전자금융',
    '한국전자인증',
    '한국정밀기계',
    '한국정보공학',
    '한국정보인증',
    '한국정보통신',
    '한국제10호스팩',
    '한국캐피탈',
    '한국컴퓨터',
    '한국코퍼레이션',
    '한국큐빅',
    '한국테크놀로지',
    '한국파마',
    '한국팩키지',
    '한글과컴퓨터',
    '한네트',
    '한독크린텍',
    '한라IMS',
    '한빛소프트',
    '한솔아이원스',
    '한솔인티큐브',
    '한송네오텍',
    '한스바이오메드',
    '한양디지텍',
    '한양이엔지',
    '한일네트웍스',
    '한일단조',
    '한일사료',
    '한일진공',
    '한일화학',
    '한창바이오텍',
    '한창산업',
    '한컴위드',
    '한탑',
    '한화플러스제2호스팩',
    '한화플러스제3호스팩',
    '해성산업',
    '해성산업1우',
    '해성옵틱스',
    '해성티피씨',
    '핸디소프트',
    '헝셩그룹',
    '헥토이노베이션',
    '헥토파이낸셜',
    '헬릭스미스',
    '현대공업',
    '현대무벡스',
    '현대바이오',
    '현대바이오랜드',
    '현대에버다임',
    '현대에이치티',
    '현대이지웰',
    '현우산업',
    '협진',
    '형지I&C',
    '홈센타홀딩스',
    '홈캐스트',
    '화성밸브',
    '화신정공',
    '화일약품',
    '효성오앤비',
    '휴네시온',
    '휴럼',
    '휴림네트웍스',
    '휴림로봇',
    '휴마시스',
    '휴맥스',
    '휴맥스홀딩스',
    '휴먼엔',
    '휴메딕스',
    '휴비츠',
    '휴센텍',
    '휴엠앤씨',
    '휴온스',
    '휴온스글로벌',
    '휴젤',
    '흥구석유',
    '흥국',
    '흥국에프엔비',
    '희림',
    '힘스',
];
export default stockNames;
