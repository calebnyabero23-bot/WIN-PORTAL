document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginPage = document.getElementById('login-page');
    const portalPage = document.getElementById('portal-page');
    const regInput = document.getElementById('reg-input');
    
    const displayReg = document.getElementById('display-reg');
    const displayName = document.getElementById('display-name');
    
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');

    // 1. Transition from Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = regInput.value;
        displayReg.textContent = value;
        displayName.textContent = value; // Set name as reg number per your request
        
        loginPage.classList.add('hidden');
        portalPage.classList.remove('hidden');
    });

    // 2. Mobile Sidebar Toggle
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('active');
    });

    // 3. Auto-close sidebar on link click (Mobile behavior)
    document.querySelectorAll('.side-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 768) sidebar.classList.remove('active');
        });
    });

    // 4. Logout
    document.getElementById('logout-btn').addEventListener('click', () => {
        portalPage.classList.add('hidden');
        loginPage.classList.remove('hidden');
        sidebar.classList.remove('active');
    });
});