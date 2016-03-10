<?
        $to = 'ovseienko@gmail.com'; 
        $subject = 'Отчет'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Kатегория: '.$_POST['cat'].'</p>
                        <p>Суб-категория: '.$_POST['category'].'</p>
                        <p>Тип: '.$_POST['type'].'</p>
                        <p>Объект: '.$_POST['object'].'</p>
                        <p>Оисание: '.$_POST['description'].'</p>                           
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        mail($to, $subject, $message, $headers); 
        echo "Спасибо! Мы получили отчет!";
?>