import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Quiz',
  webDir: 'builds',
  server: { androidScheme: 'https' }
};

export default config;