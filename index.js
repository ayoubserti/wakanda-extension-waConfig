/* Copyright (c) WAKANDA, 2015
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* The Software shall be used for Good, not Evil.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/


function init() {

	studio.extension.registerTabPage('app/index.html', 'icon_config_tree.png', 'Setup your config');



	var rememberInNextSession = true;
	var openOnLeft = false;
	var isBlackTheme = false;

	studio.extension.openPageInTab('app/index.html', 'Backend config', rememberInNextSession, openOnLeft, isBlackTheme, "studio::waConfig");
	return true;
}

exports.handleMessage = function handleMessage(message) {
	"use strict";

	if (message.action == "init") {
		init();
	}
};





/*
function Preferences() {
	var rememberInNextSession = true;
	var openOnLeft = false;
	var isBlackTheme = false;

	studio.extension.openPageInTab('preferences.html', 'Preferences', rememberInNextSession, openOnLeft, isBlackTheme, "studio::Preferences_1");
	return true;
};

function InitPreferences() {
	studio.extension.registerTabPage('preferences.html', 'preferences.png', 'Setup your preferences for Wakanda Studio');
	studio.extension.registerPreferencePanel('GENERAL', 'general.html', 100);
	studio.extension.registerPreferencePanel('CODE EDITOR', 'codeEditor.html', 200);
}

function HandleSolutionBeforeClosing() {
	// stop server
	var shutDownServer = studio.getPreferences('shutdownServerAfterSolutionClose');
	shutDownServer = shutDownServer === undefined || shutDownServer;

	if (shutDownServer && studio.isCommandChecked('startWakandaServer')) {
		studio.sendCommand('ShutdownWakandaServer');
	}
}

function HandleRestoreDefaultPreferences() {
	studio.setPreferences('shutdownServerAfterSolutionClose', true);
}

exports.handleMessage = function handleMessage(message) {
	"use strict";

	if (message.action == "init") {
		init();
	}


	if (message.action == "preferences")
		Preferences();
	else if (message.action == "initPreferences")
		InitPreferences();
	else if (message.action === "handleSolutionBeforeClosing")
		HandleSolutionBeforeClosing();
	else if (message.action === "handleRestoreDefaultPreferences")
		HandleRestoreDefaultPreferences();
};

//*/
