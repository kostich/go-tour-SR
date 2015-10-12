/* Copyright 2012 The Go Authors.   All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
'use strict';

angular.module('tour.values', []).

// List of modules with description and lessons in it.
value('tableOfContents', [{
    'id': 'mechanics',
    'title': 'Начин употребе обиласка',
    'description': '<p>Добро дошли у обилазак <a href="http://golang.org">Го програмског језика</a>. Овај обилазак покрива најважније делове језика, тј. садржи следеће одељке:</p>',
    'lessons': ['welcome']
}, {
    'id': 'basics',
    'title': 'Основе',
    'description': '<p>Увод у основе језика. </p><p>Декларисање променљивих, позивање функција и све остале ствари које морате знати пре учења напреднијих ствари.</p>',
    'lessons': ['basics', 'flowcontrol', 'moretypes']
}, {
    'id': 'methods',
    'title': 'Методе и интерфејси',
    'description': '<p>Научите како се дефинишу методе над врстама, како се декларишу интерфејси и како се све ове ствар склапају у једну целину.</p>',
    'lessons': ['methods']
}, {
    'id': 'concurrency',
    'title': '',
    'description': '<p>У језгру Го језика се налази подршка за упоредну (паралелну) обраду података. </p><p>Овај одељак објашњава горутине и канале, и како се ове две ствари користе за спровођење различитих шаблона парарелне обраде података.</p>',
    'lessons': ['concurrency']
}]).

// translation
value('translation', {
    'off': 'искљ.',
    'on': 'укљ.',
    'syntax': 'Бојење кода',
    'lineno': 'Бројеви редова',
    'reset': 'Поново постави слајд',
    'format': 'Изформатирај изворни код',
    'kill': 'Убиј програм',
    'run': 'Изврши',
    'compile': 'Искомпајлирај и изврши',
    'more': 'Опције',
    'toc': 'Садржај',
    'prev': 'Претходно',
    'next': 'Следеће',
    'waiting': 'Чекам на удаљени сервер...',
    'errcomm': 'Грешка у вези са удаљеним сервером.',
}).

// Config for codemirror plugin
value('ui.config', {
    codemirror: {
        mode: 'text/x-go',
        matchBrackets: true,
        lineNumbers: true,
        autofocus: true,
        indentWithTabs: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        extraKeys: {
            'Shift-Enter': function() {
                $('#run').click();
            },
            'Ctrl-Enter': function() {
                $('#format').click();
            },
            'PageDown': function() {
                return false;
            },
            'PageUp': function() {
                return false;
            },
        },
        // TODO: is there a better way to do this?
        // AngularJS values can't depend on factories.
        onChange: function() {
            if (window.codeChanged !== null) window.codeChanged();
        }
    }
});
