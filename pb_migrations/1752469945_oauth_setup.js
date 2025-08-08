/// <reference path="../../otoolkit-pb/pb_data/types.d.ts" />
migrate(
  (app) => {
    const ClientID_google = $os.getenv("GOOGLE_CLIENT_ID") || "";
    const ClientSecret_google = $os.getenv("GOOGLE_CLIENT_SECRET") || "";

    const ClientID_discord = $os.getenv("DISCORD_CLIENT_ID") || "";
    const ClientSecret_discord = $os.getenv("DISCORD_CLIENT_SECRET") || "";

    let providers = [];

    if (ClientID_google && ClientSecret_google) {
      providers.push({
        pkce: null,
        name: "google", // or whatever provider you want
        clientId: ClientID_google,
        clientSecret: ClientSecret_google,
        authUrl: "",
        tokenUrl: "",
        userApiUrl: "",
        displayName: ""
      });
    } else {
      console.warn(
        "[PB Init]: Google OAuth2 credentials are not set. Skipping Google provider setup."
      );
    }

    if (ClientID_discord && ClientSecret_discord) {
      providers.push({
        pkce: null,
        name: "discord", // or whatever provider you want
        clientId: ClientID_discord,
        clientSecret: ClientSecret_discord,
        authUrl: "https://discord.com/api/oauth2/authorize",
        tokenUrl: "https://discord.com/api/oauth2/token",
        userApiUrl: "https://discord.com/api/users/@me",
        displayName: "Discord"
      });
    } else {
      console.warn(
        "[PB Init]: Discord OAuth2 credentials are not set. Skipping Discord provider setup."
      );
    }

    if (providers.length === 0) {
      console.warn("[PB Init] No OAuth2 providers are configured.");
      return;
    }

    const users = app.findCollectionByNameOrId("users");
    users.oauth2.providers = providers;
    users.oauth2.enabled = true;
    app.save(users);
  },
  (app) => {
    // add down queries...
  }
);
