export function drawEyelash(ctx, canvas) {
    console.log('drawing lash');
    const length = Math.random() * 30 + 20;
    const thickness = Math.random() - 2;
    const curveHeight = Math.random() * 20 + 10;

    const dpr = window.devicePixelRatio || 1;
    const position = {
        x: Math.random() * (canvas.width / dpr),
        y: Math.random() * (canvas.height / dpr)
    };

    const rotation = Math.random() * 360 * (Math.PI / 180);

    ctx.save();
    ctx.translate(position.x, position.y);
    ctx.rotate(rotation);

    ctx.beginPath();
    ctx.moveTo(-length / 2, 0);
    ctx.quadraticCurveTo(0, -curveHeight, length / 2, 0);

    const gradient = ctx.createLinearGradient(-length / 2, 0, length / 2, 0);
    if (Math.random() < 0.5) {
        gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
        gradient.addColorStop(0.3, "rgba(0, 0, 0, 0.8)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.lineWidth = thickness;
    } else {
        gradient.addColorStop(0, "rgba(0, 0, 0, 0.9)");
        gradient.addColorStop(0.5, "rgba(0, 0, 0, 0.8)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.lineWidth = Math.random();
    }
    ctx.strokeStyle = gradient;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.restore();
}
