export function setupCanvas() {
    const smudgeLayer = document.createElement('canvas');
    smudgeLayer.id = "smudgeCanvas";
    smudgeLayer.style.position = 'fixed';
    smudgeLayer.style.top = 0;
    smudgeLayer.style.left = 0;
    smudgeLayer.style.width = '100vw';
    smudgeLayer.style.height = '100vh';
    smudgeLayer.style.pointerEvents = 'none';
    smudgeLayer.style.zIndex = 9999;
    document.body.appendChild(smudgeLayer);

    const canvas = smudgeLayer;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return { canvas, ctx };
}
