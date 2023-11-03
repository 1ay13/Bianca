import { client } from "../../../libs/contentful/client";

export const GET = async (request, { params }) => {
  const response = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  return new Response(JSON.stringify({ posts: response.items }), {
    status: 200,
  });
};
