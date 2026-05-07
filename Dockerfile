FROM node:20-alpine AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# Install pnpm versi 9
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate

# Step 1: Copy semua file dulu
COPY . .

# Step 2: HAPUS file workspace agar pnpm tidak menganggap ini monorepo
# Ini kunci untuk mengatasi error "packages field missing"
RUN rm -f pnpm-workspace.yaml

# Step 3: Install dependencies tanpa flag --frozen-lockfile dulu 
# agar pnpm bisa menyesuaikan diri dengan absennya workspace
RUN pnpm install

# Step 4: Build aplikasi
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
RUN pnpm build

# Step 5: Runner (Stage Akhir)
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup -S nodejs -g 1001 && adduser -S nextjs -u 1001 -G nodejs

# Ambil hasil build dari stage 'base'
COPY --from=base /app/public ./public
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]