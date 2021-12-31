import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import Outputs from '../../../../../resources/outputs';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.MatoyasRelict,
  timelineFile: 'matoyas_relict.txt',
  triggers: [
    {
      id: 'Matoyas Mudman Hard Rock',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '547F', source: 'Mudman' }),
      netRegexDe: NetRegexes.startsUsing({ id: '547F', source: 'Matschmann' }),
      netRegexFr: NetRegexes.startsUsing({ id: '547F', source: 'tadboue' }),
      netRegexJa: NetRegexes.startsUsing({ id: '547F', source: 'マッドマン' }),
      netRegexCn: NetRegexes.startsUsing({ id: '547F', source: '土泥人' }),
      netRegexKo: NetRegexes.startsUsing({ id: '547F', source: '진흙인간' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Matoyas Mudman Peat Pelt',
      type: 'Ability',
      netRegex: NetRegexes.ability({ id: '5482', source: 'Mudman', capture: false }),
      netRegexDe: NetRegexes.ability({ id: '5482', source: 'Matschmann', capture: false }),
      netRegexFr: NetRegexes.ability({ id: '5482', source: 'tadboue', capture: false }),
      netRegexJa: NetRegexes.ability({ id: '5482', source: 'マッドマン', capture: false }),
      netRegexCn: NetRegexes.ability({ id: '5482', source: '土泥人', capture: false }),
      netRegexKo: NetRegexes.ability({ id: '5482', source: '진흙인간', capture: false }),
      alertText: (_data, _matches, output) => output.pullOrb!(),
      outputStrings: {
        pullOrb: {
          en: 'Pull orb to an empty hole',
          de: 'Orb in ein Loch lenken',
          fr: 'Tirez l\'orbe vers un trou vide',
          ja: '泥団子を四隅の穴に誘導',
          cn: '诱导泥球到无敌人的风圈',
          ko: '빈 구멍으로 구슬 보내기',
        },
      },
    },
    {
      id: 'Matoyas Mudman Stone Age',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5491', source: 'Mudman', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5491', source: 'Matschmann', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5491', source: 'tadboue', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5491', source: 'マッドマン', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '5491', source: '土泥人', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '5491', source: '진흙인간', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Matoyas Mudman Falling Rock',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '003E' }),
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Matoyas Mudman Sputter',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '008B' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Matoyas Nixie Crash-smash',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '00E6' }),
      alertText: (data, matches, output) => {
        if (data.me === matches.target)
          return output.tankBuster!();
        return output.avoidTether!({ player: matches.target });
      },
      outputStrings: {
        tankBuster: Outputs.tankBuster,
        avoidTether: {
          en: 'Avoid ${player} and tethers',
          de: 'Weiche ${player} und Verbindungen aus',
          ja: '${player}と線から離れる',
          cn: '远离${player}及其连线',
          ko: '${player}와 선 피하기',
        },
      },
    },
    {
      id: 'Matoyas Nixie Shower Power',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5991', source: 'Nixie', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5991', source: 'Nixchen', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5991', source: 'nixe', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5991', source: 'ノッケン', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '5991', source: '水滴精', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '5991', source: '뇌켄', capture: false }),
      alertText: (_data, _matches, output) => output.avoidWall!(),
      outputStrings: {
        avoidWall: {
          en: 'Avoid Wall Flush',
          de: 'Weiche den Wand-Stömmungen aus',
          fr: 'Évitez le jet d\'eau',
          ja: '光ってない横列に移動',
          cn: '站在墙壁未发光的一列',
          ko: '벽 물줄기 피하기',
        },
      },
    },
    {
      id: 'Matoyas Nixie Pitter-patter',
      type: 'Ability',
      netRegex: NetRegexes.ability({ id: '5988', source: 'Nixie', capture: false }),
      netRegexDe: NetRegexes.ability({ id: '5988', source: 'Nixchen', capture: false }),
      netRegexFr: NetRegexes.ability({ id: '5988', source: 'nixe', capture: false }),
      netRegexJa: NetRegexes.ability({ id: '5988', source: 'ノッケン', capture: false }),
      netRegexCn: NetRegexes.ability({ id: '5988', source: '水滴精', capture: false }),
      netRegexKo: NetRegexes.ability({ id: '5988', source: '뇌켄', capture: false }),
      delaySeconds: 3,
      durationSeconds: 6,
      infoText: (_data, _matches, output) => output.stepIn!(),
      outputStrings: {
        stepIn: {
          en: 'Step in Puddle near the Cloud',
          de: 'In einer Fläche nahe der Wolke stehen',
          fr: 'Marchez dans la zone au sol près du nuage',
          ja: '雲に近い水を踏む',
          cn: '站在靠近云朵的水流里等待浮空',
          ko: '구름 근처 물줄기 위에 서기',
        },
      },
    },
    {
      id: 'Matoyas Porxie Tender Loin',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5913', source: 'Mother Porxie', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5913', source: 'Muttersau', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5913', source: 'mère porxie', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5913', source: 'マザーポークシー', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '5913', source: '仙子猪之母', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '5913', source: '마더 포크시', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Matoyas Porxie Huff and Puff',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5919', source: 'Mother Porxie', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5919', source: 'Muttersau', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5919', source: 'mère porxie', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5919', source: 'マザーポークシー', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '5919', source: '仙子猪之母', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '5919', source: '마더 포크시', capture: false }),
      alertText: (_data, _matches, output) => output.getKnocked!(),
      outputStrings: {
        getKnocked: {
          en: 'Get Knocked into Safe (no anti-knockback)',
          de: 'Lass dich in den Safespot zurückstoßen (kein Rückstoßschutz)',
          fr: 'Faites-vous pousser en zone sûre (pas d\'anti-poussée)',
          ja: 'ボスの正面に (堅実魔効かない)',
          cn: '站在Boss正面 (防击退无效)',
          ko: '안전한 구역으로 넉백당하기',
        },
      },
    },
    {
      id: 'Matoyas Porxie Meat Mallet',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5916', source: 'Mother Porxie', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5916', source: 'Muttersau', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5916', source: 'mère porxie', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5916', source: 'マザーポークシー', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '5916', source: '仙子猪之母', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '5916', source: '마더 포크시', capture: false }),
      alertText: (_data, _matches, output) => output.awayFromAoe!(),
      outputStrings: {
        awayFromAoe: {
          en: 'Go to Opposite Side',
          de: 'Geh auf die andere Seite',
          fr: 'Allez du côté opposé',
          ja: '反対側へ',
          cn: '对面躲避坠落',
          ko: '반대편으로 이동',
        },
      },
    },
    {
      id: 'Matoyas Porxie Sucked In',
      type: 'GainsEffect',
      netRegex: NetRegexes.gainsEffect({ effectId: '9B6' }),
      suppressSeconds: (_data, matches) => parseFloat(matches.duration),
      alarmText: (_data, _matches, output) => output.runAway!(),
      outputStrings: {
        runAway: {
          en: 'RUN AWAY',
          de: 'RENN WEG',
          fr: 'FUYEZ',
          ja: 'ボスから離れる',
          cn: '远离即死区',
          ko: '바람 반대로 뛰기',
        },
      },
    },
    {
      id: 'Matoyas Porxie Minced Meat',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5911', source: 'Mother Porxie' }),
      netRegexDe: NetRegexes.startsUsing({ id: '5911', source: 'Muttersau' }),
      netRegexFr: NetRegexes.startsUsing({ id: '5911', source: 'mère porxie' }),
      netRegexJa: NetRegexes.startsUsing({ id: '5911', source: 'マザーポークシー' }),
      netRegexCn: NetRegexes.startsUsing({ id: '5911', source: '仙子猪之母' }),
      netRegexKo: NetRegexes.startsUsing({ id: '5911', source: '마더 포크시' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Matoyas Porxie Sprite Explosion',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '4E34', source: 'aeolian cave sprite', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '4E34', source: 'Windhöhlen-Exergon', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '4E34', source: 'élémentaire des cavernes venteuses', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '4E34', source: 'ウィンドケイブ・スプライト', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '4E34', source: '洞窟风元精', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '4E34', source: '바람 동굴 정령', capture: false }),
      delaySeconds: 5,
      alertText: (_data, _matches, output) => output.goBoss!(),
      outputStrings: {
        goBoss: {
          en: 'Go to Boss',
          de: 'Gehe zum Boss',
          fr: 'Allez vers le boss',
          ja: 'ボスの場所に移動',
          cn: '站在Boss正下方',
          ko: '보스쪽으로',
        },
      },
    },
    {
      id: 'Matoyas Porxie Open Flame',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5922', source: 'Mother Porxie', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5922', source: 'Muttersau', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5922', source: 'mère porxie', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5922', source: 'マザーポークシー', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '5922', source: '仙子猪之母', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '5922', source: '마더 포크시', capture: false }),
      response: Responses.spread(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Aeolian Cave Sprite': 'Windhöhlen-Exergon',
        'The Clayclot Cauldron': 'Lehmgrube',
        'The Clearnote Cauldron': 'Stromkreuz',
        'Mother Porxie': 'Muttersau',
        'Mud Bubble': 'Matschblase',
        'Mudman': 'Matschmann',
        'Nixie': 'Nixchen',
        'The Woebegone Workshop': 'Geht-Weg-Werkstatt',
      },
      'replaceText': {
        'Barbeque': 'Grillfest',
        'Brittle Breccia': 'Gesteinslawine',
        'Buffet': 'Bö',
        'Crash-Smash': 'Plitsch, platsch',
        'Explosion': 'Explosion',
        'Falling Rock': 'Steinschlag',
        'Hard Rock': 'Schlammstachel',
        'Huff And Puff': 'Pusten',
        'Meat Mallet': 'Fleischklopfer',
        'Medium Rear': 'Halb durch',
        'Minced Meat': 'Wolfer',
        'Open Flame': 'Auf offener Flamme',
        'Peat Pelt': 'Mjam Mjam Matschkuchen',
        'Petrified Peat': 'Matschkuchen',
        'Pitter-Patter': 'Plitter, platter',
        'Rocky Roll': 'Kullerklumpen',
        'Stone Age': 'Grollende Erde',
        'Shower Power': 'Glug, glug',
        'Sea Shanty': 'Pitsche, patsche',
        'Splish-Splash': 'Blubber, blubber',
        'Tender Loin': 'Plattierer',
        'To A Crisp': 'Komplett verkohlt',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Aeolian Cave Sprite': 'élémentaire des cavernes venteuses',
        'The Clayclot Cauldron': 'La carrière clinquante',
        'The Clearnote Cauldron': 'La fontaine frisquette',
        'Mother Porxie': 'mère porxie',
        'Mud Bubble': 'bulle de boue',
        'Mudman': 'tadboue',
        'Nixie': 'nixe',
        'The Woebegone Workshop': 'Grand four délaissé',
      },
      'replaceText': {
        'Barbeque': 'Grillade au barbecue',
        'Brittle Breccia': 'Fracas de roche',
        'Buffet': 'Rafale',
        'Crash-Smash': 'Fracas nerveux',
        'Explosion': 'Explosion',
        'Falling Rock': 'Chute de pierre',
        'Hard Rock': 'Pilier de boue',
        'Huff And Puff': 'Souffle porcin',
        'Meat Mallet': 'Maillet à viande',
        'Medium Rear': 'Cuit à point',
        'Minced Meat': 'Hachoir à viande',
        'Open Flame': 'Flammes nues',
        'Peat Pelt': 'Lancer de boue',
        'Petrified Peat': 'Roulage de boue',
        'Pitter-Patter': 'Giboulée',
        'Rocky Roll': 'Roulé-boulé',
        'Stone Age': 'Grondement terrestre',
        'Shower Power': 'Éclaboussure',
        'Sea Shanty': 'Explosion tournicoton',
        'Splish-Splash': 'Bulles bouillonnantes',
        'Tender Loin': 'Attendrisseur',
        'To A Crisp': 'Roussissement',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Aeolian Cave Sprite': 'ウィンドケイブ・スプライト',
        'The Clayclot Cauldron': '輝きの採土場',
        'The Clearnote Cauldron': '涼しの採水場',
        'Mother Porxie': 'マザーポークシー',
        'Mud Bubble': '泥団子',
        'Mudman': 'マッドマン',
        'Nixie': 'ノッケン',
        'The Woebegone Workshop': '居留守の工房',
      },
      'replaceText': {
        'Barbeque': 'バーベキューグリル',
        'Brittle Breccia': '岩盤崩れ',
        'Buffet': '突風',
        'Crash-Smash': 'ヒヤヒヤカチカチ',
        'Explosion': '爆散',
        'Falling Rock': '落石',
        'Hard Rock': '泥岩柱',
        'Huff And Puff': '吐出',
        'Meat Mallet': 'ミートマレット',
        'Medium Rear': 'ミディアムレア',
        'Minced Meat': 'ミートミンサー',
        'Open Flame': 'オープンフレイム',
        'Peat Pelt': '泥団子遊び',
        'Petrified Peat': '泥団子作り',
        'Pitter-Patter': 'モクモクザーザー',
        'Rocky Roll': 'コロコロ',
        'Stone Age': '地鳴り',
        'Shower Power': 'ザブザブジャブジャブ',
        'Sea Shanty': 'グルグルザパーン',
        'Splish-Splash': 'アワアワブクブ',
        'Tender Loin': 'テンダライザー',
        'To A Crisp': '丸焦げ',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Aeolian Cave Sprite': '洞窟风元精',
        'The Clayclot Cauldron': '发光的挖土场',
        'The Clearnote Cauldron': '凉爽的打水场',
        'Mother Porxie': '仙子猪之母',
        'Mud Bubble': '泥球',
        'Mudman': '土泥人',
        'Nixie': '水滴精',
        'The Woebegone Workshop': '假装无人的工房',
      },
      'replaceText': {
        'Barbeque': '烤烤肉',
        'Brittle Breccia': '岩层崩塌',
        'Buffet': '突风',
        'Crash-Smash': '咣当咣当',
        'Explosion': '爆炸',
        'Falling Rock': '落石',
        'Hard Rock': '泥岩柱',
        'Huff And Puff': '吐出',
        'Meat Mallet': '敲敲肉',
        'Medium Rear': '三分熟',
        'Minced Meat': '绞绞肉',
        'Open Flame': '明火',
        'Peat Pelt': '玩泥球',
        'Petrified Peat': '造泥球',
        'Pitter-Patter': '滴答滴答',
        'Rocky Roll': '骨碌骨碌',
        'Stone Age': '地鸣',
        'Shower Power': '哗啦哗啦',
        'Sea Shanty': '咕噜咕噜',
        'Splish-Splash': '咕嘟咕嘟',
        'Tender Loin': '松松肉',
        'To A Crisp': '烤焦',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Aeolian Cave Sprite': '바람 동굴 정령',
        'The Clayclot Cauldron': '빛나는 채토장',
        'The Clearnote Cauldron': '시원한 채수장',
        'Mother Porxie': '마더 포크시',
        'Mud Bubble': '진흙공',
        'Mudman': '진흙인간',
        'Nixie': '뇌켄',
        'The Woebegone Workshop': '버려진 공방',
      },
      'replaceText': {
        'Barbeque': '바비큐 그릴',
        'Brittle Breccia': '암반 붕괴',
        'Buffet': '쥐어박기',
        'Crash-Smash': '오들오들',
        'Explosion': '폭발',
        'Falling Rock': '낙석',
        'Hard Rock': '진흙바위',
        'Huff And Puff': '내쉬기',
        'Meat Mallet': '고기망치',
        'Medium Rear': '미디엄 레어',
        'Minced Meat': '고기 다지기',
        'Open Flame': '불쏘시개',
        'Peat Pelt': '진흙공 굴리기',
        'Petrified Peat': '진흙공 만들기',
        'Pitter-Patter': '뭉게뭉게 쏴아아',
        'Rocky Roll': '데굴데굴',
        'Stone Age': '땅울음',
        'Shower Power': '첨벙첨벙',
        'Sea Shanty': '빙그르르 퐁당',
        'Splish-Splash': '보글보글',
        'Tender Loin': '연육기',
        'To A Crisp': '숯덩이',
      },
    },
  ],
};

export default triggerSet;
