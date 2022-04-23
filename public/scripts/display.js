
// Resize the window to fit the display better
resize();
window.addEventListener('resize', () => {
    resize();
});

function resize() {
    // Temporary fix for different screen sizes with similar aspect ratios
    let height = window.innerHeight;
    let percent = height / 1080;
    document.body.style.zoom = percent;
}