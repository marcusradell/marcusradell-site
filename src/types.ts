type Ok<T> = [void, T];

type Err<E> = [E, void];

type Result<T, E> = Ok<T> | Err<E>;

type User = {
  id: string;
  name: string;
};

function fetchUsers(): Result<User[], string> {
  if (Math.random() < 0.5) {
    return ["INTERNAL_SERVER_ERROR", undefined];
  }

  return [, [{ id: "123-abc", name: "Marcus" }]];
}

export async function main() {
  const [err, data] = fetchUsers();

  if (err) {
    return [err, undefined];
  }

  return data;
}
