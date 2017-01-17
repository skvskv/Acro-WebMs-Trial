window.addEventListener('load',function () {
    var scope = window,
        companyLogos = [
            {src: "images/header-company-logo.png"},
            {src: "images/header-company-logo-1px.png"},
            {src: "images/header-company-logo-test.png"},
            {src: "images/header-company-logo-test-wide.png"}
        ];

    scope.header = new Vue({
        el: '#header',
        data: {
            visible: true,
            logo: {
                visible: true,
                height: 100,
                width:100,
                src: companyLogos[3].src,
                alt: "название компании, самая клевая компания"
            },
            brief: {
                visible: true
            },
            phones: {
                visible: true
            }

        }
    });

    scope.footer = new Vue({
        el: 'footer',
        data: {
            visible: true
        }
    });



}, false);

