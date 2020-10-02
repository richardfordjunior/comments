import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Comments extends Model {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  user_id?: number;

  @property({
    type: 'string',
  })
  avatar?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  comment_text?: string;

  @property({
    type: 'date',
  })
  created_date: string;

  @property({
    type: 'date',
  })
  updated_date: string;


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Comments>) {
    super(data);
  }
}

export interface CommentsRelations {
  // describe navigational properties here
}

export type CommentsWithRelations = Comments & CommentsRelations;
