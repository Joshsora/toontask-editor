import { EditorFields, EnumEditorFieldItem } from './EditorFields';

export class NoneReward {
  static get id() { return 'NONE'; }
  static get name() { return 'None'; }
  static get schema() { return {}; }
  static get default() { return {}; }
}

export class MaxHpReward {
  static get id() { return 'MAX_HP'; }
  static get name() { return 'Laff Boost'; }
  static get schema() {
    return {
      amount: EditorFields.Number('Amount', 1, 255)
    };
  }
  static get default() {
    return {
      amount: 1
    };
  }
}

export class MaxGagCarryReward {
  static get id() { return 'MAX_GAG_CARRY'; }
  static get name() { return 'Maximum Gags Increase'; }
  static get schema() {
    return {
      amount: EditorFields.Number('Amount', 1, 255),
      name: EditorFields.String('Bag Name')
    };
  }
  static get default() {
    return {
      amount: 25,
      name: 'Medium Pouch'
    };
  }
}

export class TeleportReward {
  static get id() { return 'TELEPORT'; }
  static get name() { return 'Unlock Teleport Access'; }
  static get schema() {
    return {
      hoodId: EditorFields.Enum('Hood', [
        EnumEditorFieldItem('Toontown Central', 2000),
        EnumEditorFieldItem('Donalds Dock', 1000),
        EnumEditorFieldItem('Daisy Gardens', 5000),
        EnumEditorFieldItem('Minnies Melodyland', 4000),
        EnumEditorFieldItem('The Brrrgh', 3000),
        EnumEditorFieldItem('Donalds Dreamland', 9000),
      ])
    };
  }
  static get default() {
    return {
      hoodId: 2000
    };
  }
}

export class TrackTrainingReward {
  static get id() { return 'TRACK_TRAINING'; }
  static get name() { return 'Track Training'; }
  static get schema() {
    return {
      trackId: EditorFields.Enum('Track', [
        EnumEditorFieldItem('User Choice', -1),
        EnumEditorFieldItem('Toon-Up', 0),
        EnumEditorFieldItem('Trap', 1),
        EnumEditorFieldItem('Lure', 2),
        EnumEditorFieldItem('Sound', 3),
        EnumEditorFieldItem('Throw', 4),
        EnumEditorFieldItem('Squirt', 5),
        EnumEditorFieldItem('Drop', 6),
      ])
    };
  }
  static get default() {
    return {
      trackId: -1
    };
  }
}

export class MaxQuestCarryReward {
  static get id() { return 'MAX_QUEST_CARRY'; }
  static get name() { return 'Maximum Tasks'; }
  static get schema() {
    return {
      amount: EditorFields.Number('Amount', 2, 4)
    };
  }
  static get default() {
    return {
      amount: 0
    };
  }
}

export class MoneyReward {
  static get id() { return 'MONEY'; }
  static get name() { return 'Jellybeans'; }
  static get schema() {
    return {
      amount: EditorFields.Number('Amount', 1, 5000)
    };
  }
  static get default() {
    return {
      amount: 0
    };
  }
}

export class MaxMoneyReward {
  static get id() { return 'MAX_MONEY'; }
  static get name() { return 'Maximum Jellybeans'; }
  static get schema() {
    return {
      amount: EditorFields.Number('Amount', 10, 250)
    };
  }
  static get default() {
    return {
      amount: 0
    };
  }
}

export class TrackProgressReward {
  static get id() { return 'TRACK_PROGRESS'; }
  static get name() { return 'Track Progress'; }
  static get schema() {
    return {
      trackId: EditorFields.Enum('Track', [
        EnumEditorFieldItem('User Choice', -1),
        EnumEditorFieldItem('Toon-Up', 0),
        EnumEditorFieldItem('Trap', 1),
        EnumEditorFieldItem('Lure', 2),
        EnumEditorFieldItem('Sound', 3),
        EnumEditorFieldItem('Throw', 4),
        EnumEditorFieldItem('Squirt', 5),
        EnumEditorFieldItem('Drop', 6),
      ]),
      frame: EditorFields.Number('Frame', 1, 15)
    };
  }
  static get default() {
    return {
      trackId: -1,
      frame: 1
    };
  }
}

export class ClothingTicketReward {
  static get id() { return 'CLOTHING_TICKET'; }
  static get name() { return 'Clothing Ticket'; }
  static get schema() { return {}; }
  static get default() { return {}; }
}

export class TrackCompleteReward {
  static get id() { return 'TRACK_COMPLETE'; }
  static get name() { return 'Track Complete'; }
  static get schema() {
    return {
      trackId: EditorFields.Enum('Track', [
        EnumEditorFieldItem('User Choice', -1),
        EnumEditorFieldItem('Toon-Up', 0),
        EnumEditorFieldItem('Trap', 1),
        EnumEditorFieldItem('Lure', 2),
        EnumEditorFieldItem('Sound', 3),
        EnumEditorFieldItem('Throw', 4),
        EnumEditorFieldItem('Squirt', 5),
        EnumEditorFieldItem('Drop', 6),
      ])
    };
  }
  static get default() {
    return {
      trackId: -1
    };
  }
}

export class CheesyEffectReward {
  static get id() { return 'CHEESY_EFFECT'; }
  static get name() { return 'Cheesy Effect'; }
  static get schema() {
    return {
      effectId: EditorFields.Enum('Effect', [
        EnumEditorFieldItem('Big Toon', 1),
        EnumEditorFieldItem('Small Head', 2),
        EnumEditorFieldItem('Big Legs', 3),
        EnumEditorFieldItem('Small Legs', 4),
        EnumEditorFieldItem('Big Toon', 5),
        EnumEditorFieldItem('Small Toon', 6),
        EnumEditorFieldItem('Flat Portrait', 7),
        EnumEditorFieldItem('Flat Profile', 8),
        EnumEditorFieldItem('Transparent', 9),
        EnumEditorFieldItem('No Color', 10),
        EnumEditorFieldItem('Invisible', 11),
        EnumEditorFieldItem('Pumpkin', 12),
        EnumEditorFieldItem('Big White', 13),
        EnumEditorFieldItem('Snowman', 14),
        EnumEditorFieldItem('Green Toon', 15),
      ]),
      hoodId: EditorFields.Enum('Hood', [
        EnumEditorFieldItem('Everywhere', 0),
        EnumEditorFieldItem('Except in Toontown Central', 1),
        EnumEditorFieldItem('Only in Toontown Central', 2000),
        EnumEditorFieldItem('Only in Donalds Dock', 1000),
        EnumEditorFieldItem('Only in Daisy Gardens', 5000),
        EnumEditorFieldItem('Only in Minnies Melodyland', 4000),
        EnumEditorFieldItem('Only in The Brrrgh', 3000),
        EnumEditorFieldItem('Only in Donalds Dreamland', 9000),
      ]),
      duration: EditorFields.Number('Duration', 5, 50000)
    };
  }
  static get default() {
    return {
      effectId: 1,
      hoodId: 0,
      duration: 5
    };
  }
}

export const EditorData = {
  [NoneReward.id]: NoneReward,
  [MaxHpReward.id]: MaxHpReward,
  [MaxGagCarryReward.id]: MaxGagCarryReward,
  [TeleportReward.id]: TeleportReward,
  [TrackTrainingReward.id]: TrackTrainingReward,
  [MaxQuestCarryReward.id]: MaxQuestCarryReward,
  [MoneyReward.id]: MoneyReward,
  [MaxMoneyReward.id]: MaxMoneyReward,
  [TrackProgressReward.id]: TrackProgressReward,
  [ClothingTicketReward.id]: ClothingTicketReward,
  [TrackCompleteReward.id]: TrackCompleteReward,
  [CheesyEffectReward.id]: CheesyEffectReward
};

export const DropdownOptions = [
  {
    text: NoneReward.name,
    value: NoneReward
  },
  {
    text: MaxHpReward.name,
    value: MaxHpReward
  },
  {
    text: MaxGagCarryReward.name,
    value: MaxGagCarryReward
  },
  {
    text: TeleportReward.name,
    value: TeleportReward
  },
  {
    text: TrackTrainingReward.name,
    value: TrackTrainingReward
  },
  {
    text: MaxQuestCarryReward.name,
    value: MaxQuestCarryReward
  },
  {
    text: MoneyReward.name,
    value: MoneyReward
  },
  {
    text: MaxMoneyReward.name,
    value: MaxMoneyReward
  },
  {
    text: TrackProgressReward.name,
    value: TrackProgressReward
  },
  {
    text: ClothingTicketReward.name,
    value: ClothingTicketReward
  },
  {
    text: TrackCompleteReward.name,
    value: TrackCompleteReward
  },
  {
    text: CheesyEffectReward.name,
    value: CheesyEffectReward
  }
];
