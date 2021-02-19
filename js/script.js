$(document).ready(function () {

    var setTotal = function(){
        var total = $(".component-content").children(":visible").length;
        $(".found").html("Total: " + total + " employee" + (total>1 ? "s" : ""));
    }

    setTotal()

    $(".empty").hide();

    $(".close").on("click", function(){
        $("input").val("");
        $("input").trigger("keyup");
    })

    $("input").on("keyup", function () {
        var value = $(this).val().toLowerCase();

        $(".employee-data-container").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

        var visible = $(".component-content").children(":visible").length;
        $(".found").html(visible + " employee"  + (visible>1 ? "s" : "") + " found.");

        if (visible == 0) {
            $(".empty").show();
        } else {
            $(".empty").hide();
        }

        if(value != ""){
            $(".close").show();
        }else{
            $(".close").hide();
            setTotal()
        }
    });
});