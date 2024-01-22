const charts = [
  {
    'level': '2',
    'title': 'Royal Glind',
    'difName': 'Starter',
    'artist': '287',
    'maker': 'ティックル',
    'bpm': 190,
    'toolDif': 1.18,
    'noteNum': 97,
    'duration': '1:07',
    'scoreId': 0,
    'url': 'https://cw7.sakura.ne.jp/danoni/2022/0337P_RoyalGlind.html',
    'remark': '9 Panels'
  },
  {
    'level': '3',
    'title': 'Royal Glind',
    'difName': 'Basic',
    'artist': '287',
    'maker': 'ティックル',
    'bpm': 190,
    'toolDif': 1.60,
    'noteNum': 124,
    'duration': '1:07',
    'scoreId': 1,
    'url': 'https://cw7.sakura.ne.jp/danoni/2022/0337P_RoyalGlind.html',
    'remark': '13 Panels'
  },
  {
    'level': '2',
    'title': 'The Five [Short Edit]',
    'difName': 'Basic',
    'artist': 'Cranky',
    'maker': 'ティックル',
    'bpm': 160,
    'toolDif': 2.35,
    'noteNum': 215,
    'duration': '2:13',
    'scoreId': 0,
    'url': 'https://cw7.sakura.ne.jp/danoni/2022/0339P_TheFive.html',
    'remark': '8 Panels'
  },
  {
    'level': '4',
    'title': 'The Five [Short Edit]',
    'difName': 'Advanced',
    'artist': 'Cranky',
    'maker': 'ティックル',
    'bpm': 160,
    'toolDif': 4.76,
    'noteNum': 350,
    'duration': '2:13',
    'scoreId': 1,
    'url': 'https://cw7.sakura.ne.jp/danoni/2022/0339P_TheFive.html',
    'remark': '13 Panels'
  },
  {
    'level': '4',
    'title': 'こみちをかけぬけて',
    'difName': 'Basic',
    'artist': 'みそか',
    'maker': 'ティックル',
    'bpm': 150,
    'toolDif': 3.66,
    'noteNum': 194,
    'duration': '1:09',
    'scoreId': 0,
    'url': 'https://cw7.sakura.ne.jp/danoni/2022/0340P_Komichi.html',
  },
  {
    'level': '3',
    'title': 'Over the frail dream',
    'difName': 'Basic',
    'artist': 'Phantasma',
    'maker': 'ティックル',
    'bpm': 200,
    'toolDif': 2.41,
    'noteNum': 190,
    'duration': '1:33',
    'scoreId': 0,
    'url': 'https://cw7.sakura.ne.jp/danoni/2022/0076P_OverTheFrailDream.html',
  },
  {
    'level': '5',
    'title': 'Over the frail dream',
    'difName': 'Advanced',
    'artist': 'Phantasma',
    'maker': 'ティックル',
    'bpm': 200,
    'toolDif': 7.73,
    'noteNum': 415,
    'duration': '1:33',
    'scoreId': 1,
    'url': 'https://cw7.sakura.ne.jp/danoni/2022/0076P_OverTheFrailDream.html',
  },
  {
    'level': '3',
    'title': 'Chance Time!!',
    'difName': 'Basic',
    'artist': '287',
    'maker': 'ティックル',
    'bpm': 182,
    'toolDif': 2.10,
    'noteNum': 192,
    'duration': '1:50',
    'scoreId': 0,
    'url': 'https://cw7.sakura.ne.jp/danoni/2022/0341P_ChanceTime.html',
  },
  {
    'level': '5',
    'title': 'Chance Time!!',
    'difName': 'Advanced',
    'artist': '287',
    'maker': 'ティックル',
    'bpm': 182,
    'toolDif': 6.44,
    'noteNum': 415,
    'duration': '1:50',
    'scoreId': 1,
    'url': 'https://cw7.sakura.ne.jp/danoni/2022/0341P_ChanceTime.html',
  },
  {
    'level': '2',
    'title': 'Yamanote Disko Klub',
    'difName': 'Normal',
    'artist': 'Carpainter',
    'maker': 'ぷろろーぐ',
    'bpm': 133,
    'toolDif': 2.10,
    'noteNum': 206,
    'duration': '2:04',
    'scoreId': 0,
    'url': 'http://pw25.g2.xrea.com/ydisko/',
    'remark': '8 Panels'
  },
  {
    'level': '7',
    'title': 'Yamanote Disko Klub',
    'difName': 'Hard',
    'artist': 'Carpainter',
    'maker': 'ぷろろーぐ',
    'bpm': 133,
    'toolDif': 7.70,
    'noteNum': 517,
    'duration': '2:04',
    'scoreId': 1,
    'url': 'http://pw25.g2.xrea.com/ydisko/',
  },
  {
    'level': '8',
    'title': 'Yamanote Disko Klub',
    'difName': 'Very Hard',
    'artist': 'Carpainter',
    'maker': 'ぷろろーぐ',
    'bpm': 133,
    'toolDif': 17.60,
    'noteNum': 851,
    'duration': '2:04',
    'scoreId': 2,
    'url': 'http://pw25.g2.xrea.com/ydisko/',
  },
  {
    'level': '2',
    'title': 'ときめきセンチメンタル',
    'difName': 'Normal',
    'artist': 'Caro kissa',
    'maker': 'ぷろろーぐ',
    'bpm': 153,
    'toolDif': 1.30,
    'noteNum': 126,
    'duration': '1:28',
    'scoreId': 0,
    'url': 'http://pw25.g2.xrea.com/tkmk/',
    'remark': '8 Panels'
  },
  {
    'level': '5',
    'title': 'ときめきセンチメンタル',
    'difName': 'Hard',
    'artist': 'Caro kissa',
    'maker': 'ぷろろーぐ',
    'bpm': 153,
    'toolDif': 4.33,
    'noteNum': 264,
    'duration': '1:28',
    'scoreId': 1,
    'url': 'http://pw25.g2.xrea.com/tkmk/',
  },
  {
    'level': '7',
    'title': 'ときめきセンチメンタル',
    'difName': 'Very Hard',
    'artist': 'Caro kissa',
    'maker': 'ぷろろーぐ',
    'bpm': 153,
    'toolDif': 9.08,
    'noteNum': 466,
    'duration': '1:28',
    'scoreId': 2,
    'url': 'http://pw25.g2.xrea.com/tkmk/',
  },
  {
    'level': '1',
    'title': '甘夏',
    'difName': 'Normal',
    'artist': '多夢(TAM)',
    'maker': 'ぷろろーぐ',
    'bpm': 105,
    'toolDif': 0.22,
    'noteNum': 41,
    'duration': '1:28',
    'scoreId': 0,
    'url': 'http://pw25.g2.xrea.com/amn/',
    'remark': '8 Panels'
  },
  {
    'level': '3',
    'title': '甘夏',
    'difName': 'Hard',
    'artist': '多夢(TAM)',
    'maker': 'ぷろろーぐ',
    'bpm': 105,
    'toolDif': 1.31,
    'noteNum': 117,
    'duration': '1:28',
    'scoreId': 1,
    'url': 'http://pw25.g2.xrea.com/amn/',
  },
  {
    'level': '6',
    'title': '甘夏',
    'difName': 'Very Hard',
    'artist': '多夢(TAM)',
    'maker': 'ぷろろーぐ',
    'bpm': 105,
    'toolDif': 5.04,
    'noteNum': 324,
    'duration': '1:28',
    'scoreId': 2,
    'url': 'http://pw25.g2.xrea.com/amn/',
  },
  {
    'level': '3',
    'title': '極東の羊、テレキャスターと踊る',
    'difName': 'Normal',
    'artist': 'しゃろう',
    'maker': 'ぷろろーぐ',
    'bpm': 130,
    'toolDif': 2.80,
    'noteNum': 216,
    'duration': '1:50',
    'scoreId': 0,
    'url': 'http://pw25.g2.xrea.com/ktht/',
    'remark': '13 Panels'
  },
  {
    'level': '6',
    'title': '極東の羊、テレキャスターと踊る',
    'difName': 'Hard',
    'artist': 'しゃろう',
    'maker': 'ぷろろーぐ',
    'bpm': 130,
    'toolDif': 7.77,
    'noteNum': 484,
    'duration': '1:50',
    'scoreId': 1,
    'url': 'http://pw25.g2.xrea.com/ktht/',
  },
  {
    'level': '9',
    'title': '極東の羊、テレキャスターと踊る',
    'difName': 'Very Hard',
    'artist': 'しゃろう',
    'maker': 'ぷろろーぐ',
    'bpm': 130,
    'toolDif': 25.49,
    'noteNum': 897,
    'duration': '1:50',
    'scoreId': 2,
    'url': 'http://pw25.g2.xrea.com/ktht/',
  },
  {
    'level': '8',
    'title': 'Calamity Fortune',
    'difName': 'Spoilt',
    'artist': 'LeaF',
    'maker': 'Tarwil',
    'bpm': 200,
    'toolDif': 11.65,
    'noteNum': 699,
    'duration': '2:19',
    'scoreId': 0,
    'url': 'https://tarwil1503.github.io/02CalamityFortuneA.html',
  },
  {
    'level': '9',
    'title': 'Wizdomiot',
    'difName': 'Unwise',
    'artist': 'LeaF',
    'maker': 'Tarwil',
    'bpm': 200,
    'toolDif': 15.16,
    'noteNum': 850,
    'duration': '2:36',
    'scoreId': 0,
    'url': 'https://tarwil1503.github.io/03WizdomiotA.html',
  },
  {
    'level': '8',
    'title': 'Say A Vengeance feat. Jenga (2014 Update)',
    'difName': '10-Declaration',
    'artist': 'ETIA.',
    'maker': 'Tarwil',
    'bpm': 185,
    'toolDif': 13.97,
    'noteNum': 777,
    'duration': '2:13',
    'scoreId': 0,
    'url': 'https://tarwil1503.github.io/07SayAVengeance.html',
  },
  {
    'level': '4',
    'title': 'Spooktacular',
    'difName': 'Normal',
    'artist': 'PeriTune',
    'maker': 'ぷろろーぐ',
    'bpm': 125,
    'toolDif': 3.95,
    'noteNum': 259,
    'duration': '1:25',
    'scoreId': 0,
    'url': 'http://pw25.g2.xrea.com/spook/',
    'remark': '13 Panels'
  },
  {
    'level': '7',
    'title': 'Spooktacular',
    'difName': 'Hard',
    'artist': 'PeriTune',
    'maker': 'ぷろろーぐ',
    'bpm': 125,
    'toolDif': 9.00,
    'noteNum': 413,
    'duration': '1:25',
    'scoreId': 1,
    'url': 'http://pw25.g2.xrea.com/spook/',
  },
  {
    'level': '8',
    'title': 'Spooktacular',
    'difName': 'Very Hard',
    'artist': 'PeriTune',
    'maker': 'ぷろろーぐ',
    'bpm': 125,
    'toolDif': 17.05,
    'noteNum': 605,
    'duration': '1:25',
    'scoreId': 2,
    'url': 'http://pw25.g2.xrea.com/spook/',
  },
  {
    'level': '1',
    'title': '哀愁系',
    'difName': 'STARTER',
    'artist': 'S',
    'maker': '蒼宮あいす',
    'bpm': 100,
    'toolDif': 0.17,
    'noteNum': 44,
    'duration': '2:01',
    'scoreId': 0,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P011_aisyukei.html',
    'remark': '8 Panels'
  },
  {
    'level': '1',
    'title': '哀愁系',
    'difName': 'BASIC',
    'artist': 'S',
    'maker': '蒼宮あいす',
    'bpm': 100,
    'toolDif': 0.55,
    'noteNum': 107,
    'duration': '2:01',
    'scoreId': 1,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P011_aisyukei.html',
    'key': '*',
    'remark': '8 Panels'
  },
  {
    'level': '3',
    'title': '哀愁系',
    'difName': 'ADVANCED',
    'artist': 'S',
    'maker': '蒼宮あいす',
    'bpm': 100,
    'toolDif': 2.16,
    'noteNum': 234,
    'duration': '2:01',
    'scoreId': 2,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P011_aisyukei.html',
    'remark': '13 Panels'
  },
  {
    'level': '4',
    'title': '哀愁系',
    'difName': 'MASTER',
    'artist': 'S',
    'maker': '蒼宮あいす',
    'bpm': 100,
    'toolDif': 6.15,
    'noteNum': 496,
    'duration': '2:01',
    'scoreId': 3,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P011_aisyukei.html',
    'key': '*'
  },
  {
    'level': '1',
    'title': 'What\'s what',
    'difName': 'STARTER',
    'artist': 'YU',
    'maker': '蒼宮あいす',
    'bpm': 130,
    'toolDif': 0.25,
    'noteNum': 75,
    'duration': '1:58',
    'scoreId': 0,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P013_WW.html',
    'remark': '8 Panels'
  },
  {
    'level': '2',
    'title': 'What\'s what',
    'difName': 'BASIC',
    'artist': 'YU',
    'maker': '蒼宮あいす',
    'bpm': 130,
    'toolDif': 2.06,
    'noteNum': 215,
    'duration': '1:58',
    'scoreId': 1,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P013_WW.html',
    'remark': '8 Panels'
  },
  {
    'level': '3',
    'title': 'What\'s what',
    'difName': 'ADVANCED',
    'artist': 'YU',
    'maker': '蒼宮あいす',
    'bpm': 130,
    'toolDif': 3.14,
    'noteNum': 322,
    'duration': '1:58',
    'scoreId': 2,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P013_WW.html',
    'key': '*',
    'remark': '8 Panels'
  },
  {
    'level': '6',
    'title': 'What\'s what',
    'difName': 'MASTER',
    'artist': 'YU',
    'maker': '蒼宮あいす',
    'bpm': 130,
    'toolDif': 10.67,
    'noteNum': 648,
    'duration': '1:58',
    'scoreId': 3,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P013_WW.html',
    'key': '*'
  },
  {
    'level': '1',
    'title': '零舞 "東京理科大学 YOSAKOIソーラン"',
    'difName': 'STARTER',
    'artist': 'Cranky',
    'maker': '蒼宮あいす',
    'bpm': 148,
    'toolDif': 0.33,
    'noteNum': 82,
    'duration': '2:18',
    'scoreId': 0,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P362_RAVE.html',
    'remark': '8 Panels'
  },
  {
    'level': '3',
    'title': '零舞 "東京理科大学 YOSAKOIソーラン"',
    'difName': 'BASIC',
    'artist': 'Cranky',
    'maker': '蒼宮あいす',
    'bpm': 148,
    'toolDif': 3.24,
    'noteNum': 367,
    'duration': '2:18',
    'scoreId': 1,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P362_RAVE.html',
    'remark': '8 Panels'
  },
  {
    'level': '5',
    'title': '零舞 "東京理科大学 YOSAKOIソーラン"',
    'difName': 'ADVANCED',
    'artist': 'Cranky',
    'maker': '蒼宮あいす',
    'bpm': 148,
    'toolDif': 10.55,
    'noteNum': 666,
    'duration': '2:18',
    'scoreId': 2,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P362_RAVE.html',
    'key': '*',
    'remark': '13 Panels'
  },
  {
    'level': '8',
    'title': '零舞 "東京理科大学 YOSAKOIソーラン"',
    'difName': 'MASTER',
    'artist': 'Cranky',
    'maker': '蒼宮あいす',
    'bpm': 148,
    'toolDif': 21.38,
    'noteNum': 1029,
    'duration': '2:18',
    'scoreId': 3,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P362_RAVE.html',
    'key': '*'
  },
  {
    'level': '1',
    'title': 'ShakujiiPark',
    'difName': 'STARTER',
    'artist': 'watson',
    'maker': '蒼宮あいす',
    'bpm': 140,
    'toolDif': 0.37,
    'noteNum': 51,
    'duration': '1:12',
    'scoreId': 0,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P597_SkjP.html',
    'remark': '8 Panels'
  },
  {
    'level': '2',
    'title': 'ShakujiiPark',
    'difName': 'BASIC',
    'artist': 'watson',
    'maker': '蒼宮あいす',
    'bpm': 140,
    'toolDif': 2.47,
    'noteNum': 204,
    'duration': '1:12',
    'scoreId': 1,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P597_SkjP.html',
    'remark': '8 Panels'
  },
  {
    'level': '5',
    'title': 'ShakujiiPark',
    'difName': 'ADVANCED',
    'artist': 'watson',
    'maker': '蒼宮あいす',
    'bpm': 140,
    'toolDif': 8.16,
    'noteNum': 400,
    'duration': '1:12',
    'scoreId': 2,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P597_SkjP.html',
    'key': '*',
    'remark': '13 Panels'
  },
  {
    'level': '7',
    'title': 'ShakujiiPark',
    'difName': 'MASTER',
    'artist': 'watson',
    'maker': '蒼宮あいす',
    'bpm': 140,
    'toolDif': 12.45,
    'noteNum': 525,
    'duration': '1:12',
    'scoreId': 3,
    'url': 'http://onigiri.icekirby.net/Panel_2022/P597_SkjP.html',
    'key': '*'
  },
  {
    'level': '6',
    'title': '水燦神楽',
    'difName': 'Normal',
    'artist': 'WABI',
    'maker': 'SKB',
    'bpm': 189,
    'toolDif': 6.53,
    'noteNum': 526,
    'duration': '2:31',
    'scoreId': 0,
    'url': 'https://superkuppabros.sakura.ne.jp/hp/danoni/danoni/suisan_kagura.html',
  },
  {
    'level': '9',
    'title': '水燦神楽',
    'difName': 'Another',
    'artist': 'WABI',
    'maker': 'SKB',
    'bpm': 189,
    'toolDif': 21.20,
    'noteNum': 1000,
    'duration': '2:31',
    'scoreId': 1,
    'url': 'https://superkuppabros.sakura.ne.jp/hp/danoni/danoni/suisan_kagura.html',
  },
  {
    'level': '3',
    'title': 'PRECIOUS MOMENT',
    'difName': 'Normal',
    'artist': 'P*Light',
    'maker': 'ぷろろーぐ',
    'bpm': 185,
    'toolDif': 1.73,
    'noteNum': 201,
    'duration': '1:58',
    'scoreId': 0,
    'url': 'http://pw25.g2.xrea.com/precious_p/',
    'remark': '13 Panels'
  },
  {
    'level': '7',
    'title': 'PRECIOUS MOMENT',
    'difName': 'Hard',
    'artist': 'P*Light',
    'maker': 'ぷろろーぐ',
    'bpm': 185,
    'toolDif': 10.31,
    'noteNum': 575,
    'duration': '1:58',
    'scoreId': 1,
    'url': 'http://pw25.g2.xrea.com/precious_p/',
  },
  {
    'level': '8',
    'title': 'PRECIOUS MOMENT',
    'difName': 'Very Hard',
    'artist': 'P*Light',
    'maker': 'ぷろろーぐ',
    'bpm': 185,
    'toolDif': 16.57,
    'noteNum': 768,
    'duration': '1:58',
    'scoreId': 2,
    'url': 'http://pw25.g2.xrea.com/precious_p/',
  },
  {
    'level': '1',
    'title': 'Stage 1 -チュートリアル古都-',
    'difName': 'Stage 1',
    'artist': 'ISAo',
    'maker': 'ぷろろーぐ',
    'bpm': 134,
    'toolDif': 0.12,
    'noteNum': 24,
    'duration': '1:19',
    'scoreId': 0,
    'url': 'http://pw25.g2.xrea.com/s1tk/',
    'remark': '8 Panels',
    'date': '2022/8/12',
  },
  {
    'level': '1',
    'title': 'Stage 1 -チュートリアル古都-',
    'difName': 'Stage 2',
    'artist': 'ISAo',
    'maker': 'ぷろろーぐ',
    'bpm': 134,
    'toolDif': 0.41,
    'noteNum': 48,
    'duration': '1:19',
    'scoreId': 1,
    'url': 'http://pw25.g2.xrea.com/s1tk/',
    'remark': '13 Panels',
    'date': '2022/8/12',
  },
  {
    'level': '2',
    'title': 'Stage 1 -チュートリアル古都-',
    'difName': 'Stage 3',
    'artist': 'ISAo',
    'maker': 'ぷろろーぐ',
    'bpm': 134,
    'toolDif': 0.91,
    'noteNum': 91,
    'duration': '1:19',
    'scoreId': 2,
    'url': 'http://pw25.g2.xrea.com/s1tk/',
    'remark': '',
    'date': '2022/8/12',
  },
  {
    'level': '2',
    'title': 'ふたつカゲボウシ',
    'difName': 'Normal',
    'artist': 'Notzan ACT',
    'maker': 'ぷろろーぐ',
    'bpm': 100,
    'toolDif': 0.70,
    'noteNum': 108,
    'duration': '2:23',
    'scoreId': 0,
    'url': 'http://pw25.g2.xrea.com/ftkg/',
    'remark': '9 Panels',
    'date': '2022/8/12',
  },
  {
    'level': '4',
    'title': 'ふたつカゲボウシ',
    'difName': 'Hard',
    'artist': 'Notzan ACT',
    'maker': 'ぷろろーぐ',
    'bpm': 100,
    'toolDif': 3.33,
    'noteNum': 338,
    'duration': '2:23',
    'scoreId': 1,
    'url': 'http://pw25.g2.xrea.com/ftkg/',
    'remark': '',
    'date': '2022/8/12',
  },
  {
    'level': '6',
    'title': 'ふたつカゲボウシ',
    'difName': 'Very Hard',
    'artist': 'Notzan ACT',
    'maker': 'ぷろろーぐ',
    'bpm': 100,
    'toolDif': 7.02,
    'noteNum': 580,
    'duration': '2:23',
    'scoreId': 2,
    'url': 'http://pw25.g2.xrea.com/ftkg/',
    'remark': '',
    'date': '2022/8/12',
  },
  {
    'level': '5',
    'title': '文明開化',
    'difName': 'Normal',
    'artist': 'beco(騒音のない世界)',
    'maker': 'ぷろろーぐ',
    'bpm': 240,
    'toolDif': 4.42,
    'noteNum': 351,
    'duration': '1:47',
    'scoreId': 0,
    'url': 'http://pw25.g2.xrea.com/bmk/',
    'remark': '',
    'date': '2022/8/14',
  },
  {
    'level': '7',
    'title': '文明開化',
    'difName': 'Hard',
    'artist': 'beco(騒音のない世界)',
    'maker': 'ぷろろーぐ',
    'bpm': 240,
    'toolDif': 14.67,
    'noteNum': 698,
    'duration': '1:47',
    'scoreId': 1,
    'url': 'http://pw25.g2.xrea.com/bmk/',
    'remark': '',
    'date': '2022/8/14',
  },
  {
    'level': '10',
    'title': '文明開化',
    'difName': 'Very Hard',
    'artist': 'beco(騒音のない世界)',
    'maker': 'ぷろろーぐ',
    'bpm': 240,
    'toolDif': 30.69,
    'noteNum': 1012,
    'duration': '1:47',
    'scoreId': 2,
    'url': 'http://pw25.g2.xrea.com/bmk/',
    'remark': '',
    'date': '2022/8/14',
  },
  {
    'level': '6',
    'title': '魔法少女とチョコレゐト',
    'difName': 'Friend',
    'artist': 'ピノキオピー',
    'maker': 'SKB',
    'bpm': 150,
    'toolDif': 7.86,
    'noteNum': 699,
    'duration': '3:09',
    'scoreId': 0,
    'url': 'https://superkuppabros.sakura.ne.jp/hp/danoni/danoni/magical_girl_chocolate_p.html',
    'remark': '',
    'date': '2022/8/13',
  },
  {
    'level': '9',
    'title': '魔法少女とチョコレゐト',
    'difName': 'Enemy',
    'artist': 'ピノキオピー',
    'maker': 'SKB',
    'bpm': 150,
    'toolDif': 23.69,
    'noteNum': 1275,
    'duration': '3:09',
    'scoreId': 1,
    'url': 'https://superkuppabros.sakura.ne.jp/hp/danoni/danoni/magical_girl_chocolate_p.html',
    'remark': '',
    'date': '2022/8/13',
  },
  {
    'level': '1',
    'title': '音楽の時間',
    'difName': 'Basic',
    'artist': 'watson',
    'maker': 'ティックル',
    'bpm': 135,
    'toolDif': 0.85,
    'noteNum': 30,
    'duration': '0:18',
    'scoreId': 0,
    'url': 'https://cw7.sakura.ne.jp/danoni/2022/0276P_MusicTime.html',
    'remark': '10 Panels',
    'date': '2022/8/15',
    'key': '*'
  },
  {
    'level': '1',
    'title': 'Skyward',
    'difName': 'STARTER',
    'artist': 'GT-K',
    'maker': '蒼宮あいす',
    'bpm': 160,
    'toolDif': 1.01,
    'noteNum': 137,
    'duration': '1:49',
    'scoreId': 0,
    'url': 'http://onigiri.icekirby.net/danoni_2022/P005_Skyward.html',
    'remark': '8 Panels',
    'date': '2022/8/15',
  },
  {
    'level': '2',
    'title': 'Skyward',
    'difName': 'BASIC',
    'artist': 'GT-K',
    'maker': '蒼宮あいす',
    'bpm': 160,
    'toolDif': 2.27,
    'noteNum': 274,
    'duration': '1:49',
    'scoreId': 1,
    'url': 'http://onigiri.icekirby.net/danoni_2022/P005_Skyward.html',
    'remark': '8 Panels',
    'date': '2022/8/15',
  },
  {
    'level': '4',
    'title': 'Skyward',
    'difName': 'ADVANCED',
    'artist': 'GT-K',
    'maker': '蒼宮あいす',
    'bpm': 160,
    'toolDif': 6.55,
    'noteNum': 437,
    'duration': '1:49',
    'scoreId': 2,
    'url': 'http://onigiri.icekirby.net/danoni_2022/P005_Skyward.html',
    'remark': '13 Panels',
    'date': '2022/8/15',
  },
  {
    'level': '7',
    'title': 'Skyward',
    'difName': 'MASTER',
    'artist': 'GT-K',
    'maker': '蒼宮あいす',
    'bpm': 160,
    'toolDif': 11.87,
    'noteNum': 632,
    'duration': '1:49',
    'scoreId': 3,
    'url': 'http://onigiri.icekirby.net/danoni_2022/P005_Skyward.html',
    'remark': '',
    'date': '2022/8/15',
  },
  {
    'level': '2',
    'title': 'スーパー・トレイン',
    'difName': 'Normal',
    'artist': 'beco(騒音のない世界)',
    'maker': 'ぷろろーぐ',
    'bpm': 175,
    'toolDif': 1.78,
    'noteNum': 158,
    'duration': '1:25',
    'scoreId': 0,
    'url': 'http://pw25.g2.xrea.com/supert/',
    'remark': '',
    'date': '2022/7/31',
  },
  {
    'level': '6',
    'title': 'スーパー・トレイン',
    'difName': 'Hard',
    'artist': 'beco(騒音のない世界)',
    'maker': 'ぷろろーぐ',
    'bpm': 175,
    'toolDif': 5.98,
    'noteNum': 366,
    'duration': '1:25',
    'scoreId': 1,
    'url': 'http://pw25.g2.xrea.com/supert/',
    'remark': '',
    'date': '2022/7/31',
  },
  {
    'level': '7',
    'title': 'スーパー・トレイン',
    'difName': 'Very Hard',
    'artist': 'beco(騒音のない世界)',
    'maker': 'ぷろろーぐ',
    'bpm': 175,
    'toolDif': 12.65,
    'noteNum': 527,
    'duration': '1:25',
    'scoreId': 2,
    'url': 'http://pw25.g2.xrea.com/supert/',
    'remark': '',
    'date': '2022/7/31',
  },
  {
    'level': '1',
    'title': 'ゴッドロード',
    'difName': 'Easy',
    'artist': 'かずち',
    'maker': 'izkdic',
    'bpm': 160,
    'toolDif': 0.60,
    'noteNum': 60,
    'duration': '1:10',
    'scoreId': 0,
    'url': 'https://vorhandensein.sakura.ne.jp/danoni/p001_godroad/',
    'remark': '8 Panels',
    'date': '2022/9/11',
  },
  {
    'level': '4',
    'title': 'ゴッドロード',
    'difName': 'Normal',
    'artist': 'かずち',
    'maker': 'izkdic',
    'bpm': 160,
    'toolDif': 1.83,
    'noteNum': 134,
    'duration': '1:10',
    'scoreId': 1,
    'url': 'https://vorhandensein.sakura.ne.jp/danoni/p001_godroad/',
    'remark': '16 Panels',
    'date': '2022/9/11',
  },
  {
    'level': '6',
    'title': 'ゴッドロード',
    'difName': 'Hard',
    'artist': 'かずち',
    'maker': 'izkdic',
    'bpm': 160,
    'toolDif': 5.14,
    'noteNum': 250,
    'duration': '1:10',
    'scoreId': 2,
    'url': 'https://vorhandensein.sakura.ne.jp/danoni/p001_godroad/',
    'remark': '',
    'date': '2022/9/11',
  },
  {
    'level': '10',
    'title': 'ゴッドロード',
    'difName': 'Expert',
    'artist': 'かずち',
    'maker': 'izkdic',
    'bpm': 160,
    'toolDif': 21.45,
    'noteNum': 510,
    'duration': '1:10',
    'scoreId': 3,
    'url': 'https://vorhandensein.sakura.ne.jp/danoni/p001_godroad/',
    'remark': '',
    'date': '2022/9/11',
  },
  {
    'level': '1',
    'title': 'シャイニングスター',
    'difName': 'Normal',
    'artist': '魔王魂',
    'maker': 'ぷろろーぐ',
    'bpm': 158,
    'toolDif': 0.59,
    'noteNum': 76,
    'duration': '1:25',
    'scoreId': 0,
    'url': 'http://pw25.g2.xrea.com/sst/',
    'remark': '8 Panels',
    'date': '2023/2/11',
  },
  {
    'level': '5',
    'title': 'シャイニングスター',
    'difName': 'Hard',
    'artist': '魔王魂',
    'maker': 'ぷろろーぐ',
    'bpm': 158,
    'toolDif': 4.88,
    'noteNum': 298,
    'duration': '1:25',
    'scoreId': 1,
    'url': 'http://pw25.g2.xrea.com/sst/',
    'remark': '',
    'date': '2023/2/11',
  },
  {
    'level': '7',
    'title': 'シャイニングスター',
    'difName': 'Very Hard',
    'artist': '魔王魂',
    'maker': 'ぷろろーぐ',
    'bpm': 158,
    'toolDif': 13.48,
    'noteNum': 527,
    'duration': '1:25',
    'scoreId': 2,
    'url': 'http://pw25.g2.xrea.com/sst/',
    'remark': '',
    'date': '2023/2/11',
  },
  {
    'level': '1',
    'title': 'ときめき☆ラビリンス',
    'difName': 'Normal',
    'artist': '魔王魂',
    'maker': 'ぷろろーぐ',
    'bpm': 142,
    'toolDif': 0.75,
    'noteNum': 97,
    'duration': '1:42',
    'scoreId': 0,
    'url': 'http://pw25.g2.xrea.com/tola_p/',
    'remark': '8 Panels',
    'date': '2023/2/11',
  },
  {
    'level': '5',
    'title': 'ときめき☆ラビリンス',
    'difName': 'Hard',
    'artist': '魔王魂',
    'maker': 'ぷろろーぐ',
    'bpm': 142,
    'toolDif': 3.87,
    'noteNum': 299,
    'duration': '1:42',
    'scoreId': 1,
    'url': 'http://pw25.g2.xrea.com/tola_p/',
    'remark': '',
    'date': '2023/2/11',
  },
  {
    'level': '7',
    'title': 'ときめき☆ラビリンス',
    'difName': 'Very Hard',
    'artist': '魔王魂',
    'maker': 'ぷろろーぐ',
    'bpm': 142,
    'toolDif': 11.20,
    'noteNum': 553,
    'duration': '1:42',
    'scoreId': 2,
    'url': 'http://pw25.g2.xrea.com/tola_p/',
    'remark': '',
    'key': '*',
    'date': '2023/2/11',
  },
  {
    'level': '7',
    'title': 'ときめき☆ラビリンス',
    'difName': 'Very Hard-',
    'artist': '魔王魂',
    'maker': 'ぷろろーぐ',
    'bpm': 142,
    'toolDif': 10.88,
    'noteNum': 537,
    'duration': '1:42',
    'scoreId': 3,
    'url': 'http://pw25.g2.xrea.com/tola_p/',
    'remark': '',
    'date': '2023/2/11',
  },
  {
    'level': '2',
    'title': '１周年！',
    'difName': 'Normal',
    'artist': '多夢(TAM)',
    'maker': 'ぷろろーぐ',
    'bpm': 110,
    'toolDif': 1.11,
    'noteNum': 115,
    'duration': '1:33',
    'scoreId': 0,
    'url': 'http://pw25.g2.xrea.com/1staniv/',
    'remark': '10 Panels',
    'date': '2023/2/11',
  },
  {
    'level': '5',
    'title': '１周年！',
    'difName': 'Hard',
    'artist': '多夢(TAM)',
    'maker': 'ぷろろーぐ',
    'bpm': 110,
    'toolDif': 5.12,
    'noteNum': 304,
    'duration': '1:33',
    'scoreId': 1,
    'url': 'http://pw25.g2.xrea.com/1staniv/',
    'remark': '',
    'date': '2023/2/11',
  },
  {
    'level': '7',
    'title': '１周年！',
    'difName': 'Very Hard',
    'artist': '多夢(TAM)',
    'maker': 'ぷろろーぐ',
    'bpm': 110,
    'toolDif': 11.43,
    'noteNum': 502,
    'duration': '1:33',
    'scoreId': 2,
    'url': 'http://pw25.g2.xrea.com/1staniv/',
    'remark': '',
    'date': '2023/2/11',
  },
  {
    'level': '1',
    'title': 'Fly with me, Ms.Necromancer',
    'difName': 'Light',
    'artist': 'soleil',
    'maker': '蒼宮あいす',
    'bpm': 155,
    'toolDif': 1.01,
    'noteNum': 157,
    'duration': '2:10',
    'scoreId': 0,
    'url': 'http://onigiri.icekirby.net/danoni_2023/P006_FMN.html',
    'remark': '8 Panels',
    'date': '2023/4/18',
  },
  {
    'level': '3',
    'title': 'Fly with me, Ms.Necromancer',
    'difName': 'Standard',
    'artist': 'soleil',
    'maker': '蒼宮あいす',
    'bpm': 155,
    'toolDif': 2.68,
    'noteNum': 281,
    'duration': '2:10',
    'scoreId': 1,
    'url': 'http://onigiri.icekirby.net/danoni_2023/P006_FMN.html',
    'remark': '13 Panels',
    'date': '2023/4/18',
  },
  {
    'level': '5',
    'title': 'Fly with me, Ms.Necromancer',
    'difName': 'Advanced',
    'artist': 'soleil',
    'maker': '蒼宮あいす',
    'bpm': 155,
    'toolDif': 10.60,
    'noteNum': 679,
    'duration': '2:10',
    'scoreId': 2,
    'url': 'http://onigiri.icekirby.net/danoni_2023/P006_FMN.html',
    'remark': '13 Panels',
    'date': '2023/4/18',
  },
  {
    'level': '9',
    'title': 'Fly with me, Ms.Necromancer',
    'difName': 'MASTER',
    'artist': 'soleil',
    'maker': '蒼宮あいす',
    'bpm': 155,
    'toolDif': 32.95,
    'noteNum': 1202,
    'duration': '2:10',
    'scoreId': 3,
    'url': 'http://onigiri.icekirby.net/danoni_2023/P006_FMN.html',
    'remark': '',
    'date': '2023/4/18',
  },
  {
    'level': '4',
    'title': 'Closer',
    'difName': 'Normal',
    'artist': 'daehan',
    'maker': 'ぷろろーぐ',
    'bpm': 170,
    'toolDif': 4.44,
    'noteNum': 477,
    'duration': '3:21',
    'scoreId': 0,
    'url': 'https://prologues.works/closer/',
    'remark': '',
    'date': '2023/12/29',
  },
  {
    'level': '7',
    'title': 'Closer',
    'difName': 'Hard',
    'artist': 'daehan',
    'maker': 'ぷろろーぐ',
    'bpm': 170,
    'toolDif': 15.40,
    'noteNum': 1134,
    'duration': '3:21',
    'scoreId': 1,
    'url': 'https://prologues.works/closer/',
    'remark': '',
    'date': '2023/12/29',
  },
  {
    'level': '9',
    'title': 'Closer',
    'difName': 'Very Hard',
    'artist': 'daehan',
    'maker': 'ぷろろーぐ',
    'bpm': 170,
    'toolDif': 29.25,
    'noteNum': 1578,
    'duration': '3:21',
    'scoreId': 2,
    'url': 'https://prologues.works/closer/',
    'remark': '',
    'key': '*',
    'date': '2023/12/29',
  },
  {
    'level': '1',
    'title': 'strawberry music',
    'difName': 'Light',
    'artist': 'Yamajet',
    'maker': '蒼宮あいす',
    'bpm': 180,
    'toolDif': 0.67,
    'noteNum': 87,
    'duration': '1:33',
    'scoreId': 0,
    'url': 'http://onigiri.icekirby.net/danoni_2023/P007_strawberry.html',
    'remark': '8 Panels',
    'date': '2023/12/30',
  },
  {
    'level': '3',
    'title': 'strawberry music',
    'difName': 'Standard',
    'artist': 'Yamajet',
    'maker': '蒼宮あいす',
    'bpm': 180,
    'toolDif': 4.84,
    'noteNum': 299,
    'duration': '1:33',
    'scoreId': 1,
    'url': 'http://onigiri.icekirby.net/danoni_2023/P007_strawberry.html',
    'remark': '8 Panels',
    'date': '2023/12/30',
  },
  {
    'level': '6',
    'title': 'strawberry music',
    'difName': 'Advanced',
    'artist': 'Yamajet',
    'maker': '蒼宮あいす',
    'bpm': 180,
    'toolDif': 9.30,
    'noteNum': 488,
    'duration': '1:33',
    'scoreId': 2,
    'url': 'http://onigiri.icekirby.net/danoni_2023/P007_strawberry.html',
    'remark': '',
    'date': '2023/12/30',
  },
]
