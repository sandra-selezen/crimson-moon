import axios from "axios";

const AUTH_GOOGLE_ID = process.env.AUTH_GOOGLE_ID;
const AUTH_GOOGLE_SECRET = process.env.AUTH_GOOGLE_SECRET;

export const truncateText = (text: string, maxLength: number = 100) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export const refreshAccessToken = async (token: any) => {
  try {
    const response = await axios.post("https://oauth2.googleapis.com/token", {
      client_id: AUTH_GOOGLE_ID,
      client_secret: AUTH_GOOGLE_SECRET,
      refresh_token: token.refreshToken,
      grant_type: "refresh_token",
    });

    const refreshedTokens = response.data;

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error("Error refreshing access token", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};
