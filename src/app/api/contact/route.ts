import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'makr.tech <noreply@notifications.makr.tech>',
      to: ['romain.grimmonpre@makr.tech'],
      subject: 'Peppol Contact from makr.tech',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF8F5;">
          <div style="background: linear-gradient(135deg, #0D4F8B, #1E5A8E); color: white; padding: 30px; border-radius: 15px 15px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Nouveau Contact Peppol</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Formulaire de contact makr.tech</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 15px 15px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #0D4F8B; margin-bottom: 20px; font-size: 20px;">Informations du contact</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #D84315;">Nom :</strong> ${name}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #D84315;">Email :</strong> ${email}
            </div>
            
            ${company ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #D84315;">Entreprise :</strong> ${company}
            </div>
            ` : ''}
            
            ${phone ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #D84315;">Téléphone :</strong> ${phone}
            </div>
            ` : ''}
            
            <div style="margin-top: 25px;">
              <strong style="color: #D84315; display: block; margin-bottom: 10px;">Message :</strong>
              <div style="background: #F8F9FA; padding: 15px; border-radius: 8px; border-left: 4px solid #0D4F8B; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E8E4DF; text-align: center; color: #5A5A5A; font-size: 14px;">
              <p>Ce message a été envoyé via le formulaire de contact de makr.tech</p>
              <p>Date: ${new Date().toLocaleString('fr-FR')}</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
