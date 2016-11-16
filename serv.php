<?php
  header("Content-type:application/json");
  if(isset($_GET)&&!empty($_GET['search_field'])){
    $url = '';
    if($_GET['search_field'] == 'actbills'){
      $url = "http://104.198.0.197:8080/bills?apikey=d93a0a26177644898386b4d56fbfb3d1&per_page=50&history.active=true";
    }
    else if($_GET['search_field'] == 'newbills'){
      $url = "http://104.198.0.197:8080/bills?apikey=d93a0a26177644898386b4d56fbfb3d1&per_page=50&history.active=false";
    }
    else{
      $url = "http://104.198.0.197:8080/".$_GET['search_field']."?apikey=d93a0a26177644898386b4d56fbfb3d1&per_page=all";
    }
    $handle = fopen($url,"rb");
    $content = "";
    while (!feof($handle)){
      $content .= fread($handle, 10000);
    }
    fclose($handle);
    echo $content;
  }
  
?>
