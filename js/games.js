document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.flip-card').forEach(card => {
        const front = card.querySelector('.flip-card-front');
        const back = card.querySelector('.flip-card-back');

        front.style.zIndex = "2";
        back.style.zIndex = "1";
        front.style.transform = "translate(-3%, -3%)";
        back.style.transform = "translate(3%, 3%)";

        card.addEventListener('click', function() {
            if (front.style.zIndex === "2") {
                front.style.zIndex = "1";
                back.style.zIndex = "2";
                front.style.transform = "translate(3%, 3%)"; 
                back.style.transform = "translate(-3%, -3%)";
                back.classList.remove('floating');
            } else {
                front.style.zIndex = "2";
                back.style.zIndex = "1";
                front.style.transform = "translate(-3%, -3%)"; 
                back.style.transform = "translate(3%, 3%)";
            }
        });

        card.addEventListener('mouseenter', function() {
            if (front.style.zIndex === "2") {
                back.classList.add('floating');
            }
        });

        card.addEventListener('mouseleave', function() {
            back.classList.remove('floating');
        });
    });
});
