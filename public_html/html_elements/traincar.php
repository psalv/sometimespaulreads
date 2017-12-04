

<div class="hidable">
<?php

for($i = 0; $i < sizeof($COVERS); $i++){
    $first = $i == 0 ? " traincar-active" : "";
    echo("
    
        <div class='traincar-car" . $first . "' data-car-id='" . $i . "' id='car-" . $i . "'>
            <div class='parent'>
                <div class='childCenter'>
                    <div class='row'>
                        <div class='col-md-6 text-right right'>
        
                            <img src='" . $COVERS[$i] . "'>
    
                        </div>
                        <div class='col-md-6 left'>
                            <div class='bookCard'>
                                <div class='bookTitle text-center'>" . $TITLES[$i] . "</div>
                                <hr>
                                <div class='bookText'>" . $DESCRIPTIONS[$i] . "</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    ");
}

?>

</div>