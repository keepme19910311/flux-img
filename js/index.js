document.addEventListener('DOMContentLoaded', function() {
    const loaderContainer = document.querySelector('.loader-container');
    const content = document.querySelector('.content');
    const startTime = Date.now();
    const minimumLoadTime = 1000; // 最少显示1秒

    window.addEventListener('load', function() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(minimumLoadTime - elapsedTime, 0);

        setTimeout(() => {
            loaderContainer.style.opacity = '0';
            loaderContainer.style.transition = 'opacity 0.5s ease';
            content.classList.add('visible');
            
            setTimeout(() => {
                loaderContainer.style.display = 'none';
            }, 500);
        }, remainingTime);
    });

    // 粒子效果
    function createParticles() {
        const container = document.getElementById('particleContainer');
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // 随机大小
            const size = Math.random() * 10 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // 随机位置
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // 随机动画延迟
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            // 随机透明度
            particle.style.opacity = Math.random() * 0.5 + 0.2;
            
            container.appendChild(particle);
        }
    }

    window.addEventListener('load', createParticles);
}); 