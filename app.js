import { serve } from "https://deno.land/std/http/server.ts";
serve(_req => new Response("Hello World from Deno Deploy\n"));