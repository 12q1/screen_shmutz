export function setupCanvas() {
    const canvas = document.createElement("canvas");
    canvas.id = "smudgeCanvas";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = "100vw";
        canvas.style.height = "100vh";
        ctx.scale(dpr, dpr);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return { canvas, ctx };
}
