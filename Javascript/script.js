const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll("#menu li a").forEach(item => {
  let interval = null;
  let originalText = item.textContent;

  item.addEventListener("mouseover", () => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      item.textContent = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  });

  item.addEventListener("mouseout", () => {
    clearInterval(interval);
    item.textContent = originalText;
  });
});

