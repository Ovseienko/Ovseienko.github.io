<?
		$to = 'ovseienko@gmail.com'; 
		$subject = 'Отклик с сайта Катковских'; 
		$message = '
				<html>
					<head>
						<title>'.$subject.'</title>
					</head>
					<body>
						<p>Имя: '.$_POST['name'].'</p>
						<p>Номер телефона: '.$_POST['number'].'</p>
						<p>Почта: '.$_POST['mail'].'</p>
						<p>Сообщение: '.$_POST['message'].'</p>                        
					</body>
				</html>'; 
		$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
		mail($to, $subject, $message, $headers);
?>