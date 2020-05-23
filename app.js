import { serve } from "https://deno.land/std@0.52.0/http/server.ts";
  const s = serve({ port: 3000 });
  console.log("http://localhost:3000/");
  for await (const req of s) {
    req.respond({ body:"<h1>Hello World oi\n</h1>" });
  }
