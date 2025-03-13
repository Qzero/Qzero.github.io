function setDarkModeByTime() {
  // 检查是否开启自动模式
  if (!window.AUTO_MODE_ENABLED) {
    // 如果未开启自动模式,默认使用light模式
    const darkBtn = document.getElementById('darkBtn');
    const lightBtn = document.getElementById('lightBtn');
    lightBtn.style.display = "none"; 
    darkBtn.style.display = "block";
    localStorage.removeItem('preferredTheme');
    document.body.classList.remove("darkmode");
    return;
  }

  const hour = new Date().getHours();
  // 晚上18点到早上6点使用暗色模式
  const isDarkHour = hour >= 19 || hour < 6;
  
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
  setDarkModeByTime(); // 无论是否开启自动模式都执行一次,确保默认状态
  if (window.AUTO_MODE_ENABLED) {
    // 如果开启自动模式则启动定时检查
    setInterval(setDarkModeByTime, 3600000);
  }
}); 