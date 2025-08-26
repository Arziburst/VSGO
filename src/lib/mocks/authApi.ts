export type MockUser = {
  id: number;
  email: string;
  roles: string[];
};

export class MockAuthApi {
  private generateToken(prefix: string): string {
    return `${prefix}_${Math.random().toString(36).slice(2)}`;
  }

  async loginAuthTokenPost(
    email: string,
    _password: string,
    _grantType: string,
    _scope?: string | null,
    _clientId?: string | null,
    _clientSecret?: string | null
  ): Promise<{
    data: { access_token: string; refresh_token: string; user: MockUser };
  }> {
    return Promise.resolve({
      data: {
        access_token: this.generateToken("access"),
        refresh_token: this.generateToken("refresh"),
        user: {
          id: 1,
          email,
          roles: ["user"],
        },
      },
    });
  }

  async registerAuthRegisterPost(payload: {
    email: string;
    password: string;
    name: string;
    affiliation_type?: string;
    role?: string;
  }): Promise<{
    data: { access_token: string; refresh_token: string; user: MockUser };
  }> {
    const { email } = payload;
    return Promise.resolve({
      data: {
        access_token: this.generateToken("access"),
        refresh_token: this.generateToken("refresh"),
        user: {
          id: 1,
          email,
          roles: ["user"],
        },
      },
    });
  }

  async refreshAccessTokenAuthRefreshPost(_payload: {
    refresh_token: string;
  }): Promise<{
    data: { access_token: string; refresh_token: string; user: MockUser };
  }> {
    return Promise.resolve({
      data: {
        access_token: this.generateToken("access"),
        refresh_token: this.generateToken("refresh"),
        user: {
          id: 1,
          email: "user@example.com",
          roles: ["user"],
        },
      },
    });
  }

  async logoutAuthLogoutPost(): Promise<void> {
    return Promise.resolve();
  }

  async getCurrentUserInfoAuthMePost(_payload: {
    access_token: string;
  }): Promise<{ data: MockUser }> {
    return Promise.resolve({
      data: {
        id: 1,
        email: "user@example.com",
        roles: ["user"],
      },
    });
  }
}
