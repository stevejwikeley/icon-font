module.exports = function (grunt) {

    "use strict";

    // this saves us having to load each plugin individually
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        watch: {
            icons: {
                files: "src/*.svg",
                tasks: "build"
            }
        },

        webfont: {
            dev: {
                src: "src/*.svg",
                dest: "build/",
                options: {
                    font: 'HSBCIcon-Font',
                    engine: "node",
                    hashes: false,
                    relativeFontPath: '/fonts/',
                    htmlDemoTemplate: 'template/template.html',
                    codepoints: {
                        'accounts' : 0xf021,                                                                                                                                                                                                     
                        'add' : 0xf031,                                                                                                                                                                                                  
                        'agree' : 0xf00a,                                                                                                                                                                                                        
                        'alert' : 0xf017,                                                                                                                                                                                                        
                        'anchor-down' : 0xf075,                                                                                                                                                                                                  
                        'anchor-up' : 0xf07b,                                                                                                                                                                                                    
                        'articles' : 0xf01d,                                                                                                                                                                                                     
                        'assets' : 0xf042,                                                                                                                                                                                                       
                        'attachment' : 0xE060,                                                                                                                                                                                                   
                        'back' : 0xf062,                                                                                                                                                                                                 
                        'banking' : 0xf008,                                                                                                                                                                                                      
                        'barcode' : 0xf061,                                                                                                                                                                                                      
                        'bin' : 0xf065,                                                                                                                                                                                                  
                        'borrowing' : 0xf084,                                                                                                                                                                                                    
                        'calendar' : 0xf028,                                                                                                                                                                                                     
                        'camera' : 0xf04a,                                                                                                                                                                                                       
                        'chat' : 0xf016,                                                                                                                                                                                                 
                        'chevron-double-left' : 0xE000,                                                                                                                                                                                                  
                        'chevron-double-right'  : 0xE002,                                                                                                                                                                                                        
                        'chevron-down-small'  : 0xE003,                                                                                                                                                                                                  
                        'chevron-down' : 0xf055,                                                                                                                                                                                                 
                        'chevron-left-small'  : 0xE004,                                                                                                                                                                                                  
                        'chevron-left' : 0xf058,                                                                                                                                                                                                 
                        'chevron-right-small'  : 0xE005,                                                                                                                                                                                                 
                        'chevron-right' : 0xf057,                                                                                                                                                                                                        
                        'chevron-up-small'  : 0xE006,                                                                                                                                                                                                    
                        'chevron-up' : 0xf056,                                                                                                                                                                                                   
                        'circle-confirmation-solid' : 0xE008,                                                                                                                                                                                                    
                        'circle-confirmation' : 0xf054,                                                                                                                                                                                                  
                        'circle-delete-solid' : 0xE007,                                                                                                                                                                                                  
                        'circle-delete' : 0xf067,                                                                                                                                                                                                        
                        'circle-error-solid'  : 0xE009,                                                                                                                                                                                                  
                        'circle-error' : 0xf052,                                                                                                                                                                                                 
                        'circle-fill-information' : 0xf073,                                                                                                                                                                                                      
                        'circle-help-solid' : 0xE010,                                                                                                                                                                                                    
                        'circle-help' : 0xf060,                                                                                                                                                                                                  
                        'circle-info' : 0xf053,                                                                                                                                                                                                  
                        'client-download' : 0xf04e,                                                                                                                                                                                                      
                        'client-upload' : 0xf04d,                                                                                                                                                                                                        
                        'clock' : 0xf029,                                                                                                                                                                                                        
                        'collapse'  : 0xE011,                                                                                                                                                                                                    
                        'column-view'  : 0xE012,                                                                                                                                                                                                 
                        'complaints'  : 0xE013,                                                                                                                                                                                                  
                        'compose' : 0xE061,                                                                                                                                                                                                      
                        'confidential' : 0xf050,                                                                                                                                                                                                 
                        'contactless-payments-outline'  : 0xE015,                                                                                                                                                                                                        
                        'contactless-payments'  : 0xE014,                                                                                                                                                                                                        
                        'copy'  : 0xE016,                                                                                                                                                                                                        
                        'corporate' : 0xf083,                                                                                                                                                                                                    
                        'dashboard' : 0xf044,                                                                                                                                                                                                    
                        'delete-small'  : 0xE017,                                                                                                                                                                                                        
                        'delete' : 0xf002,                                                                                                                                                                                                       
                        'desktop-computer'  : 0xE018,                                                                                                                                                                                                    
                        'devices' : 0xf033,                                                                                                                                                                                                      
                        'dial'  : 0xE019,                                                                                                                                                                                                        
                        'do-not-view'  : 0xE020,                                                                                                                                                                                                 
                        'document'  : 0xE021,                                                                                                                                                                                                    
                        'dollar-bill'  : 0xE022,                                                                                                                                                                                                 
                        'download' : 0xF000,                                                                                                                                                                                                     
                        'edit' : 0xf001,                                                                                                                                                                                                 
                        'education' : 0xf03e,                                                                                                                                                                                                    
                        'error' : 0xf01a,                                                                                                                                                                                                        
                        'expand' : 0xf025,                                                                                                                                                                                                       
                        'export'  : 0xE024,                                                                                                                                                                                                      
                        'facebook-solid'  : 0xE025,                                                                                                                                                                                                      
                        'facebook'  : 0xE026,                                                                                                                                                                                                    
                        'fast-track' : 0xf018,                                                                                                                                                                                                   
                        'favourite' : 0xf013,                                                                                                                                                                                                    
                        'filter' : 0xE027,                                                                                                                                                                                                       
                        'food-dining' : 0xf081,                                                                                                                                                                                                  
                        'global' : 0xf037,                                                                                                                                                                                                       
                        'googleplus-solid' : 0xE028,                                                                                                                                                                                                     
                        'googleplus' : 0xE029,                                                                                                                                                                                                   
                        'grid-view' : 0xE030,                                                                                                                                                                                                    
                        'health' : 0xf079,                                                                                                                                                                                                       
                        'help' : 0xf012,                                                                                                                                                                                                 
                        'home' : 0xf011,                                                                                                                                                                                                 
                        'in-branch' : 0xf03a,                                                                                                                                                                                                    
                        'insight' : 0xf038,                                                                                                                                                                                                      
                        'insurance' : 0xf02b,                                                                                                                                                                                                    
                        'intranet' : 0xE031,                                                                                                                                                                                                     
                        'investment' : 0xf024,                                                                                                                                                                                                   
                        'link' : 0xE032,                                                                                                                                                                                                 
                        'linkedin-solid' : 0xE033,                                                                                                                                                                                                       
                        'linkedin' : 0xE034,                                                                                                                                                                                                     
                        'list' : 0xf030,                                                                                                                                                                                                 
                        'location' : 0xf019,                                                                                                                                                                                                     
                        'market' : 0xf02e,                                                                                                                                                                                                       
                        'memo' : 0xE035,                                                                                                                                                                                                 
                        'menu' : 0xf00b,                                                                                                                                                                                                 
                        'message' : 0xf006,                                                                                                                                                                                                      
                        'microphone' : 0xE036,                                                                                                                                                                                                   
                        'minimize' : 0xf07c,                                                                                                                                                                                                     
                        'mobile' : 0xf032,                                                                                                                                                                                                       
                        'more-vertical' : 0xE037,                                                                                                                                                                                                        
                        'more' : 0xf070,                                                                                                                                                                                                 
                        'multiple-accounts' : 0xE038,                                                                                                                                                                                                    
                        'multiple-users' : 0xf043,                                                                                                                                                                                                       
                        'new-window'  : 0xE039,                                                                                                                                                                                                  
                        'newspaper' : 0xf051,                                                                                                                                                                                                    
                        'pay' : 0xf009,                                                                                                                                                                                                  
                        'pdf'  : 0xE062,                                                                                                                                                                                                 
                        'phone' : 0xf005,                                                                                                                                                                                                        
                        'pie-chart' : 0xf039,                                                                                                                                                                                                    
                        'pin' : 0xf045,                                                                                                                                                                                                  
                        'play' : 0xE040,                                                                                                                                                                                                 
                        'pop-up-window' : 0xE041,                                                                                                                                                                                                        
                        'portfolio' : 0xf03c,                                                                                                                                                                                                    
                        'presentation' : 0xf03b,                                                                                                                                                                                                 
                        'print' : 0xf004,                                                                                                                                                                                                        
                        'products-services' : 0xf027,                                                                                                                                                                                                     
                        'quote-close' : 0xE042,                                                                                                                                                                                                  
                        'quote-open' : 0xE043,                                                                                                                                                                                                   
                        'rates' : 0xf02f,                                                                                                                                                                                                        
                        'refresh' : 0xf010,                                                                                                                                                                                                      
                        'renew' : 0xE044,                                                                                                                                                                                                        
                        'reply' : 0xf034,                                                                                                                                                                                                        
                        'report' : 0xf041,                                                                                                                                                                                                       
                        'rewards' : 0xf026,                                                                                                                                                                                                      
                        'save' : 0xf04b,                                                                                                                                                                                                 
                        'savings-goals' : 0xE045,                                                                                                                                                                                                        
                        'savings' : 0xE046,                                                                                                                                                                                                      
                        'script' : 0xE047,                                                                                                                                                                                                       
                        'search' : 0xf007,                                                                                                                                                                                                       
                        'secure-key-passcode' : 0xE048,                                                                                                                                                                                                  
                        'security-lock' : 0xf02a,                                                                                                                                                                                                        
                        'settings' : 0xf02d,                                                                                                                                                                                                     
                        'share' : 0xf022,                                                                                                                                                                                                        
                        'shopping-cart' : 0xf082,                                                                                                                                                                                                        
                        'shortcuts' : 0xE049,                                                                                                                                                                                                    
                        'signature' : 0xE050,                                                                                                                                                                                                    
                        'sound' : 0xE051,                                                                                                                                                                                                        
                        'stock-down' : 0xf072,                                                                                                                                                                                                   
                        'stock-up' : 0xf071,                                                                                                                                                                                                     
                        'survey' : 0xf04c,                                                                                                                                                                                                       
                        'switch' : 0xf00e,                                                                                                                                                                                                       
                        'tablet' : 0xf064,                                                                                                                                                                                                       
                        'tasks' : 0xf047,                                                                                                                                                                                                        
                        'tools' : 0xF01E,                                                                                                                                                                                                        
                        'transfers' : 0xf00d,                                                                                                                                                                                                    
                        'travel' : 0xf078,                                                                                                                                                                                                       
                        'twitter-solid' : 0xE052,                                                                                                                                                                                                        
                        'twitter' : 0xE053,                                                                                                                                                                                                      
                        'upload' : 0xf066,                                                                                                                                                                                                       
                        'user' : 0xf01c,                                                                                                                                                                                                 
                        'video' : 0xf015,                                                                                                                                                                                                        
                        'view-all' : 0xf00c,                                                                                                                                                                                                     
                        'view' : 0xE063,                                                                                                                                                                                                 
                        'vimeo-solid' : 0xE054,                                                                                                                                                                                                  
                        'vimeo' : 0xE055,                                                                                                                                                                                                        
                        'weibo-solid' : 0xE056,                                                                                                                                                                                                  
                        'weibo' : 0xE057,                                                                                                                                                                                                        
                        'youtube-solid' : 0xE058,                                                                                                                                                                                                        
                        'youtube' : 0xE059 
                    },
                    templateOptions: {
                        classPrefix: "icon-"
                    }
                }
            },
            
        },

        notify: {
            notify_hooks: {
                options: {
                    enabled: true,
                    max_jshint_notifications: 5,
                }
            },
            build: {
                options: {
                    title: "Sucess",
                    message: "HSBC icon Font is built"
                }
            }
        }
    });

    // List of available tasks
    grunt.registerTask("default", []);
    grunt.registerTask("build", ["webfont", "notify:build"]);

};
