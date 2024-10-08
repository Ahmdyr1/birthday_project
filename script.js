{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function checkPassword() \{\
    const enteredPassword = document.getElementById('password').value;\
    const correctPassword = "birthday123"; // Set your password here\
\
    if (enteredPassword === correctPassword) \{\
        document.getElementById('birthday-message').classList.remove('hidden');\
        document.querySelector('.container').style.display = 'none';\
\
        // Trigger heart beating animation\
        const hearts = document.querySelectorAll('.heart');\
        hearts.forEach(heart => \{\
            heart.classList.add('heart-beat');\
        \});\
    \} else \{\
        document.getElementById('error-message').style.display = 'block';\
    \}\
\}\
}