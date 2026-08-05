import { appConfig } from "../../app/config/env";

/** Shared API origin for module services. */
export function apiBase(): string {
  return appConfig.apiUrl;
}
