import http from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const port = 4174;
const upstreamPort = 4173;
const staticRoot = join(process.cwd(), "dist", "client");
const mime = {
  ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml", ".webp": "image/webp", ".ico": "image/x-icon",
  ".woff": "font/woff", ".woff2": "font/woff2",
};

http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  const relative = normalize(pathname).replace(/^([/\\])+/, "");
  const candidate = join(staticRoot, relative);

  if (candidate.startsWith(staticRoot) && existsSync(candidate) && statSync(candidate).isFile()) {
    response.writeHead(200, { "Content-Type": mime[extname(candidate).toLowerCase()] || "application/octet-stream" });
    createReadStream(candidate).pipe(response);
    return;
  }

  const proxy = http.request({
    hostname: "127.0.0.1", port: upstreamPort, method: request.method,
    path: request.url, headers: { ...request.headers, host: `127.0.0.1:${upstreamPort}` },
  }, upstream => {
    response.writeHead(upstream.statusCode || 502, upstream.headers);
    upstream.pipe(response);
  });
  proxy.on("error", () => {
    response.writeHead(502, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Local application server is not available.");
  });
  request.pipe(proxy);
}).listen(port, "0.0.0.0", () => {
  console.log(`TGF local preview running at http://localhost:${port}`);
});
