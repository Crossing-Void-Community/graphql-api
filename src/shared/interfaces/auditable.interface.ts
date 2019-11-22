import { Document } from 'mongoose';

export interface Auditable extends Document {
  readonly createdBy: string;
  readonly createdDate: Date;
  readonly lastModifiedBy: string;
  readonly lastModifiedDate: Date;
}
