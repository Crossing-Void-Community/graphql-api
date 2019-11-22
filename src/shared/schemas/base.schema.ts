import { Schema } from 'mongoose';

export function initPlugin(schema: Schema, options: { name: string }) {
  schema.add({
    createdBy: String,
    lastModifiedBy: String
  });
  schema.set('timestamps', {
    createdAt: 'createdDate',
    updatedAt: 'lastModifiedDate'
  });
  schema.set('collection', options.name);
  schema.pre('save', function(next) {
    this.set('createdBy', 'test');
    this.set('lastModifiedBy', 'test');
    next();
  });
}

export function initSchema(schema: Schema, name: string) {
  console.log('init schema: ' + name);
  schema.plugin(initPlugin, { name });
}
