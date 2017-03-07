(function ($) {
    $(document).ready(function () {

        var button = $("button.btn");
        var wynik = $(".wynik ul");
        
        button.on("click", function (e) {
            wynik.empty();
            button.css("width", "200px;");
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/users",
                method: "GET",
                success: function (data) {
                    printData(data);
                }

            });

        });

        function header() {
            var value = '<span class="place_h">Name</span><span class="place_h">Username</span><span class="place_h">Email</span><span class="place_h">Phone</span>';
            $("<li></li>").html(value).appendTo(wynik);

        }

        function printData(obj1) {
            header();

            jQuery.each(obj1, function (i, val) {
                    var li = $("<li></li>");
                    var text = '<span class="place">' + val.name + "</span>" + '<span class="place">' + val.username + "</span>" + '<span class="place">' + val.email + "</span>" + '<span class="place">' + val.phone + "</span>";

                    li.html(text).appendTo(wynik);                }

            )
        };

    });
})(jQuery);