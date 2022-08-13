function imageGallery() {
const highlight = document.querySelector('.gallary-highlight');
const previews = document.querySelectorAll('.slide img');

previews.forEach(preview => {
    preview.addEventListener('click', function(){
        const smallSrc= this.src;
        const bigSrc = smallSrc.replace("small", "big");
        highlight.src = bigSrc;
        previews.forEach(preview => preview.classList.remove('room-active'));
        preview.classList.add('room-active');
    });
});
}

imageGallery();

function imageGallery2() {
    const highlight2 = document.querySelector('.gallary-highlight2');
    const previews2 = document.querySelectorAll('.slide2 img');
    
    previews2.forEach(preview2 => {
        preview2.addEventListener('click', function(){
            const smallSrc2= this.src;
            const bigSrc2= smallSrc2.replace("Small", "Big");
            highlight2.src = bigSrc2;
            previews2.forEach(preview2 => preview2.classList.remove('room-active'));
            preview2.classList.add('room-active');
        });
    });
    }
    
    imageGallery2();

    function imageGallery3() {
        const highlight3 = document.querySelector('.gallary-highlight3');
        const previews3 = document.querySelectorAll('.slide3 img');
        
        previews3.forEach(preview3 => {
            preview3.addEventListener('click', function(){
                const smallSrc3= this.src;
                const bigSrc3= smallSrc3.replace("SMALL", "BIG");
                highlight3.src = bigSrc3;
                previews3.forEach(preview3 => preview3.classList.remove('room-active'));
                preview3.classList.add('room-active');
            });
        });
        }
        
        imageGallery3();