import {
  createApp,
  serveStatic,
} from "https://deno.land/x/servest@v1.3.1/mod.ts";
const app = createApp();

app.use(serveStatic("./public"));
app.listen({ port: 8899 });

document.body;
Deno.readTextFileSync("");
