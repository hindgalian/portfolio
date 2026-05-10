const links = [
    { title: "YouTube", icon: "▶️", url: "https://youtube.com/@hindgalian", copy: false },
    { title: "Telegram", icon: "📡", url: "https://t.me/hindgalian", copy: false },
    { title: "Learning Site (Aswann)", icon: "🌐", url: "https://hindgalian.github.io/aswann-course/", copy: false },
    { title: "Hindgalian Files", icon: "🐙", url: "https://drive.google.com/drive/folders/1JXEDea5dl4tf2HsnYzTcxTxv0aiSzjhi?usp=drive_link", copy: false },
    { title: "Hindgalian History", icon: "🐙", url: "https://drive.google.com/drive/folders/1fEVcea7vM4GrZOMM1icz4FOC_w8nJGT8?usp=drive_link", copy: false },
    { title: "Aswann Files", icon: "🐙", url: "https://drive.google.com/drive/folders/1e80GnJteCxG2geH_Wu74x-q1kL6z-1xl?usp=drive_link", copy: false },
    { title: "Discord", icon: "🎙️", url: "https://discord.gg/pTjbpuPjY", copy: false },
    { title: "Email", icon: "✉️", url: "#", copy: true, email: "slavaflo@gmail.com" }
];

const container = document.getElementById("links");
const toast = document.getElementById("toast");

function showToast(msg) {
    toast.textContent = msg || "copied";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1500);
}

links.forEach(link => {
    const a = document.createElement("a");
    a.className = "link-btn";
    a.href = link.url;

    if (link.copy) {
        a.href = "#";
        a.addEventListener("click", (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(link.email);
            showToast(`📋 copied ${link.email}`);
        });
    } else {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
    }

    a.innerHTML = `
        <div class="link-left">
            <div class="link-icon">${link.icon}</div>
            <div class="link-title">${link.title}</div>
        </div>
        <div class="arrow">→</div>
    `;
    container.appendChild(a);
});