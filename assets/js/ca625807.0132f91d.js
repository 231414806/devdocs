"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[82083],{19826:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),l=(r(67294),r(3905)),s=r(13904),i=["components"],n={title:"Moodle 3.4.5",tags:["Release notes","Moodle 3.4"],sidebar_position:5,moodleVersion:"3.4.5"},d=void 0,m={unversionedId:"releases/3.4/3.4.5",id:"releases/3.4/3.4.5",title:"Moodle 3.4.5",description:"Release date: 10 September 2018",source:"@site/general/releases/3.4/3.4.5.md",sourceDirName:"releases/3.4",slug:"/releases/3.4/3.4.5",permalink:"/devdocs/general/releases/3.4/3.4.5",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.4/3.4.5.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.4",permalink:"/devdocs/general/tags/moodle-3-4"}],version:"current",lastUpdatedBy:"ferranrecio",lastUpdatedAt:1655390877,formattedLastUpdatedAt:"16/06/2022",sidebarPosition:5,frontMatter:{title:"Moodle 3.4.5",tags:["Release notes","Moodle 3.4"],sidebar_position:5,moodleVersion:"3.4.5"},sidebar:"releaseNotes",previous:{title:"Moodle 3.4.4",permalink:"/devdocs/general/releases/3.4/3.4.4"},next:{title:"Moodle 3.4.6",permalink:"/devdocs/general/releases/3.4/3.4.6"}},p={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,(0,a.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 10 September 2018"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.4.5%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.4.5"),"."),(0,l.kt)("h2",{id:"highlights"},"Highlights"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62799"},"MDL-62799")," - tool_dataprivacy plugin merged into 3.4 core"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62800"},"MDL-62800")," - tool_policy plugin merged into 3.4 core"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62660"},"MDL-62660")," - Option to set a data request expiry time"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57741"},"MDL-57741")," - Launch URL for ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Publish_as_LTI_tool"},"Publish as LTI tool")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57977"},"MDL-57977")," - Global search allows searching for users by alternate name")),(0,l.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60826"},"MDL-60826")," - Memory exhaustion error when trying to add/edit calendar event as admin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60874"},"MDL-60874")," - Clearer search results in user enrolment"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62782"},"MDL-62782")," - Users with the capability mod/assign:viewgrades can also view uploaded feedback files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62849"},"MDL-62849")," - Filemanager: cannot manage files when there are folders"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62534"},"MDL-62534")," - Empty course sections deleted when upgrading"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62600"},"MDL-62600")," - Admin is misinformed that there are no data requests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61351"},"MDL-61351")," - Shibboleth logout does not handle file sessions correctly"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62643"},"MDL-62643")," - Online text assignment submissions generate a blank HTML document for grading when no text is entered"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61424"},"MDL-61424")," - When token is rejected from moodle.net provide option to unregister"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59847"},"MDL-59847")," - Behaviour when city/country are hiddenfields and identityfields at the same time"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62965"},"MDL-62965")," - User profile fields missing on signup page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62889"},"MDL-62889")," - Multiple fixes when redirecting to a URL after clicking on a notification"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62989"},"MDL-62989")," - Data requests are listed by date requested for users"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62896"},"MDL-62896")," - Some non-core plugins are missing their Additional label on the Plugin data registry page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62769"},"MDL-62769"),' - "Statistics for question positions" graph shows last shown variant, not stats for overall question'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62341"},"MDL-62341")," - 'Go back to previous page' link on All policies page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62746"},"MDL-62746")," - Boost core_tag modals content layout improvements"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45389"},"MDL-45389")," - Forum index page alignment improvements"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61707"},"MDL-61707")," - Pre-signup (minor check) session is not deleted upon signup")),(0,l.kt)("h2",{id:"security-issues"},"Security issues"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=376023"},"MSA-18-0017")," Moodle XML import of ddwtos could lead to intentional remote code execution"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=376024"},"MSA-18-0018")," QuickForm library remote code vulnerability (upstream)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=376025"},"MSA-18-0019")," Boost theme - blog search GET parameter insufficiently filtered")),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.4.5"},"Notes de mise \xe0 jour de Moodle 3.4.5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.4.5"},"Notas de Moodle 3.4.5"))))}k.isMDXComponent=!0}}]);