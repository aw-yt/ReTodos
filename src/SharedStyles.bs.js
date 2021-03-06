// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");

var actionContainer = Css.style(/* :: */[
      Css.width(Css.rem(2.0)),
      /* :: */[
        Css.display(/* flex */-1010954439),
        /* :: */[
          Css.justifyContent(Css.center),
          /* :: */[
            Css.alignItems(Css.center),
            /* :: */[
              Css.cursor(/* pointer */-786317123),
              /* :: */[
                Css.flex3(0.0, 0.0, /* auto */-1065951377),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

function itemContainer(isActive) {
  var baseStyle = Css.style(/* :: */[
        Css.padding2(Css.rem(0.25), Css.rem(0.25)),
        /* :: */[
          Css.display(/* flex */-1010954439),
          /* :: */[
            Css.alignItems(Css.center),
            /* :: */[
              Css.cursor(Css.text),
              /* :: */[
                Css.border(Css.px(0), Css.solid, Css.lightgray),
                /* :: */[
                  Css.position(Css.relative),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]);
  if (isActive) {
    return Css.merge(/* :: */[
                baseStyle,
                /* :: */[
                  Css.style(/* :: */[
                        Css.borderTopWidth(Css.px(1)),
                        /* :: */[
                          Css.borderBottomWidth(Css.px(1)),
                          /* [] */0
                        ]
                      ]),
                  /* [] */0
                ]
              ]);
  } else {
    return baseStyle;
  }
}

var heading = Css.style(/* :: */[
      Css.display(/* block */888960333),
      /* :: */[
        Css.color(Css.grey),
        /* [] */0
      ]
    ]);

var input = Css.style(/* :: */[
      Css.width(/* `percent */[
            -119887163,
            100.0
          ]),
      /* :: */[
        Css.backgroundColor(Css.white),
        /* :: */[
          Css.border(Css.px(0), Css.none, Css.white),
          /* :: */[
            Css.padding2(Css.rem(0.25), Css.rem(0.75)),
            /* :: */[
              Css.boxSizing(Css.borderBox),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

exports.actionContainer = actionContainer;
exports.itemContainer = itemContainer;
exports.heading = heading;
exports.input = input;
/* actionContainer Not a pure module */
