<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="interface/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <!--Google fonts-->
    <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri&family=Lobster&display=swap" rel="stylesheet">
    <!--Font awesome kit-->
    <script src="https://kit.fontawesome.com/54f3cec14a.js" crossorigin="anonymous"></script>
    <title>Water-meter App</title>
</head>

<body>
    <div class="container">
        <div class="wrapper">
            <h1 class="headline">H2O Metering-App</h1>
            <form class="form-styles" action="controller/#" method="post">
                <div class="form-elements">
                    Address: <input type="text" placeholder="Enter address here..." class="input-styles">
                </div>
                <div class="form-elements">
                    Water level: <input type="text" placeholder="Enter meter reading..." class="input-styles">
                </div>
                <div class="form-elements">
                    <input type="submit" value="Send Data" class="btn">
                </div>
            </form>
        </div>
    </div>
    <script src="interface/app.js"></script>
</body>

</html>