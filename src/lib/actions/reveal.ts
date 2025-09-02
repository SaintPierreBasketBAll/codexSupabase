export function reveal(node: HTMLElement, options: { threshold?: number; delay?: number } = {}) {
  const { threshold = 0.15, delay = 0 } = options;
  node.style.transition = `opacity 500ms ease-out ${delay}ms, transform 500ms ease-out ${delay}ms`;
  node.style.opacity = '0';
  node.style.transform = 'translateY(12px)';

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        node.style.opacity = '1';
        node.style.transform = 'translateY(0)';
        io.disconnect();
        break;
      }
    }
  }, { threshold });

  io.observe(node);

  return {
    destroy() {
      io.disconnect();
    }
  };
}

