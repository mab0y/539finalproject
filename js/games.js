document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function() {
        const front = this.querySelector('.flip-card-front');
        const back = this.querySelector('.flip-card-back');
        if (front.style.zIndex === "2") {
            front.style.zIndex = "1";
            back.style.zIndex = "2";
            front.style.transform = "translate(20px, 20px)"; 
            back.style.transform = "translate(-20px, -20px)"; 
        } else {
            front.style.zIndex = "2";
            back.style.zIndex = "1";
            front.style.transform = "translate(-20px, -20px)"; 
            back.style.transform = "translate(20px, 20px)";
        }
    });
});