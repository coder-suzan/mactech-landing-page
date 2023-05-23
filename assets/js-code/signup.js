

//    form vaidation js code
$().ready(function() {
    // validate signup form on keyup and submit
    $("#signupForm").validate({
        rules: {
            name: {
                required: true
           },
           property_company_name: {
               required: true
           },
            email: {
                required: true,
                email: true
            },
            phone_number: {
                required: true
            },
            country_region: {
                required: true
            }
        },
        messages: {
            name: "Name is required.",
            property_company_name: "Property Name / Company Name is required.",
            email: "Email is required.",
            phone_number: "Phone number is required.",
            country_region: "Country/Region name is required.",
        }
    });

});