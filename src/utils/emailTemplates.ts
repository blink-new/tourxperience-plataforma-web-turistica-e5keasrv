import { Language, translations } from '@/i18n';

export interface BookingDetails {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  bookingDate: string;
  totalAmount: string;
  currency: string;
  activities: Array<{
    name: string;
    date: string;
    time: string;
    participants: number;
    price: string;
    meetingPoint: string;
    duration: string;
    highlights: string[];
    included: string[];
    recommendations: string[];
  }>;
}

export const generateBookingConfirmationEmail = (
  bookingDetails: BookingDetails,
  language: Language = 'es'
): { subject: string; html: string; text: string } => {
  const t = translations[language];
  
  const subject = `${t.email.subject} - ${bookingDetails.orderNumber}`;
  
  const html = `
<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8fafc;
        }
        .container {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #2563EB;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            color: #2563EB;
            margin-bottom: 10px;
        }
        .title {
            font-size: 24px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 10px;
        }
        .subtitle {
            color: #64748b;
            font-size: 16px;
        }
        .order-info {
            background: #f1f5f9;
            padding: 20px;
            border-radius: 8px;
            margin: 30px 0;
        }
        .order-info h3 {
            margin: 0 0 15px 0;
            color: #1e293b;
            font-size: 18px;
        }
        .info-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            padding: 8px 0;
            border-bottom: 1px solid #e2e8f0;
        }
        .info-row:last-child {
            border-bottom: none;
            font-weight: 600;
            font-size: 16px;
        }
        .activity-card {
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 25px;
            margin: 20px 0;
            background: white;
        }
        .activity-title {
            font-size: 20px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 15px;
        }
        .activity-details {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
        }
        .detail-item {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .detail-icon {
            width: 16px;
            height: 16px;
            color: #2563EB;
        }
        .section {
            margin: 25px 0;
        }
        .section h4 {
            font-size: 16px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 10px;
        }
        .list {
            list-style: none;
            padding: 0;
        }
        .list li {
            padding: 5px 0;
            padding-left: 20px;
            position: relative;
        }
        .list li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
        }
        .recommendations {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 15px;
            border-radius: 4px;
            margin: 20px 0;
        }
        .contact-info {
            background: #eff6ff;
            border-radius: 8px;
            padding: 20px;
            margin: 30px 0;
            text-align: center;
        }
        .contact-info h3 {
            color: #1e40af;
            margin-bottom: 15px;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
        }
        .qr-code {
            text-align: center;
            margin: 30px 0;
            padding: 20px;
            background: #f8fafc;
            border-radius: 8px;
        }
        @media (max-width: 600px) {
            .activity-details {
                grid-template-columns: 1fr;
            }
            .container {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">TourXperience</div>
            <h1 class="title">${t.email.subject}</h1>
            <p class="subtitle">${t.email.orderNumber}: <strong>${bookingDetails.orderNumber}</strong></p>
        </div>

        <p><strong>${t.email.greeting} ${bookingDetails.customerName},</strong></p>
        <p>${t.email.confirmationText}</p>

        <div class="order-info">
            <h3>${t.email.orderDetails}</h3>
            <div class="info-row">
                <span>${t.email.orderNumber}:</span>
                <span><strong>${bookingDetails.orderNumber}</strong></span>
            </div>
            <div class="info-row">
                <span>${t.email.bookingDate}:</span>
                <span>${bookingDetails.bookingDate}</span>
            </div>
            <div class="info-row">
                <span>${t.email.totalAmount}:</span>
                <span><strong>${bookingDetails.totalAmount} ${bookingDetails.currency}</strong></span>
            </div>
        </div>

        ${bookingDetails.activities.map(activity => `
        <div class="activity-card">
            <h2 class="activity-title">${activity.name}</h2>
            
            <div class="activity-details">
                <div class="detail-item">
                    <span>📅</span>
                    <span><strong>${activity.date}</strong></span>
                </div>
                <div class="detail-item">
                    <span>🕐</span>
                    <span>${activity.time}</span>
                </div>
                <div class="detail-item">
                    <span>👥</span>
                    <span>${activity.participants} ${activity.participants === 1 ? 'persona' : 'personas'}</span>
                </div>
                <div class="detail-item">
                    <span>⏱️</span>
                    <span>${activity.duration}</span>
                </div>
                <div class="detail-item">
                    <span>📍</span>
                    <span>${activity.meetingPoint}</span>
                </div>
                <div class="detail-item">
                    <span>💰</span>
                    <span><strong>${activity.price}</strong></span>
                </div>
            </div>

            ${activity.highlights.length > 0 ? `
            <div class="section">
                <h4>${t.activity.highlights}</h4>
                <ul class="list">
                    ${activity.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            </div>
            ` : ''}

            ${activity.included.length > 0 ? `
            <div class="section">
                <h4>${t.activity.included}</h4>
                <ul class="list">
                    ${activity.included.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            ` : ''}

            ${activity.recommendations.length > 0 ? `
            <div class="recommendations">
                <h4>${t.email.recommendations}</h4>
                <ul class="list">
                    ${activity.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
        </div>
        `).join('')}

        <div class="qr-code">
            <h3>📱 ${language === 'es' ? 'Código QR de tu Reserva' : 
                     language === 'en' ? 'Your Booking QR Code' :
                     language === 'fr' ? 'Code QR de votre Réservation' :
                     language === 'it' ? 'Codice QR della tua Prenotazione' :
                     '您的预订二维码'}</h3>
            <div style="width: 200px; height: 200px; background: #f3f4f6; margin: 20px auto; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #6b7280;">
                QR Code: ${bookingDetails.orderNumber}
            </div>
            <p style="font-size: 14px; color: #6b7280;">
                ${language === 'es' ? 'Presenta este código QR el día de tu actividad' : 
                  language === 'en' ? 'Present this QR code on the day of your activity' :
                  language === 'fr' ? 'Présentez ce code QR le jour de votre activité' :
                  language === 'it' ? 'Presenta questo codice QR il giorno della tua attività' :
                  '在活动当天出示此二维码'}
            </p>
        </div>

        <div class="contact-info">
            <h3>${t.email.contact} & ${t.email.support}</h3>
            <p><strong>Email:</strong> support@tourxperience.com</p>
            <p><strong>${language === 'es' ? 'Teléfono' : 
                         language === 'en' ? 'Phone' :
                         language === 'fr' ? 'Téléphone' :
                         language === 'it' ? 'Telefono' :
                         '电话'}:</strong> +52 55 1234 5678</p>
            <p><strong>WhatsApp:</strong> +52 55 9876 5432</p>
            <p style="font-size: 14px; color: #6b7280; margin-top: 15px;">
                ${language === 'es' ? 'Horario de atención: Lunes a Domingo, 8:00 AM - 10:00 PM (GMT-6)' : 
                  language === 'en' ? 'Support hours: Monday to Sunday, 8:00 AM - 10:00 PM (GMT-6)' :
                  language === 'fr' ? 'Heures de support: Lundi à Dimanche, 8h00 - 22h00 (GMT-6)' :
                  language === 'it' ? 'Orari di supporto: Lunedì a Domenica, 8:00 - 22:00 (GMT-6)' :
                  '支持时间：周一至周日，上午8:00 - 晚上10:00 (GMT-6)'}
            </p>
        </div>

        <div class="footer">
            <p>${t.email.thankYou}</p>
            <p><strong>${t.email.signature}</strong></p>
            <p style="font-size: 12px; margin-top: 20px;">
                TourXperience México | Ciudad de México, México<br>
                © 2024 TourXperience. ${language === 'es' ? 'Todos los derechos reservados' : 
                                        language === 'en' ? 'All rights reserved' :
                                        language === 'fr' ? 'Tous droits réservés' :
                                        language === 'it' ? 'Tutti i diritti riservati' :
                                        '版权所有'}.
            </p>
        </div>
    </div>
</body>
</html>`;

  const text = `
${t.email.subject}
${t.email.orderNumber}: ${bookingDetails.orderNumber}

${t.email.greeting} ${bookingDetails.customerName},

${t.email.confirmationText}

${t.email.orderDetails}:
- ${t.email.orderNumber}: ${bookingDetails.orderNumber}
- ${t.email.bookingDate}: ${bookingDetails.bookingDate}
- ${t.email.totalAmount}: ${bookingDetails.totalAmount} ${bookingDetails.currency}

${t.email.activityDetails}:
${bookingDetails.activities.map(activity => `
${activity.name}
- ${language === 'es' ? 'Fecha' : language === 'en' ? 'Date' : language === 'fr' ? 'Date' : language === 'it' ? 'Data' : '日期'}: ${activity.date}
- ${language === 'es' ? 'Hora' : language === 'en' ? 'Time' : language === 'fr' ? 'Heure' : language === 'it' ? 'Ora' : '时间'}: ${activity.time}
- ${language === 'es' ? 'Participantes' : language === 'en' ? 'Participants' : language === 'fr' ? 'Participants' : language === 'it' ? 'Partecipanti' : '参与者'}: ${activity.participants}
- ${language === 'es' ? 'Duración' : language === 'en' ? 'Duration' : language === 'fr' ? 'Durée' : language === 'it' ? 'Durata' : '时长'}: ${activity.duration}
- ${language === 'es' ? 'Punto de encuentro' : language === 'en' ? 'Meeting Point' : language === 'fr' ? 'Point de rendez-vous' : language === 'it' ? 'Punto d\'incontro' : '集合地点'}: ${activity.meetingPoint}
- ${language === 'es' ? 'Precio' : language === 'en' ? 'Price' : language === 'fr' ? 'Prix' : language === 'it' ? 'Prezzo' : '价格'}: ${activity.price}

${activity.highlights.length > 0 ? `${t.activity.highlights}:
${activity.highlights.map(h => `- ${h}`).join('\n')}` : ''}

${activity.included.length > 0 ? `${t.activity.included}:
${activity.included.map(i => `- ${i}`).join('\n')}` : ''}

${activity.recommendations.length > 0 ? `${t.email.recommendations}:
${activity.recommendations.map(r => `- ${r}`).join('\n')}` : ''}
`).join('\n')}

${t.email.contact} & ${t.email.support}:
Email: support@tourxperience.com
${language === 'es' ? 'Teléfono' : language === 'en' ? 'Phone' : language === 'fr' ? 'Téléphone' : language === 'it' ? 'Telefono' : '电话'}: +52 55 1234 5678
WhatsApp: +52 55 9876 5432

${t.email.thankYou}
${t.email.signature}

TourXperience México
Ciudad de México, México
© 2024 TourXperience. ${language === 'es' ? 'Todos los derechos reservados' : 
                        language === 'en' ? 'All rights reserved' :
                        language === 'fr' ? 'Tous droits réservés' :
                        language === 'it' ? 'Tutti i diritti riservati' :
                        '版权所有'}.
`;

  return { subject, html, text };
};