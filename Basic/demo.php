<?php 

$name = "umesh";
$length = strlen($name);
for($i=$length-1; $i>=0; $i--){
    echo $name[$i];
}
echo "\n";
$php= 'Program'; 
$call = 'php';
echo $$call;


?>