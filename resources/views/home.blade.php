<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta charset="utf-8">
        <link rel="shortcut icon" href="https://cmlabs.co/wp-content/uploads/2020/05/logo.png" type="image/x-icon">
        <title>Mobile Friendly Test</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/site.css') }}">
        <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet">
    </head>
    <body>
        <section class="home-section">
            <div class="container-fluid container-home">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="content">
                            <div class="form-group form-mobile">
                                <div class="title text-center">Apakah website anda mobile friendly ?</div>
                                <div class="subtitle text-center">Masukkan URL website anda dibawah ini</div>
                                <input type="text" id="url" class="form-control input-url" placeholder="https://example.com"/>
                                <div class="text-center">
                                    <button class="btn btn-check" id="btn-check"><span class="check-arrow-right">CEK SEKARANG</span></button>
                                </div>
                                <!-- spinner border -->
                                <div class="spinner text-center" style="display: none">
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid container-info">
                <div class="row success">
                    <div class="col-md-6">
                        <div class="title" id="result-title"></div>
                        <h4 id="mobile-issues-title"></h4>
                        <p id="mobile-issues"></p>
                    </div>
                    <div class="col-md-6 text-center">
                        <img class="img-fluid img-result" id="result-image" style="border : 10px solid grey; border-radius : 50px"/>
                    </div>
                </div>
                <div class="row error" id="error-section">
                    <div class="col-md-12">
                        <h4 id="error-msg"></h4>
                    </div>
                </div>
            </div>
        </section>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        <script type="text/javascript" src="https://apis.google.com/js/client.js?onload=init"></script>

        <script src="https://apis.google.com/js/api.js"></script>
        <script src="{{ asset('assets/js/mobiletest.js') }}"></script>
    </body>
</html>
