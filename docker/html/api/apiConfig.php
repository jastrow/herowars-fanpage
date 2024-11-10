<?php

ini_set('session.use_trans_sid', 1);
ini_set('session.use_cookies', 0);
ini_set('session.use_only_cookies', 0);

const AUTH_TOKEN_VALID_DAY = 1;
const AUTH_TOKEN_VALID_MONTH = 0;
const AUTH_TOKEN_VALID_YEAR = 0;
const AUTH_TOKEN_VALID_SECOND = 0;
const AUTH_TOKEN_VALID_MINUTE = 0;
const AUTH_TOKEN_VALID_HOUR = 0;
const AUTH_INVALID_ERROR_MSG = 'Unauthorized';

const FORMULAR_EMAIL = 'your@email.to';

const TEXTPAGE_WHITELIST = [
    'Tipps',
    'Abenteuer',
    'Mitglieder',
    'Regeln',
    'Gildenaktivität',    
];

?>