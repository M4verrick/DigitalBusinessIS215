// navigation/types.ts

// 1) Root stack: your top-level routes
export type RootStackParamList = {
  Home: undefined; // Login screen
  MainTabs: undefined; // Tab navigator (shown after login)
};

// 2) Dashboard stack: nested inside MainTabs
export type DashboardStackParamList = {
  DashboardMain: undefined;
  HaircutRates: undefined;
  VirtualStylist: undefined;
  VirtualTryOn: undefined;
  HairFilterCamera: undefined;
  // Add more screens here if needed
};
