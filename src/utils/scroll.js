export const moveScroll = (slug, type = "send") => {
  const id = `#chat-box`;
  const el = document.querySelector(id);
  if (!el) return;
  const top = el.scrollHeight - el.clientHeight + 124 + 64;
  if (type === "send") {
    setTimeout(() => {
      el.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }, 100);
  } else {
    const scrollTop = el.scrollTop;
    if (top - scrollTop < 300) {
      setTimeout(() => {
        el.scrollTo({
          top: top,
          behavior: "smooth",
        });
      }, 100);
    }
  }
};
