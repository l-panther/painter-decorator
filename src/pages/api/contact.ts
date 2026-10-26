import type { APIRoute } from 'astro';
import { serviceOptions } from '../../data/site';

export const prerender = false; // runs on the server

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, errors: { form: 'The request could not be read.' } }, 400);
  }

  const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
  const name = str(data.name);
  const email = str(data.email);
  const phone = str(data.phone);
  const service = str(data.service);
  const message = str(data.message);

  // Honeypot: bots fill this in. Pretend success and drop it.
  if (str(data.website)) return json({ ok: true });

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 80) errors.name = 'Name must be 2–80 characters.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254) errors.email = 'Enter a valid email address.';
  if (phone && !/^[0-9+()\s-]{7,20}$/.test(phone)) errors.phone = 'Phone number format is not valid.';
  if (!serviceOptions.includes(service)) errors.service = 'Choose a type of job from the list.';
  if (message.length < 10 || message.length > 2000) errors.message = 'Message must be 10–2000 characters.';

  if (Object.keys(errors).length) return json({ ok: false, errors }, 400);

  // TODO: send the enquiry (e.g. nodemailer, Resend, or save to a database).
  console.log('New enquiry:', { name, email, phone, service, message });

  return json({ ok: true });
};
