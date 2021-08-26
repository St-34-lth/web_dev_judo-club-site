(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer>\r\n\r\n          <div id='main-footer-container' class='container-fluid '>\r\n                    <div class='row'>\r\n                              <div class='col'>\r\n                                        <ul>\r\n                                                  <ui>\r\n                                                            <img width='24' height='24'\r\n                                                                      src='./assets/images/bootstrap-icons/facebook.svg'>\r\n                                                  </ui>\r\n                                                  <img width='24' height='24'\r\n                                                            src='./assets/images/bootstrap-icons/instagram.svg'>\r\n                                                  </ui>\r\n\r\n                                                  </ui>\r\n                                        </ul>\r\n\r\n                              </div>\r\n\r\n                    </div>\r\n\r\n          </div>\r\n</footer>";
},"useData":true});
templates['header'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div style='background-image:url("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"dojoImage") || (depth0 != null ? lookupProperty(depth0,"dojoImage") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dojoImage","hash":{},"data":data,"loc":{"start":{"line":64,"column":43},"end":{"line":64,"column":56}}}) : helper)))
    + ");' id='main-image-container' onload='playHomeVideo()'class='container-fluid row justify-content-center bg-dark rounded-1'>\r\n                   \r\n                    \r\n                   \r\n                    <a style=\"display:inline-block;\" href=\"./Home.html\"><img id='main-image' src='./assets/images/Home_intro.jpg' class='img-fluid'></a>\r\n                    \r\n\r\n          </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header>\r\n\r\n          \r\n          <div id='header-border' class='.container-fluid row bg-dark rounded-1'></div>\r\n          \r\n          \r\n          <nav id='navigation-bar' class=\"navbar navbar-expand-lg rounded-1\" aria-label=\"Tenth navbar example\">\r\n                    <div class=\"container-fluid\">\r\n                              <button class=\"navbar-toggler collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\r\n                                        data-bs-target=\"#navbarsExample08\" aria-controls=\"navbarsExample08\"\r\n                                        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                                        <a class=\"navbar-brand\" href=#'>\r\n                                                  <img id='judoButton' src='./assets/images/judo.png' width='24'\r\n                                                            height='24'>\r\n                                        </a>\r\n                              </button>\r\n\r\n                              <div class=\"navbar-collapse justify-content-md-center collapse\" id=\"navbarsExample08\"\r\n                                        style=\"\">\r\n                                        <ul class=\"navbar-nav\">\r\n                                                  <li class=\"nav-item\">\r\n\r\n                                                            <a class=\"nav-link "
    + alias4(((helper = (helper = lookupProperty(helpers,"isNewsActive") || (depth0 != null ? lookupProperty(depth0,"isNewsActive") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"isNewsActive","hash":{},"data":data,"loc":{"start":{"line":33,"column":79},"end":{"line":33,"column":95}}}) : helper)))
    + "\" aria-current=\"page\"\r\n                                                                      href=\"./News.html\">Judo News</a>\r\n                                                  </li>\r\n\r\n                                                  <li class=\"nav-item\">\r\n                                                            <a class=\"nav-link "
    + alias4(((helper = (helper = lookupProperty(helpers,"isHomeActive") || (depth0 != null ? lookupProperty(depth0,"isHomeActive") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"isHomeActive","hash":{},"data":data,"loc":{"start":{"line":38,"column":79},"end":{"line":38,"column":95}}}) : helper)))
    + "\" href=\"./Home.html\"\r\n                                                                      tabindex=\"-1\" aria-disabled=\"true\">Home</a>\r\n                                                  </li>\r\n                                                  <li class=\"nav-item\">\r\n                                                            <a class=\"nav-link "
    + alias4(((helper = (helper = lookupProperty(helpers,"isMediaActive") || (depth0 != null ? lookupProperty(depth0,"isMediaActive") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"isMediaActive","hash":{},"data":data,"loc":{"start":{"line":42,"column":79},"end":{"line":42,"column":96}}}) : helper)))
    + "\" href=\"./Media.html\"\r\n                                                                      tabindex=\"-1\" aria-disabled=\"true\">Media</a>\r\n                                                  </li>\r\n                                                  <li class=\"nav-item dropdown\">\r\n                                                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown08\"\r\n                                                                      data-bs-toggle=\"dropdown\"\r\n                                                                      aria-expanded=\"false\">More</a>\r\n                                                            <ul class=\"dropdown-menu\" aria-labelledby=\"dropdown08\">\r\n                                                                      <li><a class=\"dropdown-item\" href=\"./Results.html\">Results</a>\r\n                                                                      </li>\r\n                                                                      \r\n                                                                      <li><a class=\"dropdown-item\" href=\"./Contact.html\">Contact\r\n                                                                                          us</a></li>\r\n                                                            </ul>\r\n                                                  </li>\r\n                                        </ul>\r\n                              </div>\r\n                    </div>\r\n          </nav>\r\n\r\n          <div id='header-border' class='.container row justify-content-center bg-dark rounded-1'></div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"home") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":10},"end":{"line":72,"column":17}}})) != null ? stack1 : "")
    + "          \r\n         <div id='carouselBox' class='container-fluid bg-dark'>\r\n          <div id='news_info' class='container'>\r\n                    <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n                              <div id='carousel-controls' class=\"carousel-indicators\">\r\n                                        <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"0\"\r\n                                                  class=\"active\" aria-current=\"true\" aria-label=\"Slide 1\"></button>\r\n                                        <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"1\"\r\n                                                  aria-label=\"Slide 2\"></button>\r\n                                        <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"2\"\r\n                                                  aria-label=\"Slide 3\"></button>\r\n                              </div>\r\n                              <div class=\"carousel-inner\">\r\n                                        <div class=\"carousel-item active\">\r\n                                                  <img src=\"./assets/images/0eeab55e046a1dfc277f3fdf9db143e9.jpg\" height='300'\r\n                                                            width='300' class=\"d-block w-100\" alt=\"...\">\r\n                                                  <div id='caption' class=\"carousel-caption d-none d-md-block\">\r\n                                                            <h5 style='color:black'>First slide label</h5>\r\n                                                            <p style='color:black'>Some representative placeholder content for the\r\n                                                                      first slide.</p>\r\n                                                  </div>\r\n                                        </div>\r\n                                        <div class=\"carousel-item\">\r\n                                                  <img src=\"./assets/images/cute-boy-girls-doing-karate-judo-white-blue-kimono-children-practicing-martial-arts-vector-illustration-cute-boy-159896800.jpg\"\r\n                                                            class=\"d-block w-100\" width='250' height='300' alt=\"...\">\r\n                                                  <div id='caption' class=\"carousel-caption d-none d-md-block\">\r\n                                                            <h5 style='color:black'>Second slide label</h5>\r\n                                                            <p style='color:black;'>Some representative placeholder content for\r\n                                                                      the second slide.</p>\r\n                                                  </div>\r\n                                        </div>\r\n                                        <div class=\"carousel-item\">\r\n                                                  <img src=\"./assets/images/images.jpg\" width='250' height='300'\r\n                                                            class=\"d-block w-100\" alt=\"...\">\r\n                                                  <div id='caption' class=\"carousel-caption d-none d-md-block\">\r\n                                                            <h5 style='color:black'>Third slide label</h5>\r\n                                                            <p style='color:black'>Some representative placeholder content for the\r\n                                                                      third slide.</p>\r\n                                                  </div>\r\n                                        </div>\r\n                              </div>\r\n                              <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleCaptions\"\r\n                                        data-bs-slide=\"prev\">\r\n                                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                                        <span class=\"visually-hidden\">Previous</span>\r\n                              </button>\r\n                              <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleCaptions\"\r\n                                        data-bs-slide=\"next\">\r\n                                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                                        <span class=\"visually-hidden\">Next</span>\r\n                              </button>\r\n                    </div>\r\n          </div>\r\n         \r\n          </div>\r\n\r\n          </div>\r\n</header>";
},"useData":true});
templates['main'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row justify-content-center align-items-md-stretch\">\r\n          <div class=\"col-md-6 h-100 w-100\">\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n\r\n          <div class='p-3 mg-2 bg-light text-dark row'>\r\n                    <div id='left-news' class='col'>\r\n                              <p>Side News here</p>\r\n                              <article>\r\n                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus optio\r\n                                        recusandae deserunt aperiam itaque\r\n                                        consequuntur cupiditate beatae incidunt expedita natus saepe magni nostrum illum\r\n                                        vitae sit sint temporibus,\r\n                                        rem nulla accusantium. Repellendus cumque non neque excepturi ducimus sed quos\r\n                                        cum ipsum fugiat consequatur\r\n                                        repellat dolore, magnam doloremque quasi? Inventore, officia.</article>\r\n                    </div>\r\n                    <div id='main-news' class='col-6'>\r\n                              <p>Main News here</p>\r\n                              <article>\r\n                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus optio\r\n                                        recusandae deserunt aperiam itaque consequuntur cupiditate beatae incidunt\r\n                                        expedita natus saepe magni nostrum illum vitae sit sint temporibus, rem nulla\r\n                                        accusantium. Repellendus cumque non neque excepturi ducimus sed quos cum ipsum\r\n                                        fugiat consequatur repellat dolore, magnam doloremque quasi? Inventore, officia.\r\n                              </article>\r\n                    </div>\r\n                    <div id='right-news' class='col'>\r\n                              <p>Side News here too</p>\r\n                              <article>\r\n                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus optio\r\n                                        recusandae deserunt aperiam itaque\r\n                                        consequuntur cupiditate beatae incidunt expedita natus saepe magni nostrum illum\r\n                                        vitae sit sint temporibus,\r\n                                        rem nulla accusantium. Repellendus cumque non neque excepturi ducimus sed quos\r\n                                        cum ipsum fugiat consequatur\r\n                                        repellat dolore, magnam doloremque quasi? Inventore, officia.</article>\r\n                    </div>\r\n          </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div id='main-media-container' class='container-fluid bg-dark bg-light'>\r\n                    <div class='row g-2 justify-content-center'>\r\n                              <div class=\"col-6\">\r\n                                        <div class=\"d-flex p-3 border justify-content-evenly bg-dark\">\r\n                                                  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"media1") || (depth0 != null ? lookupProperty(depth0,"media1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"media1","hash":{},"data":data,"loc":{"start":{"line":101,"column":50},"end":{"line":101,"column":62}}}) : helper))) != null ? stack1 : "")
    + "\r\n\r\n                                        </div>\r\n                              </div>\r\n                             \r\n                              <div class=\"col-6\">\r\n                                        <div class=\"d-flex p-3 border justify-content-evenly bg-dark\">\r\n                                                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"media2") || (depth0 != null ? lookupProperty(depth0,"media2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"media2","hash":{},"data":data,"loc":{"start":{"line":108,"column":48},"end":{"line":108,"column":60}}}) : helper))) != null ? stack1 : "")
    + "\r\n                              \r\n                                        </div>\r\n                              </div>\r\n                    <div class=\"col-6\">\r\n                              <div class=\"d-flex p-3 justify-content-evenly border bg-dark\">\r\n                                       "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"media3") || (depth0 != null ? lookupProperty(depth0,"media3") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"media3","hash":{},"data":data,"loc":{"start":{"line":114,"column":39},"end":{"line":114,"column":51}}}) : helper))) != null ? stack1 : "")
    + "\r\n                    \r\n                              </div>\r\n                    </div>\r\n                              <div class=\"col-6\">\r\n                                        <div class=\"d-flex p-3  justify-content-evenly border bg-dark text-light\">\r\n                                                  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"media4") || (depth0 != null ? lookupProperty(depth0,"media4") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"media4","hash":{},"data":data,"loc":{"start":{"line":120,"column":50},"end":{"line":120,"column":62}}}) : helper))) != null ? stack1 : "")
    + "\r\n                                        </div>\r\n                              </div>\r\n                    </div>\r\n          </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div id='home-container' class='container'>\r\n                    <div class='row g-2 justify-content-center align-items-center bg-dark'>\r\n                              <div id='left-main-col' class='col-2'>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"leftList") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":131,"column":50},"end":{"line":135,"column":49}}})) != null ? stack1 : "")
    + "                                        \r\n                              </div>\r\n                              <div id='centre-main-col' class='col-8'>\r\n                                                  <div class='row'>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"mainList") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":140,"column":50},"end":{"line":148,"column":59}}})) != null ? stack1 : "")
    + "                                                  </div>\r\n                              </div>\r\n                              <div id='right-main-col' class='col-2'>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"rightList") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":152,"column":40},"end":{"line":154,"column":49}}})) != null ? stack1 : "")
    + "                              </div>\r\n                              \r\n\r\n                              \r\n                    </div>\r\n                    \r\n          </div>\r\n\r\n          <!-- JOIN US -->\r\n        \r\n          \r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        \r\n                                                            <div class='col-6 p-2 bg-dark'>\r\n                                                            <a class='news-col' href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"newsUrl") || (depth0 != null ? lookupProperty(depth0,"newsUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newsUrl","hash":{},"data":data,"loc":{"start":{"line":143,"column":86},"end":{"line":143,"column":97}}}) : helper)))
    + "\" style=\"background-image:url('"
    + alias4(((helper = (helper = lookupProperty(helpers,"backgroundImgUrl") || (depth0 != null ? lookupProperty(depth0,"backgroundImgUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backgroundImgUrl","hash":{},"data":data,"loc":{"start":{"line":143,"column":128},"end":{"line":143,"column":148}}}) : helper)))
    + "');\">\r\n                                                            "
    + alias4(((helper = (helper = lookupProperty(helpers,"newsTitle") || (depth0 != null ? lookupProperty(depth0,"newsTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"newsTitle","hash":{},"data":data,"loc":{"start":{"line":144,"column":60},"end":{"line":144,"column":73}}}) : helper)))
    + "\r\n                                                            </a>\r\n                                                            </div>\r\n\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"h-100 w-100 p-5 text-white bg-dark rounded-1\">\r\n                    <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":169,"column":24},"end":{"line":169,"column":33}}}) : helper)))
    + "</h2>\r\n                    <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"welcomeText") || (depth0 != null ? lookupProperty(depth0,"welcomeText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"welcomeText","hash":{},"data":data,"loc":{"start":{"line":170,"column":23},"end":{"line":170,"column":38}}}) : helper)))
    + "\r\n                    </p>\r\n                    <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">\r\n                              Join!\r\n                    </button>\r\n          \r\n                    <!-- Modal -->\r\n                    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\"\r\n                              aria-hidden=\"true\">\r\n                              <div class=\"modal-dialog\">\r\n                                        <div class=\"modal-content\">\r\n                                                  <div class=\"modal-header\">\r\n                                                            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\r\n                                                            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\"\r\n                                                                      aria-label=\"Close\"></button>\r\n                                                  </div>\r\n                                                  <div class=\"modal-body\">\r\n                                                            <form action=\"\">\r\n                                                                      <label for=\"fname\">First name:</label>\r\n                                                                      <input type=\"text\" id=\"fname\" name=\"fname\"><br><br>\r\n                                                                      <label for=\"lname\">Last name:</label>\r\n                                                                      <input type=\"text\" id=\"lname\" name=\"lname\"><br><br>\r\n                                                                      <input type=\"submit\" value=\"Submit\">\r\n                                                            </form>\r\n          \r\n                                                            <p>Click the \"Submit\" button to complete your application form.</p>\r\n          \r\n                                                  </div>\r\n                                                  <div class=\"modal-footer\">\r\n                                                            <button type=\"button\" class=\"btn btn-secondary\"\r\n                                                                      data-bs-dismiss=\"modal\">Close</button>\r\n                                                            <button type=\"button\" class=\"btn btn-primary\">Submit</button>\r\n                                                  </div>\r\n                                        </div>\r\n                              </div>\r\n                    </div>\r\n          \r\n          </div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class='container-fluid bg-dark'>\r\n                    <div class='row'>\r\n                              <div class='col-6'>\r\n                              <h2>Latest Results</h2>\r\n                              </div>\r\n                              <div class='col-6'>\r\n                                        \r\n                                        <div class=\"modal\" tabindex=\"-1\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Modal title</h5>\r\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Modal body text goes here.</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#searchModal\"\r\n          data-bs-whatever=\"@fat\">Find more</button>\r\n          <div class=\"modal fade\" id=\"searchModal\" tabindex=\"-1\" aria-labelledby=\"searchModal\" aria-hidden=\"true\">\r\n                    <div class=\"modal-dialog\">\r\n                              <div class=\"modal-content\">\r\n                                        <div class=\"modal-header\">\r\n                                                  <h5 class=\"modal-title\" id=\"searchModal\">Search results</h5>\r\n                                                  <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\"\r\n                                                            aria-label=\"Close\"></button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                                  <form>\r\n\r\n                                                            <div class=\"mb-3\">\r\n                                                                      <label for=\"generalQueryBox\"\r\n                                                                                class=\"col-form-label\">Search</label>\r\n                                                                      <input type=\"text\" class=\"form-control\" id=\"generalQueryBox\">\r\n                                                            </div>\r\n                                                            <div class=\"mb-3\">\r\n                                                                      <label for=\"categoryQueryBox\"\r\n                                                                                class=\"col-form-label\">Category</label>\r\n                                                                                <div class=\"dropdown\">\r\n                                                                                          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\"\r\n                                                                                                    data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                                                                                    Dropdown button\r\n                                                                                          </button>\r\n                                                                                          <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n                                                                                                    <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n                                                                                                    <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\r\n                                                                                                    <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\r\n                                                                                          </ul>\r\n                                                                                </div>\r\n                                                            </div>\r\n                                                  </form>\r\n                                        </div>\r\n                                        <div class=\"modal-footer\">\r\n                                                  <button type=\"button\" class=\"btn btn-secondary\"\r\n                                                            data-bs-dismiss=\"modal\">Close</button>\r\n                                                  <button type=\"button\" class=\"btn btn-primary\">Search</button>\r\n                                        </div>\r\n                              </div>\r\n                    </div>\r\n          </div>\r\n                                        \r\n                    </div>\r\n                   \r\n                    \r\n                    </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"eventList") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":285,"column":20},"end":{"line":300,"column":29}}})) != null ? stack1 : "")
    + "          </div>\r\n          \r\n         \r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div id='eventList'class='row'>\r\n                              \r\n                              <div id='eventItem' class='col'>\r\n                                        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"resultName") || (depth0 != null ? lookupProperty(depth0,"resultName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resultName","hash":{},"data":data,"loc":{"start":{"line":289,"column":43},"end":{"line":289,"column":57}}}) : helper)))
    + "</p>\r\n                                        \r\n                              </div>\r\n                              <div id='eventItem' class='col'>\r\n                                        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"resultLocation") || (depth0 != null ? lookupProperty(depth0,"resultLocation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resultLocation","hash":{},"data":data,"loc":{"start":{"line":293,"column":43},"end":{"line":293,"column":61}}}) : helper)))
    + "</p>\r\n                              </div>\r\n                              <div id='eventItem' class='col'>\r\n                                        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"resultProps") || (depth0 != null ? lookupProperty(depth0,"resultProps") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resultProps","hash":{},"data":data,"loc":{"start":{"line":296,"column":43},"end":{"line":296,"column":58}}}) : helper)))
    + "</p>\r\n                              </div>\r\n                             \r\n                    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"home") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":4,"column":7}}})) != null ? stack1 : "")
    + "\r\n<main>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"news") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":10},"end":{"line":95,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"media") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":96,"column":10},"end":{"line":125,"column":17}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"home") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":127,"column":10},"end":{"line":166,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"join") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":167,"column":10},"end":{"line":208,"column":17}}})) != null ? stack1 : "")
    + "          \r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"calendar") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":211,"column":10},"end":{"line":304,"column":17}}})) != null ? stack1 : "")
    + "          \r\n</main>\r\n";
},"useData":true});
})();