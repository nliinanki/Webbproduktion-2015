$(document).ready(function() {
    
    $('#buttonSubmit').click(function(empty) {
        var isValid = true;
        $('input.required').each(function() {
            
            if ($.trim($(this).val()) === '') {
                isValid = false;
                $(this).css({
                    "border": "1px solid red",
                });
            }
            else {
                $(this).css({
                    "border": "",
                
                });
            }
        });
        if (isValid === false)
            empty.preventDefault();
        else
            alert('Tack för din order');
    });




});
