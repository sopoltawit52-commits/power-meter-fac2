// Service worker แบบเบาที่สุด: ให้ติดตั้งเป็นแอปบนมือถือได้ — ไม่เก็บแคช ข้อมูลมาจากเซิร์ฟเวอร์สดเสมอ
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
