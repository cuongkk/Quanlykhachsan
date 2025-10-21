const API_BASE = window.API_BASE || "http://localhost:3000/api";

async function load() {
  const out = document.getElementById("out");
  out.textContent = "Đang tải...";
  try {
    const r = await fetch(`${API_BASE}/books`);
    const j = await r.json();
    out.textContent = JSON.stringify(j.data || [], null, 2);
  } catch (e) {
    out.textContent = "Lỗi gọi API";
  }
}
document.getElementById("reload").onclick = load;
load();
