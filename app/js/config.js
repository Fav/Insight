define({
    menu: {
        parent: "ribbonObj",
        icons_path: "lib/dhtmlxRibbon/samples/dhtmlxRibbon/common/",
        tabs: [{
                text: "tab 1",
                active: true,
                items: [{
                        type: 'block',
                        text: 'Block 1',
                        mode: 'cols',
                        list: [
                            { type: 'button', text: 'Open', isbig: true, img: "48/open.gif" },
                            { type: 'button', text: 'new', img: "18/new.gif" },
                            { type: 'button', text: 'cut', img: "18/cut.gif" }
                        ]
                    },
                    {
                        type: 'block',
                        text: 'Block 2',
                        text_pos: 'top',
                        list: [
                            { type: 'button', text: 'copy', img: "18/copy.gif" },
                            { type: 'button', text: 'print', img: "18/print.gif" },
                            { type: 'button', text: 'paste', img: "48/paste.gif", isbig: true }
                        ]
                    }
                ]
            },
            {
                text: "tab 2",
                items: [{
                    type: 'block',
                    text: 'Block 1',
                    mode: 'rows',
                    list: [
                        { type: 'button', text: 'copy', img: "18/copy.gif" },
                        { type: 'button', text: 'cut', img: "18/cut.gif" },
                        { type: 'button', text: 'new', img: "18/new.gif" },
                        { type: "newLevel" },
                        { type: 'button', text: 'open', img: "18/open.gif" },
                        { type: 'button', text: 'paste', img: "18/paste.gif" },
                        { type: "newLevel" },
                        { type: 'button', text: 'print', img: "18/print.gif" }
                    ]
                }]
            }
        ]
    },
    homeposition: {
        x: 114.305230,
        y: 30.592747,
        zoom: 13
    }

});