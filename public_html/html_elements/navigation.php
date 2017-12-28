
<nav class="raleway ">
    <div class="row">
        <div class="col-xs-10">
            sometimes paul reads.
        </div>

        <div class="col-xs-2 text-right">
            <i class="fa fa-angle-down" id="dropdown" ></i>
        </div>
    </div>

    <div class="hidden row text-right dropdownNav">
        <hr>
        <ul class="nav">
            <?php
            for($i = 0; $i < sizeof($COVERS); $i++){
                echo("

                    <li>
                        <div class='navItem' data-car-id='" . $i . "'>" . $TITLES[$i] . "</div>
                    </li>

                ");
            }
            ?>
        </ul>
    </div>


</nav>

<i class="hidable" id="navigation-left"></i>
<i class="hidable" id="navigation-right"></i>

<div class="updated">
    <?php echo($UPDATED)?>
</div>