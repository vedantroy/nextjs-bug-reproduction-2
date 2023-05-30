"use server";

export default async function() {
  async function createGame(formData) {
    "use server";
    const obj = Object.fromEntries(formData);
    const gameId = obj["game"];
    console.log(gameId);
  }

  return (
    <>
        {[{id: 1}, {id: 2}, {id: 3}].map((item) => (
        <form action={createGame}>
          <button
            name="game"
            value={item.id}
            type="submit"
            key={item.id}
            className="p-4 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
          </button>
        </form>
      ))}
    </>
  );
}

