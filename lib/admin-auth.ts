import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE_NAME = "seasonal_finds_admin";

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET;
}

export function createAdminSession() {
  const secret = getSecret();
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET must contain at least 32 characters.");
  }

  const payload = Buffer.from(
    JSON.stringify({ v: 1, exp: Date.now() + 1000 * 60 * 60 * 8 }),
  ).toString("base64url");
  const signature = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function verifyAdminSession(token?: string) {
  const secret = getSecret();
  if (!secret || secret.length < 32 || !token) return false;

  const [payload, signature, extra] = token.split(".");
  if (!payload || !signature || extra) return false;

  const expected = createHmac("sha256", secret).update(payload).digest();
  let received: Buffer;
  try {
    received = Buffer.from(signature, "base64url");
  } catch {
    return false;
  }
  if (received.length !== expected.length || !timingSafeEqual(received, expected)) {
    return false;
  }

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return data.v === 1 && typeof data.exp === "number" && data.exp > Date.now();
  } catch {
    return false;
  }
}

export function safePasswordMatches(input: string, expectedPassword: string) {
  const inputBuffer = Buffer.from(input);
  const expectedBuffer = Buffer.from(expectedPassword);
  return (
    inputBuffer.length === expectedBuffer.length &&
    timingSafeEqual(inputBuffer, expectedBuffer)
  );
}
