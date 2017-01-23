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
        el: '#footer',
        data: {
            visible: true,
            copyrightInfo: {
                visible: true
                // visible: false
            },
            navigation: {
                visible: true
                // visible: false
            }
        }
    });

    scope.content_area = new Vue({
        el: '#content-area',
        data: {
            mainmenu: {
                visible: true
            },
            news: {
                visible: true
            },
            content: {
                visible: true
            },
            nav_main: {
                display: undefined
            }
        },
        methods: {
            navHamburgerCkickHandler: function () {
                console.warn(JSON.stringify(this.nav_main.display));
                if (this.nav_main.display === 'block') {
                    this.navMobileMenuHide();
                }
                else {
                    this.navMobileMenuShow();
                }
            },
            navMobileMenuShow: function () {
                this.nav_main.display = 'block';

            },
            navMobileMenuHide: function () {
                this.nav_main.display = 'none';

            }
        }
    });

    // scope.navmain = new Vue({
    //     el: '#nav-main',
    //     data: {
    //         color: undefined
    //     },
    //     methods:{
    //         clickHandler: function () {
    //
    //         },
    //         showMenu: function () {
    //
    //         }
    //     }
    // });

}, false);

