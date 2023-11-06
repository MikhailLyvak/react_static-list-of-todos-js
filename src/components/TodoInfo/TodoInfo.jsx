import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <>
    <article
      key={todo.id}
      className={
        todo.completed
          ? 'TodoInfo TodoInfo--completed'
          : 'TodoInfo'
      }
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  </>
);