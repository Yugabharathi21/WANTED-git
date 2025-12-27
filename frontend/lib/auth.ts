import { createAuthClient } from '@neondatabase/auth';

export const auth = createAuthClient(process.env.NEXT_PUBLIC_NEON_AUTH_URL!);
