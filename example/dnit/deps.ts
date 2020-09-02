import { task, exec, file } from "https://deno.land/x/dnit@dnit-v1.4.0/dnit.ts";
import * as flags from "https://deno.land/std@0.64.0/flags/mod.ts";
import * as path from "https://deno.land/std@0.64.0/path/mod.ts";
import * as log from "https://deno.land/std@0.64.0/log/mod.ts";
import * as fs from "https://deno.land/std@0.64.0/fs/mod.ts";
import * as hash from "https://deno.land/std@0.64.0/hash/mod.ts";

export {
  task,
  exec,
  file,
  flags,
  log,
  fs,
  hash,
  path,
};
