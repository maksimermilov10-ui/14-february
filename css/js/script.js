// Текст, который будет печататься
const textToType = "...быть рядом, даже когда всё идёт кувырком.";
const textElement = document.getElementById('text');
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let index = 0;
let isPlaying = false;

// Функция печатной машинки
function typeWriter() {
    if (index < textToType.length) {
        textElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 80);
    } else {
        // Уменьшаем прозрачность курсора после окончания печати
        setTimeout(() => {
            document.querySelector('.cursor').style.opacity = '0.3';
        }, 500);
    }
}

// Запуск печати через 3 секунды после загрузки
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1500);
});

// Логика кнопки музыки
musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        isPlaying = true;
        musicBtn.textContent = "🔇 Выключить музыку";
        musicBtn.style.background = "rgba(255, 105, 180, 0.4)";
    } else {
        bgMusic.pause();
        isPlaying = false;
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
