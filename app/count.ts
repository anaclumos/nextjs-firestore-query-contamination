export const getAsyncCacheTag = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return "async-cache-tag";
};

export const firestore = async ({
  withNextOptions = false,
}: {
  withNextOptions?: boolean;
}) => {
  const tag = await getAsyncCacheTag();
  const response = await fetch(
    `https://firestore.googleapis.com/v1/projects/nextjs-repro/databases/(default)/documents:runQuery`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        structuredQuery: {
          from: [{ collectionId: "collection-a" }],
          where: {
            unaryFilter: {
              field: {
                fieldPath: "k",
              },
              op: "IS_NOT_NULL",
            },
          },
        },
      }),
      ...(withNextOptions
        ? {
            next: { tags: [tag], revalidate: 10 },
          }
        : {}),
    },
  );

  return response.json();
};
