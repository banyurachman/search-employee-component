$(document).ready(function () {

    var setTotal = function(){
        var total = $(".component-content").children(":visible").length;
        $("#component-wrapper .found").html("Total: " + total + " employee" + (total>1 ? "s" : ""));
    }

    setTotal()

    $("#component-wrapper .empty").hide();

    $("#component-wrapper .close").on("click", function(){
        $("#component-wrapper input").val("");
        $("#component-wrapper input").trigger("keyup");
    })

    $("#component-wrapper input").on("keyup", function () {
        var value = $(this).val().toLowerCase();

        $("#component-wrapper .employee-data-container").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

        var visible = $(".component-content").children(":visible").length;
        $("#component-wrapper .found").html(visible + " employee"  + (visible>1 ? "s" : "") + " found.");

        if (visible == 0) {
            $("#component-wrapper .empty").show();
        } else {
            $("#component-wrapper .empty").hide();
        }

        if(value != ""){
            $("#component-wrapper .close").show();
        }else{
            $("#component-wrapper .close").hide();
            setTotal()
        }
    });
});