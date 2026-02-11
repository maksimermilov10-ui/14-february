// Текст, который будет печататься
const phrases = [
    "...быть рядом, даже когда всё идёт кувырком.",
    "Я тебя люблю ♥"
];

const textElement = document.getElementById('text');
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

let phraseIndex = 0;
let charIndex = 0;

function typeWriter() {
    const currentText = phrases[phraseIndex];

    if (charIndex < currentText.length) {
        textElement.innerHTML += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 80);
    } else {
        // Пауза после фразы
        phraseIndex++;
        if (phraseIndex < phrases.length) {
            setTimeout(() => {
                textElement.innerHTML += "<br>"; // перенос строки между фразами
                charIndex = 0;
                typeWriter();
            }, 800);
        } else {
            // После последней фразы слегка приглушаем курсор
            setTimeout(() => {
                document.querySelector('.cursor').style.opacity = '0.3';
            }, 500);
        }
    }
}

// Запуск печати через 1.5 секунды после загрузки
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1500);
});

// Логика кнопки музыки
musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = "🔇 Выключить музыку";
        musicBtn.style.background = "rgba(255, 105, 180, 0.4)";
    } else {
        bgMusic.pause();
        musicBtn.textContent = "🎵 Включить музыку";
        musicBtn.style.background = "rgba(255, 255, 255, 0.15)";
    }
});

// Пересчёт видео при изменении размера окна
window.addEventListener('resize', () => {
    const video = document.getElementById('bgVideo');
    const container = document.querySelector('.video-background');
    if (container) {
        video.style.width = container.offsetWidth + 'px';
        video.style.height = container.offsetHeight + 'px';
    }
});
