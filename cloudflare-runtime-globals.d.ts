import type { AnyD1Database } from "drizzle-orm/d1";

declare global {
  interface Fetcher {
    fetch(request: Request): Promise<Response>;
  }

  type D1Database = AnyD1Database;
}

export {};
