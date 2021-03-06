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
]
