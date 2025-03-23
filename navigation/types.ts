export type RootStackParamList = {
  Home: undefined;
  Dashboard: undefined;
  Profile: { userId: string } | undefined; // Example with optional param
};
