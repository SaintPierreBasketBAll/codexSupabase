import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const phone = String(form.get('phone') || '').trim();
    const subject = String(form.get('subject') || '').trim();
    const message = String(form.get('message') || '').trim();

    if (!name || !email || !message) {
      return fail(400, { error: 'Veuillez renseigner les champs requis.' });
    }

    if (!/.+@.+\..+/.test(email)) {
      return fail(400, { error: "Email invalide" });
    }

    // Here you can send an email or push to a ticketing system
    // await sendMail({ name, email, phone, subject, message });

    return { success: true, message: 'Merci, votre demande a bien été envoyée.' };
  }
};

