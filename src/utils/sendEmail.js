export const sendEmail = async ({ email, subject, html }) => {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer re_EBdhYggt_CCgTZqqnHPygjUnTFu4yNX9a`
      },
      body: JSON.stringify({
        from: 'Acme <onboarding@resend.dev>',
        to: ['growtoglow44@gmail.com'],
        subject: subject || 'New Lead from Website',
        html: html || `<p>New email collected: ${email}</p>`
      })
    });

    if (!response.ok) {
      throw new Error(`Error sending email: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
