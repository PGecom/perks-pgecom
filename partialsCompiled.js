(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['footer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"footer-title\">\n                    <h6>ADDRESS</h6>\n                    <p>PO BOX 767398, Roswell, GA 30076<br>\n                        <a href=\"tel:+1 (678) 504 8981\">+1 (678) 504 8981</a><br>\n                        <a href=\"mailto:info@pgecom.com\">info@pgecom.com</a>\n                    </p>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"footer-title\">\n                    <h6>FOLLOW US</h6>\n                    <ul>\n                        <li><a href=\"https://www.facebook.com/pgecom\">Facebook</a></li>\n                        <li><a href=\"https://www.youtube.com/channel/UCkg2EsiO2FASY3ZBlPIcI-g\">YouTube</a></li>\n                        <li><a href=\"https://twitter.com/pgecommerce\">Twitter</a></li>\n                        <li><a href=\"https://www.instagram.com/pgecom/\">Instagram</a></li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"col-md-3\">\n                <div class=\"footer-title\">\n                    <h6>POLICIES</h6>\n                    <ul>\n                        <li><a href=\"./refund-policy\">Refund Policy</a></li>\n                        <li><a href=\"./terms-policy\">Terms of Service</a></li>\n                        <li><a href=\"./privacy-policy\">Privacy Policy</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"footer-title\">\n                    <h6>ABOUT US</h6>\n                    <p>Protege Global Ecommerce (PG-ecom) has trained over 1,200 people in how to launch and manage\n                        successful online businesses.\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"copyright\">\n                    <p>Copyright © 2021. Protege Global Ecommerce, INC</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>";
},"useData":true});
Handlebars.partials['header'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"navbar"),depth0,{"name":"navbar","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"banner"),depth0,{"name":"banner","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"modals"),depth0,{"name":"modals","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"ecommerce"),depth0,{"name":"ecommerce","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</header>";
},"usePartial":true,"useData":true});
Handlebars.partials['modals'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!--  Contact Modal -->\n<div class=\"modal fade\" id=\"contactmodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"phpcontactform\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-dialog-zoom\" role=\"document\">\n        <div class=\"modal-content\">\n\n            <div class=\"modal-body\">\n\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n\n                <form class=\"quote-form\" action=\"php/contact.php\" method=\"post\" id=\"phpcontactform\">\n                    <h5 class=\"text-center mt-3 mb-4\">Start the course now!</h5>\n                    <div class=\"form-group\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\"> <input type=\"text\" class=\"form-control\" id=\"first_name\"\n                                    name=\"first_name\" placeholder=\"First Name*\" required> </div>\n                            <div class=\"col-sm-6\"> <input type=\"text\" class=\"form-control\" id=\"last_name\"\n                                    name=\"last_name\" placeholder=\"Last Name*\" required> </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email Address*\"\n                            required>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" id=\"phone\" name=\"phone\" placeholder=\"Phone*\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" id=\"pac-input\" name=\"address\" placeholder=\"Address*\"\n                            required>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-primary w-100\" id=\"js-contact-btn\"><strong>\n                            Start the course now!\n                        </strong> </button>\n                    <div id=\"js-contact-result\" data-success-msg=\"Success, We will get back to you soon\"\n                        data-error-msg=\"Oops! Something went wrong\"></div>\n\n                </form>\n\n\n            </div>\n\n        </div>\n    </div>\n</div>\n<!--  // Contact Modal -->";
},"useData":true});
Handlebars.partials['navbar'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "..";
},"3":function(container,depth0,helpers,partials,data) {
    return "active";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!-- Navbar -->\n<div class=\"nav-menu\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <nav class=\"navbar navbar-expand-lg navbar-light\">\n          <a class=\"navbar-brand\" href=\"/\">\n            <img src=\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"isPageHome") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":22},"end":{"line":8,"column":57}}})) != null ? stack1 : "")
    + "/images/pg-logo.png\" alt=\"PG-ecom Logo\" />\n          </a>\n          <button class=\"navbar-toggler navbar-toggler_second\" type=\"button\" data-toggle=\"collapse\"\n            data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n            <i class=\"fas fa-bars\"></i>\n            <!--  <span class=\"navbar-toggler-icon\"></span> -->\n          </button>\n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav ml-auto\">\n              <!-- <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"tel:+16785048981\" tabindex=\"-1\" aria-disabled=\"true\">+1 678 504-8981</a>\n                                </li> -->\n              <li class=\"nav-item "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isPageHome") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":34},"end":{"line":21,"column":65}}})) != null ? stack1 : "")
    + "\">\n                <a class=\"nav-link\" href=\"/\" tabindex=\"-1\" aria-disabled=\"true\">\n                  Home\n                </a>\n              </li>\n              <li class=\"nav-item "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isPageFaqs") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":34},"end":{"line":26,"column":65}}})) != null ? stack1 : "")
    + "\">\n                <a class=\"nav-link\" href=\"https://pgecom.com/faqs\" tabindex=\"-1\" aria-disabled=\"true\">\n                  FAQs\n                </a>\n              </li>\n              <li class=\"nav-item "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isPageAboutUs") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":34},"end":{"line":31,"column":68}}})) != null ? stack1 : "")
    + "\">\n                <a class=\"nav-link\" href=\"https://pgecom.com/about\" tabindex=\"-1\" aria-disabled=\"true\">\n                  About Us\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\"\n                  href=\"https://sso.teachable.com/secure/583714/users/sign_up?reset_purchase_session=1\" tabindex=\"-1\"\n                  aria-disabled=\"true\">\n                  Sign Up\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\"\n                  href=\"https://sso.teachable.com/secure/583714/users/sign_in?reset_purchase_session=1\" tabindex=\"-1\"\n                  aria-disabled=\"true\">\n                  Login\n                </a>\n              </li>\n            </ul>\n          </div>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n<!--//END NEW INSURANCE -->";
},"useData":true});
Handlebars.partials['perks'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"col-md-4\">\n                <div class=\"row perks-element\">\n                    <div class=\"perks-block\">\n                        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"businessLogo") || (depth0 != null ? lookupProperty(depth0,"businessLogo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"businessLogo","hash":{},"data":data,"loc":{"start":{"line":15,"column":34},"end":{"line":15,"column":50}}}) : helper)))
    + "\" alt=\"\"/>\n                        <p><b>"
    + alias4(((helper = (helper = lookupProperty(helpers,"benefit_description") || (depth0 != null ? lookupProperty(depth0,"benefit_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"benefit_description","hash":{},"data":data,"loc":{"start":{"line":17,"column":30},"end":{"line":17,"column":53}}}) : helper)))
    + "</b></p>\n                        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"platform_description") || (depth0 != null ? lookupProperty(depth0,"platform_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"platform_description","hash":{},"data":data,"loc":{"start":{"line":18,"column":27},"end":{"line":18,"column":51}}}) : helper)))
    + "</p>\n                        <div class=\"add-btn perks-btn_wrap\">\n                            <a href=\""
    + alias4(container.lambda((depth0 != null ? lookupProperty(depth0,"affiliate_url") : depth0), depth0))
    + "\" class=\"btn btn-primary\">\n                                Get now\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "..";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"perks\" id=\"perks\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"center-title\">\n                    <h1>perks</h1>\n                </div>\n            </div>\n        </div>\n        <div class=\"row perks-wrap\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"list_perks") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":28,"column":21}}})) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n    <div class=\"perks-bg perks-bg_secong\">\n        <img src=\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"isPageHome") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":18},"end":{"line":33,"column":53}}})) != null ? stack1 : "")
    + "/images/bg-image4.png\" class=\"img-fluid\" alt=\"#\" />\n    </div>\n</section>";
},"useData":true});
})();