import { registerSW } from './scripts/prxy.mjs';
import { encodeUrl } from './uv/uv.bundle.js';
import { uvConfig } from './uv/uv.config.js';

document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('proxyFrame');
    const url = window.location.hash.substring(1); // Get URL from hash

    if (url) {
        const encodedUrl = encodeUrl(url);
        iframe.src = uvConfig.prefix + encodedUrl;
    }

    registerSW()
    .then(() => console.log('Service worker registered'))
    .catch((error) => console.error('Service worker registration failed:', error));
});
