import { serve } from "https://deno.land/std@0.157.0/http/server.ts";

const PORT = 5050;

const handler = async (req: Request): Promise<Response> => {
  const res = await fetch("https://api.github.com/users/denoland", {
    headers: { accept: "application/json" },
  });
  return new Response(res.body, {
    status: res.status,
    headers: { "content-type": "application/json" },
  });
};

console.log("Listening on http://localhost:5050");
serve(handler)