<?php
$words=urlencode($_GET['words']);
$data=file_get_contents("http://translate.google.com/translate_tts?tl=en&q=$words");
$time=date('Y_m_d_H_i_s');
file_put_contents('mp3/'.$time.'.mp3',$data);
echo '/mp3/'.$time.'.mp3';
?>
