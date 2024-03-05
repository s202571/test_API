const closeBtn = document.querySelector('.closeBtn');
const chkBox = document.querySelector('#chk');

closeBtn.addEventListener('click', () => {
    // 현재 날짜를 가져옵니다.
    const now = new Date();
    // 현재 날짜에 3일을 더합니다.
    const expiresDate = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);

    if (chkBox.checked) {
        // 쿠키 이름과 값을 설정합니다. 여기서 'closed'는 쿠키의 이름입니다.
        document.cookie = 'closed=true; expires=' + expiresDate.toUTCString() + '; path=/';
    }

    // 창을 닫습니다.
    document.getElementById('notice_wrap').style.display = 'none';
});

// 페이지를 로드할 때 쿠키를 확인하여 창을 닫을지 여부를 결정합니다.
window.addEventListener('load', () => {
    if (document.cookie.includes('closed=true')) {
        document.getElementById('notice_wrap').style.display = 'none';
    }
});