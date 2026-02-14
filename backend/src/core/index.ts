import cors from 'cors';
import path from 'path';
import fs from 'fs';
import server from '../utils/server/server';
import { registerRoutes } from './router';
import { loggerMiddleware } from './middleware';

// ✅ Only load .env locally if it exists (Railway provides env vars automatically)
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  try {
    process.loadEnvFile(envPath);
    console.log('✅ Loaded local .env file');
  } catch (err) {
    console.warn('⚠️ Failed to load .env file:', err);
  }
} else {
  console.log('⚙️ No local .env file found — using Railway environment variables');
}

const app = server();

app.use(loggerMiddleware);
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);
app.options('*', cors());
app.use(app.serverStatic('/storage', './storage'));

registerRoutes(app);

app.listen(Number.parseInt(process.env.PORT || '5000'), () => {
  console.log(`[pagelm] running on ${process.env.VITE_BACKEND_URL || 'http://localhost:5000'}`);
});
