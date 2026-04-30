document.addEventListener('mousemove', e => {
  const g = document.getElementById('glow');
  if (g) {
    g.style.left = e.clientX + 'px';
    g.style.top = e.clientY + 'px';
  }
});

const courseDesc = {
  "엔지니어링 기초": "로봇 공학의 기본 원리와 수학적/물리적 기초 지식을 다집니다.",
  "3차원CAD": "Fusion 360 등을 활용해 입체 도면 및 구조체 모델링 역량을 기릅니다.",
  "컴퓨터와챗GPT활용": "챗GPT와 다양한 AI 툴을 활용해 실무 효율을 높이는 방안을 학습합니다.",
  "로봇기초실습": "단순한 기구학 관절과 메커니즘을 조립하며 로봇 하드웨어 감각을 익힙니다.",
  "전공영어": "영어 도면 및 기술 문서를 읽고 해석하는 기초 어학 능력을 배양합니다.",
  "기계제도": "도면 해독과 2D/3D 기계 부품 설계 규격을 체계적으로 학습합니다.",
  "로봇공학기초": "로봇 센서, 구동기능 등 시스템을 구성하는 전반적인 핵심 요소를 배웁니다.",
  "CAD기초": "오토캐드 등 기본 캐드 소프트웨어를 익혀 평면적인 제품 도면을 설계합니다.",
  "전기회로": "옴의 법칙 등 기본 전기회로망 이론 및 결선 실습을 진행합니다.",
  "전자회로": "트랜지스터, 다이오드 등 반도체 소자를 활용한 아날로그 회로의 동작을 배웁니다.",
  "디지털논리회로": "논리 게이트의 조합 및 순차 논리의 구조로 디지털 전자 기기의 원리를 파악합니다.",
  "파이썬프로그래밍": "파이썬 언어의 기초 문법을 습득해 향후 AI 시스템의 베이스라인 역량을 기릅니다.",
  "인공지능개론": "기계학습 및 딥러닝과 같은 인공지능 분야의 작동 방식 및 개념을 다룹니다.",
  "마이크로컨트롤러": "마이컴 보드를 이용해 C언어로 칩과 센서의 데이터를 다루는 것을 배웁니다.",
  "PLC프로그래밍": "현장 자동화를 이끄는 설비 PLC 기반 시퀀스 제어 프로그램 기초를 다룹니다.",
  "로봇오퍼레이션": "실제 상용 매니퓰레이터 로봇의 티칭 기법과 안전한 조작 기술을 체득합니다.",
  "아두이노프로그래밍": "접근성 높은 아두이노 보드로 센서 입출력 및 모터 제어를 실습합니다.",
  "윈도우프로그래밍": "C# 기반으로 PC에서 활용 가능한 윈도우용 응용 프로그램(GUI)을 구축합니다.",
  "웹프로그래밍": "HTML, CSS, JS를 바탕으로 웹 브라우저상에서의 정보 전달과 화면 처리를 배웁니다.",
  "ROS프로그래밍기초": "현대 로봇 개발의 표준 플랫폼인 ROS의 패키지/노드 통신 개념을 배웁니다.",
  "PLC제어": "공압/유압 시스템을 연계하며 조금 더 복잡한 PLC 모듈 확장 제어를 실습합니다.",
  "PC기반제어": "산업용 통신 및 데이터 수집기를 활용, PC 응용 프로그램 단위에서의 제어를 학습합니다.",
  "인공지능응용": "컴퓨터 비전을 연동한 영상 처리 등 AI의 심화된 모델 적용 및 결과를 분석합니다.",
  "펌웨어프로그래밍": "각종 통신 및 인터럽트를 제어하는 심화 임베디드 펌웨어 구조를 프로그래밍합니다.",
  "모바일앱프로그래밍": "네트워크로 디바이스를 원격 확인·제어하는 안드로이드 기반 앱을 제작합니다.",
  "자동화통신": "시리얼, 통신 규약 등 기기 간 신뢰성 높은 산업용 하드웨어 통신을 구축합니다.",
  "CAD 응용": "파라메트릭 도면 설계와 조립 가상화를 통해 최적의 기계 모델을 도출합니다.",
  "ROS프로그래밍응용": "라이다 및 카메라 센서 구동, 주행 및 매핑 내비게이션 알고리즘을 실습합니다.",
  "로봇공학응용": "역기구학과 운동 궤적 궤환 계획 등 로봇 팔의 제어 수학을 심도 있게 다룹니다.",
  "로봇센서": "비전, 접촉, 위치 스캐너 등 로봇 주행 및 동작에 필요한 핵심 센서를 이해합니다.",
  "모터제어": "서보, 스텝, BLDC 등 다양한 목적의 액추에이터의 정밀한 구동 기법을 체득합니다.",
  "학년별 캡스톤 디자인": "기획안 구상부터 하드웨어 및 소프트웨어 통합 디버깅까지 팀 단위 프로젝트를 진행합니다.",
  "현장실습": "실제 개발 및 자동화 산업 현장의 체계화된 과정과 문제 해결 능력을 온몸으로 부딪혀 배웁니다.",
  "취업 및 창업실무": "적성에 맞는 분야의 이력서 작성, 실무 인터뷰, 산업 동향을 파악하여 진로를 준비합니다.",
  "로봇 소프트웨어 전공": "마지막으로 로봇 전공 지식을 하나로 아우르며, 종합 소프트웨어/하드웨어 시스템을 다집니다."
};

function showCourseInfo(el) {
  const name = el.textContent.replace(' ✓', '').trim();
  const desc = courseDesc[name] || "상세 설명을 준비 중입니다.";
  const modalTitle = document.getElementById('course-modal-title');
  const modalDesc = document.getElementById('course-modal-desc');
  const modal = document.getElementById('course-modal');
  
  if (modalTitle && modalDesc && modal) {
    modalTitle.textContent = name;
    modalDesc.textContent = desc;
    modal.classList.add('open');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', function() { showCourseInfo(this); });
  });
  loadPosts();
  renderContacts();
  animateCounters();
  initExtras();
});

const phrases = ['로봇소프트웨어 전공생입니다.', '미래를 설계하는 엔지니어입니다.', '끊임없이 성장하는 중입니다.'];
let pi = 0, ci = 0, isDeleting = false;
const typedEl = document.getElementById('typed-title');

function type() {
  if (!typedEl) return;
  const cur = phrases[pi];
  typedEl.textContent = isDeleting ? cur.substring(0, ci--) : cur.substring(0, ci++);
  let d = isDeleting ? 50 : 80;
  if (!isDeleting && ci === cur.length + 1) {
    d = 2200;
    isDeleting = true;
  } else if (isDeleting && ci < 0) {
    isDeleting = false;
    pi = (pi + 1) % phrases.length;
    ci = 0;
    d = 400;
  }
  setTimeout(type, d);
}
setTimeout(type, 900);

function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const t = +el.dataset.target;
    let c = 0;
    const s = Math.ceil(t / 40);
    const id = setInterval(() => {
      c = Math.min(c + s, t);
      el.textContent = c;
      if (c >= t) clearInterval(id);
    }, 40);
  });
}

// 스크롤 시 자동 네비게이션 활성화
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section').forEach(sec => {
    if (window.scrollY >= (sec.offsetTop - 300)) current = sec.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a.nav-item').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// --- Firebase / 데이터 관리 로직 ---
// [주의] 아래 firebaseConfig 정보를 본인의 파이어베이스 설정값으로 교체해 주세요.
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "kimjeonggyun-98cf2.firebaseapp.com",
  databaseURL: "https://kimjeonggyun-98cf2-default-rtdb.firebaseio.com",
  projectId: "kimjeonggyun-98cf2",
  storageBucket: "kimjeonggyun-98cf2.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};

let db = null;
let useFirebase = false;

// 파이어베이스 초기화 시도
try {
  if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
    firebase.initializeApp(firebaseConfig);
    db = firebase.database(); // Realtime Database 사용
    useFirebase = true;
    console.log("Firebase Realtime Database initialized.");
  }
} catch (e) {
  console.warn("Firebase initialization failed or config missing. Using LocalStorage fallback.", e);
}

let posts = [];
let pId = Date.now(); 

function loadPosts() {
  if (useFirebase) {
    // Realtime Database 리스너 연결 (실시간 업데이트)
    db.ref("자유게시판").on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // 객체 형태의 데이터를 배열로 변환
        posts = Object.keys(data).map(key => ({ id: key, ...data[key] })).reverse();
      } else {
        posts = [];
      }
      renderBoard();
    });
  } else {
    // LocalStorage 백업 및 탭 간 동기화
    const saved = localStorage.getItem('portfolio_posts');
    posts = saved ? JSON.parse(saved) : [
      { id: 1, title: '정균아 사이트 진짜 멋지다!', body: '포트폴리오 너무 깔끔하게 잘 만들었네. 편입도 꼭 성공할 거야 화이팅!', author: '동기', contact: '', date: now() },
      { id: 2, title: '한사랑학교 복무 응원합니다 🫡', body: '10월 훈련소 가시는군요. 다치지 않고 건강하게 잘 다녀오세요!', author: '익명', contact: '', date: now() },
      { id: 3, title: '쇼츠 공모전 영상 너무 재밌어요 ㅋㅋㅋ', body: '최우수상 받으실 만 합니다. 기획이랑 아이디어가 너무 좋네요👍', author: '방문자', contact: 'guest@example.com', date: now() }
    ];
    renderBoard();
  }
}

// 다른 탭에서 글을 썼을 때 현재 탭도 실시간 업데이트 (LocalStorage 사용 시)
window.addEventListener('storage', (e) => {
  if (!useFirebase && e.key === 'portfolio_posts') {
    posts = JSON.parse(e.newValue);
    renderBoard();
  }
});

function renderBoard() {
  const list = document.getElementById('board-list');
  const countEl = document.getElementById('post-count');
  if (countEl) countEl.textContent = posts.length;
  if (!list) return;
  if (!posts.length) {
    list.innerHTML = '<div class="empty-state"><span class="empty-icon">📭</span>아직 작성된 글이 없습니다.<br>첫 번째 글을 남겨보세요!</div>';
    return;
  }
  list.innerHTML = posts.map((p, i) => `
    <div class="board-item" style="animation-delay:${i * 0.06}s">
      <div class="board-main">
        <div class="num">#${String(p.id).padStart(3, '0')}</div>
        <div class="title">${esc(p.title)}</div>
        <div class="preview">${esc(p.body.length > 80 ? p.body.slice(0, 80) + '…' : p.body)}</div>
        <div class="meta">${esc(p.author)}${p.contact ? ' · ' + esc(p.contact) : ''} · ${p.date}</div>
      </div>
      <div class="board-actions">
        <button class="btn-edit" onclick="openEditModal('${p.id}','board')">수정</button>
        <button class="btn-del" onclick="openDeleteConfirm('${p.id}','board')">삭제</button>
      </div>
    </div>`).join('');
}

let contacts = [], cId = 1;

function renderContacts() {
  const list = document.getElementById('contact-list');
  const countEl = document.getElementById('contact-count');
  if (countEl) countEl.textContent = contacts.length;
  if (!list) return;
  if (!contacts.length) {
    list.innerHTML = '<div class="empty-state"><span class="empty-icon">📩</span>아직 문의 내역이 없습니다.</div>';
    return;
  }
  list.innerHTML = contacts.map((c, i) => `
    <div class="board-item" style="animation-delay:${i * 0.06}s">
      <div class="board-main">
        <div class="num">[${esc(c.type || '기타')}]</div>
        <div class="title">${esc(c.name)}님의 문의</div>
        <div class="preview">${esc(c.msg.length > 80 ? c.msg.slice(0, 80) + '…' : c.msg)}</div>
        <div class="meta">${c.contact ? esc(c.contact) + ' · ' : ''}${c.date}</div>
      </div>
      <div class="board-actions">
        <button class="btn-edit" onclick="openEditModal(${c.id},'contact')">수정</button>
        <button class="btn-del" onclick="openDeleteConfirm(${c.id},'contact')">삭제</button>
      </div>
    </div>`).join('');
}

window.openWriteModal = function() {
  ['modal-post-title', 'modal-post-body', 'modal-post-author', 'modal-post-contact'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const modal = document.getElementById('write-modal');
  if (modal) modal.classList.add('open');
};

window.closeModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
};

window.submitPost = function() {
  const t = document.getElementById('modal-post-title').value.trim();
  const b = document.getElementById('modal-post-body').value.trim();
  const a = document.getElementById('modal-post-author').value.trim() || '익명';
  const c = document.getElementById('modal-post-contact').value.trim();
  if (!t || !b) {
    alert('제목과 내용을 입력해 주세요.');
    return;
  }
  const newPost = { title: t, body: b, author: a, contact: c, date: now() };

  if (useFirebase) {
    db.ref("자유게시판").push(newPost);
  } else {
    newPost.id = Date.now();
    posts.unshift(newPost);
    localStorage.setItem('portfolio_posts', JSON.stringify(posts));
    renderBoard();
  }
  closeModal('write-modal');
};

let deleteId = null, deleteType = 'board';
window.openDeleteConfirm = function(id, type) {
  deleteId = id;
  deleteType = type;
  const modal = document.getElementById('confirm-modal');
  if (modal) modal.classList.add('open');
};

window.confirmDelete = function() {
  if (deleteType === 'board') {
    if (useFirebase) {
      db.ref("자유게시판").child(deleteId).remove();
    } else {
      posts = posts.filter(p => p.id !== deleteId);
      localStorage.setItem('portfolio_posts', JSON.stringify(posts));
      renderBoard();
    }
  } else {
    contacts = contacts.filter(c => c.id !== deleteId);
    renderContacts();
  }
  closeModal('confirm-modal');
};

let editType = 'board';
window.openEditModal = function(id, type) {
  editType = type;
  const items = type === 'board' ? posts : contacts;
  const item = items.find(x => x.id === id);
  if (!item) return;
  document.getElementById('edit-post-id').value = id;
  document.getElementById('edit-post-title').value = type === 'board' ? item.title : item.name;
  document.getElementById('edit-post-body').value = type === 'board' ? item.body : item.msg;
  document.getElementById('edit-post-contact').value = item.contact || '';
  const modal = document.getElementById('edit-modal');
  if (modal) modal.classList.add('open');
};

window.saveEdit = function() {
  const id = +document.getElementById('edit-post-id').value;
  const t = document.getElementById('edit-post-title').value.trim();
  const b = document.getElementById('edit-post-body').value.trim();
  const c = document.getElementById('edit-post-contact').value.trim();
  if (!t || !b) {
    alert('내용을 입력해 주세요.');
    return;
  }
  if (editType === 'board') {
    const p = posts.find(x => x.id === id);
    if (p) {
      p.title = t;
      p.body = b;
      p.contact = c;
    }
    renderBoard();
  } else {
    const p = contacts.find(x => x.id === id);
    if (p) {
      p.name = t;
      p.msg = b;
      p.contact = c;
    }
    renderContacts();
  }
  closeModal('edit-modal');
};

window.submitContact = function() {
  const name = document.getElementById('cf-name').value.trim();
  const type = document.getElementById('cf-type').value;
  const msg = document.getElementById('cf-msg').value.trim();
  const contact = document.getElementById('cf-contact').value.trim();
  if (!name || !msg) {
    alert('이름과 메시지를 입력해 주세요.');
    return;
  }
  contacts.unshift({ id: cId++, name, type, msg, contact, date: now() });
  renderContacts();
  document.getElementById('cf-form').style.display = 'none';
  document.getElementById('cf-sent').style.display = 'block';
  setTimeout(() => {
    document.getElementById('cf-form').style.display = 'block';
    document.getElementById('cf-sent').style.display = 'none';
    ['cf-name', 'cf-contact', 'cf-msg'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    document.getElementById('cf-type').value = '';
  }, 3000);
};

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function now() {
  const d = new Date();
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

document.querySelectorAll('.modal-overlay').forEach(o => o.addEventListener('click', e => {
  if (e.target === o) o.classList.remove('open');
}));

// 다크/라이트 모드 토글
let isLight = false;
window.toggleTheme = function() {
  isLight = !isLight;
  document.body.classList.toggle('light-mode', isLight);
  const btn = document.getElementById('theme-btn');
  if (btn) btn.innerHTML = isLight ? '<span>다크 모드</span> <span>🌙</span>' : '<span>밝은 모드</span> <span>☀️</span>';
};

// 명언 및 방문자 카운터 초기화
function initExtras() {
  const quotes = [
    "도전은 인생을 흥미롭게 만들고, 극복은 인생을 의미 있게 한다.",
    "천재는 1%의 영감과 99%의 노력으로 이루어진다.",
    "배움에는 끝이 없다. 호기심을 유지하라.",
    "미래의 가장 큰 위험은 위험을 감수하지 않는 것이다.",
    "시작이 반이다. 지금 바로 행동하라.",
    "실패는 성공의 어머니이다. 두려워하지 마라.",
    "성공은 끝이 아니며 실패는 치명적이지 않다. 중요한 것은 계속할 수 있는 용기다."
  ];
  const qEl = document.getElementById('random-quote');
  if (qEl) qEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];

  let visits = parseInt(localStorage.getItem('realVisitorCount') || '0');
  visits++;
  localStorage.setItem('realVisitorCount', visits);
  const vEl = document.getElementById('visitor-count');
  if (vEl) vEl.textContent = visits.toLocaleString();
}
