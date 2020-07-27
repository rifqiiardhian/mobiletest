const dataurl = document.getElementById('url');
const btn_check = document.getElementById('btn-check');
const title = document.getElementById('result-title');
const mob_issues_title = document.getElementById('mobile-issues-title');
const mob_issues = document.getElementById('mobile-issues');
const image = document.getElementById('result-image');
const err_section = document.getElementById('error-section');
const err_msg = document.getElementById('error-mdg');

image.style = 'max-width:400px;height:auto';
$(document).ready(function() {
    $('#btn-check').on('click', function() {
        $('.spinner').css("display","block");	
        var newData =
        {
            "url" : $('#url').val(),
            "requestScreenshot": true
        }
        var dataJson = JSON.stringify(newData);

        $.ajax({
            url : "https://searchconsole.googleapis.com/v1/urlTestingTools/mobileFriendlyTest:run?key=AIzaSyAe7AXnQrH6VxQk6wDlg3E7eJuZn9AywC8",
            type : "POST",
            dataType : "JSON",
            contentType: "application/json",
            data : dataJson,
            success : function(result) {
                console.log(result);
                $('.spinner').css("display","none");

                if( result.testStatus.status === 'COMPLETE') {
                    if(result.mobileFriendliness === 'MOBILE_FRIENDLY') {
                        resultdata(result.mobileFriendliness, result.screenshot.data);
                    } else {
                        resultdata(result.mobileFriendliness, result.screenshot.data);
                        mobileissues(result.mobileFriendlyIssues);
                    }
                } else {
                    var errorstatus = result.testStatus.status;
                    var errormessage = result.testStatus.detail;

                    err_section.style = 'display:block';
                    err_msg.innerHTML = errormessage;
                }

                resultdata(result.mobileFriendliness, result.screenshot.data);
            },
            error: function(e) {
            console.log(e);
            $('.spinner').css("display","none");

              var errorstatus = result.testStatus.status;
              var errormessage = result.testStatus.detail;

              err_section.style = 'display:block';
              err_msg.innerHTML = errormessage;
            },
        });
    });
});

function resultdata(titledata, imagedata) {
    if(titledata === 'MOBILE_FRIENDLY') {
        title.innerHTML = 'Website Anda Mobile Friendly';
    } else if(titledata === 'MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED') {
        title.innerHTML = 'Terjadi Kesalahan Saat Melakukan Test. Silakan Coba Lagi';
    } else if(titledata === 'NOT_MOBILE_FRIENDLY') {
        title.innerHTML = 'Website Anda Tidak Mobile Friendly';
    }

    var baseStr64 = imagedata;
    image.src = "data:image/png;base64," + baseStr64;
}

function mobileissues(rules) {
    var issues = '';
    var issues_detail = '';
    for (i = 0; i < rules.length; i++) {
        // issues += rules[i].rule + "<br/>";

        if( rules[i].rule === 'MOBILE_FRIENDLY_RULE_UNSPECIFIED') {
            issues_detail += 'MOBILE FRIENDLY RULE UNSPECIFIED<br/>Unknown rule. Sorry, we dont have any description for the rule that was broken. <br/>';
        } else if( rules[i].rule === 'USES_INCOMPATIBLE_PLUGINS') {
            issues_detail += 'USES INCOMPATIBLE PLUGINS<br/>Plugins incompatible with mobile devices are being used <br/>';
        } else if( rules[i].rule === 'CONFIGURE_VIEWPORT') {
            issues_detail += 'CONFIGURE VIEWPORT<br/>Viewport is not specified using the meta viewport tag <br/>';
        } else if( rules[i].rule === 'FIXED_WIDTH_VIEWPORT') {
            issues_detail += 'FIXED WIDTH VIEWPORT<br/>Viewport defined to a fixed width <br/>';
        } else if( rules[i].rule === 'SIZE_CONTENT_TO_VIEWPORT') {
            issues_detail += 'SIZE CONTENT TO VIEWPORT<br/>Content not sized to viewport <br/>';
        } else if( rules[i].rule === 'USE_LEGIBLE_FONT_SIZES') {
            issues_detail += 'USE LEGIBLE FONT SIZES<br/>Font size is too small for easy reading on a small screen <br/>';
        } else if( rules[i].rule === 'TAP_TARGETS_TOO_CLOSE') {
            issues_detail += 'TAP TARGETS TOO CLOSE<br/>Touch elements are too close to each other <br/>';
        }

        // mob_issues_title.innerHTML = issues + "-" + issues_detail;
        mob_issues.innerHTML = issues_detail;
    }


}
