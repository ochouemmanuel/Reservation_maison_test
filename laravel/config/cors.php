<?php


return [
    'paths' => ['api/', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:5173'],  // Autoriser une origine spécifique (ton frontend React)
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['Content-Type', 'X-CSRF-TOKEN', 'Authorization'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true, // Mettre à `true` si tu utilises une authentification avec cookies
];





