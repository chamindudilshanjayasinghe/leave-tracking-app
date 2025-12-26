import NextAuth from "next-auth";

type Company = {
  id: number,
  name: string,
  permissions: string[]
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  type UserProps = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    role: string;
    tenant_id: number;
    tenant: { id: number, name: string, package: { id: number, name: string, active: boolean } };
  };

  interface Session {
    user: {
      accessToken: string;
      user: UserProps;
      tenant: { id: number, name: string, package: { id: number, name: string, active: boolean } }
    };
  }
}
