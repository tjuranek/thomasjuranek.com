import { addEmailToNewsletter } from '@/db/supabase'

export default async function handler(req, res) {
  console.log('body: ', req.body.email)

  const { error } = await addEmailToNewsletter(req.body.name, req.body.email)

  if (error) {
    console.error(error)
    return res
      .status(500)
      .json({ error: 'An error occurred adding email to newsletter.' })
  }

  return res.redirect(307, '/thank-you')
}
