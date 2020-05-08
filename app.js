let elTop = document.querySelectorAll('.anim-top');
let elRight = document.querySelectorAll('.anim-right')
    let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
}

    observerTop = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `animate-top 1s ${entry.target.dataset.delay} forwards ease-out`
        }
        })
    }, options)

    elTop.forEach(el => {
        observerTop.observe(el);
    })

    observerRight = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            typeWriter();
            entry.target.style.animation = `animate-right 1s ${entry.target.dataset.delay} forwards ease-out`
        }
        })
    }, options)

    elRight.forEach(el => {
        observerRight.observe(el);
    })

let i = 0;
let text = "We offer high-quality technology solutions, which will make any of your digital property stand out from your competitors.";
let speed = 60;

function typeWriter() {  
   if(i < text.length) {
       document.getElementsByClassName("left")[1].innerHTML += text.charAt(i);
       i++;
       setTimeout(typeWriter, speed);
   }
}
