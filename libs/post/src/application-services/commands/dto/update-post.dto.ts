import { IPost } from '@lib/post/domain';

export type UpdatePostDto = Partial<Pick<IPost, 'title' | 'massage'>> &
  Pick<IPost, 'id' | 'authorId'>;
