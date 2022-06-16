"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[51094],{19434:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=a(83117),o=a(80102),i=(a(67294),a(3905)),r=a(13904),s=["components"],l={title:"Output API",tags:["Output","API"]},p=void 0,d={unversionedId:"apis/subsystems/output",id:"apis/subsystems/output",title:"Output API",description:"The Output API is responsible for visual aspects of Moodle content. This page explain how renderers, renderables, themes and templates all work together.",source:"@site/docs/apis/subsystems/output.md",sourceDirName:"apis/subsystems",slug:"/apis/subsystems/output",permalink:"/devdocs/docs/apis/subsystems/output",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/subsystems/output.md",tags:[{label:"Output",permalink:"/devdocs/docs/tags/output"},{label:"API",permalink:"/devdocs/docs/tags/api"}],version:"current",lastUpdatedBy:"ferranrecio",lastUpdatedAt:1655390877,formattedLastUpdatedAt:"16/06/2022",frontMatter:{title:"Output API",tags:["Output","API"]},sidebar:"docs",previous:{title:"Groups API",permalink:"/devdocs/docs/apis/subsystems/groups"},next:{title:"Plagiarism API",permalink:"/devdocs/docs/apis/subsystems/plagiarism"}},m={},u=[{value:"Page Output Journey",id:"page-output-journey",level:2},{value:"Renderable",id:"renderable",level:3},{value:"Output Functions",id:"output-functions",level:2},{value:"p() and s()",id:"p-and-s",level:3},{value:"format_text()",id:"format_text",level:3},{value:"format_string()",id:"format_string",level:3},{value:"See also",id:"see-also",level:2}],h={toc:u};function c(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,(0,n.Z)({frontMatter:l},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"The Output API is responsible for visual aspects of Moodle content. This page explain how renderers, renderables, themes and templates all work together."),(0,i.kt)("p",null,"The following documentation is also related:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"../../guides/templates"},"Templates")," used for rendering the output such as HTML or email messages bodies")),(0,i.kt)("h2",{id:"page-output-journey"},"Page Output Journey"),(0,i.kt)("p",null,"Lets start with building a page that is part of an admin tool."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/admin/tool/demo/index.php"',title:'"/admin/tool/demo/index.php"'},"<?php\n// Standard GPL and phpdocs\nrequire_once(__DIR__ . '/../../../config.php');\nrequire_once($CFG->libdir.'/adminlib.php');\n\nadmin_externalpage_setup('tooldemo');\n\n// Set up the page.\n$title = get_string('pluginname', 'tool_demo');\n$pagetitle = $title;\n$url = new moodle_url(\"/admin/tool/demo/index.php\");\n$PAGE->set_url($url);\n$PAGE->set_title($title);\n$PAGE->set_heading($title);\n\n$output = $PAGE->get_renderer('tool_demo');\n\necho $output->header();\necho $output->heading($pagetitle);\n\n$renderable = new \\tool_demo\\output\\index_page('Some text');\necho $output->render($renderable);\n\necho $output->footer();\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Setup of an admin page")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"On admin pages the ",(0,i.kt)("inlineCode",{parentName:"p"},"admin_externalpage_setup($sectionname);")," function should be used to setup and perform permission checks, for example:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="admin/tool/demo/mypage.php"',title:'"admin/tool/demo/mypage.php"'},"require_once(__DIR__ . '/../../config.php');\nrequire_once(\"{$CFG->libdir}/adminlib.php\");\nadmin_externalpage_setup('example');\n")))),(0,i.kt)("p",null,"First, we set some general ",(0,i.kt)("inlineCode",{parentName:"p"},"$PAGE")," properties. We load the title of the page from a lang string (see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/String_API"},"String API"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// Set up the page.\n$title = get_string('pluginname', 'tool_demo');\n$pagetitle = $title;\n$url = new moodle_url(\"/admin/tool/demo/index.php\");\n$PAGE->set_url($url);\n$PAGE->set_title($title);\n$PAGE->set_heading($title);\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"What is $PAGE and where did it come from ?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"$PAGE")," is a global variable used to track the state of the page that is being returned. It is an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"moodle_page")," class defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/pagelib.php"),". See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Page_API"},"Page API")," for more information on the ",(0,i.kt)("inlineCode",{parentName:"p"},"$PAGE")," variable."))),(0,i.kt)("p",null,"The most important properties stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"$PAGE")," are the page context, the url, the layout, title and headings. ",(0,i.kt)("inlineCode",{parentName:"p"},"$PAGE")," also gives access to some other important classes such as ",(0,i.kt)("inlineCode",{parentName:"p"},"$PAGE->requires"),", which is an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"page_requirements_manager")," (",(0,i.kt)("inlineCode",{parentName:"p"},"lib/outputrequirementslib.php"),"). The ",(0,i.kt)("inlineCode",{parentName:"p"},"page_requirements_manager")," class lets us set dependencies on e.g. JavaScript and css to be inserted in the correct place in the page (The order things are inserted in the page is hugely important for performance)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$PAGE")," also lets us load specific renderers for a plugin, or plugin and subtype. We will cover renderers in more detail next."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$output = $PAGE->get_renderer('tool_demo');\n")),(0,i.kt)("p",null,"This gets an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin_renderer_base")," class that we use to create all output for our page. Themers can subclass this renderer to override specific render methods in order to customise Moodle's output. See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Output_renderers"},"Output renderers")," for more information, and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Overriding_a_renderer"},"Overriding a renderer")," for information about how themers can customise a renderer."),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some pages use the global variable `$OUTPUT to generate their output. This is a generic renderer used for core pages etc, but plugins should always use a more specific plugin renderer."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"echo $output->header();\necho $output->heading($pagetitle);\n")),(0,i.kt)("p",null,"This code prints the header of the page and adds one heading to the page at the top of the content region. Page headings are very important in Moodle and should be applied consistently. See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/HTML_Guidelines"},"HTML Guidelines")," for more information on how and where to use  headings."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$renderable = new \\tool_demo\\output\\index_page('Some text');\necho $output->render($renderable);\n")),(0,i.kt)("p",null,"This is the most interesting part of our page. We are creating a renderable and telling our renderer to render it. The renderable is usually more complex than this, it should hold all the data required for the renderer to display the page. This means we should perform all our logic such as database queries, page parameters and access checks in advance and the results should be passed as data to the renderable. The renderable then just takes that data and returns a HTML representation of it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"echo $output->footer();\n")),(0,i.kt)("p",null,"This prints the HTML for the bottom of the page. It is very important because it also prints out things that were added to the page_requirements_manager and need to be printed in the footer. Things like JavaScript includes, navigation tree setup, closing open containers tags etc. The reason all JavaScripts are added to the footer of the page is for performance. If you add JavaScript includes to the top of the page, or inline with the content the browser must stop and execute the JavaScript before it can render the page. See ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/speed/docs/insights/BlockingJS"},"https://developers.google.com/speed/docs/insights/BlockingJS")," for more information."),(0,i.kt)("h3",{id:"renderable"},"Renderable"),(0,i.kt)("p",null,"In the code above, we created a renderable. This is a class that you have to add to your plugin. It holds all the data required to display something on the page. Here is the renderable for this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/admin/tool/demo/classes/output/index_page.php"',title:'"/admin/tool/demo/classes/output/index_page.php"'},"<?php\n// Standard GPL and phpdocs\n\nnamespace tool_demo\\output;\n\nuse renderable\nuse renderer_base\nuse templatable\nuse stdClass;\n\nclass index_page implements renderable, templatable {\n    /** @var string $sometext Some text to show how to pass data to a template. */\n    private $sometext = null;\n\n    public function __construct($sometext): void {\n        $this->sometext = $sometext;\n    }\n\n    /**\n     * Export this data so it can be used as the context for a mustache template.\n     *\n     * @return stdClass\n     */\n    public function export_for_template(renderer_base $output): stdClass {\n        $data = new stdClass();\n        $data->sometext = $this->sometext;\n        return $data;\n    }\n}\n")),(0,i.kt)("p",null,"This class implements the renderable interface, which has no methods, and the templatable interface, which means that this class could be rendered with a template, so it must implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"export_for_template")," method. So in this example, the class accepts data via it's constructor, and stores that data in class variables. It does nothing else fancy with the data in this example (but it could). Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"export_for_template")," function should only return simple types (arrays, stdClass, bool, int, float, string)."),(0,i.kt)("p",null,"Now lets look at the renderer for this plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="admin/tool/demo/classes/output/renderer.php"',title:'"admin/tool/demo/classes/output/renderer.php"'},"<?php\n// Standard GPL and phpdocs\n\nnamespace tool_demo\\output;\n\nuse plugin_renderer_base;\n\nclass renderer extends plugin_renderer_base {\n    /**\n     * Defer to template.\n     *\n     * @param index_page $page\n     *\n     * @return string html for the page\n     */\n    public function render_index_page($page): string {\n        $data = $page->export_for_template($this);\n        return parent::render_from_template('tool_demo/index_page', $data);\n    }\n}\n")),(0,i.kt)("p",null,"The renderer exists to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"render_<page>")," methods for all renderables used in the plugin. A theme designer can provide a custom version of this renderer that changes the behaviour of any of the render methods and so to customize their theme. In this example, the render method for the index page (",(0,i.kt)("inlineCode",{parentName:"p"},"render_index_page"),") does 2 things. It asks the renderable to export it's data so that it is suitable for passing as the context to a template, and then renders a specific template with this context. A themer could either manipulate the data in the render method (e.g. removing menu entries), or change the template (change the generated html) to customize the output."),(0,i.kt)("p",null,"The template used in this plugin is located in the plugins templates folder. The template can also be overridden by a themer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="admin/tool/demo/templates/index_page.mustache"',title:'"admin/tool/demo/templates/index_page.mustache"'},'<div class="hero-unit">\n  <h1>Heading</h1>\n  <p>{{sometext}}</p>\n</div>\n')),(0,i.kt)("p",null,"This is the mustache template for this demo. It uses some bootstrap classes directly to position and style the content on the page. ",(0,i.kt)("inlineCode",{parentName:"p"},"{{sometext}}")," is replaced with the variable from the context when this template is rendered. For more information on templates see ",(0,i.kt)("a",{parentName:"p",href:"../../guides/templates"},"Templates"),"."),(0,i.kt)("h2",{id:"output-functions"},"Output Functions"),(0,i.kt)("p",null,"This section tries to explain a bit how dynamic data should be sent from Moodle to the browser in an organised and standard way."),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Obviously it's possible to have your own output methods but, thinking that you are going to share your code (yep, this is an OpenSource project!) and in the collaborative way we try to build and maintain the system every day, it would be really better to follow the basic guidelines explained below."),(0,i.kt)("p",{parentName:"div"},"By using them you will be helping to have better, more secure and readable code. Spend some minutes trying to understand them, please!"))),(0,i.kt)("p",null,"Of course, these functions can be discussed, modified and new functions can arrive if there are some good reasons for it. Just discuss it in the ",(0,i.kt)("a",{parentName:"p",href:"http://moodle.org/mod/forum/view.php?id=55"},"General developer forum"),"."),(0,i.kt)("p",null,"For each of the functions below we'll try to explain when they should be used, explaining the most important parameters supported and their meaning. Let's review them!"),(0,i.kt)("h3",{id:"p-and-s"},"p() and s()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"function s($var, $strip=false)\nfunction p($var, $strip=false)\n")),(0,i.kt)("p",null,"These functions share the same code so they will be explained together. The only difference is that ",(0,i.kt)("inlineCode",{parentName:"p"},"s()")," returns the string while ",(0,i.kt)("inlineCode",{parentName:"p"},"p()")," prints it directly."),(0,i.kt)("p",null,"These functions should be used to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"print all the ",(0,i.kt)("strong",{parentName:"li"},"values of form fields")," like ",(0,i.kt)("inlineCode",{parentName:"li"},"<input>")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"<textarea>")," tags."),(0,i.kt)("li",{parentName:"ul"},"to ",(0,i.kt)("strong",{parentName:"li"},"show plain (non html) text")," that has been introduced by the user (search string, quiz responses...)."),(0,i.kt)("li",{parentName:"ul"},"in general, all the ",(0,i.kt)("strong",{parentName:"li"},"dynamic data, not being html"),", that doesn't need to be cleaned nor processed by filters\nIt is important not to use these functions for strings that contain html markup.")),(0,i.kt)("p",null,"The functions replace certain characters that would have special meaning in html (",(0,i.kt)("inlineCode",{parentName:"p"},"<, >, \", ', and &"),") by html entities so that they are displayed as intended. Note that even though the value of form fields printed with ",(0,i.kt)("inlineCode",{parentName:"p"},"p()")," will have these characters converted to html entities, the submitted values will contain the original characters again."),(0,i.kt)("p",null,"The key parameter for this function is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"strip"),": it decides if we want to strip slashes from the string or no. By default it's ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," so no strip will be performed. We should set such parameter to 'true' only when data to be processed isn't coming from database but from http requests (forms, links...).")),(0,i.kt)("h3",{id:"format_text"},"format_text()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"function format_text($text, $format = FORMAT_MOODLE, $options = null, $courseid_do_not_use = null)\n")),(0,i.kt)("p",null,"This function should be used to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"print ",(0,i.kt)("strong",{parentName:"li"},"any html/plain/markdown/moodle text"),", needing any of the features below. Mainly used for long strings like posts, answers, glossary items..."),(0,i.kt)("li",{parentName:"ul"},"filter content through Moodle or 3rd party language filters for multi-language support. Not to be confused with ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/String_API#get_string.28.29"},"get_string")," which is used to access localized strings in Moodle and its language packs. Together, these functions enable Moodle multi-language support .\nNote that this function is really ",(0,i.kt)("strong",{parentName:"li"},"heavy")," because it supports ",(0,i.kt)("strong",{parentName:"li"},"cleaning")," of dangerous contents, delegates processing to enabled ",(0,i.kt)("strong",{parentName:"li"},"content filter"),"s, supports different ",(0,i.kt)("strong",{parentName:"li"},"formats")," of text (HTML, PLAIN, MARKDOWN, MOODLE) and performs a lot of ",(0,i.kt)("strong",{parentName:"li"},"automatic conversions")," like adding smilies, build links. Also, it includes a strong ",(0,i.kt)("strong",{parentName:"li"},"cache mechanism")," (DB based) that will alleviate the server from a lot of work processing the same texts time and again.")),(0,i.kt)("p",null,"Some interesting parameters for this function are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"format"),": To tell the function about how the data has been entered. It defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"FORMAT_MOODLE")," that is a cool format to process plain text because it features automatic link conversion, smilies and good conversion to html output. Other formats are ",(0,i.kt)("inlineCode",{parentName:"li"},"FORMAT_HTML"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"FORMAT_PLAIN"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"FORMAT_MARKDOWN"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options"),": Here we can specify how we want the process to be performed. You only need to define them if they are different from the default value assumed. Main options are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options->noclean"),": To decide if we want to skip the clean-up of text, ",(0,i.kt)("strong",{parentName:"li"},"un-protecting us")," from attacks and other security flaws (defaults to false, so protection is enabled. You ",(0,i.kt)("strong",{parentName:"li"},"shouldn't set it to true ever")," unless you are 200% sure that only controlled users can edit it (mainly admins). ",(0,i.kt)("strong",{parentName:"li"},"Never use it for general text places")," (posts...) or you will be, sooner or later, attacked! Note that this option is ignored for ",(0,i.kt)("inlineCode",{parentName:"li"},"FORMAT_PLAIN"),", the text is never cleaned."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options->trusted"),": Indicates that this content is trusted and does not need clean-up (but only if ",(0,i.kt)("inlineCode",{parentName:"li"},"$CFG->enabletrusttext")," is true). This argument is ignored if 'noclean' is specified."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options->filter"),": To decide if you want to allow filters to process the text (defaults to true). This is ignored by ",(0,i.kt)("inlineCode",{parentName:"li"},"FORMAT_PLAIN")," for which filters are never applied."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options->context"),": If text is filtered (and this happens by default), it is very important to specify context (id or object) for applying filters. If context is not specified it will be taken from ",(0,i.kt)("inlineCode",{parentName:"li"},"$PAGE->context")," and may potentially result in displaying the same text differently on different pages. For example all module-related information should have module context even when it appears in course-level reports, all course-related information such as name and description should have course context even when they are displayed on front page or system pages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options->para"),": To decide if you want every paragraph automatically enclosed between html paragraph tags (",(0,i.kt)("inlineCode",{parentName:"li"},"<p>...</p>"),") (defaults to true). This option only applies to ",(0,i.kt)("inlineCode",{parentName:"li"},"FORMAT_MOODLE"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options->newlines"),": To decide if linefeeds in text should be converted to html newlines (",(0,i.kt)("inlineCode",{parentName:"li"},"<br />"),") (defaults to true). This option only applies to ",(0,i.kt)("inlineCode",{parentName:"li"},"FORMAT_MOODLE"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options->nocache"),": If true the string will not be cached and will be formatted every call. Default false."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options->overflowdiv "),": If set to true the formatted text will be encased in a div with the class no-overflow before being returned. Default false."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options->allowid")," : If true then id attributes will not be removed, even when using htmlpurifier. Default false."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options->blanktarget")," : If true all ",(0,i.kt)("inlineCode",{parentName:"li"},"<a>")," tags will have ",(0,i.kt)("inlineCode",{parentName:"li"},'target="_blank"')," added unless target is explicitly specified. Default false."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"courseid_do_not_use"),": This parameter was earlier used to help applying filters but now is replaced with more precise ",(0,i.kt)("inlineCode",{parentName:"li"},"$options->context"),", see above")),(0,i.kt)("h3",{id:"format_string"},"format_string()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"function format_string ($string, $striplinks = true, $options = null)\n")),(0,i.kt)("p",null,"This function should be used to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"print ",(0,i.kt)("strong",{parentName:"li"},"short non-html strings that need filter processing")," (activity titles, post subjects, glossary concepts...). If the string contains HTML, it will be filtered out. If you want the HTML, use ",(0,i.kt)("inlineCode",{parentName:"li"},"format_text()")," instead."),(0,i.kt)("li",{parentName:"ul"},"filter content through Moodle or 3rd party language filters for multi-language support. Not to be confused with ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/String_API#get_string.28.29"},"get_string")," which is used to access localized strings in Moodle and its language packs. Together, these functions enable Moodle multi-language support .\nAll enabled ",(0,i.kt)("strong",{parentName:"li"},"heading filters")," will be applied to the string.")),(0,i.kt)("p",null,"Please note that this function is basically one stripped version of the full ",(0,i.kt)("inlineCode",{parentName:"p"},"format_text()")," function detailed above and ",(0,i.kt)("strong",{parentName:"p"},"it doesn't offer any of its options or protections"),". It simply filters the strings and returns the result, so we must ensure that text being processed has been properly cleaned at input time, using the proper ",(0,i.kt)("inlineCode",{parentName:"p"},"xxx_param()")," functions."),(0,i.kt)("p",null,"Some interesting parameters for this function are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"striplinks"),": To decide if, after the text has been processed by filters, we must delete any link from the result text. Used when we want to show the text inside menus, page titles... (defaults to true)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options->context"),": Context (id or object) for applying filters. If context is not specified it will be taken from ",(0,i.kt)("inlineCode",{parentName:"li"},"$PAGE->context")," and may potentially result in displaying the same text differently on different pages. For example all module-related information should have module context even when it appears in course-level reports, all course-related information such as name and description should have course context even when they are displayed on front page or system pages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options->escape"),": To decide if you want to escape HTML entities. True by default."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options->filter"),": To decide if you want to allow filters to process the text (defaults to true). This is ignored by ",(0,i.kt)("inlineCode",{parentName:"li"},"FORMAT_PLAIN")," for which filters are never applied.")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In earlier versions of Moodle the third argument was integer ",(0,i.kt)("inlineCode",{parentName:"p"},"$courseid"),". It is still supported for legacy - if the third argument is an integer instead of array or object it is considered to be course id and is this course's context is passed to the filters being applied."))),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../guides/templates"},"Templates"))))}c.isMDXComponent=!0}}]);