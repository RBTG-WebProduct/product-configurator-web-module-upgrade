/** @odoo-module **/

import {registry} from "@web/core/registry";

registry.category("web_tour.tours").add("config", {
    url: "/shop",
    steps: () => [
        {
            content: "search 2 series",
            trigger: 'form input[name="search"]',
            run: "edit 2 series",
        },
        {
            content: "search 2 series",
            trigger: 'form:has(input[name="search"]) .oe_search_button',
            run: "click",
        },
        {
            content: "wait for search results to load",
            trigger: '.o_wsale_products_item_title:contains("2 Series")',
            run: function () {}, // Just wait for the product title to appear
        },
        {
            content: "select 2 series",
            trigger: '.o_wsale_products_item_title a:contains("2 Series")',
            run: "click",
        },
        {
            content: "wait for configurator to load",
            trigger: ".tab-pane.fade.container.show.active .config_attribute",
            run: function () {}, // Wait for config form to appear
        },
        {
            content: "click to select fuel",
            trigger: ".tab-pane.fade.container.show.active select",
            run: function () {
                $(
                    ".tab-pane.fade.container.show.active select:first option:contains(Gasoline)"
                )[0].selected = true;
                $(
                    ".tab-pane.fade.container.show.active select:first option:contains(Gasoline)"
                )
                    .closest("select")
                    .change();
            },
        },
        {
            content: "click to select engine",
            trigger:
                ".tab-pane.fade.container.show.active select.form-control.config_attribute.cfg-select.required_config_attrib",
            run: function () {
                $(
                    ".tab-pane.fade.container.show.active select > option:contains(218i)"
                )[0].selected = true;
                $(".tab-pane.fade.container.show.active select > option:contains(218i)")
                    .closest("select")
                    .change();
            },
        },
        {
            content: "click on continue",
            trigger: "span:contains(Continue)",
            run: "click",
        },
        {
            content: "click to select color",
            trigger: ".tab-pane.fade.container.show.active select",
            run: function () {
                $(
                    ".tab-pane.fade.container.show.active select:first option:contains(Silver)"
                )[0].selected = true;
                $(
                    ".tab-pane.fade.container.show.active select:first option:contains(Silver)"
                )
                    .closest("select")
                    .change();
            },
        },
        {
            content: "click to select rims",
            trigger:
                ".tab-pane.fade.container.show.active select.form-control.config_attribute.cfg-select.required_config_attrib",
            run: function () {
                $(
                    ".tab-pane.fade.container.show.active select > option:contains(V-spoke 16)"
                )[0].selected = true;
                $(
                    ".tab-pane.fade.container.show.active select > option:contains(V-spoke 16)"
                )
                    .closest("select")
                    .change();
            },
        },
        {
            content: "click on continue",
            trigger: "span:contains(Continue)",
            run: "click",
        },
        {
            content: "click to select Lines",
            trigger: ".tab-pane.fade.container.show.active select",
            run: function () {
                $(
                    ".tab-pane.fade.container.show.active select option:contains(Sport Line)"
                )[0].selected = true;
                $(
                    ".tab-pane.fade.container.show.active select option:contains(Sport Line)"
                )
                    .closest("select")
                    .change();
            },
        },
        {
            content: "click on continue",
            trigger: "span:contains(Continue)",
            run: "click",
        },
        {
            content: "click to select tapistry",
            trigger: ".tab-pane.fade.container.show.active select",
            run: function () {
                $(
                    ".tab-pane.fade.container.show.active select option:contains(Black)"
                )[0].selected = true;
                $(".tab-pane.fade.container.show.active select option:contains(Black)")
                    .closest("select")
                    .change();
            },
        },
        {
            content: "click on continue",
            trigger: "span:contains(Continue)",
            run: "click",
        },
        {
            content: "click to select Transmission",
            trigger: ".tab-pane.fade.container.show.active select",
            run: function () {
                $(
                    '.tab-pane.fade.container.show.active select:first option:contains("Automatic (Steptronic)")'
                )[0].selected = true;
                $(
                    '.tab-pane.fade.container.show.active select:first option:contains("Automatic (Steptronic)")'
                )
                    .closest("select")
                    .change();
            },
        },
        {
            content: "click to select Options",
            trigger:
                ".tab-pane.fade.container.show.active select.form-control.config_attribute.cfg-select.required_config_attrib",
            run: function () {
                $(
                    ".tab-pane.fade.container.show.active select > option:contains(Armrest)"
                )[0].selected = true;
                $(
                    ".tab-pane.fade.container.show.active select > option:contains(Armrest)"
                )
                    .closest("select")
                    .change();
            },
        },
        {
            content: "click on continue",
            trigger: "span:contains(Continue)",
            run: "click",
        },
        // {
        //     content: "click on add to cart",
        //     trigger: "#add_to_cart",
        //     run: "click",
        // },
        // {
        //     content: "proceed to checkout after configuration",
        //     trigger: "button[name='website_sale_product_configurator_checkout_button']",
        //     run: "click",
        // },
    ],
});
