# Helios Engineering Center - Website (Next.js)

Proyecto listo para desplegar. Pasos rápidos:

1. Copia `.env.example` a `.env.local` y completa las variables (ADMIN_TOKEN, SMTP, FROM_EMAIL, TO_EMAIL).
2. Instala dependencias:
   ```
   npm install
   ```
3. Ejecuta en modo desarrollo:
   ```
   npm run dev
   ```
4. Despliegue recomendado: Vercel (con las variables de entorno definidas en el dashboard).

**Notas**
- El archivo `data/quotes.csv` se crea automáticamente en el servidor (en entornos con filesystem persistente).
- En entornos serverless, usa un servicio externo (SendGrid, Firestore, Supabase, o Google Sheets) para persistencia.
