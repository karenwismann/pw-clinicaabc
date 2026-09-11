import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, telefono, correo, como_te_enteraste, como_podemos_ayudarte } = body;

    const timestamp = new Date().toLocaleString('es-MX', {
      timeZone: 'America/Mexico_City',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    const targetRecipient = 'karenwismann27@gmail.com';

    // 1. Enviar correo real con formato estructurado vía FormSubmit
    let emailSent = false;
    try {
      const emailPayload = {
        _subject: `🔔 Nueva Solicitud de Cita Médica - CFA ABC (${nombre || 'Paciente'})`,
        _replyto: correo || '',
        _template: 'table',
        _captcha: 'false',
        Nombre_del_Paciente: nombre || 'No especificado',
        Telefono_de_Contacto: telefono || 'No especificado',
        Correo_del_Paciente: correo || 'No especificado',
        Como_se_entero: como_te_enteraste || 'Internet',
        Motivo_de_Consulta: como_podemos_ayudarte || 'Solicitud de información / cita médica',
        Fecha_y_Hora_de_Recepcion: timestamp,
        Clinica: 'Centro Médico ABC Santa Fe - Consultorio 332'
      };

      const emailResponse = await fetch(`https://formsubmit.co/ajax/${targetRecipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Referer': 'https://clinicadefertilizacionenelabc.com',
          'Origin': 'https://clinicadefertilizacionenelabc.com'
        },
        body: JSON.stringify(emailPayload)
      });

      if (emailResponse.ok) {
        emailSent = true;
        console.log(`[EMAIL ENVIADO EXITOSAMENTE] Notificación enviada a ${targetRecipient} para paciente: ${nombre}`);
      } else {
        console.warn(`[EMAIL ADVERTENCIA] FormSubmit respondió con status ${emailResponse.status}`);
      }
    } catch (emailErr) {
      console.error('[EMAIL ERROR] Error al despachar correo:', emailErr);
    }

    // 2. Intentar registrar en FastAPI / SQLite
    try {
      await fetch('http://localhost:8000/api/appointments/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(2000)
      });
    } catch {
      // Backend offline o fallback
    }

    return NextResponse.json({
      id: Date.now(),
      status: 'Recibida',
      emailSent,
      message: `Tu solicitud de cita ha sido recibida y enviada exitosamente.`,
      data: body
    }, { status: 201 });
  } catch (error: any) {
    console.error('[APPOINTMENTS ERROR]', error);
    return NextResponse.json({ error: error.message || 'Error al procesar la cita' }, { status: 500 });
  }
}

