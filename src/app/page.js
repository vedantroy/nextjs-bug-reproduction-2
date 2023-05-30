"use server";

export default async function() {
  // From Google Play store:
  // curve images + shadow
  // gray outline + no grid padding (horizontal margins can be narrow)
  // decent spacing under title
  // no spacing for subtext
  // extra padding on bottoms of items
  // do not change item size depending on screen width
  // center grid on large screens / center always
  // on mobile (single column) => have enough padding

  // From Github:
  // - when you have limited content, show unnecessary header text

  // From tailwindcss:
  // - align header w/ grid
  // - header doesn't need to be a different color, use a thin line instead
  // - use inter (done by default?)

  // From langshift:
  // logo tricks => contrast keyword vs generic word

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

