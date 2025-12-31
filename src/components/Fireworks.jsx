import { useEffect, useRef } from "react";

const Fireworks = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = [];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 3 + 1;
        this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
        this.speedX = (Math.random() - 0.5) * 10;
        this.speedY = (Math.random() - 0.5) * 10;
        this.life = 120;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const createFirework = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.6;
      for (let i = 0; i < 120; i++) {
        particles.push(new Particle(x, y));
      }
    };

    const fireworkInterval = setInterval(createFirework, 250);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.life <= 0) particles.splice(i, 1);
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      clearInterval(fireworkInterval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  );
};

export default Fireworks;
