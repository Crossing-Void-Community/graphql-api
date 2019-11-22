import { Auditable } from './../../shared/interfaces/auditable.interface';

export interface Character extends Auditable {
  readonly name: string;
  readonly speed: number;
  readonly hp: number;
  readonly physicalDefense: number;
  readonly arcaneDefense: number;
  readonly attack: number;
  readonly critDamage: number;
  readonly critRate: number;
  readonly isSupport: boolean;
  readonly isLimited: boolean;
  readonly releaseDate: Date;
}
