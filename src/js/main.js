const konfidentcontainer = document.querySelector('.konfident-container');
const konfidentclose = document.getElementById('konfident-close');
const konfidentopen = document.getElementById('konfident-open');
const photoUploadArea = document.getElementById('photo-upload-area');
const photoInput = document.getElementById('photo-input');
const uploadedPhoto = document.getElementById('uploaded-photo');
const photoPlaceholderText = document.getElementById('photo-placeholder-text');
const downloadBtn = document.getElementById('download-card');
const cardToExport = document.getElementById('konfident-card-export');

konfidentopen.addEventListener('click', () => {
    konfidentcontainer.style.visibility = 'visible';
});

konfidentclose.addEventListener('click', () => {
    konfidentcontainer.style.visibility = 'hidden';
    konfidentcontainer.style.opacity = '1';
});




photoUploadArea.addEventListener('click', () => {
    photoInput.click();
});

photoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            uploadedPhoto.src = event.target.result;
            uploadedPhoto.style.display = 'block';
            photoPlaceholderText.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});




downloadBtn.addEventListener('click', async () => {

    const inputs = cardToExport.querySelectorAll('input[type="text"]');
    const originalValues = [];
    
    inputs.forEach(input => {
        const value = input.value || input.placeholder;
        const span = document.createElement('strong');
        span.textContent = value;
        span.style.marginLeft = '4px';
        originalValues.push({
            input: input,
            parent: input.parentNode,
            nextSibling: input.nextSibling
        });
        input.parentNode.replaceChild(span, input);
    });
    

    downloadBtn.style.display = 'none';
    
    try {
        const canvas = await html2canvas(cardToExport, {
            scale: 2,
            backgroundColor: '#222222',
            logging: false,
            useCORS: true
        });
        

        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = `karta-konfidenta-szpontOS.png`;
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
        });
    } catch (error) {
        console.error('Błąd podczas generowania obrazka:', error);
        alert('Wystąpił błąd podczas generowania obrazka.');
    }
    

    originalValues.forEach(({input, parent, nextSibling}) => {
        const span = parent.querySelector('strong');
        if (span) {
            parent.replaceChild(input, span);
        }
    });
    
    downloadBtn.style.display = 'block';
});
