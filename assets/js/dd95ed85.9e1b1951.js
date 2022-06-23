"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[95667],{48060:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var n=o(83117),a=o(80102),i=(o(67294),o(3905)),c=o(13904),r=["components"],s={title:"Lock API",tags:["API","Lock"]},l=void 0,d={unversionedId:"apis/core/lock/index",id:"apis/core/lock/index",title:"Lock API",description:"Locking is required whenever you need to prevent two, or more, processes accessing the same resource at the same time. The prime candidate for locking in Moodle is cron. Locking allows multiple cron processes to work on different parts of cron at the same time with no risk that they will conflict (work on the same job at the same time).",source:"@site/docs/apis/core/lock/index.md",sourceDirName:"apis/core/lock",slug:"/apis/core/lock/",permalink:"/devdocs/docs/apis/core/lock/",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/core/lock/index.md",tags:[{label:"API",permalink:"/devdocs/docs/tags/api"},{label:"Lock",permalink:"/devdocs/docs/tags/lock"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1656028439,formattedLastUpdatedAt:"23/06/2022",frontMatter:{title:"Lock API",tags:["API","Lock"]},sidebar:"docs",previous:{title:"DML exceptions",permalink:"/devdocs/docs/apis/core/dml/exceptions"},next:{title:"Plugin types",permalink:"/devdocs/docs/apis/plugintypes/"}},u={},p=[{value:"When to use locking",id:"when-to-use-locking",level:2},{value:"Performance",id:"performance",level:2},{value:"Usage",id:"usage",level:2},{value:"Use a different lock type from the default",id:"use-a-different-lock-type-from-the-default",level:2},{value:"Implementing new lock types",id:"implementing-new-lock-types",level:2}],m={toc:p};function k(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c.Z,(0,n.Z)({frontMatter:s},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"Locking is required whenever you need to prevent two, or more, processes accessing the same resource at the same time. The prime candidate for locking in Moodle is cron. Locking allows multiple cron processes to work on different parts of cron at the same time with no risk that they will conflict (work on the same job at the same time)."),(0,i.kt)("h2",{id:"when-to-use-locking"},"When to use locking"),(0,i.kt)("p",null,"When you want to prevent multiple requests from accessing the same resource at the same time. Accessing a resource is a vague description, but it could be for example running a slow running task in the background, running different parts of cron etc."),(0,i.kt)("h2",{id:"performance"},"Performance"),(0,i.kt)("p",null,"Locking is not meant to be fast. Do not use it in code that will be triggered many times in a single request (for example MUC). It is meant to be always correct - even for multiple nodes in a cluster. This implies that the locks are communicated among all the nodes in the cluster, and hence it will never be super quick."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The locking API is used by getting an instance of a lock_factory, and then using it to retrieve locks, and eventually releasing them. You are required to release all your locks, even on the event of failures."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$timeout = 5;\n\n// A namespace for the locks. Must be prefixed with the component name to prevent conflicts.\n$locktype = 'mod_assign_download_submissions';\n\n// Resource key - needs to uniquely identify the resource that is to be locked. E.g. If you\n// want to prevent a user from running multiple course backups - include the userid in the key.\n$resource = 'user:' . $USER->id;\n\n// Get an instance of the currently configured lock_factory.\n$lockfactory = \\core\\lock\\lock_config::get_lock_factory($locktype);\n\n// Get a new lock for the resource, wait for it if needed.\nif ($lock = $lockfactory->get_lock($resource, $timeout)) {\n    // We have exclusive access to the resource, do the slow zip file generation...\n\n    if ($someerror) {\n        // Always release locks on failure.\n        $lock->release();\n        print_error('blah');\n    }\n\n    // Release the lock once finished.\n    $lock->release();\n\n} else {\n    // We did not get access to the resource in time, give up.\n    throw new moodle_exception('locktimeout');\n}\n")),(0,i.kt)("h2",{id:"use-a-different-lock-type-from-the-default"},"Use a different lock type from the default"),(0,i.kt)("p",null,"Change the $CFG->lock_factory setting to one of the other lock types included with core. These are all documented in config-dist.php."),(0,i.kt)("h2",{id:"implementing-new-lock-types"},"Implementing new lock types"),(0,i.kt)("p",null,"If you really want to do this you can. I probably wouldn't recommend it - because the core lock types should be very reliable - and the performance is not really a concern."),(0,i.kt)("p",null,'Add a new local_XXX plugin with an autoloaded class that implements \\core\\lock\\lock_factory.\nSet the site configuration variable "lock_factory" to the full namespaced path to your class in the config.php for example'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$CFG->lock_factory = '\\local_redis\\lock\\redis_lock_factory';\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"See ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/tests/lock_test.php")," for an example of unit tests which can be run on a custom lock instance to verify it for correctness (run_on_lock_factory)."))))}k.isMDXComponent=!0}}]);