// --- DATA: PROJECTS ARCHIVE ---
const projectsData = [
  {
    id: 1,
    title: "Bài 1: Máy tính và các thiết bị ngoại vi",
    type: "Bài tập 1",
    objective: "Khảo sát kiến trúc phần cứng máy tính và cấu hình các thiết bị ngoại vi phục vụ học tập, thiết kế mạch điện tử.",
    process: "Đánh giá các thông số kỹ thuật (CPU, RAM, GPU, SSD) nhằm tối ưu hiệu năng chạy phần mềm CAD/EDA (Altium Designer, Proteus, MATLAB). Thiết lập và chuẩn hóa các giao tiếp ngoại vi truyền thông dữ liệu.",
    link: "https://drive.google.com/file/d/1DKBe9OKnxAplR98MAg-aLv_nr0WMADDe/view?usp=drive_link"
  },
  {
    id: 2,
    title: "Bài 2: Khai thác dữ liệu và thông tin",
    type: "Bài tập 2",
    objective: "Rèn luyện kỹ năng tra cứu thông tin chuyên sâu và đánh giá tài liệu kỹ thuật số chuẩn xác.",
    process: "Sử dụng toán tử tìm kiếm nâng cao để khai thác tài liệu kỹ thuật, tiêu chuẩn truyền thông (IEEE, ITU) và linh kiện bán dẫn (datasheets). Trích xuất và phân tích số liệu đáng tin cậy phục vụ nghiên cứu.",
    link: "https://drive.google.com/file/d/1Jq_EUywykpDhIce-huqzNSKZ9sF77Ymw/view?usp=drive_link"
  },
  {
    id: 3,
    title: "Bài 3: Tổng quan về trí tuệ nhân tạo (AI)",
    type: "Bài tập 2",
    objective: "Hiểu nguyên lý cơ bản của AI và ứng dụng các trợ lý trí tuệ nhân tạo vào lập trình, kỹ thuật.",
    process: "Sử dụng ChatGPT/Gemini để hỗ trợ tối ưu mã nguồn điều khiển vi điều khiển (Arduino/STM32) và phân tích các bài toán mạch số. Nhận thức cơ hội và rủi ro đạo đức khi dùng AI.",
    link: "https://drive.google.com/file/d/16U0-YyLg0rZTseBdmSmTjQTOIOMoKvIb/view?usp=drive_link"
  },
  {
    id: 4,
    title: "Bài 4: Giao tiếp và hợp tác trong môi trường số",
    type: "Bài tập 3",
    objective: "Cộng tác làm việc nhóm trực tuyến hiệu quả, đồng bộ hóa mã nguồn và báo cáo dự án.",
    process: "Sử dụng Google Workspace và Slack để trao đổi công việc, thiết lập bảng Kanban (Trello) quản lý tiến độ thiết kế mạch. Hợp tác viết tài liệu kỹ thuật và giải quyết xung đột dữ liệu trên Cloud.",
    link: "https://drive.google.com/file/d/1FDBYuui1k6NyCgm0cEofjULOJJVH23YV/view?usp=drive_link"
  },
  {
    id: 5,
    title: "Bài 5: Sáng tạo nội dung số",
    type: "Bài tập 2",
    objective: "Thiết kế ấn phẩm truyền thông đồ họa và sản xuất video giới thiệu đề tài kỹ thuật.",
    process: "Sử dụng Canva thiết kế infographic giới thiệu mạng di động thế hệ mới (5G/6G) chuyên nghiệp. Biên tập video ngắn thuyết trình sơ đồ hệ thống viễn thông với phụ đề sinh động.",
    link: "https://drive.google.com/file/d/1FFUwBsn9CSFEGwWeni9546J1YdT_MJf_/view?usp=drive_link"
  },
  {
    id: 6,
    title: "Bài 6: An toàn và liêm chính học thuật trong môi trường số",
    type: "Bài tập 4",
    objective: "Nâng cao nhận thức bảo mật thông tin cá nhân và tuân thủ liêm chính khoa học.",
    process: "Cấu hình bảo mật 2 lớp (2FA), phòng chống mã độc và tấn công mạng xã hội. Tìm hiểu luật sở hữu trí tuệ bản quyền phần mềm kỹ thuật, thực hành trích dẫn khoa học chuẩn IEEE/APA.",
    link: "https://drive.google.com/file/d/1bpe8v-PsLIcBV358MU9rEFTR7gqchMM5/view?usp=drive_link"
  },
  {
    id: 7,
    title: "Dự án cuối khóa: Báo cáo tổng kết môn học",
    type: "Báo cáo tổng kết",
    objective: "Tích hợp toàn bộ kết quả học tập trong học kỳ và tự đánh giá năng lực phát triển kỹ năng số.",
    process: "Hệ thống hóa toàn bộ báo cáo, kiểm thử liên kết đám mây hoạt động ổn định. Thiết kế và triển khai trang web Portfolio điện tử cá nhân chuẩn responsive, mang đậm phong cách kỹ thuật.",
    link: "https://drive.google.com/file/d/1L39VVY6UwDF6lIh-J2q1VWyV5tViSllX/view?usp=drive_link"
  }
];

// --- APP INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProjects();
  initNavigation();
  initMobileMenu();
  
  // Pre-save skill bar widths and set to 0 for initial load animation transition
  document.querySelectorAll(".metric-bar-fill").forEach(bar => {
    bar.dataset.width = bar.style.width;
    bar.style.width = "0";
  });
  
  // Animate skill bars on initial load if starting on About section
  setTimeout(animateSkillBars, 300);
});

// --- THEME MANAGEMENT ---
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const storedTheme = localStorage.getItem("portfolio-theme") || "dark";
  
  // Set initial theme
  document.body.setAttribute("data-theme", storedTheme);
  
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    
    // Add rotate animation effect to button
    themeToggle.style.transform = "rotate(180deg) scale(0.9)";
    setTimeout(() => {
      themeToggle.style.transform = "";
    }, 250);
  });
}

// --- DYNAMIC RENDERING OF PROJECTS ---
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  
  grid.innerHTML = projectsData.map(proj => `
    <div class="project-card" id="proj-${proj.id}">
      <div class="project-header">
        <span class="project-badge-num">#0${proj.id}</span>
        <span class="project-type-tag">${proj.type}</span>
      </div>
      <h3 class="project-title">${proj.title}</h3>
      <div class="project-sections">
        <div>
          <h4 class="project-section-title">Mục tiêu bài học</h4>
          <p class="project-section-desc">${proj.objective}</p>
        </div>
        <div>
          <h4 class="project-section-title">Quá trình thực hiện</h4>
          <p class="project-section-desc">${proj.process}</p>
        </div>
      </div>
      <a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
        <span>Xem Báo cáo (Google Drive)</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.414l-7 7L10.586 12l7-7H13V3h8z"/>
        </svg>
      </a>
    </div>
  `).join("");
}

// --- VIEW NAVIGATION & PAGE SWITCH ---
function initNavigation() {
  const links = document.querySelectorAll(".nav-link");
  const views = document.querySelectorAll(".view-section");
  const navContainer = document.querySelector(".nav-links");
  const mobileToggle = document.getElementById("mobileMenuToggle");

  links.forEach(link => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("data-target");
      
      // Update navigation active states
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      
      // Toggle visibility of views with class-based transition
      views.forEach(view => {
        if (view.id === targetId) {
          view.style.display = "block";
          // Trigger animations on elements inside
          if (targetId === "view-conclusion") {
            setTimeout(animateSkillBars, 150);
          } else if (targetId === "view-projects") {
            setTimeout(animateProjectCards, 100);
          }
          
          setTimeout(() => {
            view.classList.add("active");
          }, 30);
        } else {
          view.classList.remove("active");
          setTimeout(() => {
            if (!view.classList.contains("active")) {
              view.style.display = "none";
            }
          }, 300);
        }
      });

      // Smooth scroll to top of page on change
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      // Close mobile navigation if open
      if (navContainer.classList.contains("mobile-active")) {
        navContainer.classList.remove("mobile-active");
        resetMobileMenuToggle(mobileToggle);
      }
    });
  });
}

// --- MICRO ANIMATIONS ---
function animateSkillBars() {
  const bars = document.querySelectorAll(".metric-bar-fill");
  bars.forEach(bar => {
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = bar.dataset.width || "0%";
    }, 50);
  });
}

function animateProjectCards() {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, index) => {
    card.classList.remove("animate-in");
    setTimeout(() => {
      card.classList.add("animate-in");
    }, index * 100);
  });
}

// --- MOBILE NAVIGATION TOGGLE ---
function initMobileMenu() {
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const navContainer = document.querySelector(".nav-links");
  
  if (!mobileToggle || !navContainer) return;
  
  mobileToggle.addEventListener("click", () => {
    const isOpen = navContainer.classList.toggle("mobile-active");
    
    if (isOpen) {
      mobileToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
    } else {
      resetMobileMenuToggle(mobileToggle);
    }
  });
}

function resetMobileMenuToggle(btn) {
  if (!btn) return;
  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  `;
}
