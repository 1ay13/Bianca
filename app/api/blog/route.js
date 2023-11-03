import { client } from "../../libs/contentful/client";

export const GET = async () => {
  const response = await client.getEntries({ content_type: "post" });

  return new Response(JSON.stringify({ posts: response.items }), {
    status: 200,
  });
};
