const tiltEls = document.querySelectorAll('.tilt-target');
const maxTiltX = 30;
const maxTiltY = 15;

// existing mousemove version…
window.addEventListener('mousemove', e => {
    const xNorm = (e.clientX / innerWidth)  - 0.5;
    const yNorm = (e.clientY / innerHeight) - 0.5;
    const rotY  = xNorm * maxTiltY;
    const rotX  = -yNorm * maxTiltX;
    tiltEls.forEach(el => el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`);
});