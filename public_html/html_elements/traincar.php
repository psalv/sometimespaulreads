



<?php

$COVERS = [
    "assets/img/covers/tohaveandhavenot.png",
    "assets/img/covers/animalfarm.png",
    "assets/img/covers/astronaughtsguidetolifeonearth.png",
    "assets/img/covers/dune.png",
    "assets/img/covers/ofmiceandmen.png",
    "assets/img/covers/sherlockholmes.png",
    "assets/img/covers/thecatcherintherye.png",
    "assets/img/covers/themartian.png",
    "assets/img/covers/theordealofgilbertpinfold.png",
    "assets/img/covers/thewayofzen.png",
    "assets/img/covers/theoldmanandthesea.png"
];

$TITLES = [
    "To Have and Have Not",
    "Animal Farm",
    "An Astronaut's Guide to Life on Earth",
    "Dune",
    "Of Mice and Men",
    "Sherlock Holmes",
    "The Cather in the Rye",
    "The Martian",
    'The Ordeal of Gilbert Pinfold',
    "The Way of Zen",
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

    "Animal Farm",
    "An Astronaut's Guide to Life on Earth",
    "
    <b>2016</b><br><br>
    Imaginative.<br><br>
    A mysterious universe with a certain allure.
    ",

    "
    <b>2017</b><br><br>
    Woeful, and humbling.<br><br>
    A tale of the beauty and cruelty in the world.<br><br>
    Provokes one's values and compassion.
    ",

    "
    <b>2014</b><br><br>
    Delightfully magnificent.<br><br>
    Never has being on the edge of your seat been so fun.<br><br>
    Sherlock Holmes is the epitome of characters.<br><br>
    Arthur Conan Doyle's genius never ceases to amaze me.
    ",

    "
    <b>2015.</b><br><br>
    Introspective, and reminiscent.<br><br>
    A character seldom played but very relatable.<br><br>
    Sharing a moment of distress felt by everyone but spoken by few.<br><br>
    A soothing emotion to share.
    ",

    "
    <b>2015.</b><br><br>
    Fun.<br><br>
    Hard to put down, draws you into the challenges of escaping Mars.<br><br>
    With each feat of ingenuity and creativity, the book manages to top itself in each chapter.<br><br>
    Climbing into the mind of an astronaut was a breathtaking experience.
    ",

    "
    <b>2014.</b><br><br>
    Unnerving, and fascinating<br><br>
    A brief journey into the delusional mind.<br><br>
    A true story making it all the more impactful.<br><br>
    Through life's greatest challenges one's courage is tested.
    ",

    "
    <b>2015.</b><br><br>
    Eye-opening, and thought-provoking.<br><br>
    Alan Watts effectively teaches a different way of thinking.<br><br>
    Dense with new lessons and outlooks, every page contains something worth meditating over.
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
