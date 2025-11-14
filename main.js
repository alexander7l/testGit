window.addEventListener("load", () => {
  function actualizarMetricas() {
    // 📏 Dynamic viewport total
    const dvWidth = window.visualViewport.width;
    const dvHeight = window.visualViewport.height;

    // 🎵 Medidas del reproductor MP3
    const mp3 = document.getElementById("mp3Player");
    const section1 = document.getElementById("section1");
    const bgImage = document.getElementById("bgImage");

    const mp3Rect = mp3.getBoundingClientRect();
    const mp3Height = mp3Rect.height;

    // 🧮 Altura restante disponible
    const section1Height = Math.max(0, dvHeight - mp3Height);

    // ✨ Aplicar altura al contenedor y a la imagen
    section1.style.height = `${section1Height}px`;
    bgImage.style.height = `${section1Height}px`;
    bgImage.style.width = "100%";

    // 🟩 Visual Debug (opcional)
    section1.style.outline = "3px solid #00BFFF";
    mp3.style.outline = "3px solid #00FF7F";

    // 🧾 Info visual (debug)
    let info = document.getElementById("metrics-info-box");
    if (!info) {
      info = document.createElement("div");
      info.id = "metrics-info-box";
      info.style.position = "fixed";
      info.style.top = "10px";
      info.style.left = "10px";
      info.style.backgroundColor = "rgba(0,0,0,0.75)";
      info.style.color = "#fff";
      info.style.padding = "12px 16px";
      info.style.fontFamily = "monospace";
      info.style.fontSize = "14px";
      info.style.borderRadius = "8px";
      info.style.zIndex = "99999";
      info.style.boxShadow = "0 0 12px #00FF7F";
      info.style.whiteSpace = "pre";
      document.body.appendChild(info);
    }

    const azul = "background:#00BFFF;display:inline-block;width:10px;height:10px;border-radius:2px;";
    const verde = "background:#00FF7F;display:inline-block;width:10px;height:10px;border-radius:2px;";

    info.innerHTML = `
📱 <b>Dynamic Viewport</b>
Width: ${dvWidth}px
Height: ${dvHeight}px

🎵 <span style="${verde}"></span> MP3 Player
Height: ${mp3Height}px

🌄 <span style="${azul}"></span> Section 1
Height: ${section1Height}px

📊 Total: ${(mp3Height + section1Height).toFixed(1)}px
Viewport: ${dvHeight}px
Δ Diferencia: ${(dvHeight - (mp3Height + section1Height)).toFixed(1)}px
`;
  }

  // 🔄 Actualizar cuando cambie el viewport
  window.visualViewport.addEventListener("resize", actualizarMetricas);
  window.addEventListener("resize", actualizarMetricas);
  actualizarMetricas();
});
