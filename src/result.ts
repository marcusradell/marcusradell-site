type Ok<T> = { ok: true; data: T };

type Err<E> = { ok: false; error: E };

type Result<T, E> = Ok<T> | Err<E>;

type User = {
  id: string;
  name: string;
};

function fetchUsers(): Result<User[], string> {
  if (Math.random() < 0.5) {
    return { ok: false, error: "INTERNAL_SERVER_ERROR" };
  }

  return { ok: true, data: [{ id: "123-abc", name: "Marcus" }] };
}

export async function getAllUserIds() {
  const result = fetchUsers();

  if (!result.ok) {
    // example of propagating it higher up the call stack
    return result;
  }

  return { ok: true, data: result.data.map((user) => user.id) };
}
