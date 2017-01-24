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
                src: companyLogos[0].src,
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
            },
            navigation: {
                visible: true
            }
        }
    });

    // scope.content_area = new Vue({
    scope.webpage = new Vue({
        // el: '#content-area',
        el: '#webpage',
        data: {
            mainmenu: {
                visible: true
            },
            news: {
                visible: true,
                compact: undefined
            },
            content: {
                visible: true
            },
            nav_main: {
                compact: undefined
            }
        },
        mounted: function () {
            this.nav_main.compact = this.initFromClass('xs-compact-menu');
            this.news.compact = this.initFromClass('xs-compact-news');
            console.warn('Nav. compact: ' + JSON.stringify(this.nav_main.compact));
            console.warn('News compact: ' + JSON.stringify(this.news.compact));
        },
        methods: {
            initFromClass: function (className) {
                var isClassSet = (-1 !== this.$el.className.indexOf(className));

                console.log(JSON.stringify(this.$el.className));
                console.warn(className);
                console.warn(isClassSet);

                if (isClassSet) {
                    this.$el.classList.remove(className);
                }

                return isClassSet;
            },
            toggleNavCompacticity: function () {
                this.nav_main.compact = !this.nav_main.compact;
            },
            toggleNewsCompacticity: function () {
                this.news.compact = !this.news.compact;
            }
        }
    });

}, false);

