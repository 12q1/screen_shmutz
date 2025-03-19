(function () {
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
    const canvas = document.getElementById("smudgeCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Set initial canvas size

    function drawEyelash() {
        console.log("drawEyelash() called");

        const length = Math.random() * 30 + 20; // Vary length
        const thickness = Math.random(); // Vary thickness
        const curveHeight = Math.random() * 20 + 10; // Control curvature

        const position = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height
        };

        const rotation = Math.random() * 360 * (Math.PI / 180); // Random rotation

        ctx.save();
        ctx.translate(position.x, position.y);
        ctx.rotate(rotation);

        ctx.beginPath();
        ctx.moveTo(-length / 2, 0); // Start from the left

        // Create a curved eyelash shape
        ctx.quadraticCurveTo(0, -curveHeight, length / 2, 0);

        // Apply a stroke with tapered ends
        const gradient = ctx.createLinearGradient(-length / 2, 0, length / 2, 0);
        gradient.addColorStop(0, "rgba(0, 0, 0, 0)"); // Fade at start
        gradient.addColorStop(0.3, "rgba(0, 0, 0, 0.8)"); // Darkest in middle
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)"); // Fade at end

        ctx.strokeStyle = gradient;
        ctx.lineWidth = thickness;
        ctx.lineCap = "round";
        ctx.stroke();

        ctx.restore();
    }

    setInterval(drawEyelash, 10);

    //drawEyelash()
})();