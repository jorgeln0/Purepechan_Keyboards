
KeymanWeb.KR(new Keyboard_purepechankeyboard());

function Keyboard_purepechankeyboard()
{
  
  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_purepechankeyboard";
  this.KN="Purepechan";
  this.KMINVER="9.0";
  this.KV=null;
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=0x0050;
  this.KVKD="T_0054_02BC T_0074_02BC T_0063_0068_02BC T_0043_0048_02BC T_0043_0068_02BC T_0070_02BC T_0050_02BC T_0054_0053_02BC T_0054_0073_02BC T_0074_0073_02BC T_006B_02BC T_004B_02BC";
  this.KVKL={
  "phone": {
    "font": "Tahoma",
    "displayUnderlying": true,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "q"
              },
              {
                "id": "K_W",
                "text": "w"
              },
              {
                "id": "K_E",
                "text": "e",
                "sk": [
                  {
                    "id": "U_00E8",
                    "text": "\u00E8"
                  },
                  {
                    "id": "U_00E9",
                    "text": "\u00E9"
                  },
                  {
                    "id": "U_00EA",
                    "text": "\u00EA"
                  },
                  {
                    "id": "U_00EB",
                    "text": "\u00EB"
                  },
                  {
                    "id": "U_0113",
                    "text": "\u0113"
                  },
                  {
                    "id": "U_0117",
                    "text": "\u0117"
                  },
                  {
                    "id": "U_0119",
                    "text": "\u0119"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "r"
              },
              {
                "id": "K_T",
                "text": "t",
                "sk": [
                  {
                    "id": "U_00FE",
                    "text": "\u00FE"
                  },
                  {
                    "id": "T_0074_02BC",
                    "text": "t\u02BC"
                  }
                ]
              },
              {
                "id": "K_Y",
                "text": "y",
                "sk": [
                  {
                    "id": "U_00FD",
                    "text": "\u00FD"
                  },
                  {
                    "id": "U_00FF",
                    "text": "\u00FF"
                  }
                ]
              },
              {
                "id": "K_U",
                "text": "u",
                "sk": [
                  {
                    "id": "U_016B",
                    "text": "\u016B"
                  },
                  {
                    "id": "U_00F9",
                    "text": "\u00F9"
                  },
                  {
                    "id": "U_00FA",
                    "text": "\u00FA"
                  },
                  {
                    "id": "U_00FB",
                    "text": "\u00FB"
                  },
                  {
                    "id": "U_00FC",
                    "text": "\u00FC"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "i",
                "sk": [
                  {
                    "id": "U_00EC",
                    "text": "\u00EC"
                  },
                  {
                    "id": "U_00ED",
                    "text": "\u00ED"
                  },
                  {
                    "id": "U_00EE",
                    "text": "\u00EE"
                  },
                  {
                    "id": "U_00EF",
                    "text": "\u00EF"
                  },
                  {
                    "id": "U_012F",
                    "text": "\u012F"
                  },
                  {
                    "id": "U_012B",
                    "text": "\u012B"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "o",
                "sk": [
                  {
                    "id": "U_00F2",
                    "text": "\u00F2"
                  },
                  {
                    "id": "U_00F3",
                    "text": "\u00F3"
                  },
                  {
                    "id": "U_00F4",
                    "text": "\u00F4"
                  },
                  {
                    "id": "U_00F5",
                    "text": "\u00F5"
                  },
                  {
                    "id": "U_00F6",
                    "text": "\u00F6"
                  },
                  {
                    "id": "U_00F8",
                    "text": "\u00F8"
                  },
                  {
                    "id": "U_014D",
                    "text": "\u014D"
                  },
                  {
                    "id": "U_0153",
                    "text": "\u0153"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "p",
                "sk": [
                  {
                    "id": "T_0070_02BC",
                    "text": "p\u02BC"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "70",
                "text": "a",
                "sk": [
                  {
                    "id": "U_00E0",
                    "text": "\u00E0"
                  },
                  {
                    "id": "U_00E1",
                    "text": "\u00E1"
                  },
                  {
                    "id": "U_00E2",
                    "text": "\u00E2"
                  },
                  {
                    "id": "U_00E3",
                    "text": "\u00E3"
                  },
                  {
                    "id": "U_00E4",
                    "text": "\u00E4"
                  },
                  {
                    "id": "U_00E5",
                    "text": "\u00E5"
                  },
                  {
                    "id": "U_00E6",
                    "text": "\u00E6"
                  },
                  {
                    "id": "U_0101",
                    "text": "\u0101"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "s",
                "sk": [
                  {
                    "id": "U_015B",
                    "text": "\u015B"
                  },
                  {
                    "id": "U_0161",
                    "text": "\u0161"
                  },
                  {
                    "id": "U_00DF",
                    "text": "\u00DF"
                  },
                  {
                    "id": "T_0074_0073_02BC",
                    "text": "ts\u02BC"
                  }
                ]
              },
              {
                "id": "K_D",
                "text": "d",
                "sk": [
                  {
                    "id": "U_00F0"
                  }
                ]
              },
              {
                "id": "K_F",
                "text": "f"
              },
              {
                "id": "K_G",
                "text": "g"
              },
              {
                "id": "K_H",
                "text": "h"
              },
              {
                "id": "K_J",
                "text": "j"
              },
              {
                "id": "K_K",
                "text": "k",
                "sk": [
                  {
                    "id": "T_006B_02BC",
                    "text": "k\u02BC"
                  }
                ]
              },
              {
                "id": "K_L",
                "text": "l",
                "sk": [
                  {
                    "id": "U_0142",
                    "text": "\u0142"
                  }
                ]
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "shift",
                "width": "110",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_Z",
                "text": "z",
                "sk": [
                  {
                    "id": "U_017E",
                    "text": "\u017E"
                  },
                  {
                    "id": "U_017A",
                    "text": "\u017A"
                  },
                  {
                    "id": "U_017C",
                    "text": "\u017C"
                  }
                ]
              },
              {
                "id": "K_X",
                "text": "x"
              },
              {
                "id": "K_C",
                "text": "c",
                "sk": [
                  {
                    "id": "U_00E7",
                    "text": "\u00E7"
                  },
                  {
                    "id": "U_0107",
                    "text": "\u0107"
                  },
                  {
                    "id": "U_010D",
                    "text": "\u010D"
                  },
                  {
                    "id": "T_0063_0068_02BC",
                    "text": "ch\u02BC"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "v"
              },
              {
                "id": "K_B",
                "text": "b"
              },
              {
                "id": "K_N",
                "text": "n",
                "sk": [
                  {
                    "id": "U_012F",
                    "text": "\u0144"
                  },
                  {
                    "id": "U_00F1",
                    "text": "\u00F1"
                  }
                ]
              },
              {
                "id": "K_M",
                "text": "m"
              },
              {
                "id": "U_00F1",
                "text": "\u00F1"
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "Q"
              },
              {
                "id": "K_W",
                "text": "W"
              },
              {
                "id": "K_E",
                "text": "E",
                "sk": [
                  {
                    "id": "U_00C8",
                    "text": "\u00C8"
                  },
                  {
                    "id": "U_00C9",
                    "text": "\u00C9"
                  },
                  {
                    "id": "U_00CA",
                    "text": "\u00CA"
                  },
                  {
                    "id": "U_00CB",
                    "text": "\u00CB"
                  },
                  {
                    "id": "U_0112",
                    "text": "\u0112"
                  },
                  {
                    "id": "U_0116",
                    "text": "\u0116"
                  },
                  {
                    "id": "U_0118",
                    "text": "\u0118"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_T",
                "text": "T",
                "sk": [
                  {
                    "id": "U_00DE",
                    "text": "\u00DE"
                  },
                  {
                    "id": "T_0054_02BC",
                    "text": "T\u02BC"
                  }
                ]
              },
              {
                "id": "K_Y",
                "text": "Y",
                "sk": [
                  {
                    "id": "U_00DD",
                    "text": "\u00DD"
                  },
                  {
                    "id": "U_0178",
                    "text": "\u0178"
                  }
                ]
              },
              {
                "id": "K_U",
                "text": "U",
                "sk": [
                  {
                    "id": "U_016A",
                    "text": "\u016A"
                  },
                  {
                    "id": "U_00D9",
                    "text": "\u00D9"
                  },
                  {
                    "id": "U_00DA",
                    "text": "\u00DA"
                  },
                  {
                    "id": "U_00DB",
                    "text": "\u00DB"
                  },
                  {
                    "id": "U_00DC",
                    "text": "\u00DC"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "I",
                "sk": [
                  {
                    "id": "U_00CC",
                    "text": "\u00CC"
                  },
                  {
                    "id": "U_00CD",
                    "text": "\u00CD"
                  },
                  {
                    "id": "U_00CE",
                    "text": "\u00CE"
                  },
                  {
                    "id": "U_00CF",
                    "text": "\u00CF"
                  },
                  {
                    "id": "U_012E",
                    "text": "\u012E"
                  },
                  {
                    "id": "U_012A",
                    "text": "\u012A"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "O",
                "sk": [
                  {
                    "id": "U_00D2",
                    "text": "\u00D2"
                  },
                  {
                    "id": "U_00D3",
                    "text": "\u00D3"
                  },
                  {
                    "id": "U_00D4",
                    "text": "\u00D4"
                  },
                  {
                    "id": "U_00D5",
                    "text": "\u00D5"
                  },
                  {
                    "id": "U_00D6",
                    "text": "\u00D6"
                  },
                  {
                    "id": "U_00D8",
                    "text": "\u00D8"
                  },
                  {
                    "id": "U_014C",
                    "text": "\u014C"
                  },
                  {
                    "id": "U_0152",
                    "text": "\u0152"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "P",
                "sk": [
                  {
                    "id": "T_0050_02BC",
                    "text": "P\u02BC"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "70",
                "text": "A",
                "sk": [
                  {
                    "id": "U_00C0",
                    "text": "\u00C0"
                  },
                  {
                    "id": "U_00C1",
                    "text": "\u00C1"
                  },
                  {
                    "id": "U_00C2",
                    "text": "\u00C2"
                  },
                  {
                    "id": "U_00C3",
                    "text": "\u00C3"
                  },
                  {
                    "id": "U_00C4",
                    "text": "\u00C4"
                  },
                  {
                    "id": "U_00C5",
                    "text": "\u00C5"
                  },
                  {
                    "id": "U_00C6",
                    "text": "\u00C6"
                  },
                  {
                    "id": "U_0100",
                    "text": "\u0100"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "S",
                "sk": [
                  {
                    "id": "U_015A",
                    "text": "\u015A"
                  },
                  {
                    "id": "U_0160",
                    "text": "\u0160"
                  },
                  {
                    "id": "T_0054_0053_02BC",
                    "text": "TS\u02BC"
                  },
                  {
                    "id": "T_0054_0073_02BC",
                    "text": "Ts\u02BC"
                  }
                ]
              },
              {
                "id": "K_D",
                "text": "D",
                "sk": [
                  {
                    "id": "U_00D0",
                    "text": "\u00D0"
                  }
                ]
              },
              {
                "id": "K_F",
                "text": "F"
              },
              {
                "id": "K_G",
                "text": "G"
              },
              {
                "id": "K_H",
                "text": "H"
              },
              {
                "id": "K_J",
                "text": "J"
              },
              {
                "id": "K_K",
                "text": "K",
                "sk": [
                  {
                    "id": "T_004B_02BC",
                    "text": "K\u02BC"
                  }
                ]
              },
              {
                "id": "K_L",
                "text": "L",
                "sk": [
                  {
                    "id": "U_0141",
                    "text": "\u0141"
                  }
                ]
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "default",
                "width": "110",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              },
              {
                "id": "K_Z",
                "text": "Z",
                "sk": [
                  {
                    "id": "U_017D",
                    "text": "\u017D"
                  },
                  {
                    "id": "U_017A",
                    "text": "\u0179"
                  },
                  {
                    "id": "U_017B",
                    "text": "\u017B"
                  }
                ]
              },
              {
                "id": "K_X",
                "text": "X"
              },
              {
                "id": "K_C",
                "text": "C",
                "sk": [
                  {
                    "id": "U_00C7",
                    "text": "\u00C7"
                  },
                  {
                    "id": "U_0106",
                    "text": "\u0106"
                  },
                  {
                    "id": "U_010C",
                    "text": "\u010C"
                  },
                  {
                    "id": "T_0043_0048_02BC",
                    "text": "CH\u02BC"
                  },
                  {
                    "id": "T_0043_0068_02BC",
                    "text": "Ch\u02BC"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "V"
              },
              {
                "id": "K_B",
                "text": "B"
              },
              {
                "id": "K_N",
                "text": "N",
                "sk": [
                  {
                    "id": "U_0143",
                    "text": "\u0143"
                  },
                  {
                    "id": "U_00D1",
                    "text": "\u00D1"
                  }
                ]
              },
              {
                "id": "K_M",
                "text": "M"
              },
              {
                "id": "U_00D1",
                "text": "\u00D1"
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0",
                "sk": [
                  {
                    "id": "U_00B0",
                    "text": "\u00B0"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "layer": "shift",
                "id": "K_4",
                "pad": "70",
                "text": "-",
                "sk": [
                  {
                    "id": "U_2013",
                    "text": "\u2013"
                  },
                  {
                    "id": "U_2014",
                    "text": "\u2014"
                  },
                  {
                    "id": "U_2022",
                    "text": "\u2022"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_2",
                "text": "/",
                "sk": [
                  {
                    "id": "U_005C",
                    "text": "\\"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_3",
                "text": ":"
              },
              {
                "layer": "shift",
                "id": "K_5",
                "text": ";"
              },
              {
                "layer": "shift",
                "id": "K_7",
                "text": "("
              },
              {
                "layer": "shift",
                "id": "K_HYPHEN",
                "text": ")"
              },
              {
                "layer": "default",
                "id": "K_EQUAL",
                "text": "$",
                "sk": [
                  {
                    "id": "U_20BD",
                    "text": "\u20BD"
                  },
                  {
                    "id": "U_00A5",
                    "text": "\u00A5"
                  },
                  {
                    "id": "U_20AC",
                    "text": "\u20AC"
                  },
                  {
                    "id": "U_00A2",
                    "text": "\u00A2"
                  },
                  {
                    "id": "U_00A3",
                    "text": "\u00A3"
                  },
                  {
                    "id": "U_20A9",
                    "text": "\u20A9"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_BKSLASH",
                "text": "&",
                "sk": [
                  {
                    "id": "U_00A7",
                    "text": "\u00A7"
                  }
                ]
              },
              {
                "layer": "default",
                "id": "K_BKSLASH",
                "text": "@"
              },
              {
                "width": "97",
                "id": "U_0022",
                "sp": "10",
                "text": "\"",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "\u00AB"
                  },
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "id": "U_201E",
                    "text": "\u201E"
                  },
                  {
                    "id": "U_201C",
                    "text": "\u201C"
                  },
                  {
                    "id": "U_201D",
                    "text": "\u201D"
                  }
                ]
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "symbol",
                "width": "110",
                "id": "K_SYMBOLS",
                "sp": "1",
                "text": "\u00A7"
              },
              {
                "id": "K_LBRKT",
                "text": ".",
                "sk": [
                  {
                    "id": "U_007B",
                    "text": "\u2026"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_9",
                "text": ","
              },
              {
                "layer": "shift",
                "id": "K_0",
                "text": "?",
                "sk": [
                  {
                    "id": "U_00BF",
                    "text": "\u00BF"
                  }
                ]
              },
              {
                "id": "K_RBRKT",
                "text": "!",
                "sk": [
                  {
                    "id": "U_007D",
                    "text": "\u00A1"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_EQUAL",
                "text": "'",
                "sk": [
                  {
                    "id": "U_0060",
                    "text": "`"
                  },
                  {
                    "id": "U_2018",
                    "text": "\u2018"
                  },
                  {
                    "id": "U_2019",
                    "text": "\u2019"
                  }
                ]
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "140",
                "id": "K_LOWER",
                "sp": "1",
                "text": "*abc*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "symbol",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_0060",
                "text": "["
              },
              {
                "id": "U_007E",
                "text": "]"
              },
              {
                "id": "U_005E",
                "text": "{"
              },
              {
                "id": "U_00A8",
                "text": "}"
              },
              {
                "id": "U_00B4",
                "text": "#"
              },
              {
                "id": "U_00B8",
                "text": "%",
                "sk": [
                  {
                    "id": "U_2030",
                    "text": "\u2030"
                  }
                ]
              },
              {
                "id": "U_00AF",
                "text": "^"
              },
              {
                "id": "U_00BF",
                "text": "*"
              },
              {
                "id": "U_00A1",
                "text": "+"
              },
              {
                "id": "U_00AC",
                "text": "=",
                "sk": [
                  {
                    "id": "U_2260",
                    "text": "\u2260"
                  },
                  {
                    "id": "U_2248",
                    "text": "\u2248"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_00AA",
                "pad": "70",
                "text": "_"
              },
              {
                "id": "U_00BA",
                "text": "\\"
              },
              {
                "id": "U_00B6",
                "text": "|"
              },
              {
                "id": "U_00A7",
                "text": "~"
              },
              {
                "id": "U_00B1",
                "text": "<"
              },
              {
                "id": "U_00D7",
                "text": ">"
              },
              {
                "id": "U_00F7",
                "text": "\u20AC"
              },
              {
                "id": "U_00A6",
                "text": "\u00A3"
              },
              {
                "id": "U_00B0",
                "text": "\u00A5"
              },
              {
                "width": "83",
                "id": "U_2022",
                "sp": "10",
                "text": "\u2022"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "110",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "id": "U_00B5",
                "text": ".",
                "sk": [
                  {
                    "id": "U_2026",
                    "text": "\u2026"
                  }
                ]
              },
              {
                "id": "U_00A9",
                "text": ","
              },
              {
                "id": "U_00AE",
                "text": "?",
                "sk": [
                  {
                    "id": "U_00BF",
                    "text": "\u00BF"
                  }
                ]
              },
              {
                "id": "U_00A3",
                "text": "!",
                "sk": [
                  {
                    "id": "U_00A1",
                    "text": "\u00A1"
                  }
                ]
              },
              {
                "id": "U_20AC",
                "text": "'",
                "sk": [
                  {
                    "id": "U_0060",
                    "text": "`"
                  },
                  {
                    "id": "U_2018",
                    "text": "\u2018"
                  },
                  {
                    "id": "U_2019",
                    "text": "\u2019"
                  }
                ]
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "140",
                "id": "K_LOWER",
                "sp": "1",
                "text": "*abc*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  },
  "tablet": {
    "font": "Tahoma",
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "q"
              },
              {
                "id": "K_W",
                "text": "w"
              },
              {
                "id": "K_E",
                "text": "e",
                "sk": [
                  {
                    "id": "U_00E8",
                    "text": "\u00E8"
                  },
                  {
                    "id": "U_00E9",
                    "text": "\u00E9"
                  },
                  {
                    "id": "U_00EA",
                    "text": "\u00EA"
                  },
                  {
                    "id": "U_00EB",
                    "text": "\u00EB"
                  },
                  {
                    "id": "U_0113",
                    "text": "\u0113"
                  },
                  {
                    "id": "U_0117",
                    "text": "\u0117"
                  },
                  {
                    "id": "U_0119",
                    "text": "\u0119"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "r"
              },
              {
                "id": "K_T",
                "text": "t",
                "sk": [
                  {
                    "id": "U_00FE",
                    "text": "\u00FE"
                  },
                  {
                    "id": "T_0074_02BC",
                    "text": "t\u02BC"
                  }
                ]
              },
              {
                "id": "K_Y",
                "text": "y",
                "sk": [
                  {
                    "id": "U_00FD",
                    "text": "\u00FD"
                  },
                  {
                    "id": "U_00FF",
                    "text": "\u00FF"
                  }
                ]
              },
              {
                "id": "K_U",
                "text": "u",
                "sk": [
                  {
                    "id": "U_016B",
                    "text": "\u016B"
                  },
                  {
                    "id": "U_00F9",
                    "text": "\u00F9"
                  },
                  {
                    "id": "U_00FA",
                    "text": "\u00FA"
                  },
                  {
                    "id": "U_00FB",
                    "text": "\u00FB"
                  },
                  {
                    "id": "U_00FC",
                    "text": "\u00FC"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "i",
                "sk": [
                  {
                    "id": "U_00EC",
                    "text": "\u00EC"
                  },
                  {
                    "id": "U_00ED",
                    "text": "\u00ED"
                  },
                  {
                    "id": "U_00EE",
                    "text": "\u00EE"
                  },
                  {
                    "id": "U_00EF",
                    "text": "\u00EF"
                  },
                  {
                    "id": "U_012F",
                    "text": "\u012F"
                  },
                  {
                    "id": "U_012B",
                    "text": "\u012B"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "o",
                "sk": [
                  {
                    "id": "U_00F2",
                    "text": "\u00F2"
                  },
                  {
                    "id": "U_00F3",
                    "text": "\u00F3"
                  },
                  {
                    "id": "U_00F4",
                    "text": "\u00F4"
                  },
                  {
                    "id": "U_00F5",
                    "text": "\u00F5"
                  },
                  {
                    "id": "U_00F6",
                    "text": "\u00F6"
                  },
                  {
                    "id": "U_00F8",
                    "text": "\u00F8"
                  },
                  {
                    "id": "U_014D",
                    "text": "\u014D"
                  },
                  {
                    "id": "U_0153",
                    "text": "\u0153"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "p",
                "sk": [
                  {
                    "id": "T_0070_02BC",
                    "text": "p\u02BC"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "70",
                "text": "a",
                "sk": [
                  {
                    "id": "U_00E0",
                    "text": "\u00E0"
                  },
                  {
                    "id": "U_00E1",
                    "text": "\u00E1"
                  },
                  {
                    "id": "U_00E2",
                    "text": "\u00E2"
                  },
                  {
                    "id": "U_00E3",
                    "text": "\u00E3"
                  },
                  {
                    "id": "U_00E4",
                    "text": "\u00E4"
                  },
                  {
                    "id": "U_00E5",
                    "text": "\u00E5"
                  },
                  {
                    "id": "U_00E6",
                    "text": "\u00E6"
                  },
                  {
                    "id": "U_0101",
                    "text": "\u0101"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "s",
                "sk": [
                  {
                    "id": "U_015B",
                    "text": "\u015B"
                  },
                  {
                    "id": "U_0161",
                    "text": "\u0161"
                  },
                  {
                    "id": "U_00DF",
                    "text": "\u00DF"
                  },
                  {
                    "id": "T_0074_0073_02BC",
                    "text": "ts\u02BC"
                  }
                ]
              },
              {
                "id": "K_D",
                "text": "d",
                "sk": [
                  {
                    "id": "U_00F0"
                  }
                ]
              },
              {
                "id": "K_F",
                "text": "f"
              },
              {
                "id": "K_G",
                "text": "g"
              },
              {
                "id": "K_H",
                "text": "h"
              },
              {
                "id": "K_J",
                "text": "j"
              },
              {
                "id": "K_K",
                "text": "k",
                "sk": [
                  {
                    "id": "T_006B_02BC",
                    "text": "k\u02BC"
                  }
                ]
              },
              {
                "id": "K_L",
                "text": "l",
                "sk": [
                  {
                    "id": "U_0142",
                    "text": "\u0142"
                  }
                ]
              },
              {
                "width": "97",
                "id": "U_00F1",
                "sp": "10",
                "text": "\u00F1"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "shift",
                "width": "110",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_Z",
                "text": "z",
                "sk": [
                  {
                    "id": "U_017E",
                    "text": "\u017E"
                  },
                  {
                    "id": "U_017A",
                    "text": "\u017A"
                  },
                  {
                    "id": "U_017C",
                    "text": "\u017C"
                  }
                ]
              },
              {
                "id": "K_X",
                "text": "x"
              },
              {
                "id": "K_C",
                "text": "c",
                "sk": [
                  {
                    "id": "U_00E7",
                    "text": "\u00E7"
                  },
                  {
                    "id": "U_0107",
                    "text": "\u0107"
                  },
                  {
                    "id": "U_010D",
                    "text": "\u010D"
                  },
                  {
                    "id": "T_0063_0068_02BC",
                    "text": "ch\u02BC"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "v"
              },
              {
                "id": "K_B",
                "text": "b"
              },
              {
                "id": "K_N",
                "text": "n",
                "sk": [
                  {
                    "id": "U_012F",
                    "text": "\u0144"
                  },
                  {
                    "id": "U_00F1",
                    "text": "\u00F1"
                  }
                ]
              },
              {
                "id": "K_M",
                "text": "m"
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "id": "U_002C",
                    "text": ","
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  },
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  },
                  {
                    "id": "U_005C",
                    "text": "\\"
                  },
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  }
                ]
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "Q"
              },
              {
                "id": "K_W",
                "text": "W"
              },
              {
                "id": "K_E",
                "text": "E",
                "sk": [
                  {
                    "id": "U_00C8",
                    "text": "\u00C8"
                  },
                  {
                    "id": "U_00C9",
                    "text": "\u00C9"
                  },
                  {
                    "id": "U_00CA",
                    "text": "\u00CA"
                  },
                  {
                    "id": "U_00CB",
                    "text": "\u00CB"
                  },
                  {
                    "id": "U_0112",
                    "text": "\u0112"
                  },
                  {
                    "id": "U_0116",
                    "text": "\u0116"
                  },
                  {
                    "id": "U_0118",
                    "text": "\u0118"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_T",
                "text": "T",
                "sk": [
                  {
                    "id": "U_00DE",
                    "text": "\u00DE"
                  },
                  {
                    "id": "T_0054_02BC",
                    "text": "T\u0315"
                  }
                ]
              },
              {
                "id": "K_Y",
                "text": "Y",
                "sk": [
                  {
                    "id": "U_00DD",
                    "text": "\u00DD"
                  },
                  {
                    "id": "U_0178",
                    "text": "\u0178"
                  }
                ]
              },
              {
                "id": "K_U",
                "text": "U",
                "sk": [
                  {
                    "id": "U_016A",
                    "text": "\u016A"
                  },
                  {
                    "id": "U_00D9",
                    "text": "\u00D9"
                  },
                  {
                    "id": "U_00DA",
                    "text": "\u00DA"
                  },
                  {
                    "id": "U_00DB",
                    "text": "\u00DB"
                  },
                  {
                    "id": "U_00DC",
                    "text": "\u00DC"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "I",
                "sk": [
                  {
                    "id": "U_00CC",
                    "text": "\u00CC"
                  },
                  {
                    "id": "U_00CD",
                    "text": "\u00CD"
                  },
                  {
                    "id": "U_00CE",
                    "text": "\u00CE"
                  },
                  {
                    "id": "U_00CF",
                    "text": "\u00CF"
                  },
                  {
                    "id": "U_012E",
                    "text": "\u012E"
                  },
                  {
                    "id": "U_012A",
                    "text": "\u012A"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "O",
                "sk": [
                  {
                    "id": "U_00D2",
                    "text": "\u00D2"
                  },
                  {
                    "id": "U_00D3",
                    "text": "\u00D3"
                  },
                  {
                    "id": "U_00D4",
                    "text": "\u00D4"
                  },
                  {
                    "id": "U_00D5",
                    "text": "\u00D5"
                  },
                  {
                    "id": "U_00D6",
                    "text": "\u00D6"
                  },
                  {
                    "id": "U_00D8",
                    "text": "\u00D8"
                  },
                  {
                    "id": "U_014C",
                    "text": "\u014C"
                  },
                  {
                    "id": "U_0152",
                    "text": "\u0152"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "P",
                "sk": [
                  {
                    "id": "T_0050_02BC",
                    "text": "P\u02BC"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "70",
                "text": "A",
                "sk": [
                  {
                    "id": "U_00C0",
                    "text": "\u00C0"
                  },
                  {
                    "id": "U_00C1",
                    "text": "\u00C1"
                  },
                  {
                    "id": "U_00C2",
                    "text": "\u00C2"
                  },
                  {
                    "id": "U_00C3",
                    "text": "\u00C3"
                  },
                  {
                    "id": "U_00C4",
                    "text": "\u00C4"
                  },
                  {
                    "id": "U_00C5",
                    "text": "\u00C5"
                  },
                  {
                    "id": "U_00C6",
                    "text": "\u00C6"
                  },
                  {
                    "id": "U_0100",
                    "text": "\u0100"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "S",
                "sk": [
                  {
                    "id": "U_015A",
                    "text": "\u015A"
                  },
                  {
                    "id": "U_0160",
                    "text": "\u0160"
                  },
                  {
                    "id": "T_0054_0053_02BC",
                    "text": "TS\u02BC"
                  },
                  {
                    "id": "T_0054_0073_02BC",
                    "text": "Ts\u02BC"
                  }
                ]
              },
              {
                "id": "K_D",
                "text": "D",
                "sk": [
                  {
                    "id": "U_00D0",
                    "text": "\u00D0"
                  }
                ]
              },
              {
                "id": "K_F",
                "text": "F"
              },
              {
                "id": "K_G",
                "text": "G"
              },
              {
                "id": "K_H",
                "text": "H"
              },
              {
                "id": "K_J",
                "text": "J"
              },
              {
                "id": "K_K",
                "text": "K",
                "sk": [
                  {
                    "id": "T_004B_02BC",
                    "text": "K\u02BC"
                  }
                ]
              },
              {
                "id": "K_L",
                "text": "L",
                "sk": [
                  {
                    "id": "U_0141",
                    "text": "\u0141"
                  }
                ]
              },
              {
                "width": "96",
                "id": "U_00D1",
                "sp": "10",
                "text": "\u00D1"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "default",
                "width": "110",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              },
              {
                "id": "K_Z",
                "text": "Z",
                "sk": [
                  {
                    "id": "U_017D",
                    "text": "\u017D"
                  },
                  {
                    "id": "U_017A",
                    "text": "\u0179"
                  },
                  {
                    "id": "U_017B",
                    "text": "\u017B"
                  }
                ]
              },
              {
                "id": "K_X",
                "text": "X"
              },
              {
                "id": "K_C",
                "text": "C",
                "sk": [
                  {
                    "id": "U_00C7",
                    "text": "\u00C7"
                  },
                  {
                    "id": "U_0106",
                    "text": "\u0106"
                  },
                  {
                    "id": "U_010C",
                    "text": "\u010C"
                  },
                  {
                    "id": "T_0043_0048_02BC",
                    "text": "CH\u02BC"
                  },
                  {
                    "id": "T_0043_0068_02BC",
                    "text": "Ch\u02BC"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "V"
              },
              {
                "id": "K_B",
                "text": "B"
              },
              {
                "id": "K_N",
                "text": "N",
                "sk": [
                  {
                    "id": "U_0143",
                    "text": "\u0143"
                  },
                  {
                    "id": "U_00D1",
                    "text": "\u00D1"
                  }
                ]
              },
              {
                "id": "K_M",
                "text": "M"
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "id": "U_002C",
                    "text": ","
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  },
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  },
                  {
                    "id": "U_005C",
                    "text": "\\"
                  },
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  }
                ]
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0",
                "sk": [
                  {
                    "id": "U_00B0",
                    "text": "\u00B0"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "layer": "shift",
                "id": "K_4",
                "pad": "70",
                "text": "-",
                "sk": [
                  {
                    "id": "U_2013",
                    "text": "\u2013"
                  },
                  {
                    "id": "U_2014",
                    "text": "\u2014"
                  },
                  {
                    "id": "U_2022",
                    "text": "\u2022"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_2",
                "text": "/",
                "sk": [
                  {
                    "id": "U_005C",
                    "text": "\\"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_3",
                "text": ":"
              },
              {
                "layer": "shift",
                "id": "K_5",
                "text": ";"
              },
              {
                "layer": "shift",
                "id": "K_7",
                "text": "("
              },
              {
                "layer": "shift",
                "id": "K_HYPHEN",
                "text": ")"
              },
              {
                "layer": "default",
                "id": "K_EQUAL",
                "text": "$",
                "sk": [
                  {
                    "id": "U_20BD",
                    "text": "\u20BD"
                  },
                  {
                    "id": "U_00A5",
                    "text": "\u00A5"
                  },
                  {
                    "id": "U_20AC",
                    "text": "\u20AC"
                  },
                  {
                    "id": "U_00A2",
                    "text": "\u00A2"
                  },
                  {
                    "id": "U_00A3",
                    "text": "\u00A3"
                  },
                  {
                    "id": "U_20A9",
                    "text": "\u20A9"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_BKSLASH",
                "text": "&",
                "sk": [
                  {
                    "id": "U_00A7",
                    "text": "\u00A7"
                  }
                ]
              },
              {
                "layer": "default",
                "id": "K_BKSLASH",
                "text": "@"
              },
              {
                "width": "97",
                "id": "U_0022",
                "sp": "10",
                "text": "\"",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "\u00AB"
                  },
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "id": "U_201E",
                    "text": "\u201E"
                  },
                  {
                    "id": "U_201C",
                    "text": "\u201C"
                  },
                  {
                    "id": "U_201D",
                    "text": "\u201D"
                  }
                ]
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "symbol",
                "width": "110",
                "id": "K_SYMBOLS",
                "sp": "1",
                "text": "\u00A7"
              },
              {
                "id": "K_LBRKT",
                "text": ".",
                "sk": [
                  {
                    "id": "U_007B",
                    "text": "\u2026"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_9",
                "text": ","
              },
              {
                "layer": "shift",
                "id": "K_0",
                "text": "?",
                "sk": [
                  {
                    "id": "U_00BF",
                    "text": "\u00BF"
                  }
                ]
              },
              {
                "id": "K_RBRKT",
                "text": "!",
                "sk": [
                  {
                    "id": "U_007D",
                    "text": "\u00A1"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_EQUAL",
                "text": "'",
                "sk": [
                  {
                    "id": "U_0060",
                    "text": "`"
                  },
                  {
                    "id": "U_2018",
                    "text": "\u2018"
                  },
                  {
                    "id": "U_2019",
                    "text": "\u2019"
                  }
                ]
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "140",
                "id": "K_LOWER",
                "sp": "1",
                "text": "*abc*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "symbol",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_0060",
                "text": "["
              },
              {
                "id": "U_007E",
                "text": "]"
              },
              {
                "id": "U_005E",
                "text": "{"
              },
              {
                "id": "U_00A8",
                "text": "}"
              },
              {
                "id": "U_00B4",
                "text": "#"
              },
              {
                "id": "U_00B8",
                "text": "%",
                "sk": [
                  {
                    "id": "U_2030",
                    "text": "\u2030"
                  }
                ]
              },
              {
                "id": "U_00AF",
                "text": "^"
              },
              {
                "id": "U_00BF",
                "text": "*"
              },
              {
                "id": "U_00A1",
                "text": "+"
              },
              {
                "id": "U_00AC",
                "text": "=",
                "sk": [
                  {
                    "id": "U_2260",
                    "text": "\u2260"
                  },
                  {
                    "id": "U_2248",
                    "text": "\u2248"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_00AA",
                "pad": "70",
                "text": "_"
              },
              {
                "id": "U_00BA",
                "text": "\\"
              },
              {
                "id": "U_00B6",
                "text": "|"
              },
              {
                "id": "U_00A7",
                "text": "~"
              },
              {
                "id": "U_00B1",
                "text": "<"
              },
              {
                "id": "U_00D7",
                "text": ">"
              },
              {
                "id": "U_00F7",
                "text": "\u20AC"
              },
              {
                "id": "U_00A6",
                "text": "\u00A3"
              },
              {
                "id": "U_00B0",
                "text": "\u00A5"
              },
              {
                "width": "83",
                "id": "U_2022",
                "sp": "10",
                "text": "\u2022"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "110",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "id": "U_00B5",
                "text": ".",
                "sk": [
                  {
                    "id": "U_2026",
                    "text": "\u2026"
                  }
                ]
              },
              {
                "id": "U_00A9",
                "text": ","
              },
              {
                "id": "U_00AE",
                "text": "?",
                "sk": [
                  {
                    "id": "U_00BF",
                    "text": "\u00BF"
                  }
                ]
              },
              {
                "id": "U_00A3",
                "text": "!",
                "sk": [
                  {
                    "id": "U_00A1",
                    "text": "\u00A1"
                  }
                ]
              },
              {
                "id": "U_20AC",
                "text": "'",
                "sk": [
                  {
                    "id": "U_0060",
                    "text": "`"
                  },
                  {
                    "id": "U_2018",
                    "text": "\u2018"
                  },
                  {
                    "id": "U_2019",
                    "text": "\u2019"
                  }
                ]
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "140",
                "id": "K_LOWER",
                "sp": "1",
                "text": "*abc*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  }
}
;
  this.s_vowel_7="aeiouAEIOU";
  this.KVER="14.0.274.0";
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, 0x4010, 0x100)) {
      if(1){
        r=m=1;   // Line 22
        k.KO(0,t,"Tʼ");
      }
    }
    else if(k.KKM(e, 0x4000, 0x101)) {
      if(1){
        r=m=1;   // Line 23
        k.KO(0,t,"tʼ");
      }
    }
    else if(k.KKM(e, 0x4000, 0x102)) {
      if(1){
        r=m=1;   // Line 24
        k.KO(0,t,"chʼ");
      }
    }
    else if(k.KKM(e, 0x4010, 0x103)) {
      if(1){
        r=m=1;   // Line 25
        k.KO(0,t,"CHʼ");
      }
    }
    else if(k.KKM(e, 0x4010, 0x104)) {
      if(1){
        r=m=1;   // Line 26
        k.KO(0,t,"Chʼ");
      }
    }
    else if(k.KKM(e, 0x4000, 0x105)) {
      if(1){
        r=m=1;   // Line 27
        k.KO(0,t,"pʼ");
      }
    }
    else if(k.KKM(e, 0x4010, 0x106)) {
      if(1){
        r=m=1;   // Line 28
        k.KO(0,t,"Pʼ");
      }
    }
    else if(k.KKM(e, 0x4010, 0x107)) {
      if(1){
        r=m=1;   // Line 29
        k.KO(0,t,"TSʼ");
      }
    }
    else if(k.KKM(e, 0x4010, 0x108)) {
      if(1){
        r=m=1;   // Line 30
        k.KO(0,t,"Tsʼ");
      }
    }
    else if(k.KKM(e, 0x4000, 0x109)) {
      if(1){
        r=m=1;   // Line 31
        k.KO(0,t,"tsʼ");
      }
    }
    else if(k.KKM(e, 0x4000, 0x10A)) {
      if(1){
        r=m=1;   // Line 32
        k.KO(0,t,"kʼ");
      }
    }
    else if(k.KKM(e, 0x4010, 0x10B)) {
      if(1){
        r=m=1;   // Line 33
        k.KO(0,t,"Kʼ");
      }
    }
    else if(k.KKM(e, 0x4000, 0xDE)) {
      if(1){
        r=m=1;   // Line 14
        k.KO(0,t,";");
      }
    }
    else if(k.KKM(e, 0x4000, 0xBA)) {
      if(1){
        r=m=1;   // Line 15
        k.KO(0,t,"ñ");
      }
    }
    else if(k.KKM(e, 0x4010, 0x41)) {
      if(k.KCM(1,t,"́",1)){
        r=m=1;   // Line 47
        k.KO(1,t,"Á");
      }
      else if(k.KCM(1,t,"̀",1)){
        r=m=1;   // Line 48
        k.KO(1,t,"À");
      }
    }
    else if(k.KKM(e, 0x4010, 0x45)) {
      if(k.KCM(1,t,"́",1)){
        r=m=1;   // Line 49
        k.KO(1,t,"É");
      }
      else if(k.KCM(1,t,"̀",1)){
        r=m=1;   // Line 50
        k.KO(1,t,"È");
      }
    }
    else if(k.KKM(e, 0x4010, 0x49)) {
      if(k.KCM(1,t,"́",1)){
        r=m=1;   // Line 51
        k.KO(1,t,"Í");
      }
      else if(k.KCM(1,t,"̀",1)){
        r=m=1;   // Line 52
        k.KO(1,t,"Ì");
      }
    }
    else if(k.KKM(e, 0x4010, 0x4F)) {
      if(k.KCM(1,t,"́",1)){
        r=m=1;   // Line 53
        k.KO(1,t,"Ó");
      }
      else if(k.KCM(1,t,"̀",1)){
        r=m=1;   // Line 54
        k.KO(1,t,"Ò");
      }
    }
    else if(k.KKM(e, 0x4010, 0x55)) {
      if(k.KCM(1,t,"́",1)){
        r=m=1;   // Line 55
        k.KO(1,t,"Ú");
      }
      else if(k.KCM(1,t,"̀",1)){
        r=m=1;   // Line 56
        k.KO(1,t,"Ù");
      }
    }
    else if(k.KKM(e, 0x4000, 0xDB)) {
      if(1){
        r=m=1;   // Line 11
        k.KO(0,t,"́");
      }
    }
    else if(k.KKM(e, 0x4040, 0xDB)) {
      if(1){
        r=m=1;   // Line 12
        k.KO(0,t,"ʼ");
      }
    }
    else if(k.KKM(e, 0x4000, 0xDC)) {
      if(1){
        r=m=1;   // Line 13
        k.KO(0,t,"̓");
      }
    }
    else if(k.KKM(e, 0x4000, 0xDD)) {
      if(1){
        r=m=1;   // Line 10
        k.KO(0,t,"̀");
      }
    }
    else if(k.KKM(e, 0x4000, 0x41)) {
      if(k.KCM(1,t,"́",1)){
        r=m=1;   // Line 36
        k.KO(1,t,"á");
      }
      else if(k.KCM(1,t,"̀",1)){
        r=m=1;   // Line 37
        k.KO(1,t,"à");
      }
    }
    else if(k.KKM(e, 0x4040, 0x43)) {
      if(1){
        r=m=1;   // Line 20
        k.KO(0,t,"chʼ");
      }
    }
    else if(k.KKM(e, 0x4000, 0x45)) {
      if(k.KCM(1,t,"́",1)){
        r=m=1;   // Line 38
        k.KO(1,t,"é");
      }
      else if(k.KCM(1,t,"̀",1)){
        r=m=1;   // Line 39
        k.KO(1,t,"è");
      }
    }
    else if(k.KKM(e, 0x4000, 0x49)) {
      if(k.KCM(1,t,"́",1)){
        r=m=1;   // Line 40
        k.KO(1,t,"í");
      }
      else if(k.KCM(1,t,"̀",1)){
        r=m=1;   // Line 41
        k.KO(1,t,"ì");
      }
    }
    else if(k.KKM(e, 0x4040, 0x4B)) {
      if(1){
        r=m=1;   // Line 19
        k.KO(0,t,"kʼ");
      }
    }
    else if(k.KKM(e, 0x4040, 0x4D)) {
      if(1){
        r=m=1;   // Line 21
        k.KO(0,t,"^");
      }
    }
    else if(k.KKM(e, 0x4000, 0x4F)) {
      if(k.KCM(1,t,"́",1)){
        r=m=1;   // Line 42
        k.KO(1,t,"ó");
      }
      else if(k.KCM(1,t,"̀",1)){
        r=m=1;   // Line 43
        k.KO(1,t,"ò");
      }
    }
    else if(k.KKM(e, 0x4040, 0x50)) {
      if(1){
        r=m=1;   // Line 17
        k.KO(0,t,"pʼ");
      }
    }
    else if(k.KKM(e, 0x4040, 0x53)) {
      if(1){
        r=m=1;   // Line 18
        k.KO(0,t,"tsʼ");
      }
    }
    else if(k.KKM(e, 0x4040, 0x54)) {
      if(1){
        r=m=1;   // Line 16
        k.KO(0,t,"tʼ");
      }
    }
    else if(k.KKM(e, 0x4000, 0x55)) {
      if(k.KCM(1,t,"́",1)){
        r=m=1;   // Line 44
        k.KO(1,t,"ú");
      }
      else if(k.KCM(1,t,"̀",1)){
        r=m=1;   // Line 45
        k.KO(1,t,"ù");
      }
    }
    return r;
  };
}
