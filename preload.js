// preload.js
// 为页面提供全局函数

window.rubick = {
  showNotification: (title, options) => {
    if (window.Notification && Notification.permission === 'granted') {
      new Notification(title, options);
    } else if (window.Notification && Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(title, options);
        }
      });
    }
  }
};

// 暴露一些工具函数
window.utils = {
  // 格式化时间
  formatTime: (date) => {
    return new Date(date).toLocaleString();
  },
  // 显示错误信息
  showError: (message) => {
    console.error(message);
    if (window.rubick && window.rubick.showNotification) {
      window.rubick.showNotification('错误', { body: message });
    }
  }
};