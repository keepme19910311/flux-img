document.querySelector('.generate-btn').addEventListener('click', function() {
    const prompt = document.querySelector('textarea').value;
    if (prompt.trim() === '') {
        alert('请输入图片描述');
        return;
    }

    // 创建新的生成中状态卡片
    const generatingCard = document.createElement('div');
    generatingCard.className = 'generating';
    generatingCard.innerHTML = '<div class="loading-spinner"></div>';

    // 将生成中状态添加到展示区域的最前面
    const gallery = document.querySelector('.gallery-section');
    gallery.insertBefore(generatingCard, gallery.firstChild);

    // 这里添加实际的图片生成API调用
    // 示例：模拟生成过程
    setTimeout(() => {
        generatingCard.remove();
        
        const newCard = document.createElement('div');
        newCard.className = 'image-card';
        newCard.innerHTML = `
            <img src="https://via.placeholder.com/300" alt="生成的图片">
            <div class="prompt">${prompt}</div>
        `;
        
        gallery.insertBefore(newCard, gallery.firstChild);
    }, 3000);
}); 