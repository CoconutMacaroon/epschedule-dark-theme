// ==UserScript==
// @name         EPSchedule Dark Theme
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Dark theme for EPSchedule
// @author       CoconutMacaroon
// @match        https://www.epschedule.com/
// ==/UserScript==

(() => {
    setTimeout(() => {
        let styles = document.createElement('style');
        styles.innerText = ".paper-material-0{box-shadow:none!important}#dialog,#prescreen,.card-header,.headerbar,.paper-material-0,.periodheading,.periodsubcontainer,.schedule-lite,.searchbackground,.student,iron-collapse,paper-toolbar{background-color:#1e1e1e!important}#mainContainer,#mainheader,#popupContainer,.popupcontainerholder,.x-schedule-0{background-color:#121212!important}#mainContainer,#settingspanel,.grade,.name,.paper-input,.periodheading,.periodsubcontainer,.x-schedule,a{color:#fff!important}.classemaillink,.classinfosubcontainer{font-weight:400!important}.periodheading{width:auto!important}#studentschedule{background-color:pink!important}";
        document.getElementsByTagName('head')[0].appendChild(styles);
    }, 250);
})();
