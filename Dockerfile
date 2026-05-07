FROM node:20-alpine AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# Install pnpm
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate

# Step 1: Copy SEMUA file konfigurasi pnpm & workspace
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./

# Step 2: Karena ini workspace, kita perlu copy folder app-nya juga agar pnpm tahu apa yang mau diinstall
COPY . .

# Step 3: Install dependencies
RUN pnpm install --frozen-lockfile

# Step 4: Build
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
RUN pnpm build

# Step 5: Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup -S nodejs -g 1001 && adduser -S nextjs -u 1001 -G nodejs

COPY --from=base /app/public ./public
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]