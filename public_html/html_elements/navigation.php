
<nav class="raleway">
    <div class="row">
        <div class="col-xs-10">
            sometimes paul reads.
        </div>

        <div class="col-xs-2 text-right">
<!--            <i class="fa fa-angle-down" id="dropdown" ></i>-->
        </div>
    </div>

    <div class="hidden" id="navTarget">
        <ul class="nav navbar-nav navbar-right">
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
<i id="navigation-left"></i>
<i id="navigation-right"></i>
