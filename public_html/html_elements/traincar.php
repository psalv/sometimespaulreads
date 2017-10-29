

<?php

$COVERS = [
    "assets/img/covers/tohaveandhavenot.png",
    "assets/img/covers/theoldmanandthesea.png"
];

$TITLES = [
    "To Have and Have Not",
    "The Old Man and the Sea"
];

$DESCRIPTIONS = [
    "
    <b>2017.</b><br><br>
    Quiet, rich, and beautiful.<br><br>
    Another Hemmingway gem.<br><br>
    This journey from success to annihilation pulls you deeper into the question of what gives life value.<br><br>
    The characters are real and the struggles heartbreaking.
    ",
    "
    <b>2016.</b><br><br>
    Empowering, humbling, and meaningful.<br><br>
    This is the book that began my romance with Hemmingway.<br><br>
    The book is short but it's lessons have stayed with me for a long time.<br><br>
    Wise in his years, the fisherman Santiago embodies the virtues that each one of us strive for.
    "
];

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
