// Функция для выбора подписки
function selectSubscription(type) {
    const subscriptions = {
        basic: { 
            type: 'basic', 
            price: 10, 
            description: "Базовая подписка: доступ к основным функциям." 
        },
        pro: { 
            type: 'pro', 
            price: 20, 
            description: "Про подписка: расширенные функции и приоритетная поддержка." 
        },
        vip: { 
            type: 'vip', 
            price: 50, 
            description: "VIP подписка: полный доступ, эксклюзивные функции и личный менеджер." 
        }
    };

    const selected = subscriptions[type];

    // Отправка данных боту
    if (Telegram.WebApp.sendData) {
        Telegram.WebApp.sendData(JSON.stringify(selected));
    } else {
        alert("Функция отправки данных недоступна. Запустите приложение в Telegram.");
    }
}

// Функция для применения реферального кода
function applyReferralCode() {
    const referralCode = document.getElementById('referralCode').value;

    if (referralCode) {
        const data = {
            action: 'apply_referral',
            code: referralCode
        };

        // Отправка данных боту
        if (Telegram.WebApp.sendData) {
            Telegram.WebApp.sendData(JSON.stringify(data));
            alert('Реферальный код принят!');
        } else {
            alert("Функция отправки данных недоступна. Запустите приложение в Telegram.");
        }
    } else {
        alert('Пожалуйста, введите реферальный код.');
    }
}

// Инициализация Telegram Web App
Telegram.WebApp.ready();
Telegram.WebApp.expand(); // Развернуть приложение на весь экран