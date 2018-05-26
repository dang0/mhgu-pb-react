import { defMove, defSkill } from './utils';

const EMPTY_STRING = '';

const MAX_SUPPORT_MOVES = 12;
const MAX_SUPPORT_COST = 9;
const MAX_SKILL_COST = 8;

const [MOVE, SKILL] = ['Move', 'Skill'];
const [ATTACK, DEFENSE, SUPPORT] = ['Attack', 'Defense', 'Support'];

const [
  CHARISMA, FIGHTING, PROTECTION, ASSISTING, 
  HEALING, BOMBING, GATHERING
] = [
  'Charisma', 'Fighting', 'Protection', 'Assisting', 
  'Healing', 'Bombing', 'Gathering'
];

const NO_RATES = [1,1,1,1];

const DefaultMoves = {
  Palico_Rally: defMove('Palico Rally', 
    'Temporarily empowers user and allied Felynes, and keeps Palicoes from slacking off.', 
    2, NO_RATES, EMPTY_STRING, [CHARISMA]),
  Furr_ious: defMove('Furr-ious', 
    'Instantly enter Felyne Fury Mode. (Can\'t use when already in Fury Mode.)', 
    5, NO_RATES, EMPTY_STRING, [FIGHTING]),
  Taunt: defMove('Taunt', 
    'Diverts monster attention towards the user.', 
    2, NO_RATES, EMPTY_STRING, [PROTECTION]),
  Poison_Purr_ison: defMove('Poison Purr-ison', 
    'Sets a trap that immobilizes large monsters and inflicts them with Poison.', 
    5, NO_RATES, EMPTY_STRING, [ASSISTING]),
  True_Health_Horn: defMove('True Health Horn', 
    'Greatly recovers Palico and player Health.', 
    3, NO_RATES, EMPTY_STRING, [HEALING]),
  Mega_Barrel_Bombay: defMove('Mega Barrel Bombay', 
    'Rush at a foe with a Barrel Bomb L+. (Palico: Fury Mode only.)', 
    3, NO_RATES, EMPTY_STRING, [BOMBING]),
  Plunderang: defMove('Plunderang', 
    'A boomerang attack that steals from monsters. (Palico: more Quest rewards from stealing.)', 
    4, NO_RATES, EMPTY_STRING, [GATHERING]),
  Mini_Barrel_Bombay: defMove('Mini Barrel Bombay', 
    'Tosses a Mini Barrel Bomb at foes.'),
  Herb_Horn: defMove('Herb Horn', 
    'Slightly recovers Palico and player Health.')
};

const SecondaryMoves = {
  Demon_Horn: defMove('Demon Horn',
    'Boosts Palico and player Attack for a short time.',
    2, NO_RATES, 'Hunt Shogun Ceanataur', [FIGHTING, BOMBING]),
  Piercing_Boomerang: defMove('Piercing Boomerang',
    'Temporarily boosts boomerang hit count and adds piercing. (Stacks with Big Boomerangs.)',
    2, NO_RATES, 'Hunt Nargacuga', [FIGHTING, GATHERING]),
  Emergency_Retreat: defMove('Emergency Retreat',
    'Allows the user to quickly burrow. Health is healed while burrowing.',
    1, NO_RATES, 'Hunt Cephadrome', [PROTECTION, ASSISTING]),
  Armor_Horn: defMove('Armor Horn',
    'Boosts Palico and player Defense for a short time.',
    2, NO_RATES, 'Hunt Daimyo Hermitaur', [PROTECTION, HEALING]),
  Cheer_Horn: defMove('Cheer Horn',
    'Raises the Arts Gauge and the Prowler Support Gauge.',
    3, NO_RATES, 'Hunt Mizutsune', [ASSISTING, HEALING]),
  Camouflage: defMove('Camouflage',
    'Lowers the chance of being targeted and getting up after getting hit takes less time.',
    1, NO_RATES, 'Hunt Blangonga', [BOMBING, GATHERING])
};

const MoveGroupA = {
  Health_Horn: defMove('Health Horn',
    'Recovers Palico and player Health.',
    2, [15,1,5,15], 'Hunt Great Maccao'),
  Anti_Monster_Mine_Plus: defMove(),
  Pilfer: defMove(),
  Pitfall_Purrison: defMove(),
  Shock_Purrison: defMove(),
  Giga_Barrel_Bombay: defMove(),
  Rath_of_Meow: defMove()
};

const MoveGroupB = {
  Claw_Dance: defMove(),
  Weapon_Upgrade: defMove(),
  Trampoliner: defMove(),
  Go_Fight_Win: defMove(),
  Detox_Horn: defMove(),
  Vase_of_Vitality: defMove(),
  Mega_Boomerang: defMove(),
  Flash_Bombay: defMove(),
  Big_Barrel_Bombay: defMove(),
  Anti_Monster_Mine: defMove()
};

const MoveGroupC = {
  Sumo_Stomp: defMove(),
  Felyne_Comet: defMove(),
  Dung_Bombay: defMove(),
  Ultrasonic_Horn: defMove(),
  Soothing_Roll: defMove(),
  Parting_Gift: defMove(),
  Excavator: defMove(),
  Big_Boomerang: defMove(),
  Shock_Tripper: defMove(),
  Chestnut_Cannon: defMove(),
  Barrel_Bombay: defMove(),
  Bounce_Bombay: defMove(),
  Explosive_Roll: defMove()
};

const DefaultSkills = {
  Slacker_Slap: defSkill(),
  Last_Stand: defSkill(),
  Attack_Up_S: defSkill(),
  Handicraft: defSkill(),
  Guard_S: defSkill(),
  Guard_Boost: defSkill(),
  Monsteradar: defSkill(),
  Pro_Trapper: defSkill(),
  Defense_Up_S: defSkill(),
  Health_Harmonics: defSkill(),
  Heat_Bomb_Res: defSkill(),
  Bombay_Boost: defSkill(),
  Gathering_Pro: defSkill(),
  Pilfer_Boost: defSkill()
};

const SkillGroupA = {
  Element_Attack_Up: defSkill(),
  Status_Attack_Up: defSkill(),
  Anger_Prone: defSkill(),
  Revival_Pro: defSkill(),
  Omniresistance: defSkill(),
  Support_Priority: defSkill(),
  Support_Move_1: defSkill()
};

const SkillGroupB = {
  Attack_Up_L: defSkill(),
  Critical_Up_L: defSkill(),
  Defense_Up_L: defSkill(),
  Health_Up_L: defSkill(),
  Nine_Lives_Attack: defSkill(),
  Guard_L: defSkill(),
  Knockout_King: defSkill(),
  Earplugs: defSkill(),
  Negate_Stun: defSkill(),
  Counter_Boost: defSkill(),
  Support_Boost: defSkill()
};

const SkillGroupC = {
  Critical_Up_S: defSkill(),
  Health_Up_S: defSkill(),
  Nine_Lives_Defense: defSkill(),
  Boomerang_Pro: defSkill(),
  Stamina_Drain: defSkill(),
  Non_Stick_Fur: defSkill(),
  Negate_Wind: defSkill(),
  Negate_Sleep: defSkill(),
  Iron_Hide: defSkill(),
  Negate_Paralysis: defSkill(),
  Tremor_Res: defSkill(),
  Negate_Poison: defSkill(),
  Biology: defSkill(),
  Negate_Confusion: defSkill(),
  Goldenfish_Catcher: defSkill()
};
