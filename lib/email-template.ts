export function getWaitlistEmailHtml(email: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to the TruHired Waitlist</title>
</head>
<body style="margin: 0; padding: 0; background-color: #04060b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #04060b; min-height: 100vh; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 560px; background: linear-gradient(180deg, #0e1526 0%, #080d19 100%); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);">
          
          <tr>
            <td style="padding: 40px 36px 20px 36px; text-align: center;">
              <div style="display: inline-block; padding: 6px 16px; border-radius: 9999px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); font-size: 11.5px; letter-spacing: 0.12em; text-transform: uppercase; color: #e2e8f0; font-weight: 600;">
                Early Access Confirmed
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding: 0 36px 24px 36px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; line-height: 1.25; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">
                You're on the list.
              </h1>
              <p style="margin: 12px 0 0 0; font-size: 15px; line-height: 1.6; color: #94a3b8;">
                Welcome to <strong style="color: #ffffff;">TruHired</strong> — the next generation of AI-native recruitment intelligence.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 0 36px 32px 36px;">
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 24px;">
                <p style="margin: 0 0 14px 0; font-size: 14.5px; line-height: 1.6; color: #cbd5e1;">
                  We have reserved your spot for early access using <span style="color: #6ee7b7; font-weight: 500;">${email}</span>.
                </p>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #94a3b8;">
                  We are building an intelligent hiring platform designed to eliminate friction, automate vetting, and match extraordinary builders with high-impact teams.
                </p>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding: 0 36px 36px 36px; text-align: center;">
              <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                <tr>
                  <td align="center" style="border-radius: 8px; background: #ffffff;">
                    <a href="https://truhired.in" target="_blank" style="font-size: 14px; font-weight: 600; color: #04060b; text-decoration: none; padding: 12px 28px; display: inline-block; border-radius: 8px; letter-spacing: -0.01em;">
                      Explore TruHired
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin: 20px 0 0 0; font-size: 12.5px; line-height: 1.5; color: #64748b;">
                You will be among the first notified when our private beta invites rollout.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 24px 36px; background: rgba(0, 0, 0, 0.25); border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #475569;">
                &copy; ${new Date().getFullYear()} TruHired. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function getWaitlistEmailText(email: string): string {
  return `Welcome to the TruHired Waitlist!

You're on the list.
We have reserved your spot for early access using: ${email}

We are building an intelligent hiring platform designed to eliminate friction, automate vetting, and match extraordinary builders with high-impact teams.

You will be among the first notified when our private beta invites rollout.

Explore TruHired: https://truhired.in

© ${new Date().getFullYear()} TruHired. All rights reserved.`;
}

export function getAdminNotificationEmailHtml(subscriberEmail: string): string {
  const timestamp = new Date().toUTCString();
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Waitlist Signup</title>
</head>
<body style="margin: 0; padding: 0; background-color: #04060b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #04060b; min-height: 100vh; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 560px; background: linear-gradient(180deg, #0e1526 0%, #080d19 100%); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);">
          
          <tr>
            <td style="padding: 40px 36px 20px 36px; text-align: center;">
              <div style="display: inline-block; padding: 6px 16px; border-radius: 9999px; background: rgba(59, 130, 246, 0.12); border: 1px solid rgba(59, 130, 246, 0.3); font-size: 11.5px; letter-spacing: 0.12em; text-transform: uppercase; color: #93c5fd; font-weight: 600;">
                Admin Notification
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding: 0 36px 24px 36px; text-align: center;">
              <h1 style="margin: 0; font-size: 26px; line-height: 1.25; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">
                New Waitlist Submission
              </h1>
              <p style="margin: 10px 0 0 0; font-size: 14.5px; line-height: 1.6; color: #94a3b8;">
                A new user just registered for early access to TruHired.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 0 36px 32px 36px;">
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 22px;">
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding-bottom: 12px; font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; font-weight: 600;">
                      Subscriber Email
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 20px; font-size: 17px; font-weight: 600; color: #6ee7b7; word-break: break-all;">
                      ${subscriberEmail}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 8px; font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; font-weight: 600;">
                      Registered At
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 20px; font-size: 14px; color: #cbd5e1;">
                      ${timestamp}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 8px; font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; font-weight: 600;">
                      Source
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 14px; color: #cbd5e1;">
                      TruHired Landing Page (truhired.in)
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding: 0 36px 36px 36px; text-align: center;">
              <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                <tr>
                  <td align="center" style="border-radius: 8px; background: #ffffff;">
                    <a href="mailto:${subscriberEmail}" style="font-size: 14px; font-weight: 600; color: #04060b; text-decoration: none; padding: 12px 28px; display: inline-block; border-radius: 8px; letter-spacing: -0.01em;">
                      Contact Subscriber
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding: 20px 36px; background: rgba(0, 0, 0, 0.25); border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #475569;">
                TruHired Admin Dispatch &middot; truhired.in
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function getAdminNotificationEmailText(subscriberEmail: string): string {
  return `New Waitlist Submission - TruHired

A new user just registered for early access.

Subscriber Email: ${subscriberEmail}
Registered At: ${new Date().toUTCString()}
Source: TruHired Landing Page (truhired.in)

Contact Subscriber: ${subscriberEmail}`;
}

