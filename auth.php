<?php

session_start();

require_once 'config.php';


if (isset($_SESSION['user_token'])) {
    header("Location: index.php");
    exit; // Остановить дальнейшее выполнение скрипта после переадресации
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/auth.css">
    <title>Авторизация</title>
</head>
<body>
<div class="new_auth_frame">
        <div class="window">
            <p style="text-align: center; font-size: 32px; font-weight: 500; white-space: nowrap;">Тип подключения</p>
            <div class="variables">
                <a href="<?php echo htmlspecialchars($client->createAuthUrl()); ?>">
                    <button class="google_auth social_auth">
                        <svg width="20" height="20" id="Social_Icons" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" style="margin-right: 12px;">
                            <g id="_x31__stroke">
                                <g id="Google">
                                    <rect fill="none" height="128" width="128"></rect>
                                    <path d="M27.585,64c0-4.157,0.69-8.143,1.923-11.881L7.938,35.648    C3.734,44.183,1.366,53.801,1.366,64c0,10.191,2.366,19.802,6.563,28.332l21.558-16.503C28.266,72.108,27.585,68.137,27.585,64" fill="#FBBC05"></path>
                                    <path d="M65.457,26.182c9.031,0,17.188,3.2,23.597,8.436L107.698,16    C96.337,6.109,81.771,0,65.457,0C40.129,0,18.361,14.484,7.938,35.648l21.569,16.471C34.477,37.033,48.644,26.182,65.457,26.182" fill="#EA4335"></path>
                                    <path d="M65.457,101.818c-16.812,0-30.979-10.851-35.949-25.937    L7.938,92.349C18.361,113.516,40.129,128,65.457,128c15.632,0,30.557-5.551,41.758-15.951L86.741,96.221    C80.964,99.86,73.689,101.818,65.457,101.818" fill="#34A853"></path>
                                    <path d="M126.634,64c0-3.782-0.583-7.855-1.457-11.636H65.457v24.727    h34.376c-1.719,8.431-6.397,14.912-13.092,19.13l20.474,15.828C118.981,101.129,126.634,84.861,126.634,64" fill="#4285F4"></path>
                                </g>
                            </g>
                        </svg>
                        <p class="social_auth_text">Продолжить с Google</p>
                        <p></p>
                    </button>
                </a>
            </div>
        </div>
    </div>
</div>
</body>
</html>