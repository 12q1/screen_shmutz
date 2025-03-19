export function drawClump(ctx, canvas) {
    const clumpSize = Math.random() * 5;
    const position = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
    };

    const clumpColors = [
        "rgba(78, 47, 19, 0.1)",
        "rgba(153,153,51, 0.1)",
        "rgba(178, 162, 94, 0.1)",
        "rgba(120, 104, 88, 0.1)",
        "rgba(50, 50, 70, 0.1)"
    ];
    const fillColor = clumpColors[Math.floor(Math.random() * clumpColors.length)];

    ctx.save();
    ctx.translate(position.x, position.y);

    const points = Math.floor(Math.random() * 5) + 8;
    let angleStep = (Math.PI * 2) / points;
    let startAngle = Math.random() * Math.PI * 2;
    
    ctx.beginPath();
    
    let firstX, firstY;
    let prevX, prevY;
    
    for (let i = 0; i <= points; i++) {
        let angle = startAngle + i * angleStep;
        let radius = clumpSize * (0.7 + Math.random() * 0.3);
    
        let x = Math.cos(angle) * radius;
        let y = Math.sin(angle) * radius;
    
        if (i === 0) {
            ctx.moveTo(x, y);
            firstX = x;
            firstY = y;
        } else {
            let cpX = (prevX + x) / 2 + Math.random() * 5 - 2.5;
            let cpY = (prevY + y) / 2 + Math.random() * 5 - 2.5;
            ctx.bezierCurveTo(prevX, prevY, cpX, cpY, x, y);
        }
    
        prevX = x;
        prevY = y;
    }
    
    ctx.bezierCurveTo(prevX, prevY, (prevX + firstX) / 2, (prevY + firstY) / 2, firstX, firstY);
    
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();

    ctx.restore();
}
