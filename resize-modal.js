// Image resize functionality for both daily generator and AI generator
function showResizeModal(img) {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 1000;';
    
    const content = document.createElement('div');
    content.style.cssText = 'background: white; padding: 20px; border-radius: 12px; text-align: center;';
    
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '50';
    slider.max = '200';
    slider.value = '100';
    slider.style.cssText = 'width: 200px; margin: 10px;';
    
    const currentSize = parseInt(img.style.width) || 100;
    slider.value = currentSize;
    
    content.innerHTML = `
        <h3>Resize Image</h3>
        <p>Size: <span id="sizeValue">${currentSize}px</span></p>
    `;
    content.appendChild(slider);
    
    const buttons = document.createElement('div');
    buttons.style.cssText = 'margin-top: 15px; display: flex; gap: 10px; justify-content: center;';
    
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.style.cssText = 'padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 6px; cursor: pointer;';
    resetBtn.onclick = () => {
        img.style.width = '100px';
        img.style.height = '100px';
        slider.value = '100';
        document.getElementById('sizeValue').textContent = '100px';
    };
    
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Done';
    closeBtn.style.cssText = 'padding: 8px 16px; background: #0b7a3b; color: white; border: none; border-radius: 6px; cursor: pointer;';
    closeBtn.onclick = () => document.body.removeChild(modal);
    
    slider.oninput = () => {
        img.style.width = slider.value + 'px';
        img.style.height = slider.value + 'px';
        document.getElementById('sizeValue').textContent = slider.value + 'px';
    };
    
    buttons.appendChild(resetBtn);
    buttons.appendChild(closeBtn);
    content.appendChild(buttons);
    modal.appendChild(content);
    document.body.appendChild(modal);
}

// Background upload handler
function handleBackgroundUpload(event, targetElement) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            targetElement.style.backgroundImage = `url(${e.target.result})`;
            targetElement.style.backgroundSize = 'cover';
            targetElement.style.backgroundPosition = 'center';
        };
        reader.readAsDataURL(file);
    }
}