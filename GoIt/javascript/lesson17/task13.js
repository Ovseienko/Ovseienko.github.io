var ball = document.getElementById('ball'),
    field = document.getElementById('field');
field.style.position = 'relative';
ball.style.position = 'absolute';
ball.style.top = (field.clientHeight * 0.5 - ball.clientHeight * 0.5) + 'px';
ball.style.left = (field.clientWidth * 0.5 - ball.clientWidth * 0.5) + 'px';