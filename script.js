document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slideshow .slide');
    let currentSlide = 0;
    const intervalTime = 5000; // 5秒ごとにスライド (4〜6秒の指定の中間)

    function nextSlide() {
        if (slides.length === 0) return;
        
        // 現在のスライドをフェードアウト
        slides[currentSlide].classList.remove('active');
        
        // 次のスライドへインデックスを更新
        currentSlide = (currentSlide + 1) % slides.length;
        
        // 次のスライドをフェードイン
        slides[currentSlide].classList.add('active');
    }

    // スライドショーの開始
    if(slides.length > 1) {
        setInterval(nextSlide, intervalTime);
    }
});
