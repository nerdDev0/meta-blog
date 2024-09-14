// types/user.d.ts
export interface User {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    password: string | null; // If this is used, ensure it's handled correctly
    image: string | null;
    about: string | null;
    jobTitle: string | null;
  }
  