import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CommentsDataSource} from '../datasources';
import {Comments, CommentsRelations} from '../models';

export class CommentsRepository extends DefaultCrudRepository<
  Comments,
  typeof Comments.prototype.id,
  CommentsRelations
  > {
  constructor(
    @inject('datasources.comments') dataSource: CommentsDataSource,
  ) {
    super(Comments, dataSource);
  }
}
