function setDarkModeByTime() {
  // 检查是否开启自动模式
  if (!window.AUTO_MODE_ENABLED) {
    return;
  }

  const hour = new Date().getHours();
  // 晚上16点到早上6点使用暗色模式
  const isDarkHour = hour >= 18 || hour < 6;
  
  const darkBtn = document.getElementById('darkBtn');
  const lightBtn = document.getElementById('lightBtn');
  
  if (isDarkHour) {
    lightBtn.style.display = "block";
    darkBtn.style.display = "none";
    localStorage.setItem('preferredTheme', 'dark');
    document.body.classList.add("darkmode");
  } else {
    lightBtn.style.display = "none"; 
    darkBtn.style.display = "block";
    localStorage.removeItem('preferredTheme');
    document.body.classList.remove("darkmode");
  }
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', function() {
  if (window.AUTO_MODE_ENABLED) {
    setDarkModeByTime();
    // 每小时检查一次
    setInterval(setDarkModeByTime, 3600000);
  }
}); 